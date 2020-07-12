(function(){
    
    var manifestJson = {"package":"com.ice.demo","name":"鲜❄️伴","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"1020","icon":"/Common/iceLogo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"},{"name":"system.media"},{"name":"system.wifi"},{"name":"system.notification"},{"name":"system.barcode"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"off","background":{"features":["system.audio","system.record","system.request","system.geolocation"]}},"router":{"entry":"page0","pages":{"Demo":{"component":"index"},"Capacity":{"component":"index"},"About":{"component":"index"},"Account":{"component":"index"},"Register":{"component":"index"},"page1":{"component":"index"},"page2":{"component":"index"},"page0":{"component":"index"},"page3":{"component":"index"},"page4":{"component":"index"},"page0detail":{"component":"index"},"page3detail":{"component":"index"},"wifi":{"component":"index"},"BarCodeDecoder":{"component":"index"}},"widgets":{"CardDemo":{"name":"CardDemo","description":"快应用卡片展示","component":"index","path":"/CardDemo","minPlatformVersion":1032,"targetManufactorys":["vivo"],"features":[{"name":"system.fetch"},{"name":"system.wifi"},{"name":"system.notification"}]}}},"display":{"titleBar":true,"titleBarBackgroundColor":"#9c60ff","titleBarTextColor":"#ffffff","menu":true,"pages":{"Demo":{"titleBarText":"示例页","menu":false},"Capacity":{"titleBarText":"容量查询"},"About":{"menu":false},"Account":{"menu":false,"titleBarText":"登录页面"},"Register":{"menu":false,"titleBarText":"注册页面"},"page0":{"titleBar":false},"page1":{"titleBar":false},"page2":{"titleBar":false},"page3":{"titleBar":false},"page4":{"titleBar":false},"page0detail":{"titleBar":false},"page3detail":{"titleBar":false},"BarCodeDecoder":{"titleBar":false}}}}
    var createAppHandler = function() {
      return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ux?uxType=app");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ux?uxType=app":
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $app_style$ = {};var $app_script$ = __webpack_require__(/*! c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=f:/Breaker/news-template10/src!../node_modules/babel-loader?cwd=f:/Breaker/news-template10&cacheDirectory&comments=false!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ \"c:\\\\Program Files (x86)\\\\Quickapp\\\\resources\\\\app\\\\extensions\\\\hap-debugger\\\\node_modules.asar\\\\@hap-toolkit\\\\dsl-xvm\\\\lib\\\\loader\\\\script-loader.js!c:\\\\Program Files (x86)\\\\Quickapp\\\\resources\\\\app\\\\extensions\\\\hap-debugger\\\\node_modules.asar\\\\@hap-toolkit\\\\dsl-xvm\\\\lib\\\\loader\\\\module-loader.js!c:\\\\Program Files (x86)\\\\Quickapp\\\\resources\\\\app\\\\extensions\\\\hap-debugger\\\\node_modules.asar\\\\@hap-toolkit\\\\dsl-xvm\\\\lib\\\\loader\\\\manifest-loader.js?path=f:\\\\Breaker\\\\news-template10\\\\src!./node_modules/babel-loader/lib/index.js?cwd=f:\\\\Breaker\\\\news-template10&cacheDirectory&comments=false!c:\\\\Program Files (x86)\\\\Quickapp\\\\resources\\\\app\\\\extensions\\\\hap-debugger\\\\node_modules.asar\\\\@hap-toolkit\\\\dsl-xvm\\\\lib\\\\loader\\\\fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\")\n\n$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){\n     $app_script$($app_module$, $app_exports$, $app_require$)\n     if ($app_exports$.__esModule && $app_exports$.default) {\n            $app_module$.exports = $app_exports$.default;\n        }\n     $app_module$.exports['manifest'] = manifestJson;\n     $app_module$.exports.style = { list: [ $app_style$ ] };\n})\n\n$app_bootstrap$('@app-application/app',{ packagerVersion: '0.6.15'})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnV4P3V4VHlwZT1hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnV4P2Y3MWUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyICRhcHBfc3R5bGUkID0ge307dmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhYzpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxRdWlja2FwcFxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlcy5hc2FyXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJcXFxcc2NyaXB0LWxvYWRlci5qcyFjOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXFF1aWNrYXBwXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzLmFzYXJcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlclxcXFxtb2R1bGUtbG9hZGVyLmpzIWM6XFxcXFByb2dyYW0gRmlsZXMgKHg4NilcXFxcUXVpY2thcHBcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXMuYXNhclxcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyXFxcXG1hbmlmZXN0LWxvYWRlci5qcz9wYXRoPWY6XFxcXEJyZWFrZXJcXFxcbmV3cy10ZW1wbGF0ZTEwXFxcXHNyYyEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP2N3ZD1mOlxcXFxCcmVha2VyXFxcXG5ld3MtdGVtcGxhdGUxMCZjYWNoZURpcmVjdG9yeSZjb21tZW50cz1mYWxzZSFjOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXFF1aWNrYXBwXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzLmFzYXJcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlclxcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL2FwcC51eD91eFR5cGU9YXBwXCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1hcHBsaWNhdGlvbi9hcHAnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0O1xuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzWydtYW5pZmVzdCddID0gbWFuaWZlc3RKc29uO1xuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9IHsgbGlzdDogWyAkYXBwX3N0eWxlJCBdIH07XG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtYXBwbGljYXRpb24vYXBwJyx7IHBhY2thZ2VyVmVyc2lvbjogJzAuNi4xNSd9KVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.ux?uxType=app\n");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n/**\n * 显示菜单\n */\nfunction showMenu() {\n  var prompt = $app_require$('@app-module/system.prompt');\n\n  var router = $app_require$('@app-module/system.router');\n\n  var appInfo = $app_require$('@app-module/system.app').getInfo();\n\n  prompt.showContextMenu({\n    itemList: ['保存桌面', '关于', '取消'],\n    success: function success(ret) {\n      switch (ret.index) {\n        case 0:\n          // 保存桌面\n          createShortcut();\n          break;\n\n        case 1:\n          // 关于\n          router.push({\n            uri: '/About',\n            params: {\n              name: appInfo.name,\n              icon: appInfo.icon\n            }\n          });\n          break;\n\n        case 2:\n          // 取消\n          break;\n\n        default:\n          prompt.showToast({\n            message: 'error'\n          });\n      }\n    }\n  });\n}\n/**\n * 创建桌面图标\n * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限\n */\n\n\nfunction createShortcut() {\n  var prompt = $app_require$('@app-module/system.prompt');\n\n  var shortcut = $app_require$('@app-module/system.shortcut');\n\n  shortcut.hasInstalled({\n    success: function success(ret) {\n      if (ret) {\n        prompt.showToast({\n          message: '已创建桌面图标'\n        });\n      } else {\n        shortcut.install({\n          success: function success() {\n            prompt.showToast({\n              message: '成功创建桌面图标'\n            });\n          },\n          fail: function fail(errmsg, errcode) {\n            prompt.showToast({\n              message: \"\".concat(errcode, \": \").concat(errmsg)\n            });\n          }\n        });\n      }\n    }\n  });\n}\n\nvar _default = {\n  showMenu: showMenu,\n  createShortcut: createShortcut\n};\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlsLmpzP2UwZWIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmmL7npLroj5zljZVcbiAqL1xuZnVuY3Rpb24gc2hvd01lbnUgKCkge1xuICBjb25zdCBwcm9tcHQgPSByZXF1aXJlKCdAc3lzdGVtLnByb21wdCcpXG4gIGNvbnN0IHJvdXRlciA9IHJlcXVpcmUoJ0BzeXN0ZW0ucm91dGVyJylcbiAgY29uc3QgYXBwSW5mbyA9IHJlcXVpcmUoJ0BzeXN0ZW0uYXBwJykuZ2V0SW5mbygpXG4gIHByb21wdC5zaG93Q29udGV4dE1lbnUoe1xuICAgIGl0ZW1MaXN0OiBbJ+S/neWtmOahjOmdoicsICflhbPkuo4nLCAn5Y+W5raIJ10sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJldCkge1xuICAgICAgc3dpdGNoIChyZXQuaW5kZXgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgLy8g5L+d5a2Y5qGM6Z2iXG4gICAgICAgIGNyZWF0ZVNob3J0Y3V0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgLy8g5YWz5LqOXG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICB1cmk6ICcvQWJvdXQnLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgbmFtZTogYXBwSW5mby5uYW1lLFxuICAgICAgICAgICAgaWNvbjogYXBwSW5mby5pY29uXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAyOlxuICAgICAgICAvLyDlj5bmtohcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHByb21wdC5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvcidcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICog5Yib5bu65qGM6Z2i5Zu+5qCHXG4gKiDms6jmhI/vvJrkvb/nlKjliqDovb3lmajmtYvor5Vg5Yib5bu65qGM6Z2i5b+r5o235pa55byPYOWKn+iDveaXtu+8jOivt+WFiOWcqGDns7vnu5/orr7nva5g5Lit5omT5byAYOW6lOeUqOWKoOi9veWZqGDnmoRg5qGM6Z2i5b+r5o235pa55byPYOadg+mZkFxuICovXG5mdW5jdGlvbiBjcmVhdGVTaG9ydGN1dCAoKSB7XG4gIGNvbnN0IHByb21wdCA9IHJlcXVpcmUoJ0BzeXN0ZW0ucHJvbXB0JylcbiAgY29uc3Qgc2hvcnRjdXQgPSByZXF1aXJlKCdAc3lzdGVtLnNob3J0Y3V0JylcbiAgc2hvcnRjdXQuaGFzSW5zdGFsbGVkKHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmV0KSB7XG4gICAgICBpZiAocmV0KSB7XG4gICAgICAgIHByb21wdC5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6ICflt7LliJvlu7rmoYzpnaLlm77moIcnXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG9ydGN1dC5pbnN0YWxsKHtcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ+aIkOWKn+WIm+W7uuahjOmdouWbvuaghydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJybXNnLCBlcnJjb2RlKSB7XG4gICAgICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogYCR7ZXJyY29kZX06ICR7ZXJybXNnfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaG93TWVudSxcbiAgY3JlYXRlU2hvcnRjdXRcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBbkJBO0FBdUJBO0FBMUJBO0FBNEJBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFWQTtBQVlBO0FBQ0E7QUFwQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util.js\n");

/***/ }),

/***/ "c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loader\\script-loader.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loader\\module-loader.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loader\\manifest-loader.js?path=f:\\Breaker\\news-template10\\src!./node_modules/babel-loader/lib/index.js?cwd=f:\\Breaker\\news-template10&cacheDirectory&comments=false!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loader\\fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=f:/Breaker/news-template10/src!./node_modules/babel-loader/lib?cwd=f:/Breaker/news-template10&cacheDirectory&comments=false!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function __scriptModule__ (module, exports, $app_require$){\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _util = _interopRequireDefault(__webpack_require__(/*! ./util */ \"./src/util.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = {\n  showMenu: _util[\"default\"].showMenu,\n  createShortcut: _util[\"default\"].createShortcut\n};\nexports[\"default\"] = _default;}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYzpcXFByb2dyYW0gRmlsZXMgKHg4NilcXFF1aWNrYXBwXFxyZXNvdXJjZXNcXGFwcFxcZXh0ZW5zaW9uc1xcaGFwLWRlYnVnZ2VyXFxub2RlX21vZHVsZXMuYXNhclxcQGhhcC10b29sa2l0XFxkc2wteHZtXFxsaWJcXGxvYWRlclxcc2NyaXB0LWxvYWRlci5qcyFjOlxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcUXVpY2thcHBcXHJlc291cmNlc1xcYXBwXFxleHRlbnNpb25zXFxoYXAtZGVidWdnZXJcXG5vZGVfbW9kdWxlcy5hc2FyXFxAaGFwLXRvb2xraXRcXGRzbC14dm1cXGxpYlxcbG9hZGVyXFxtb2R1bGUtbG9hZGVyLmpzIWM6XFxQcm9ncmFtIEZpbGVzICh4ODYpXFxRdWlja2FwcFxccmVzb3VyY2VzXFxhcHBcXGV4dGVuc2lvbnNcXGhhcC1kZWJ1Z2dlclxcbm9kZV9tb2R1bGVzLmFzYXJcXEBoYXAtdG9vbGtpdFxcZHNsLXh2bVxcbGliXFxsb2FkZXJcXG1hbmlmZXN0LWxvYWRlci5qcz9wYXRoPWY6XFxCcmVha2VyXFxuZXdzLXRlbXBsYXRlMTBcXHNyYyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2N3ZD1mOlxcQnJlYWtlclxcbmV3cy10ZW1wbGF0ZTEwJmNhY2hlRGlyZWN0b3J5JmNvbW1lbnRzPWZhbHNlIWM6XFxQcm9ncmFtIEZpbGVzICh4ODYpXFxRdWlja2FwcFxccmVzb3VyY2VzXFxhcHBcXGV4dGVuc2lvbnNcXGhhcC1kZWJ1Z2dlclxcbm9kZV9tb2R1bGVzLmFzYXJcXEBoYXAtdG9vbGtpdFxcZHNsLXh2bVxcbGliXFxsb2FkZXJcXGZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vc3JjL2FwcC51eD91eFR5cGU9YXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC51eD8yM2MzIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4vKipcbiog5bqU55So57qn5Yir55qE6YWN572u77yM5L6b5omA5pyJ6aG16Z2i5YWs55SoXG4qL1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNob3dNZW51OiB1dGlsLnNob3dNZW51LFxuICBjcmVhdGVTaG9ydGN1dDogdXRpbC5jcmVhdGVTaG9ydGN1dFxufVxuPC9zY3JpcHQ+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loader\\script-loader.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loader\\module-loader.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loader\\manifest-loader.js?path=f:\\Breaker\\news-template10\\src!./node_modules/babel-loader/lib/index.js?cwd=f:\\Breaker\\news-template10&cacheDirectory&comments=false!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loader\\fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\n");

/***/ })

/******/ });
    };
    if (typeof window === "undefined") {
      return createAppHandler();
    }
    else {
      window.createAppHandler = createAppHandler
      // H5注入manifest以获取features
      global.manifest = manifestJson;
    }
  })();