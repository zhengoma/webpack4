const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');//引入html-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//引入clean-webpack-plugin ,3.0开始需要这样写
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const purifycssWebpack = require('purifycss-webpack');
const glob = require('glob');
module.exports = {
    // 入口文件
    entry: {
        index: './src/index.js'
    },
    // 出口文件
    output: {
        filename: "[name].bundle.[hash].js",//[hash]会在后面生成随机hash值
        path: path.resolve('dist')  // 打包后的目录，必须是绝对路径
    },
    // 处理对应模块
    module: { 
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                }),
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/',//输出到images文件夹
                        limit: 8*1024  //是把小于8KB的文件打成Base64的格式，写入JS
                    }
                }]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                }),
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: /src/,          // 只转化src目录下的js
                exclude: /node_modules/  // 排除掉node_modules，优化打包速度
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
            },
        ]
    },
    // 对应的插件
    plugins:[
        new HtmlWebpackPlugin({ //配置
            filename: 'index.html',//输出文件名
            template: './index.html',//以当前目录下的index.html文件为模板生成dist/index.html文件
        }),
        new CleanWebpackPlugin(), //3.0之前参数时数组，3.0之后参数时对象
        new webpack.HotModuleReplacementPlugin(), //热更新
        new ExtractTextPlugin({  //打包css生成另外的文件夹
            filename:'[name].bundle.[hash].css'
        }),
        new purifycssWebpack({ //消除冗余css,一定要放在htmlWebpackPlugin后面
            paths: glob.sync(path.resolve('*.html'))
        }),
    ],
    // 开发服务器配置
    devServer: { //配置此静态文件服务器，可以用来预览打包后项目
        inline: true,//打包后加入一个websocket客户端
        hot: true,//热加载
        contentBase: path.resolve(__dirname, 'dist'),//开发服务运行时的文件根目录
        host: 'localhost',//主机地址
        port: 9090,//端口号
        compress: true//开发服务器是否启动gzip等压缩
    }, 
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,//这里定义最小字节
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                commons: {  // 抽离自己写的公共代码
                    chunks: "initial", //async表示只从异步加载得模块（动态加载import() ）里面进行拆分; initial表示只从入口模块进行拆分; all表示以上两者都包括
                    name: "common", // 打包后的文件名，任意命名
                    minChunks: 1,
                    minSize: 0 // 只要超出0字节就生成一个新包
                },
                vendor: {   // 抽离第三方插件
                    test: /node_modules/,   // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor',  // 打包后的文件名，任意命名
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10
                },
            }
        },
    },
    // 模式配置
    mode: 'development'

}