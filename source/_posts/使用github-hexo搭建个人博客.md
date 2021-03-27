---
title: 使用github+hexo搭建个人博客
date: 2021-02-01 10:44:44
tags:
- 个人博客
---

本文主要用于记录使用github+hexo搭建自己的博客
<!--more-->


- 环境需要
    - git([查看安装](https://wqlc.github.io/2021/02/02/git%E5%AE%89%E8%A3%85%E5%8F%8A%E7%9B%B8%E5%85%B3%E5%91%BD%E4%BB%A4/))
    - nodejs([查看安装](https://wqlc.github.io/2021/02/02/nodejs%E5%AE%89%E8%A3%85%E5%8F%8A%E7%9B%B8%E5%85%B3%E5%91%BD%E4%BB%A4/))


> **github** 作为一个优秀的开源平台，免费易用，且背靠微软这棵大树，简直壕无人性！我们可以使用GitHub更加愉快无限制地**交友**。\
> **hexo** 是 `A fast, simple & powerful blog framework`，速度快、支持markdown、快速部署且拥有众多插件支持的快速、简单且功能强大的博客框架

# 前言
最近CSDN搞得越来越花里胡哨，用的心累，于是打算搭建自己的博客系统。作为一个穷学生，首先希望能够拥有自己的域名，其次不要花钱，然后就是可以定制，选了一大圈，最终还是决定选择[github](https://github.com/)+[hexo](https://hexo.io/)来搭建自己的博客，本文主要用来记录具体的博客搭建过程，以及自己的一点心得体会。

---

# github环境搭建

## 创建github账户
> 已经有github账户的请跳到下一节

- 首先登陆[github](https://github.com)
![github首页](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/github1.png)
点击右上角的`sign up`进入注册页面
- 注册一个github账号
![注册github账号](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210202103524.png)
请记得验证邮箱

- 点击`sign in`使用刚刚注册时候的用户名和密码进行登陆
![](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210202103529.png)



## 创建仓库
> 使用github的用户名创建自己的仓库，如果你的github的用户名是`zhangsan`, 那么你新建的仓库的名字就是 `zhangsan.github.io`（其他的仓库名无效），后面你的博客的地址就是`https://zhangsan.github.io`

登陆github账号之后，可以通过右上角的`+`新建一个仓库，仓库的名字必须取名为：`用户名.github.io`。
![新建仓库，注意仓库名字](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210202103533.png)

![新建仓库，注意仓库名](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210202104734.png)


仓库建好之后，我们的博客网站就建成功了，我们可以把仓库使用git工具拉取到本地，然后新建一个index.html，里面写上对应的内容，如下所示，然后再推送到仓库中就可以了。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p1>Hello my blog</p1>
</body>
</html>
```
然后在浏览器中访问`用户名.github.io`就可以看到你刚刚写的网页了。


## 配置SSH key
我们可以通过用户名和密码来推送我们的代码，但是总归来说还是不太方便，而且也不太安全。使用ssh key使用非对称加密来确保我们账户的安全，同时可以方便我们提交我们的代码。
### 配置过程
```shell
ssh-keygen -t rsa -C "你的邮箱"
```
然后一直回车，就会在用户目录下生成对应的公钥和私钥，对于类Unix用户，对应的文件一般在`~/.ssh/`目录下，对于windows用户，对应的文件一般在`C:/Users/电脑用户名/.ssh`目录下。使用记事本打开`id_rsa.pub`复制里面的内容。打开你的github，进入设置，添加你刚刚复制的公钥。
![添加sshkey](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210202110026.png)
![添加sshkey](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210202110027.png)

### 测试成功
在命令行中输入下列命令，即可
```shell
 ssh -T git@github.com
```
如果提示Are you sure you want to continue connecting (yes/no)?，输入yes，然后会看到：
> Hi ***! You've successfully authenticated, but GitHub does not provide shell access.

此时说明ssh-key已经配置成功

# hexo 环境搭建

## hexo 简介
Hexo 是一款基于 Node.js 的静态博客框架。Hexo 使用 Markdown 解析文章，用户在本地安装Hexo并进行写作，通过一条命令，Hexo即可利用靓丽的主题自动生成静态网页。


## hexo 安装
```shell
cnpm install -g hexo
```

## hexo 初始化
```shell
hexo init `sitName`
```

## hexo 新建文章
```shell
hexo new `blogName`
```

## hexo 生成并且发布文章
```shell
hexo g
hexo d
```

## hexo 常见命令
```shell
hexo clean 
hexo g
hexo s
hexo d

hexo new `blogName`
hexo new page `pageName`
```

# hexo 主题介绍
主题有很多，参考[https://hexo.io/themes/](https://hexo.io/themes/)
## hexo 主题更改
在hexo下的`_config.yml`下的`theme`配置.
## hexo主题推荐
- next
    - [https://github.com/theme-next/hexo-theme-next](https://github.com/theme-next/hexo-theme-next)
- butterfly
    - [https://butterfly.js.org/](https://butterfly.js.org/)
- ayer
    - [https://github.com/Shen-Yu/hexo-theme-ayer](https://github.com/Shen-Yu/hexo-theme-ayer)


# github+hexo 配置博客
使用githubPages配置博客
- 参考:[https://hexo.io/zh-cn/docs/github-pages](https://hexo.io/zh-cn/docs/github-pages)

## 备份hexo博客源代码
- 创建新分支
- 将源代码上传到分支上去


## 上传博客文章到github
```shell
hexo clean && hexo g && hexo d
```



[https://blog.csdn.net/qq_37210523/article/details/80909983]()
[https://www.cnblogs.com/liuxianan/p/build-blog-website-by-hexo-github.html#%E5%88%9B%E5%BB%BA%E4%BB%93%E5%BA%93]()
[]()