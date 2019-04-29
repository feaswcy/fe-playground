## docker 是啥？
docker是一种虚拟化容器技术，使用go语言编写，可以在一台物理机上运行多个虚拟系统，这在docker中被称为容器，不同容器是相互隔离的，并且像面向对象思想中一样可以继承于另一个容器，docker的容器性能开销很低，并在一些场景下逐渐取代之前的虚拟机与虚拟空间。

## 如何使用
根据docker的官方说明，docker用来虚拟化部署，只需要编写一个dockerfile，就可以定义一个docker容器，docker容器可以被任意的发布(push)，和被其他人拉取（pull），所以对于开发者来说，可以使用dockerfile自定义自己需要的一个环境，这样在任何环境下，只要拿到这个副本，docker都可以重建这个环境。

## 前端的docker环境
根据docker的官方教程，以及我自己的需要，我的docker需要满足的功能清单有：
+ nodejs > 9.0
+ nginx 1.7.2
+ git 2.14.1
+ python 2.7
+ go 1.8


## dockerfile的编写
根据上述功能清单以及dockerfile，我的dockerfile 编写如下，

```dockerfile
From hub.docker.com/centOs:6.7

Maintainer wangchang3910@qq.com

RUN 

RUN

RUN




```