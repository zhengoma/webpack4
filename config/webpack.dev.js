const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');//引入html-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//引入clean-webpack-plugin ,3.0开始需要这样写
const webpack = require("webpack");
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
                use: ['style-loader', 'css-loader']//处理css
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
    // 模式配置
    mode: 'development'

}