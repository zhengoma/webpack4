const merge = require('webpack-merge');  // 引入webpack-merge功能模块
const common = require('./webpack.common.js'); // 引入webpack.common.js
const path = require("path");
module.exports = merge(common, {   // 将webpack.common.js合并到当前文件
    mode: 'development', // 模式配置
    // 开发服务器配置
    devServer: { //配置此静态文件服务器，可以用来预览打包后项目
        inline: true,//打包后加入一个websocket客户端
        hot: true,//热加载
        contentBase: path.resolve(__dirname, 'dist'),//开发服务运行时的文件根目录
        host: 'localhost',//主机地址
        port: 9090,//端口号
        compress: true//开发服务器是否启动gzip等压缩
    }, 
})