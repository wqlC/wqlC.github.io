---
title: nodejs安装及相关命令
date: 2021-02-02 11:10:41
tags:
- 工具
---


# 前言

> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

根据[nodejs官网](https://nodejs.org/en/)描述，nodejs就是js的一个运行时环境, 也有对应的[nodejs中文网](http://nodejs.cn/)


<!--more-->

# 下载安装

- [下载链接](https://nodejs.org/en/download/)

    windows上安装nodejs很简单，直接下载对应的安装包[https://nodejs.org/dist/v14.15.4/node-v14.15.4-x64.msi](https://nodejs.org/dist/v14.15.4/node-v14.15.4-x64.msi),然后下一步下一步安装就可以了

- 改变原有的环境变量
    npm的全局模块的存放路径、catch的存放路径都是默认存放在C盘用户目录下，对于C盘紧张的同学来说还是很不友好，因此我们重新配置对应模块的存放路径：
    ```shell
    npm config set prefix "D:\workspace\nodejs\node_global"
    npm config set cache "D:\workspace\nodejs\node_cache"
    ```
    - 在系统环境变量添加NODE_PATH,输入路径为： 
D:\workspace\nodejs\node_global 
![](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210202121317.png)


# npm加速
npm的全称是：`Node Package Manager`，即nodejs的包管理器（安装、卸载、依赖管理等）。因为国内网络的原因，使用npm下载东西的速度很慢，因此我们可以使用npm的国内镜像来加速。
- 方法1：配置镜像
    - 方式1：命令行指定
    ```shell
    npm --registry https://registry.npm.taobao.org info underscore 
    ```
    - 方式2：通过config配置
    ```shell 
        npm config set registry https://registry.npm.taobao.org
        npm info underscore （如果上面配置正确这个命令会有字符串response）
    ```
    - 方式3：编辑 `.npmrc` 加入下面内容
    ```shell
    registry = https://registry.npm.taobao.org
    ```
- 方法2：直接使用`cnpm`（**推荐**）
    > CNPM 是中国 npm 镜像的客户端， 支持所有的npm命令
    ```shell
    # 安装 cnpm
     npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```
    安装过后我们就可以在我们刚刚设置的`D:\workspace\nodejs\node_global`目录下看到我们安装的cnpm包了。
    ![下载的cnpm包](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210202121904.png)
    
    - 设置cnpm的环境变量
    cnpm的执行文件在`D:\workspace\nodejs\node_global`目录下，我们把这个目录设置到`path`环境变量下之后就可以使用cnpm了
    ![设置cnpm的环境变量](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210202191115.png)


# 使用cnpm
根据前面的步骤，我们下载了cnpm之后就可以使用了：
- 打开命令行，查看cnpm的版本
    ```shell
    cnpm -v
    ```
- 使用cnpm安装`express`包
    ```shell
    cnpm i express -g
    ```



# 工具集
- [nodejs.cn api](http://api.nodejs.cn/)
- [npm包仓库](https://www.npmjs.com/)
