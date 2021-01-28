const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = merge(common, { // 将webpack.common.js合并到当前文件
    mode: 'production', // 模式配置
    devtool: 'source-map',
    plugins: [
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\.(js|css)$'),
            threshold: 10240,
            minRatio: 0.8
          })
    ]
})