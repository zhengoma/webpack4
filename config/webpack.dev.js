const path = require("path");
module.exports = {
    // 入口文件
    entry: {
        index: "./src/index.js"
    },
    // 出口文件
    output: {
        filename: "[name].bundle.[hash].js",//[hash]会在后面生成随机hash值
        path: path.resolve('dist')  // 打包后的目录，必须是绝对路径 //path.join(__dirname, "dist")会打到配置目录下
    },
    // 处理对应模块
    module: { 
        rules: []
    },
    // 对应的插件
    plugins:[],
    // 开发服务器配置
    devServer: {}, 
    // 模式配置
    mode: 'development'

}