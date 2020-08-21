<!--
 * @Description: In User Settings Edit
 * @Author: zhengoma
 * @Date: 2019-09-06 15:06:43
 * @LastEditTime: 2020-08-21 17:35:37
 * @LastEditors: mayuanzheng
 -->
# webpack4demo
one by one step to make a system

#下面开始是命令行

- 全局安装 
> npm install -g webpack webpack-cli

- 初始化
> npm init -y

- 创建三个文件夹
> mkdir src

- 创建文件
> touch index.html
> touch src/index.js

- webpack4.x中打包默认找src/index.js作为默认入口，可以直接在终端中输入命令webpack 将当前的内容进行一个简单的打包
    <br>mode是webpack中独有的，有两种打包环境，
   开发环境：development
   生产环境：production
    <br>打包的时候输入 webpack --mode=development 或 webpack --mode=production 就不会出现警告提示了

***

- 创建webpack配置文件
> mkdir config
> touch config/webpack.dev.js

***

- 安装html-webpack-plugin
> npm install html-webpack-plugin --save-dev
- 安装webpack webpack-cli
> npm install webpack webpack-cli --save-dev

***

- 删除指定文件 使用插件clean-webpack-plugin，删除指定文件
> npm install clean-webpack-plugin --save-dev

***

- 安装webpack-dev-server 热更新
> npm install webpack-dev-server --save-dev

***

- 安装style-loader， css-loader
> npm install style-loader css-loader --save-dev

***

- 安装url-loader, file-loader
> npm install url-loader file-loader --save-dev

***

- splitChunks 代码分割
- 代码分割功能仅针对入口文件；
- chunks: async表示只从异步加载得模块（动态加载import() ）里面进行拆分; initial表示只从入口模块进行拆分; all表示以上两者都包括
- minChunks: 对多个入口文件的重复引用的重用次数，不是一个入口文件内子模块的重用次数。子模块重用时打包只会打1份，这是ES Module的模块化
- 推荐看这篇文章 [链接](https://juejin.im/post/5c08fe7d6fb9a04a0d56a702)

- 展示出打包后的各个bundle所依赖的模块
> npm install webpack-bundle-analyzer -D
- 卸载webpack-bundle-analyzer
> npm uninstall webpack-bundle-analyzer -D

***

- Sass
> npm install  node-sass --save-dev 
> npm install  sass-loader --save-dev

***

- 安装postcss自动处理CSS3属性前缀
> npm install --save-dev postcss-loader autoprefixer
> touch postcss.config.js

***

- 打包css生成另外的文件夹
> npm i extract-text-webpack-plugin@next --save-dev
- 消除冗余css
> npm i purifycss-webpack purify-css glob -D

***

- 转义ES6 babel版本要对应
> npm i babel-core@6.26.3 babel-loader@7.1.5 babel-preset-env babel-preset-stage-0 -D
> touch .babelrc

***

- 页面img引用图片
> npm i html-withimg-loader -D

***

- JS压缩
- mode:'production' 会自动开启压缩，所以这一步不需要了
> npm install uglifyjs-webpack-plugin --save-dev

***

- webpack配置拆分
> npm i webpack-merge -D
> touch config/webpack.common.js
> touch config/webpack.prod.js

***

- 压缩CSS
> npm i optimize-css-assets-webpack-plugin -D

***

- html2canvas
> npm install --save html2canvas

***

- compression-webpack-plugin
> npm install compression-webpack-plugin -D