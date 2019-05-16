## 前端工程化发展史


## grunt 与 gulp

## rollup
常用语lib

## webpack
过于复杂，没有使用约定大于配置的思想，无法debug

## 手动实现一个bundler打包器


## 记录与思考


最近新开发一个项目发现对webpack 以及babel的底层不太了解，因此这里记录下来，在使用webpack过程中出现的一些思考

由于在项目中使用到了很多插件，为了搞明白这些插件的作用，这里先记录下每个插件查找到的作用与git地址
+ ora, build时用来在控制台优化展示文字输出的，des是 Elegant terminal spinner --优雅的控制台旋转器



## webpack的loader
webpack的绝大部分功能，都由loader进行实现，webpack loader是一个符合webpack 规范的一段处理文件的脚本，由于webpack是静态分析，因此loader 一般来说的处理流程是这样的：
1. webpack分析模块时，拿到了一个文件名，通过nodejs的能力知道的这个文件，并读取文件能力，将文件的内容通过字符串传递给loader
2. loader解析字符传的内容，将结果return出来，交给webpack管理，return 出来的 是一个模块化语法如，html-loader 导出的是类似下面的内容：

```js
module.exports = "<div class=\"header\">\n</div>";
```

交给webpack处理后，webpack为把这里的内容注册在webpack的模块系统中，编译结束后，每个模块都是一个类似于function的结构，并且webpack内部提供了在运行时模块相互访问的方法，这个有点类似amd规范那样 如 modules = {id0: 'xxxx', id1:'qqqq',...}，在实际的运行时，modules本身可以作为一个js变量全局存储，然后我们代码里写的var a = require('a.html')，会被webpack 转为 var a = modules[idOfa], modules[idOfa] 最后返回的是一个通过loader处理后的js对象或者函数

让我们更细致一点，先不看webpack生成module是怎么实现的，看看运行时module是什么样子的吧~ 



```js
// 通过webpack 3.1.12生成的bundle.js
(function webpackUniversalModuleDefinition(root, factory){

})(this, function(){
  return (function(modules){
    /******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpModule"];
/******/ 	window["webpackJsonpModule"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"async/async10","1":"async/async8","2":"async/async6","3":"async/async4","4":"async/async2","5":"async/async0"}[chunkId]||chunkId) + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "//www.baidu.com/public/public-path/2.0.1/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
  })([
    ...
/* 125 */
/***/ (function(module, exports) {

module.exports = function anonymous(obj
) {
with(obj) { var r=[]; r.push("<div class=\"wrapper\"></div>"); return r.join(""); }
}

/***/ }),
  ...
  ])
})


```

仔细分析上述代码，不难分析做了以下几件事：
1. 全局IEEF自启动，webpackUniversalModuleDefinition 实际上是 webpack UMD规范的实现，将webpack 中定义的libaryTarget为umd时的具体实现
2. 定义了factory工厂函数，工厂函数实际产出是最后webpack打包后对外产出的module规范，也即是amd，commonjs，全局挂载等
3. 工厂函数实际就是把入口文件所引用的资源全部分析出来，并通过分析入口文件的引用，定义__webpack_require__这个函数

下面具体看一下__webpack_require__ 这个函数包含有哪些具体的属性和方法：
+ e，代表函数requreEnsure，用来通过script标签加载第三方的chunk，也就是webpack提供的在源码中提供的分片加载实现
+ m，modules，代表这个入口文件依赖的所有模块，这些模块或多或少经过loader的处理，最后由webpack包装成一个 function，所有的modules构成一个数组，每一个成员都是入口需要的module
+ c，代表cache，webpack实际上通过loader将源码中的一些模块语法进行了转换，并通过编译改写成使用__webpack_require__这个函数来统一加载模块，因此cache建立的过程其实也是在运行时----通过__webpack_require__主入口文件，主入口文件引入的其他资源也会被替代成为 __webpack_require__ 这个方法来进行，依次类推，一直到所有需要的模块都通过 __webpack_require__ 来加载完，在 __webpack_require__ 这个函数的内部，就定义了一种缓存机制，如果之前某个模块引用了一个资源，那在webpack的 installedModules 中就会注册这个模块，下一次别的模块在引用时，可以直接返回这个反馈的方法和属性。
+ d，harmony exports ，没看懂，不知道是做什么用的
+ n， 为了兼容 non-harmony modules， 没看懂
+ o，用来检测属性是否在原型链上的方法
+ p，存储webpack配置中的public path
+ oe， async是发生错误时的错误处理函数
  

可以看出webpack的核心的一部分其实是module的相关规范--loader如何编译解析文件，给到webpack处理的又是什么? webpack 拿到loader解析后的文件，怎么把loader编译后的内容转换成module函数？ moduleid是在哪里记录的，为什么在启动的时候，固定写死一个 `__webpack_require__(__webpack_require__.s = 92)`

下面举两个栗子书名webpack和loader相互配合的过程： html-loader 以及 css-loader、sass-loader、style-loader
相信配置的部分大家都很清楚如何进行，只要匹配到文件的格式或者其他正则情况，就会调用相应的loader去处理这个文件，针对这两个loader，我们重点关注一下输入输出：
1. 对html-loader，输入是readfile得到的html string，html-loader 最后返回的是 

```js
ƒ anonymous(obj) {
with(obj) { var r=[]; r.push("<div class=\"wrapper\"></div>"); return r.join(""); }
}

```

可见这个函数已经描述了这个html 的内容信息，只要通过调用返回的这个函数，就得到了一段html片段，通过函数的方式返回片段，能够对片段的内容进行更灵活的控制，同时由于都是javascript，也更容易实现类似于vue等框架提供的模板编译功能

webpack拿到这个函数，直接使用commonjs 规范将这个函数直接输出，module.exports = function anonymous(){}

2. css-loader、sass-loader、style-loader，

css-loader: 由于css一般不能被js处理，因此返回的也是一段字符串,css-loader将css中的import、url等依赖其他资源的语法，转化成webpack提供的require方法，并将最后的字符串通过module.exports 的方式返回给webpack
sass-loader: 这个是sass提供的编译能力，将sass语法转换成css语法，**但是并不会处理import或者url（）等引入外部资源的方法，这些有css-loader提供**
style-loader：生成style 标签并插入到dom中 

另外提及几个loader的作用：
+ file-loader，加载其他file，可以处理较大的文件
+ url-loader，和file-loader功能类似，不过url-loader在文件较小时，可以返回资源的dataUrl
+ 

```js


exports.push([module.i, ".wrapper {\n  -webkit-box-sizing: border-box;\n ]);


```


