## 服务端的javascript！
nodejs 从出生以来就被各种吹捧，对于会写js 的程序员来说，终于可以不重学一门其他的语言来单兵作战完成一个app（说实话，只会前端不会后端的程序员受限的太明显了。。），然而在社区大规模的使用之后的2019年，nodejs在服务端应用的仍然有限，除了阿里以及从阿里出来的一些有一定实践经验的node程序员，nodejs仍然没有如javascript一样流行。但是在一些特定的领域，nodejs简单的环境部署以及javscript语言的优(la)势(ji)，让用nodejs做一些简单的应用能够非常快速的开发迭代。

## nodejs可以用的地方
1. 支撑脚手架工具，提高开发效率，间接创造价值
2. 系统中间层，减少联调，提高人效
3.一些简单的服务（比较典型的文件上传服务、短链服务等），可以作为对外输出的基础能力

## nodejs server 篇
nodejs本身的js语言语法，对前端开发非常友好，异步io的模型更是前端程序员擅长的思维方式，因此用nodejs做server非常容易上手。
nodejs server本身可以作为前端本地的server环境，亦或是 简单的api转发，如果要做一个完善的nodejs 服务器，还需要处理nodejs服务端部署的相关问题，可以参考[这篇issue]()

## webpack分析篇
webpack 是前端打包工具，webpack借助于nodejs操作文件的能力，可以将文件的内容进行转换，这一过程被称之为 `webpack编译` ，需要注意的是编写直接面对webpack的代码是非常晦涩难懂的，因此尝尝需要借助于webpack本身提供的`loader`、`plugin`机制，`面向语言规范`去写代码，如写es6代码，借助于babel-loader对es6代码的转换，转译成webpack可是别的内容，webpack在对文件内容进行打包和包装，最后构建出来浏览器环境下可直接运行的bundle
关于webpack的分析和自己的一点思考，可以参考[工程基础-构建工具篇]()




## 可以帮助的nodejs教程
nodejs基本课程 ： https://github.com/alsotang/node-lessons

## module


## PM2


## log


## 部署方式


## node 做服务端的优缺点
先说缺点：
1. 可靠性底
2. 单进程，单线程，只支持单核CPU