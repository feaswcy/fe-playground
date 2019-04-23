## http、https
介绍http、https相关特性以及example

## 缓存与本地存储
### cookie vs localstroge

### 


## 浏览器访问url过程
+ 分析传输层
+ 分析http层
+ 分析解析document过程，包含重绘和重排的原理，onload event



## OSI模型与TCP的三次握手



## http https
HTTP的基本优化：
+ 带宽，目前在4g网络以及一般的网络环境中，带宽的影响已经变得越来越小
+ 延迟，存在三个问题，浏览器阻塞（浏览器的最大并发数），DNS查询，建立连接

## Http 2.0 vs Http 1.x

### 性能提升
http2.0通过在应用层和传输层之间增加一个二进制的分帧层，使得通信在一个连接上完成，并且这个链接可以承载任意数量的双向数据流

### 头部压缩算法
移除一些啰嗦的首部，可以让数据更小化


### 服务端推送
服务端可以向客户端推送css、javascript以及图片

## http状态码

| First Header  | Second Header |
| ------------- | ------------- |
| 200  | 服务端已处理请求并成功响应 |
| 201  | Content Cell  |
| 202  | Content Cell  |
| 301  | Content Cell  |
| 302  | Content Cell  |
| 303  | Content Cell  |
| 304  | Content Cell  |
| 402  | Content Cell  |
| 404  | Content Cell  |
| 500  | Content Cell  |



## 浏览器的组成部分([浏览器的组成部分](https://mrhuang87.github.io/2017/12/24/typescript-in-a-browser/))
用户界面(User Interfaces)
浏览器引擎(Browser engine)
渲染引擎(Rendering engine)
组件引擎(Widget engine/UI 后端)
Javascript解释器
网络
存储

