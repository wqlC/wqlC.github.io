---
title: 使用github+cdn+picGo搭建免费快速的图床
date: 2021-02-27 22:00:13
tags:
- 工具
---

本文主要使用github+cdn+picGo搭建自己的免费易用的图床
<!--more-->

现有的图床工具有很多，本文会在最后罗列一些易用的图床工具。但是浏览下来，多多少少都觉得现有的图床存在一些问题，包括费用问题、域名备案问题等等。
总之存在一些隐患，所以想着搭建自己的图床，并且不用考虑那么多问题，最重要的是：**免费**。


## 创建过程
参考：[https://www.cnblogs.com/lfri/p/12210721.html](https://www.cnblogs.com/lfri/p/12210721.html)




## 现有的图床工具：
- [七牛云](https://portal.qiniu.com)
    - 七牛云在国内是非常专业的CDN服务提供商以至于七牛云的速度非常快，同时支持较多的插件，提供免费的SSL证书，并且在你注册认证之后会送10GB的存储空间，每个月有20GB的流量（国内10GB，国外10GB）。
    - 但是七牛云对于HTTPS是收费的，并且需要绑定自己的已经备案过的域名。虽然七牛云提供测试域名，但是30天后就会被回收掉。
    ![七牛云](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210227221614.png)

- [又拍云](https://www.upyun.com)
    - 又拍云在用户注册的时候会宋10GB存储空间，每个月都会送15GB的HTTP和HTTPS流量，免费的SSL证书
    - 但是又拍云需要自己有已经备案过的域名，并且需要你加入*又拍云联盟（给又拍云打广告）*
    ![又拍云](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210227221700.png)
    ![如何使用又拍云](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210227221728.png)

- [公益图床](https://sbimg.cn/)
    - 图床速度很快，长期使用需要注册
    - 游客对图片大小有限制。登陆后2MB的限制好像，但是容易崩，如下图（原来是因为用了vpn所以图片上传不成功）
    ![公益图床](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210227222140.png)
    ![游客图片大小限制](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210227222521.png)
    ![注册后上传图片出现莫名错误](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210227222537.png)

- [路过图床](https://imgtu.com/) ***** 5星推荐
    - 支持游客上传图片永久存储
    - 支持全球CDN加速，速度快；支持HTTPS
    - 图片大小限制10MB，基本满足要求
    - 感觉还不错，估计网站模板和公益图床用的是一个。
    ![路过图床，你看和公益图床是不是很像](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210227223203.png)

- [SM.MS](https://sm.ms/) ***** 5星推荐
    - 支持游客上传图片永久存储
    - 图片大小限制为5MB，一次最多上传10张，上传后支持删除
    - 支持HTTPS
    - 速度还可以[[图片测试](https://i.loli.net/2021/02/27/RTxUtHprwncOyVq.png)](https://i.loli.net/2021/02/27/RTxUtHprwncOyVq.png)
    ![SM.MS](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210227224115.png)

- [聚合图床](https://www.superbed.cn/) ***** 5星推荐
    - 需要登陆，免费版每次最多上传5张
    - 国内CDN支持，速度比较快
    - 图片多处分发备份，具有较高的安全性
    - 感觉挺不错
    ![聚合图床](https://cdn.jsdelivr.net/gh/wqlC/blogImages@main/blog/img/20210228094640.png)

还有一些个人搭建的图床，可以尝试：
- [ImgURL](https://imgurl.org/)
- [偶流社区图床](https://upload.ouliu.net/)
- [堆爱外链](http://pan.duiai.cc/index.php)

