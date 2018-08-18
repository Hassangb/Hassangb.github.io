(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\nsection{\r\n    width: 100vw;\r\n    height: 100vh; \r\n     padding: 50px;\r\n  \r\n}\r\n\r\n@media (max-width: 1000px){\r\n    #work{\r\n                 \r\n                 height: 240vh;\r\n         }\r\n   }\r\n\r\n@media (max-width: 1000px){\r\n    #home{\r\n                 \r\n                 height: 120vh;\r\n                 \r\n                 \r\n         }\r\n   }\r\n\r\n#home{\r\n   \r\n   \r\n   color: white;\r\n   padding: 80px;\r\n   background-color: #18bc9c;\r\n\r\n}\r\n\r\n#my-img{\r\n     width:350px;\r\n     margin: 0 auto;\r\n     \r\n     \r\n     \r\n}\r\n\r\n#work{\r\n   padding: 10px;\r\n   background-color: rgba(223, 56, 56, 0.884);\r\n   color: white;\r\n}\r\n\r\n.images{\r\nwidth: 350px;\r\nheight: 200px;\r\n}\r\n\r\nimg:hover{\r\nopacity: .7;\r\n}\r\n\r\n#contact{\r\npadding:10px;\r\n\r\n}\r\n\r\n.navbar{\r\nbackground-color: #2c3e50;\r\n\r\n}\r\n\r\n.nav,a{\r\ncolor: white!important;\r\n}\r\n\r\n.nav,a:hover{\r\n    opacity:.5;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n  <html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Portfolio Website</title>\n    \n</head> \n\n  \n<body data-spy=\"scroll\"  data-target=\".navbar\" >\n\n       \n\n        <nav class=\"navbar navbar-expand-lg navbar-light fixed-top\">\n            <a class=\"navbar-brand\" href=\"#\"><h2>Portfolio</h2></a>\n            <button class=\"navbar-toggler bg-white \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon \"></span>\n            \n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n              <ul class=\"navbar-nav\">\n                <li class=\"nav-item active\">\n                  <a class=\"nav-link\" href=\"#home\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#work\">Work</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#contact\">Contact</a>\n                </li>\n                \n              </ul>\n            </div>\n          </nav>\n        \n        <section id=\"home\" class=\"text-center \">\n            <h1>My Portfolio</h1>\n            <p>Let just read myself and contact me</p>\n           \n            <img id=\"my-img\"src=\"assets/images/mypic2.jpg\" alt=\"\" class=\"img-responsive img-thumbnail  \">\n            <h2>MUHAMMAD HASSAN</h2><br>\n            <h3>Web Designer - Web Developer</h3>\n            <h3>Bachelors of Computer Science</h3>\n            <h3>(BSCS)</h3>\n    \n        </section>\n\n\n        <section id=\"work\"  class=\"text-center\">\n           \n            <div>\n                    <br><br><br>\n                    <h1>My Work</h1>\n                    \n            </div>\n            <br><br>\n\n            <div   class=\"row\">\n                  \n                    <div class=\"col-md-4\">\n                       \n                    <img  src=\"assets/images/pic1.png\" alt=\"\" class=\"images  img-responsive img-thumbnail\" vspace=\"5\">\n\n                    </div>\n                    \n                     <div class=\"col-md-4 \">\n                            <img  src=\"assets/images/pic2.png\" alt=\"\"class=\"images img-responsive img-thumbnail\" vspace=\"5\" >\n                     </div>\n                     <br>\n                     <div class=\"col-md-4\">\n                            <img  src=\"assets/images/pic3.png\" alt=\"\"class=\"images img-responsive img-thumbnail\" vspace=\"5\">\n                     </div>\n                     <br>\n                     <div class=\"col-md-4\">\n                            <img  src=\"assets/images/pic4.jpg\" alt=\"\"class=\"images img-responsive img-thumbnail\" vspace=\"5\">\n                     </div>\n                     <br>\n                     <div class=\"col-md-4\">\n                            <img  src=\"assets/images/pic5.jpg\" alt=\"\"class=\"images img-responsive img-thumbnail\" vspace=\"5\">\n                     </div>\n                     <br>\n                     <div class=\"col-md-4\">\n                            <img  src=\"assets/images/pic6.jpg\" alt=\"\"class=\"images img-responsive img-thumbnail\" vspace=\"5\">\n                     </div>\n                    \n                   \n           \n            </div>\n\n        </section>\n        \n        \n        <section id=\"contact\">\n                      <br><br><br>\n                    <div class=\"text-center\">\n                      \n                        <h1>Contact me</h1>\n                    </div>\n                    <br><br>\n                    \n                    \n                    <form class=\"col-md-6 offset-md-3  \">\n\n                        <h3 class=\"text-center\">Send Your Message</h3>\n                        <div class=\"form-group\">\n                            <input type=\"text\" id=\"\" class=\"form-control input-lg\" placeholder=\"Your Name...\" required>\n                        </div>\n                        <div class=\"form-group\">\n                                <input type=\"email\" id=\"\" class=\"form-control input-lg\" placeholder=\"Your Email...\" required>\n                            </div>\n                        <div class=\"form-group\">\n                                <input type=\"text\" id=\"\" class=\"form-control input-lg\" placeholder=\"Subject...\" required>\n                                </div>    \n                            \n                        <div class=\"form-group\">      \n                        <textarea  id=\"\" cols=\"60\" rows=\"5\" class=\" form-control input-lg\"  placeholder=\"Message\" required></textarea>\n                        </div>\n                        \n                        <div class=\"form-group\">\n                                <button type=\"submit\"class=\"btn btn-success btn-block input-lg \"><b>Send Message</b></button>\n                            </div>\n    \n                        \n                    </form>\n\n        </section>\n       \n        \n\n</body>\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myfirstapp  M.Hassan';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\myfirstapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map