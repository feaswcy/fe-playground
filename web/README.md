- http、https
- 缓存
- 浏览器url过程
- webview 解析html的过程
- BOM

## 浏览器的组成部分([浏览器的组成部分](https://mrhuang87.github.io/2017/12/24/typescript-in-a-browser/))
用户界面(User Interfaces)
浏览器引擎(Browser engine)
渲染引擎(Rendering engine)
组件引擎(Widget engine/UI 后端)
Javascript解释器
网络
存储

- web 核心内容分析一： 登录、注册

登录账号体系的设计

背景

最早的登录账号体系来源于滴滴app中乘客和司机的账户登录，随着公司业务的不断发展，针对C端演化出一系列的登录的产品，目前按pc和移动端分为两大类，pc端 统一登录，h5 passport sdk

相关术语

- SSO（Single Sign On) 单点登录 ,作用是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用
- 

一般登录、注册体系设计的要点

从业务角度来讲：

- 登录，指用户通过账号密码获得系统访问凭证，并访问系统限制性资源的过程，现在的web应用程序的登录一般分为三种形态：
  1， 账号密码登录
  2， 短信验证码登录
  3， 二维码扫码登录
- 注册，通过用户预设的账号和密码，或者手机号，在系统中添加一条记录信息，注册常需要分组

由于登录注册需要对登录凭证（以下用token代称）持久化存储，一般的登录、注册体系中，前端一般采用cookie来存储登录凭证，这种方式简单、方便，在安全性要求不是特别高的情况下，能够适用大部分场景，目前滴滴的登录方案也都是采用cookie的方式。下面列举一些进阶版的登录管理

- session，由于token作为明文的登录凭证直接存贮在cookie中会有被窃取的风险，因此一些系统中设计session来保持登录状态，前端访问接口登录后，服务端返回一个sessionId作为注册登录的凭证，这个sessionId页存贮的cookie中，重点在于sessionId有有效期限制（服务端设计实现），超过有效期将会失效
  

pc端登录login

发邮件申请 =》 业务方登录按钮链接到pc-login页面，在此页面完成登录、注册等流程=》登录后回跳到业务方传入的returnUrl参数

- 登录的过程中，会在业务方申请的免登url上种上cookie，业务方需自行实现种set-cookie方法，在pc-login的页面中 ，set-cookie的方法是通过img 的src 同步发起的

H5端登录login


