## Before Start
为什么会出现缓存？
> 重用已获取的资源能够有效的提升网站与应用的性能。Web 缓存能够减少延迟与网络阻塞，进而减少显示某个资源所用的时间。借助 HTTP 缓存，Web 站点变得更具有响应性。

## HTTP缓存的策略
1. 强缓存。不会向服务器发送请求，直接命中内存中的缓存资源，
2. 协商缓存。向服务器发送请求。服务器根据request header内的参数进行判断是否返回新的资源，如果不需要更新，服务器返回304状态码，通知浏览器从本地获取

## 控制强缓存
| http response header  | description |
| ------------- | ------------- |
| cache-control | http1.1最主要的key，指定缓存机制 |
| Pragma | http1.0指定缓存机制 当Pragma:no-cache时等同于Cache-Control:no-cache（在浏览器中disable cache就是在所有请求的请求头上加上Pragma:no-cache） |
| Expires | http1.0指定缓存的过期时间，当和Cache-Control同时存在时优先取Cache-Control的值 |

> Cache-Control内又有多个属性值，常见的是max-age，指定资源缓存的过期时间（s），如max-age，Pragma一般用于调试，现在在response头上手动处理Pragma的很少很少，Expires和max-age类似，差别在于expires是一个固定的服务器时间点。


## 控制协商缓存
控制协商缓存的主要是ETag和last-modified。

| http response header key | http request header key |
| ------------- | ------------- |
| ETag（服务端返回的当前资源的etag值）| If-None-Match(上一次服务器对于当前资源返回的etag值）|
| Last-Modified（服务端返回的当前资源的最后修改时间）|If-Modified-Since(上一次服务器对于当前资源返回的最后修改时间）

在请求服务器的时候，服务层会优先校对当前request的If-None-Match和If-Modified-Since，如果经过判断和之前的资源一致，那么服务端就会返回一个304，通知浏览器去缓存中读取该资源。

## 总结
+ 强制缓存浏览器不发出请求，协商缓存会和服务器进行通信，根据资源的内容hash状态以及文件修改时间来进行决策是否缓存。
