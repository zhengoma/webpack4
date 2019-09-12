const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, { // 将webpack.common.js合并到当前文件
    mode: 'production', // 模式配置
    plugins: [
        
    ]
})