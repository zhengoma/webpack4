<!--
 * @Description: In User Settings Edit
 * @Author: zhengoma
 * @Date: 2019-09-06 15:06:43
 * @LastEditTime: 2019-09-06 15:23:21
 * @LastEditors: Please set LastEditors
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