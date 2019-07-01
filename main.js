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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");





var routes = [
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
        data: { animation: 'isRight' }
    },
    {
        path: 'page/:id',
        component: _page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"],
        data: { animation: 'isLeft' }
    },
    {
        path: '**',
        redirectTo: 'page/1',
        data: { animation: 'isLeft' }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Main Page -------------------*/\r\n\r\n.container{\r\n\twidth: 371px;\r\n\theight: 811px;\r\n\tmargin: auto auto;\r\n\tdisplay: flex;\r\n\r\n\tbackground-color: #f7fdfe;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\r\n\tposition: fixed;\r\n\ttop: 459px;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n\tz-index: 1;\r\n}\r\n\r\n.buttons_container{\r\n\twidth: 580px;\r\n\theight: 920px;\r\n\ttop: 0px;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%);\r\n\t        transform: translateX(-50%);\r\n\tposition: fixed;\r\n\tz-index: 99999;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n.container{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: auto auto;\r\n    display: flex;\r\n    background-color: #f7fdfe;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0%;\r\n    -webkit-transform: translate(0%, 0%);\r\n    transform: translate(0%, 0%);\r\n    z-index: 1;\r\n\t}\r\n\r\n\tapp-footer{\r\n\t\tposition: fixed;\r\n\t\tbottom: -93vh;\r\n\t\tleft: 50%;\r\n\t\t-webkit-transform: translateX(-50%);\r\n\t\t        transform: translateX(-50%);\r\n\t\twidth: 100vw;\r\n\t}\r\n\r\n}\r\n\r\nmain{\r\n\tposition: relative;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0RBQW9EOztBQUVwRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGFBQWE7O0NBRWIseUJBQXlCO0NBQ3pCLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUIsc0JBQXNCOztDQUV0QixlQUFlO0NBQ2YsVUFBVTtDQUNWLFNBQVM7Q0FDVCx3Q0FBZ0M7U0FBaEMsZ0NBQWdDO0NBQ2hDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsUUFBUTtDQUNSLFNBQVM7Q0FDVCxtQ0FBMkI7U0FBM0IsMkJBQTJCO0NBQzNCLGVBQWU7Q0FDZixjQUFjO0FBQ2Y7O0FBR0E7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFFBQVE7SUFDUixRQUFRO0lBQ1Isb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QixVQUFVO0NBQ2I7O0NBRUE7RUFDQyxlQUFlO0VBQ2YsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLFlBQVk7Q0FDYjs7QUFFRDs7QUFJQTtDQUNDLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tIE1haW4gUGFnZSAtLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5jb250YWluZXJ7XHJcblx0d2lkdGg6IDM3MXB4O1xyXG5cdGhlaWdodDogODExcHg7XHJcblx0bWFyZ2luOiBhdXRvIGF1dG87XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZmRmZTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiA0NTlweDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLmJ1dHRvbnNfY29udGFpbmVye1xyXG5cdHdpZHRoOiA1ODBweDtcclxuXHRoZWlnaHQ6IDkyMHB4O1xyXG5cdHRvcDogMHB4O1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHotaW5kZXg6IDk5OTk5O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmZGZlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcblx0fVxyXG5cclxuXHRhcHAtZm9vdGVye1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAtOTN2aDtcclxuXHRcdGxlZnQ6IDUwJTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbm1haW57XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- iPhone Background -->\n<img src=\"assets/images/iphone.png\" id=\"iphone\">\n\n<!-- Yes/No & Information Page -->\n<div class=\"container\">\n\n    <app-header [message]=\"message\"></app-header>\n  \n  \t<main [@routeAnimations]=\"prepareRoute(outlet)\" class=\"content\">\n    \t<router-outlet #outlet=\"outlet\"></router-outlet>\n    </main>\n\n    <app-footer (messageEvent)=\"receiveMessage($event)\"></app-footer>\n\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _route_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-animations */ "./src/app/route-animations.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pcrepair';
        this.message = "";
    }
    AppComponent.prototype.receiveMessage = function ($event) {
        this.message = $event;
        //console.log($event);
    };
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                _route_animations__WEBPACK_IMPORTED_MODULE_2__["fader"],
            ],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _top_icon_top_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top-icon/top-icon.component */ "./src/app/top-icon/top-icon.component.ts");
/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./text/text.component */ "./src/app/text/text.component.ts");
/* harmony import */ var _option_buttons_option_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./option-buttons/option-buttons.component */ "./src/app/option-buttons/option-buttons.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _option2_buttons_option2_buttons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./option2-buttons/option2-buttons.component */ "./src/app/option2-buttons/option2-buttons.component.ts");
/* harmony import */ var _text2_text2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./text2/text2.component */ "./src/app/text2/text2.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _top_icon_top_icon_component__WEBPACK_IMPORTED_MODULE_7__["TopIconComponent"],
                _text_text_component__WEBPACK_IMPORTED_MODULE_8__["TextComponent"],
                _option_buttons_option_buttons_component__WEBPACK_IMPORTED_MODULE_9__["OptionButtonsComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_11__["PageComponent"],
                _option2_buttons_option2_buttons_component__WEBPACK_IMPORTED_MODULE_12__["Option2ButtonsComponent"],
                _text2_text2_component__WEBPACK_IMPORTED_MODULE_13__["Text2Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* -- footer buttons -- */\r\n\r\n.footer_buttons{\r\n\tposition: fixed;\r\n\tbottom: 1.5%;\r\n\theight: 40px;\r\n\t-webkit-transform: translateX(-50%);\r\n\t        transform: translateX(-50%);\r\n}\r\n\r\n#back_button{\r\n\tleft: 13%;\r\n\tcursor: pointer;\r\n}\r\n\r\n#home_button{\r\n\tleft: 50%;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n\t.back_button_container{\r\n\t\tposition:absolute;\r\n\t\tleft: 8%;\r\n\t}\r\n\r\n\t.footer_buttons{\r\n\t\tposition: fixed;\r\n\t\tbottom: auto;\r\n\t\theight: 40px;\r\n\t\t-webkit-transform: translateX(-50%);\r\n\t\ttransform: translateX(-50%);\r\n\t}\r\n\r\n\r\n\t#home_button{\r\n\t\tposition: absolute;\r\n\t\tleft: 50%;\r\n\t\t-webkit-transform: translateX(-50%);\r\n\t\t        transform: translateX(-50%);\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5Qjs7QUFFekI7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLFlBQVk7Q0FDWixtQ0FBMkI7U0FBM0IsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsU0FBUztDQUNULGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBS0E7Q0FDQztFQUNDLGlCQUFpQjtFQUNqQixRQUFRO0NBQ1Q7O0NBRUE7RUFDQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsMkJBQTJCO0NBQzVCOzs7Q0FHQTtFQUNDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUNBQTJCO1VBQTNCLDJCQUEyQjtDQUM1QjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0gZm9vdGVyIGJ1dHRvbnMgLS0gKi9cclxuXHJcbi5mb290ZXJfYnV0dG9uc3tcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym90dG9tOiAxLjUlO1xyXG5cdGhlaWdodDogNDBweDtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbiNiYWNrX2J1dHRvbntcclxuXHRsZWZ0OiAxMyU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jaG9tZV9idXR0b257XHJcblx0bGVmdDogNTAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcblx0LmJhY2tfYnV0dG9uX2NvbnRhaW5lcntcclxuXHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0bGVmdDogOCU7XHJcblx0fVxyXG5cclxuXHQuZm9vdGVyX2J1dHRvbnN7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IGF1dG87XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHR9XHJcblxyXG5cclxuXHQjaG9tZV9idXR0b257XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back_button_container\" (click)=\"sendMessage()\" [routerLink]=\"['/page', obterPreviousPage()]\"><img src=\"assets/images/backbutton.png\" class=\"footer_buttons\" id=\"back_button\"></div>\n<a (click)=\"sendMessage()\" routerLink=\"/page\"><img src=\"assets/images/homebutton.png\" class=\"footer_buttons\" id=\"home_button\"></a>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");




var FooterComponent = /** @class */ (function () {
    function FooterComponent(route, globalService) {
        this.route = route;
        this.globalService = globalService;
        this.id = '';
        this.message = "hamburguer";
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FooterComponent.prototype.obterPaginaPorId = function () {
        return this.globalService.obterPaginaPorId(this.id);
        //console.log(this.id);
    };
    FooterComponent.prototype.obterPreviousPage = function () {
        var previouspage = this.obterPaginaPorId().previouspage;
        //console.log(text);
        return previouspage;
    };
    FooterComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.message);
        //console.log(this.message);
    };
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FooterComponent.prototype, "messageEvent", void 0);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/global.service.ts":
/*!***********************************!*\
  !*** ./src/app/global.service.ts ***!
  \***********************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.page = [
            {
                "id": "1",
                "topicon": "hello.png",
                "text": "Please select a topic you need help with:",
                "button1": "PC doesn't turn ON",
                "button2": "PC shuts down randomly",
                "button3": "PC is very slow",
                "button4": "Malware/Viruses",
                "button5": "Other",
                "nbuttonid1": "2",
                "nbuttonid2": "102",
                "nbuttonid3": "202",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "2",
                "previouspage": "1"
            },
            {
                "id": "2",
                "topicon": "powerbutton.png",
                "text": "First, check if all cables are connected properly. Now, does power come on?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "3",
                "nbuttonid2": "4",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "1"
            },
            {
                "id": "3",
                "topicon": "monitor.png",
                "text": "Is your monitor displaying anything?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "5",
                "nbuttonid2": "6",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "2"
            },
            {
                "id": "4",
                "topicon": "plug.png",
                "text": "Have you tested the AC power source?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "7",
                "nbuttonid2": "8",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "2"
            },
            {
                "id": "5",
                "topicon": "computer.png",
                "text": "Is this a new build/computer?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "9",
                "nbuttonid2": "10",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "3"
            },
            {
                "id": "6",
                "topicon": "powerbutton.png",
                "text": "Make sure your monitor is connected and working. Now, does your system power up?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "11",
                "nbuttonid2": "4",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "3"
            },
            {
                "id": "7",
                "topicon": "psu.png",
                "text": "Does your Power Supply Unit have an universal input?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "12",
                "nbuttonid2": "13",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "4"
            },
            {
                "id": "8",
                "topicon": "plug.png",
                "text": "Please connect the computer to a known good power outlet and try again.",
                "button1": "Okay",
                "button2": "Back",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "100",
                "nbuttonid2": "4",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "4"
            },
            {
                "id": "9",
                "topicon": "energy.png",
                "text": "Please check your power requirements and see if they are sufficient.",
                "button1": "Okay",
                "button2": "Back",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "99",
                "nbuttonid2": "5",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "5"
            },
            {
                "id": "10",
                "topicon": "reboot.png",
                "text": "Does it take two tries to reboot the PC?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "14",
                "nbuttonid2": "15",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "5"
            },
            {
                "id": "11",
                "topicon": "monitor.png",
                "text": "Is 'No Power' displayed in your screen?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "16",
                "nbuttonid2": "17",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "6"
            },
            {
                "id": "12",
                "topicon": "motherboard.png",
                "text": "Have you checked MotherBoard lead?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "18",
                "nbuttonid2": "19",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "7"
            },
            {
                "id": "13",
                "topicon": "energy.png",
                "text": "Please select proper voltage on rear of Power Suply Unit.",
                "button1": "Okay",
                "button2": "Back",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "98",
                "nbuttonid2": "7",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "7"
            },
            {
                "id": "14",
                "topicon": "psu.png",
                "text": "Premature power-good signal. Try different PSU.",
                "button1": "Okay",
                "button2": "Back",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "97",
                "nbuttonid2": "10",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "10"
            },
            {
                "id": "15",
                "topicon": "beep.png",
                "text": "When turning on PC, how many beeps do you hear?",
                "button1": "No beeps",
                "button2": "3 or less",
                "button3": "Between 4 and 6",
                "button4": "Between 7 and 10",
                "button5": "More than 10",
                "nbuttonid1": "20",
                "nbuttonid2": "21",
                "nbuttonid3": "22",
                "nbuttonid4": "23",
                "nbuttonid5": "24",
                "pagetype": "2",
                "previouspage": "10"
            },
            {
                "id": "16",
                "topicon": "gpu.png",
                "text": "Please attach Video Card power inside the computer.",
                "button1": "Okay",
                "button2": "Back",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "96",
                "nbuttonid2": "11",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "11"
            },
            {
                "id": "17",
                "topicon": "monitor.png",
                "text": "Is 'No Signal' displayed in your screen?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "25",
                "nbuttonid2": "26",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "11"
            },
            {
                "id": "18",
                "topicon": "powerbutton.png",
                "text": "When pressing power switch, does anything happen?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "27",
                "nbuttonid2": "28",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "12"
            },
            {
                "id": "19",
                "topicon": "motherboard.png",
                "text": "Make sure front panel switch is connected properly in MotherBoard.",
                "button1": "Okay",
                "button2": "Back",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "95",
                "nbuttonid2": "12",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "12"
            },
            {
                "id": "95",
                "topicon": "end.png",
                "text": "Did this fix your problem?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "1",
                "nbuttonid2": "12",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "19"
            },
            {
                "id": "96",
                "topicon": "end.png",
                "text": "Did this fix your problem?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "1",
                "nbuttonid2": "11",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "16"
            },
            {
                "id": "97",
                "topicon": "end.png",
                "text": "Did this fix your problem?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "1",
                "nbuttonid2": "10",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "14"
            },
            {
                "id": "98",
                "topicon": "end.png",
                "text": "Did this fix your problem?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "1",
                "nbuttonid2": "7",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "13"
            },
            {
                "id": "99",
                "topicon": "end.png",
                "text": "Did this fix your problem?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "1",
                "nbuttonid2": "5",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "9"
            },
            {
                "id": "100",
                "topicon": "end.png",
                "text": "Did this fix your problem?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "1",
                "nbuttonid2": "4",
                "nbuttonid3": "0",
                "nbuttonid4": "0",
                "nbuttonid5": "0",
                "pagetype": "1",
                "previouspage": "8"
            },
            {
                "id": "102",
                "topicon": "computer.png",
                "text": "Have you installed new hardware?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "103",
                "nbuttonid2": "104",
                "nbuttonid3": "",
                "nbuttonid4": "",
                "nbuttonid5": "",
                "pagetype": "1",
                "previouspage": "1"
            },
            {
                "id": "103",
                "topicon": "computer.png",
                "text": "Have you installed/updated the drivers?",
                "button1": "Yes, all of them",
                "button2": "Only for this component",
                "button3": "No, I haven't",
                "button4": "Doesn't need drivers",
                "button5": "What's a 'driver'?",
                "nbuttonid1": "105",
                "nbuttonid2": "106",
                "nbuttonid3": "107",
                "nbuttonid4": "108",
                "nbuttonid5": "109",
                "pagetype": "2",
                "previouspage": "102"
            },
            {
                "id": "104",
                "topicon": "software.png",
                "text": "Have you installed new software?",
                "button1": "Yes",
                "button2": "No",
                "button3": "",
                "button4": "",
                "button5": "",
                "nbuttonid1": "110",
                "nbuttonid2": "111",
                "nbuttonid3": "",
                "nbuttonid4": "",
                "nbuttonid5": "",
                "pagetype": "1",
                "previouspage": "102"
            },
            {
                "id": "202",
                "topicon": "slow.png",
                "text": "How did it become slow?",
                "button1": "Gradually over time",
                "button2": "All of a sudden",
                "button3": "I don't know",
                "button4": "Other",
                "button5": "Go back to last page",
                "nbuttonid1": "203",
                "nbuttonid2": "204",
                "nbuttonid3": "205",
                "nbuttonid4": "0",
                "nbuttonid5": "1",
                "pagetype": "2",
                "previouspage": "1"
            },
        ];
        //currentPage:any;
        //currentPage = {};
        this.currentPage = {};
    }
    GlobalService.prototype.obterPaginaPorId = function (id) {
        var _this = this;
        this.page.forEach(function (page) {
            if (page.id == id) {
                _this.currentPage = page;
            }
        });
        //console.log(this.currentPage);
        return this.currentPage;
    };
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* -- Header --*/\r\n\r\n.header{\r\n\twidth: 100%;\r\n\tbackground: linear-gradient(to right, #4e5bf5 0%,#303cca 100%,#303cca 100%);\r\n\tbox-shadow: 0px 10px 20px -13px rgba(0,0,0,0.75);\r\n\tjustify-content: space-between;\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\n\ttop: 0px;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%);\r\n\t        transform: translateX(-50%);\r\n}\r\n\r\n.logo{\r\n\tmargin-top: 59px;\r\n\tmargin-left: 30px;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.logo a{display: inline-flex;}\r\n\r\n#logo_small{\r\n\theight: 26px;\r\n\tmargin-top: 8px;\r\n\tmargin-right: 3px;\r\n}\r\n\r\nh2{font-size: 28px; font-family: 'Audiowide', cursive;}\r\n\r\n#pc{color: white;}\r\n\r\n#repair{color: #48d0ed;}\r\n\r\n#hamburguer{\r\n\theight: 38px;\r\n\tmargin-top: 57px;\r\n\tmargin-right: 22px;\r\n\tcursor: pointer;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n.logo{margin-top: 29px}\r\n.hamburguer{margin-top: -29px;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjs7QUFFaEI7Q0FDQyxXQUFXO0NBQ1gsMkVBQTJFO0NBQzNFLGdEQUFnRDtDQUNoRCw4QkFBOEI7Q0FDOUIsYUFBYTtDQUNiLGVBQWU7Q0FDZixRQUFRO0NBQ1IsU0FBUztDQUNULG1DQUEyQjtTQUEzQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjs7QUFFQSxRQUFRLG9CQUFvQixDQUFDOztBQUU3QjtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBLEdBQUcsZUFBZSxFQUFFLGlDQUFpQyxDQUFDOztBQUN0RCxJQUFJLFlBQVksQ0FBQzs7QUFDakIsUUFBUSxjQUFjLENBQUM7O0FBRXZCO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFHQTtBQUNBLE1BQU0sZ0JBQWdCO0FBQ3RCLFlBQVksaUJBQWlCLENBQUM7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLSBIZWFkZXIgLS0qL1xyXG5cclxuLmhlYWRlcntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0ZTViZjUgMCUsIzMwM2NjYSAxMDAlLCMzMDNjY2EgMTAwJSk7XHJcblx0Ym94LXNoYWRvdzogMHB4IDEwcHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDBweDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG4ubG9nb3tcclxuXHRtYXJnaW4tdG9wOiA1OXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dvIGF7ZGlzcGxheTogaW5saW5lLWZsZXg7fVxyXG5cclxuI2xvZ29fc21hbGx7XHJcblx0aGVpZ2h0OiAyNnB4O1xyXG5cdG1hcmdpbi10b3A6IDhweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG5cclxuaDJ7Zm9udC1zaXplOiAyOHB4OyBmb250LWZhbWlseTogJ0F1ZGlvd2lkZScsIGN1cnNpdmU7fVxyXG4jcGN7Y29sb3I6IHdoaXRlO31cclxuI3JlcGFpcntjb2xvcjogIzQ4ZDBlZDt9XHJcblxyXG4jaGFtYnVyZ3VlcntcclxuXHRoZWlnaHQ6IDM4cHg7XHJcblx0bWFyZ2luLXRvcDogNTdweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDIycHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4ubG9nb3ttYXJnaW4tdG9wOiAyOXB4fVxyXG4uaGFtYnVyZ3VlcnttYXJnaW4tdG9wOiAtMjlweDt9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\t<div class=\"logo\">\n\t\t<!--<a routerLink=\"/page\"><img src=\"assets/images/logo_small.png\" id=\"logo_small\">-->\n\t\t<a><img src=\"assets/images/logo_small.png\" id=\"logo_small\">\n\t\t<h2 id=\"pc\">pc</h2><h2 id=\"repair\">repair</h2></a>\n\t</div>\n\n\t<div class=\"hamburguer\">\n\t\t<a (click)=\"getUrl();\">\n\t\t\t<img src=\"assets/images/{{ message }}.png\" id=\"hamburguer\">\n\t\t</a>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, _location, activatedRoute) {
        this.router = router;
        this._location = _location;
        this.activatedRoute = activatedRoute;
    }
    //message:any;
    HeaderComponent.prototype.getUrl = function () {
        if (window.location.pathname != "/settings") {
            this.router.navigate(['../settings'], { relativeTo: this.activatedRoute });
            this.message = 'cross';
        }
        else {
            this._location.back();
            this.message = 'hamburguer';
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
        if (window.location.pathname != "/settings") {
            this.message = 'hamburguer';
        }
        else {
            this.message = 'cross';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "message", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/option-buttons/option-buttons.component.css":
/*!*************************************************************!*\
  !*** ./src/app/option-buttons/option-buttons.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* -- option buttons -- */\r\n\r\n.option_buttons{\r\n\tdisplay: grid;\r\n\twidth: 80%;\r\n\tgrid-template-columns: 1fr 1fr;\r\n\tgrid-column-gap: 8%;\r\n\tposition: fixed;\r\n\tbottom: 12.5%;\r\n\tleft: 50.8%;\r\n\t-webkit-transform: translateX(-50%);\r\n\t        transform: translateX(-50%);\r\n}\r\n\r\n.option_buttons a{\r\n\tborder-radius:999px;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#ffffff;\r\n\tfont-family: 'Audiowide', cursive;\r\n\tfont-size:23px;\r\n\tfont-weight:700;\r\n\tpadding: 25px 0px;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\twidth: 132px;\r\n\theight: 80px;\r\n}\r\n\r\n#left_button{\r\n\tbox-shadow: 0px 5px 14px -7px black;\r\n\tbackground:linear-gradient(to bottom, #48d0ed 10%, #3699ba 100%);\r\n\tbackground-color:#69c0e0;\r\n}\r\n\r\n#left_button:hover{\r\n\tbox-shadow:inset 0px 0px 15px 3px #6e949e;\r\n    background:linear-gradient(to bottom, #3699ba 10%, #48d0ed 100%);\r\n\tbackground-color:#2e466e;\r\n}\r\n\r\n#right_button{\r\n\tbox-shadow: 0px 5px 14px -7px black;\r\n\tbackground:linear-gradient(to bottom, #4a54cc 5%, #2431c7 100%);\r\n\tbackground-color:#4a54cc;\r\n}\r\n\r\n#right_button:hover{\r\n\tbox-shadow:inset 0px 0px 15px 3px #4a5575;\r\n    background:linear-gradient(to bottom, #2431c7 5%, #4a54cc 100%);\r\n\tbackground-color:#2e466e;\r\n}\r\n\r\n/* -- multiple options buttons --*/\r\n\r\n.multiple_option_buttons{\r\n\tdisplay: grid;\r\n\twidth: 84%;\r\n\tgrid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n\tgrid-row-gap: 4%;\r\n\tposition: fixed;\r\n\tbottom: 16.5%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%);\r\n\t        transform: translateX(-50%);\r\n}\r\n\r\n.buttons_container ul{\r\n\theight: 261px;\r\n\twidth: 310px;\r\n\tbackground: transparent;\r\n\tposition: fixed;\r\n\tz-index: 999;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%);\r\n\t        transform: translateX(-50%);\r\n\tbottom: 152px;\r\n}\r\n\r\n.buttons_container ul li{\r\n\theight: 44px;\r\n\tmargin-bottom: 10px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.multiple_option_buttons p{\r\n\tbackground-color: white;\r\n\tpadding: 13px 0px 13px 22px;\r\n\tfont-family: 'Audiowide', cursive;\r\n\tfont-weight: 700;\r\n\tcolor: #575757;\r\n\tborder-radius: 8px;\r\n\tbox-shadow: 1px 6px 10px 0px rgba(0,0,0,0.15);\r\n\tbackground-image: -webkit-linear-gradient(30deg, white 80%, #4e5bf5 20%, #303ccb 100%);\r\n\ttransition-delay: 0.3s;\r\n  \ttransition-duration: infinite;\r\n}\r\n\r\n.multiple_option_buttons p:hover{\r\n  -webkit-animation-name: mymove;\r\n          animation-name: mymove;\r\n  -webkit-animation-duration: 0.3s;\r\n          animation-duration: 0.3s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: ease-out;\r\n          animation-timing-function: ease-out;\r\n  background-image: -webkit-linear-gradient(30deg, white 70%, #4e5bf5 20%, #303ccb 100%);\r\n}\r\n\r\n@-webkit-keyframes mymove {\r\n  0%  {background-image: -webkit-linear-gradient(30deg, white 80%, #4e5bf5 20%, #303ccb 100%);}\r\n  10% {background-image: -webkit-linear-gradient(30deg, white 79%, #4e5bf5 20%, #303ccb 100%);}\r\n  20% {background-image: -webkit-linear-gradient(30deg, white 78%, #4e5bf5 20%, #303ccb 100%);}\r\n  30% {background-image: -webkit-linear-gradient(30deg, white 77%, #4e5bf5 20%, #303ccb 100%);}\r\n  40% {background-image: -webkit-linear-gradient(30deg, white 76%, #4e5bf5 20%, #303ccb 100%);}\r\n  50% {background-image: -webkit-linear-gradient(30deg, white 75%, #4e5bf5 20%, #303ccb 100%);}\r\n  60% {background-image: -webkit-linear-gradient(30deg, white 74%, #4e5bf5 20%, #303ccb 100%);}\r\n  70% {background-image: -webkit-linear-gradient(30deg, white 73%, #4e5bf5 20%, #303ccb 100%);}\r\n  80% {background-image: -webkit-linear-gradient(30deg, white 72%, #4e5bf5 20%, #303ccb 100%);}\r\n  90% {background-image: -webkit-linear-gradient(30deg, white 71%, #4e5bf5 20%, #303ccb 100%);}\r\n  100%{background-image: -webkit-linear-gradient(30deg, white 70%, #4e5bf5 20%, #303ccb 100%);}\r\n}\r\n\r\n@keyframes mymove {\r\n  0%  {background-image: -webkit-linear-gradient(30deg, white 80%, #4e5bf5 20%, #303ccb 100%);}\r\n  10% {background-image: -webkit-linear-gradient(30deg, white 79%, #4e5bf5 20%, #303ccb 100%);}\r\n  20% {background-image: -webkit-linear-gradient(30deg, white 78%, #4e5bf5 20%, #303ccb 100%);}\r\n  30% {background-image: -webkit-linear-gradient(30deg, white 77%, #4e5bf5 20%, #303ccb 100%);}\r\n  40% {background-image: -webkit-linear-gradient(30deg, white 76%, #4e5bf5 20%, #303ccb 100%);}\r\n  50% {background-image: -webkit-linear-gradient(30deg, white 75%, #4e5bf5 20%, #303ccb 100%);}\r\n  60% {background-image: -webkit-linear-gradient(30deg, white 74%, #4e5bf5 20%, #303ccb 100%);}\r\n  70% {background-image: -webkit-linear-gradient(30deg, white 73%, #4e5bf5 20%, #303ccb 100%);}\r\n  80% {background-image: -webkit-linear-gradient(30deg, white 72%, #4e5bf5 20%, #303ccb 100%);}\r\n  90% {background-image: -webkit-linear-gradient(30deg, white 71%, #4e5bf5 20%, #303ccb 100%);}\r\n  100%{background-image: -webkit-linear-gradient(30deg, white 70%, #4e5bf5 20%, #303ccb 100%);}\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n\t.option_buttons{\r\n\t\tbottom: auto;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9uLWJ1dHRvbnMvb3B0aW9uLWJ1dHRvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7O0FBRXpCO0NBQ0MsYUFBYTtDQUNiLFVBQVU7Q0FDViw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixhQUFhO0NBQ2IsV0FBVztDQUNYLG1DQUEyQjtTQUEzQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FHQyxtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsaUNBQWlDO0NBQ2pDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQyxnRUFBZ0U7Q0FDaEUsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MseUNBQXlDO0lBQ3RDLGdFQUFnRTtDQUNuRSx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxtQ0FBbUM7Q0FDbkMsK0RBQStEO0NBQy9ELHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLHlDQUF5QztJQUN0QywrREFBK0Q7Q0FDbEUsd0JBQXdCO0FBQ3pCOztBQWlCQSxrQ0FBa0M7O0FBRWxDO0NBQ0MsYUFBYTtDQUNiLFVBQVU7Q0FDVix1Q0FBdUM7Q0FDdkMsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixhQUFhO0NBQ2IsU0FBUztDQUNULG1DQUEyQjtTQUEzQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsWUFBWTtDQUNaLFNBQVM7Q0FDVCxtQ0FBMkI7U0FBM0IsMkJBQTJCO0NBQzNCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFHQTtDQUNDLHVCQUF1QjtDQUN2QiwyQkFBMkI7Q0FDM0IsaUNBQWlDO0NBQ2pDLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLDZDQUE2QztDQUM3QyxzRkFBc0Y7Q0FDdEYsc0JBQXNCO0dBQ3BCLDZCQUE2QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLDJDQUFtQztVQUFuQyxtQ0FBbUM7RUFDbkMsc0ZBQXNGO0FBQ3hGOztBQUVBO0VBQ0UsS0FBSyxzRkFBc0YsQ0FBQztFQUM1RixLQUFLLHNGQUFzRixDQUFDO0VBQzVGLEtBQUssc0ZBQXNGLENBQUM7RUFDNUYsS0FBSyxzRkFBc0YsQ0FBQztFQUM1RixLQUFLLHNGQUFzRixDQUFDO0VBQzVGLEtBQUssc0ZBQXNGLENBQUM7RUFDNUYsS0FBSyxzRkFBc0YsQ0FBQztFQUM1RixLQUFLLHNGQUFzRixDQUFDO0VBQzVGLEtBQUssc0ZBQXNGLENBQUM7RUFDNUYsS0FBSyxzRkFBc0YsQ0FBQztFQUM1RixLQUFLLHNGQUFzRixDQUFDO0FBQzlGOztBQVpBO0VBQ0UsS0FBSyxzRkFBc0YsQ0FBQztFQUM1RixLQUFLLHNGQUFzRixDQUFDO0VBQzVGLEtBQUssc0ZBQXNGLENBQUM7RUFDNUYsS0FBSyxzRkFBc0YsQ0FBQztFQUM1RixLQUFLLHNGQUFzRixDQUFDO0VBQzVGLEtBQUssc0ZBQXNGLENBQUM7RUFDNUYsS0FBSyxzRkFBc0YsQ0FBQztFQUM1RixLQUFLLHNGQUFzRixDQUFDO0VBQzVGLEtBQUssc0ZBQXNGLENBQUM7RUFDNUYsS0FBSyxzRkFBc0YsQ0FBQztFQUM1RixLQUFLLHNGQUFzRixDQUFDO0FBQzlGOztBQU1BO0NBQ0M7RUFDQyxZQUFZO0NBQ2I7QUFDRCIsImZpbGUiOiJzcmMvYXBwL29wdGlvbi1idXR0b25zL29wdGlvbi1idXR0b25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLSBvcHRpb24gYnV0dG9ucyAtLSAqL1xyXG5cclxuLm9wdGlvbl9idXR0b25ze1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblx0Z3JpZC1jb2x1bW4tZ2FwOiA4JTtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym90dG9tOiAxMi41JTtcclxuXHRsZWZ0OiA1MC44JTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi5vcHRpb25fYnV0dG9ucyBhe1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czo4cHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOjhweDtcclxuXHRib3JkZXItcmFkaXVzOjk5OXB4O1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG5cdGNvbG9yOiNmZmZmZmY7XHJcblx0Zm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnLCBjdXJzaXZlO1xyXG5cdGZvbnQtc2l6ZToyM3B4O1xyXG5cdGZvbnQtd2VpZ2h0OjcwMDtcclxuXHRwYWRkaW5nOiAyNXB4IDBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHdpZHRoOiAxMzJweDtcclxuXHRoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbiNsZWZ0X2J1dHRvbntcclxuXHRib3gtc2hhZG93OiAwcHggNXB4IDE0cHggLTdweCBibGFjaztcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0OGQwZWQgMTAlLCAjMzY5OWJhIDEwMCUpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzY5YzBlMDtcclxufVxyXG5cclxuI2xlZnRfYnV0dG9uOmhvdmVye1xyXG5cdGJveC1zaGFkb3c6aW5zZXQgMHB4IDBweCAxNXB4IDNweCAjNmU5NDllO1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzY5OWJhIDEwJSwgIzQ4ZDBlZCAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMyZTQ2NmU7XHJcbn1cclxuXHJcbiNyaWdodF9idXR0b257XHJcblx0Ym94LXNoYWRvdzogMHB4IDVweCAxNHB4IC03cHggYmxhY2s7XHJcblx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNGE1NGNjIDUlLCAjMjQzMWM3IDEwMCUpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzRhNTRjYztcclxufVxyXG5cclxuI3JpZ2h0X2J1dHRvbjpob3ZlcntcclxuXHRib3gtc2hhZG93Omluc2V0IDBweCAwcHggMTVweCAzcHggIzRhNTU3NTtcclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzI0MzFjNyA1JSwgIzRhNTRjYyAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMyZTQ2NmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIC0tIG11bHRpcGxlIG9wdGlvbnMgYnV0dG9ucyAtLSovXHJcblxyXG4ubXVsdGlwbGVfb3B0aW9uX2J1dHRvbnN7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHR3aWR0aDogODQlO1xyXG5cdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuXHRncmlkLXJvdy1nYXA6IDQlO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRib3R0b206IDE2LjUlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi5idXR0b25zX2NvbnRhaW5lciB1bHtcclxuXHRoZWlnaHQ6IDI2MXB4O1xyXG5cdHdpZHRoOiAzMTBweDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0ei1pbmRleDogOTk5O1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0Ym90dG9tOiAxNTJweDtcclxufVxyXG5cclxuLmJ1dHRvbnNfY29udGFpbmVyIHVsIGxpe1xyXG5cdGhlaWdodDogNDRweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5tdWx0aXBsZV9vcHRpb25fYnV0dG9ucyBwe1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDEzcHggMHB4IDEzcHggMjJweDtcclxuXHRmb250LWZhbWlseTogJ0F1ZGlvd2lkZScsIGN1cnNpdmU7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRjb2xvcjogIzU3NTc1NztcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0Ym94LXNoYWRvdzogMXB4IDZweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDMwZGVnLCB3aGl0ZSA4MCUsICM0ZTViZjUgMjAlLCAjMzAzY2NiIDEwMCUpO1xyXG5cdHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiBpbmZpbml0ZTtcclxufVxyXG5cclxuLm11bHRpcGxlX29wdGlvbl9idXR0b25zIHA6aG92ZXJ7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IG15bW92ZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzMGRlZywgd2hpdGUgNzAlLCAjNGU1YmY1IDIwJSwgIzMwM2NjYiAxMDAlKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBteW1vdmUge1xyXG4gIDAlICB7YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHdoaXRlIDgwJSwgIzRlNWJmNSAyMCUsICMzMDNjY2IgMTAwJSk7fVxyXG4gIDEwJSB7YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHdoaXRlIDc5JSwgIzRlNWJmNSAyMCUsICMzMDNjY2IgMTAwJSk7fVxyXG4gIDIwJSB7YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHdoaXRlIDc4JSwgIzRlNWJmNSAyMCUsICMzMDNjY2IgMTAwJSk7fVxyXG4gIDMwJSB7YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHdoaXRlIDc3JSwgIzRlNWJmNSAyMCUsICMzMDNjY2IgMTAwJSk7fVxyXG4gIDQwJSB7YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHdoaXRlIDc2JSwgIzRlNWJmNSAyMCUsICMzMDNjY2IgMTAwJSk7fVxyXG4gIDUwJSB7YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHdoaXRlIDc1JSwgIzRlNWJmNSAyMCUsICMzMDNjY2IgMTAwJSk7fVxyXG4gIDYwJSB7YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHdoaXRlIDc0JSwgIzRlNWJmNSAyMCUsICMzMDNjY2IgMTAwJSk7fVxyXG4gIDcwJSB7YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHdoaXRlIDczJSwgIzRlNWJmNSAyMCUsICMzMDNjY2IgMTAwJSk7fVxyXG4gIDgwJSB7YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHdoaXRlIDcyJSwgIzRlNWJmNSAyMCUsICMzMDNjY2IgMTAwJSk7fVxyXG4gIDkwJSB7YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHdoaXRlIDcxJSwgIzRlNWJmNSAyMCUsICMzMDNjY2IgMTAwJSk7fVxyXG4gIDEwMCV7YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHdoaXRlIDcwJSwgIzRlNWJmNSAyMCUsICMzMDNjY2IgMTAwJSk7fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG5cdC5vcHRpb25fYnV0dG9uc3tcclxuXHRcdGJvdHRvbTogYXV0bztcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/option-buttons/option-buttons.component.html":
/*!**************************************************************!*\
  !*** ./src/app/option-buttons/option-buttons.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"option_buttons\">\n\t<a [routerLink]=\"['/page', obterNextYes()]\" id=\"left_button\">{{ obterYes() }}</a>\n\t<a [routerLink]=\"['/page', obterNextNo()]\" id=\"right_button\">{{ obterNo() }}</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/option-buttons/option-buttons.component.ts":
/*!************************************************************!*\
  !*** ./src/app/option-buttons/option-buttons.component.ts ***!
  \************************************************************/
/*! exports provided: OptionButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionButtonsComponent", function() { return OptionButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");




var OptionButtonsComponent = /** @class */ (function () {
    function OptionButtonsComponent(route, globalService) {
        this.route = route;
        this.globalService = globalService;
        this.id = '';
    }
    OptionButtonsComponent.prototype.obterPaginaPorId = function () {
        return this.globalService.obterPaginaPorId(this.id);
        //console.log(this.id);
    };
    OptionButtonsComponent.prototype.obterYes = function () {
        var yes = this.obterPaginaPorId().button1;
        //console.log(yes);
        return yes;
    };
    OptionButtonsComponent.prototype.obterNo = function () {
        var no = this.obterPaginaPorId().button2;
        //console.log(no);
        return no;
    };
    ///
    OptionButtonsComponent.prototype.obterNextYes = function () {
        var nextyes = this.obterPaginaPorId().nbuttonid1;
        //console.log(nextyes);
        return nextyes;
    };
    OptionButtonsComponent.prototype.obterNextNo = function () {
        var nextno = this.obterPaginaPorId().nbuttonid2;
        //console.log(nextno);
        return nextno;
    };
    OptionButtonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
        });
    };
    OptionButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-option-buttons',
            template: __webpack_require__(/*! ./option-buttons.component.html */ "./src/app/option-buttons/option-buttons.component.html"),
            styles: [__webpack_require__(/*! ./option-buttons.component.css */ "./src/app/option-buttons/option-buttons.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], OptionButtonsComponent);
    return OptionButtonsComponent;
}());



/***/ }),

/***/ "./src/app/option2-buttons/option2-buttons.component.css":
/*!***************************************************************!*\
  !*** ./src/app/option2-buttons/option2-buttons.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* -- multiple options buttons --*/\r\n\r\n.multiple_option_buttons{\r\n\tdisplay: grid;\r\n\twidth: 84%;\r\n\tgrid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n\tgrid-row-gap: 4%;\r\n\tposition: fixed;\r\n\tbottom: 16.5%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%);\r\n\t        transform: translateX(-50%);\r\n}\r\n\r\n.multiple_option_buttons a{\r\n\tbackground-color: white;\r\n\tpadding: 13px 0px 13px 22px;\r\n\tfont-family: 'Audiowide', cursive;\r\n\tfont-weight: 700;\r\n\tcolor: #575757;\r\n\tborder-radius: 8px;\r\n\tbox-shadow: 1px 6px 10px 0px rgba(0,0,0,0.15);\r\n\tbackground-image: -webkit-linear-gradient(30deg, white 85%, #4e5bf5 20%, #303ccb 100%);\r\n  transition: 0.3s all ease;\r\n}\r\n\r\n.multiple_option_buttons a:hover{\r\n\r\n  \r\n  box-shadow: 1px 6px 10px 0px rgba(0,0,0,0.05);\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n\t.multiple_option_buttons{\r\n\t\tgrid-row-gap: 3%;\r\n\t\tposition: fixed;\r\n\t\tbottom: -84vh;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9uMi1idXR0b25zL29wdGlvbjItYnV0dG9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQzs7QUFFbEM7Q0FDQyxhQUFhO0NBQ2IsVUFBVTtDQUNWLHVDQUF1QztDQUN2QyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGFBQWE7Q0FDYixTQUFTO0NBQ1QsbUNBQTJCO1NBQTNCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QiwyQkFBMkI7Q0FDM0IsaUNBQWlDO0NBQ2pDLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLDZDQUE2QztDQUM3QyxzRkFBc0Y7RUFDckYseUJBQXlCO0FBQzNCOztBQUVBOzs7RUFHRSw2Q0FBNkM7QUFDL0M7O0FBR0E7Q0FDQztFQUNDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtDQUNkO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9vcHRpb24yLWJ1dHRvbnMvb3B0aW9uMi1idXR0b25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLSBtdWx0aXBsZSBvcHRpb25zIGJ1dHRvbnMgLS0qL1xyXG5cclxuLm11bHRpcGxlX29wdGlvbl9idXR0b25ze1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0d2lkdGg6IDg0JTtcclxuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnI7XHJcblx0Z3JpZC1yb3ctZ2FwOiA0JTtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym90dG9tOiAxNi41JTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG4ubXVsdGlwbGVfb3B0aW9uX2J1dHRvbnMgYXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiAxM3B4IDBweCAxM3B4IDIycHg7XHJcblx0Zm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnLCBjdXJzaXZlO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Y29sb3I6ICM1NzU3NTc7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdGJveC1zaGFkb3c6IDFweCA2cHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzMGRlZywgd2hpdGUgODUlLCAjNGU1YmY1IDIwJSwgIzMwM2NjYiAxMDAlKTtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG59XHJcblxyXG4ubXVsdGlwbGVfb3B0aW9uX2J1dHRvbnMgYTpob3ZlcntcclxuXHJcbiAgXHJcbiAgYm94LXNoYWRvdzogMXB4IDZweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG5cdC5tdWx0aXBsZV9vcHRpb25fYnV0dG9uc3tcclxuXHRcdGdyaWQtcm93LWdhcDogMyU7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IC04NHZoO1xyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/option2-buttons/option2-buttons.component.html":
/*!****************************************************************!*\
  !*** ./src/app/option2-buttons/option2-buttons.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"multiple_option_buttons\">\n\t<a *ngFor=\"let option of obterOptions(id); let id=index\" [routerLink]=\"['/page', obterNextOptionsId(id)]\">{{ option }}</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/option2-buttons/option2-buttons.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/option2-buttons/option2-buttons.component.ts ***!
  \**************************************************************/
/*! exports provided: Option2ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option2ButtonsComponent", function() { return Option2ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");




var Option2ButtonsComponent = /** @class */ (function () {
    function Option2ButtonsComponent(route, globalService) {
        this.route = route;
        this.globalService = globalService;
        this.id = '';
    }
    Option2ButtonsComponent.prototype.obterPaginaPorId = function () {
        return this.globalService.obterPaginaPorId(this.id);
        //console.log(this.id);
    };
    Option2ButtonsComponent.prototype.obterOptions = function () {
        var options = [
            this.obterPaginaPorId().button1,
            this.obterPaginaPorId().button2,
            this.obterPaginaPorId().button3,
            this.obterPaginaPorId().button4,
            this.obterPaginaPorId().button5
        ];
        //console.log(options);
        return options;
    };
    Option2ButtonsComponent.prototype.obterNextOptionsId = function (optionindex) {
        var noptions = [
            this.obterPaginaPorId().nbuttonid1,
            this.obterPaginaPorId().nbuttonid2,
            this.obterPaginaPorId().nbuttonid3,
            this.obterPaginaPorId().nbuttonid4,
            this.obterPaginaPorId().nbuttonid5
        ];
        //console.log(noptions);
        return noptions[optionindex];
    };
    Option2ButtonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
        });
    };
    Option2ButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-option2-buttons',
            template: __webpack_require__(/*! ./option2-buttons.component.html */ "./src/app/option2-buttons/option2-buttons.component.html"),
            styles: [__webpack_require__(/*! ./option2-buttons.component.css */ "./src/app/option2-buttons/option2-buttons.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], Option2ButtonsComponent);
    return Option2ButtonsComponent;
}());

// https://angular.io/guide/router#route-parameters-in-the-activatedroute-service


/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n\tposition: fixed;\r\n\theight: 27%;\r\n\tdisplay: flex;\r\n\tflex-flow: column;\r\n\twidth: 100%;\r\n\ttop: 28.5%;\r\n}\r\n\r\napp-text{\r\n\twidth: 85%;\r\n\tdisplay: flex;\r\n\tflex-flow: column;\r\n\tposition: fixed;\r\n\ttop: 52%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n}\r\n\r\napp-text2{\r\n\tmargin: auto auto;\r\n\twidth: 85%;\r\n\tdisplay: flex;\r\n\tflex-flow: column;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n\tapp-top-icon{\r\n\t\tposition: fixed;\r\n\t\ttop: 18vh;\r\n\t\tleft: 50%;\r\n\t\t-webkit-transform: translateX(-50%);\r\n\t\ttransform: translateX(-50%);\r\n\t\theight: 90px;\r\n\t}\r\n\r\n\tapp-text{\r\n\t    margin: auto auto;\r\n\t    width: 85%;\r\n\t    display: flex;\r\n\t    flex-flow: column;\r\n\t    position: fixed;\r\n\t    top: 42vh;\r\n\t    left: 50%;\r\n\t    -webkit-transform: translateX(-50%);\r\n\t            transform: translateX(-50%);\r\n\t}\r\n\r\n\tapp-text2{\r\n\t    margin: auto auto;\r\n\t    width: 85%;\r\n\t    display: flex;\r\n\t    flex-flow: column;\r\n\t    position: fixed;\r\n\t    top: 34vh;\r\n\t    left: 50%;\r\n\t    -webkit-transform: translateX(-50%);\r\n\t            transform: translateX(-50%);\r\n\t}\r\n\r\n\tapp-option-buttons{\r\n\t\tposition: fixed;\r\n\t\tbottom: -73vh;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 500px) and (min-height: 700px) and (max-height: 820px){\r\napp-text2{\r\n\t    margin: auto auto;\r\n\t    width: 85%;\r\n\t    display: flex;\r\n\t    flex-flow: column;\r\n\t    position: fixed;\r\n\t    top: 37vh;\r\n\t    left: 50%;\r\n\t    -webkit-transform: translateX(-50%);\r\n\t            transform: translateX(-50%);\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixRQUFRO0NBQ1IsU0FBUztDQUNULHdDQUFnQztTQUFoQyxnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLGFBQWE7Q0FDYixpQkFBaUI7QUFDbEI7O0FBSUE7Q0FDQztFQUNDLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsWUFBWTtDQUNiOztDQUVBO0tBQ0ksaUJBQWlCO0tBQ2pCLFVBQVU7S0FDVixhQUFhO0tBQ2IsaUJBQWlCO0tBQ2pCLGVBQWU7S0FDZixTQUFTO0tBQ1QsU0FBUztLQUNULG1DQUEyQjthQUEzQiwyQkFBMkI7Q0FDL0I7O0NBRUE7S0FDSSxpQkFBaUI7S0FDakIsVUFBVTtLQUNWLGFBQWE7S0FDYixpQkFBaUI7S0FDakIsZUFBZTtLQUNmLFNBQVM7S0FDVCxTQUFTO0tBQ1QsbUNBQTJCO2FBQTNCLDJCQUEyQjtDQUMvQjs7Q0FFQTtFQUNDLGVBQWU7RUFDZixhQUFhO0NBQ2Q7QUFDRDs7QUFHQTtBQUNBO0tBQ0ssaUJBQWlCO0tBQ2pCLFVBQVU7S0FDVixhQUFhO0tBQ2IsaUJBQWlCO0tBQ2pCLGVBQWU7S0FDZixTQUFTO0tBQ1QsU0FBUztLQUNULG1DQUEyQjthQUEzQiwyQkFBMkI7Q0FDL0I7QUFDRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRoZWlnaHQ6IDI3JTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRvcDogMjguNSU7XHJcbn1cclxuXHJcbmFwcC10ZXh0e1xyXG5cdHdpZHRoOiA4NSU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiA1MiU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5hcHAtdGV4dDJ7XHJcblx0bWFyZ2luOiBhdXRvIGF1dG87XHJcblx0d2lkdGg6IDg1JTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuXHRhcHAtdG9wLWljb257XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDE4dmg7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRcdGhlaWdodDogOTBweDtcclxuXHR9XHJcblxyXG5cdGFwcC10ZXh0e1xyXG5cdCAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuXHQgICAgd2lkdGg6IDg1JTtcclxuXHQgICAgZGlzcGxheTogZmxleDtcclxuXHQgICAgZmxleC1mbG93OiBjb2x1bW47XHJcblx0ICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHQgICAgdG9wOiA0MnZoO1xyXG5cdCAgICBsZWZ0OiA1MCU7XHJcblx0ICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHR9XHJcblxyXG5cdGFwcC10ZXh0MntcclxuXHQgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcblx0ICAgIHdpZHRoOiA4NSU7XHJcblx0ICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdCAgICBwb3NpdGlvbjogZml4ZWQ7XHJcblx0ICAgIHRvcDogMzR2aDtcclxuXHQgICAgbGVmdDogNTAlO1xyXG5cdCAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0fVxyXG5cclxuXHRhcHAtb3B0aW9uLWJ1dHRvbnN7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IC03M3ZoO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIGFuZCAobWluLWhlaWdodDogNzAwcHgpIGFuZCAobWF4LWhlaWdodDogODIwcHgpe1xyXG5hcHAtdGV4dDJ7XHJcblx0ICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG5cdCAgICB3aWR0aDogODUlO1xyXG5cdCAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdCAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHQgICAgcG9zaXRpb246IGZpeGVkO1xyXG5cdCAgICB0b3A6IDM3dmg7XHJcblx0ICAgIGxlZnQ6IDUwJTtcclxuXHQgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/page.component.html":
/*!******************************************!*\
  !*** ./src/app/page/page.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-icon></app-top-icon>\n\n<div *ngIf=\"obterPageType()==1\">\n\t<app-text></app-text>\n\t<app-option-buttons></app-option-buttons>\n</div>\n\n<div *ngIf=\"obterPageType()==2\">\n\t<app-text2></app-text2>\n\t<app-option2-buttons></app-option2-buttons>\n</div>\n"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");




var PageComponent = /** @class */ (function () {
    function PageComponent(route, globalService) {
        this.route = route;
        this.globalService = globalService;
        this.id = '';
    }
    PageComponent.prototype.obterPaginaPorId = function () {
        return this.globalService.obterPaginaPorId(this.id);
        //console.log(this.id);
    };
    PageComponent.prototype.obterPageType = function () {
        var pagetype = this.obterPaginaPorId().pagetype;
        //console.log(pagetype);
        return pagetype;
    };
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
        });
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], PageComponent);
    return PageComponent;
}());

/*
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  obterPagina() {
        return this.globalService.page;
   }

  obterPageType() {
    return this.obterPagina()[0].pagetype;
  }

  ngOnInit() {
  }

}
*/


/***/ }),

/***/ "./src/app/route-animations.ts":
/*!*************************************!*\
  !*** ./src/app/route-animations.ts ***!
  \*************************************/
/*! exports provided: fader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fader", function() { return fader; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// Basic
/*
export const slider =
    trigger('routeAnimations', [
        transition('* => isLeft', slideTo('left') ),
        transition('* => isRight', slideTo('right') ),
        transition('isRight => *', slideTo('left') ),
        transition('isLeft => *', slideTo('right') ),
    ]);


    function slideTo(direction){
        const optional = { optional: true };
        return [
            query(':enter, :leave', [
                style({
                    position: 'fixed',
                    top: 0,
                    [direction]: 0,
                    width: '100%'
                })
            ], optional),
            query(':enter', [
                style({ [direction]: '-100%'})
            ]),
            group([
                query(':leave', [
                    animate('600ms ease', style({ [direction]: '100%'}))
                ], optional),
                query(':enter', [
                    animate('600ms ease', style({ [direction]: '0%'}))
                ])
            ]),
        ];
    }
*/
var fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
            }),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        ], { optional: true })
    ]),
]);


/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Settings Page -------------------*/\r\n\r\n/*-- settings grid --*/\r\n\r\n.settings_grid{\r\n\tposition: fixed;\r\n\ttop: 20%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%);\r\n\t        transform: translateX(-50%);\r\n\r\n\theight: 200px;\r\n\twidth: 85%;\r\n\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr 1fr;\r\n\tgrid-template-columns: 1fr 1fr 1fr;\r\n\tgrid-column-gap: 10%;\r\n\tgrid-row-gap: 13%;\r\n}\r\n\r\n.settings_grid div{\r\n\tdisplay: flex;\r\n\tflex-flow: column;\r\n\ttext-align: center;\r\n}\r\n\r\n.settings_grid div p{\r\n\tcolor: #000b8c;\r\n\tfont-weight: 700;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\tfont-size: 14px;\r\n\tpadding-top: 2px;\r\n}\r\n\r\n.settings_grid div img{\r\n\tmax-width: 85%;\r\n\tmargin: 0px auto;\r\n}\r\n\r\n/*-- info --*/\r\n\r\n.info{\r\n\tposition: fixed;\r\n\tbottom: 12.5%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%);\r\n\t        transform: translateX(-50%);\r\n\r\n\twidth: 84%;\r\n\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr 1fr 1fr;\r\n\tgrid-row-gap: 10px;\r\n\tpadding-top: 10px;\r\n\tborder-top: 1px solid #c5c5c5;\r\n}\r\n\r\n.info p{\r\n\tcolor: #545353;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.info p span{color: #000b8c; font-weight: 700;}\r\n\r\n#logo_settings{\r\n\tposition: fixed;\r\n\tbottom: 17%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n\theight: 125px;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n\t.settings_grid{\r\n\t\tposition: static;\r\n\t\t-webkit-transform: translateX(0%);\r\n\t\t        transform: translateX(0%);\r\n\t\tmargin: 140px auto auto auto;\r\n\t}\r\n\r\n\t#logo_settings{bottom: -86vh;}\r\n\r\n\t.info{bottom: -90vh;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3REFBd0Q7O0FBRXhELHNCQUFzQjs7QUFDdEI7Q0FDQyxlQUFlO0NBQ2YsUUFBUTtDQUNSLFNBQVM7Q0FDVCxtQ0FBMkI7U0FBM0IsMkJBQTJCOztDQUUzQixhQUFhO0NBQ2IsVUFBVTs7Q0FFVixhQUFhO0NBQ2IsMkJBQTJCO0NBQzNCLGtDQUFrQztDQUNsQyxvQkFBb0I7Q0FDcEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLHFDQUFxQztDQUNyQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFHQSxhQUFhOztBQUNiO0NBQ0MsZUFBZTtDQUNmLGFBQWE7Q0FDYixTQUFTO0NBQ1QsbUNBQTJCO1NBQTNCLDJCQUEyQjs7Q0FFM0IsVUFBVTs7Q0FFVixhQUFhO0NBQ2IsK0JBQStCO0NBQy9CLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsY0FBYztDQUNkLHFDQUFxQztDQUNyQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBLGFBQWEsY0FBYyxFQUFFLGdCQUFnQixDQUFDOztBQUU5QztDQUNDLGVBQWU7Q0FDZixXQUFXO0NBQ1gsU0FBUztDQUNULHdDQUFnQztTQUFoQyxnQ0FBZ0M7Q0FDaEMsYUFBYTtBQUNkOztBQVFBO0NBQ0M7RUFDQyxnQkFBZ0I7RUFDaEIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7Q0FDN0I7O0NBRUEsZUFBZSxhQUFhLENBQUM7O0NBRTdCLE1BQU0sYUFBYSxDQUFDO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLSBTZXR0aW5ncyBQYWdlIC0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLyotLSBzZXR0aW5ncyBncmlkIC0tKi9cclxuLnNldHRpbmdzX2dyaWR7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMjAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG5cdGhlaWdodDogMjAwcHg7XHJcblx0d2lkdGg6IDg1JTtcclxuXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuXHRncmlkLWNvbHVtbi1nYXA6IDEwJTtcclxuXHRncmlkLXJvdy1nYXA6IDEzJTtcclxufVxyXG5cclxuLnNldHRpbmdzX2dyaWQgZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2V0dGluZ3NfZ3JpZCBkaXYgcHtcclxuXHRjb2xvcjogIzAwMGI4YztcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi5zZXR0aW5nc19ncmlkIGRpdiBpbWd7XHJcblx0bWF4LXdpZHRoOiA4NSU7XHJcblx0bWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuXHJcbi8qLS0gaW5mbyAtLSovXHJcbi5pbmZve1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRib3R0b206IDEyLjUlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG5cdHdpZHRoOiA4NCU7XHJcblxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcclxuXHRncmlkLXJvdy1nYXA6IDEwcHg7XHJcblx0cGFkZGluZy10b3A6IDEwcHg7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNjNWM1YzU7XHJcbn1cclxuXHJcbi5pbmZvIHB7XHJcblx0Y29sb3I6ICM1NDUzNTM7XHJcblx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmluZm8gcCBzcGFue2NvbG9yOiAjMDAwYjhjOyBmb250LXdlaWdodDogNzAwO31cclxuXHJcbiNsb2dvX3NldHRpbmdze1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRib3R0b206IDE3JTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0aGVpZ2h0OiAxMjVweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG5cdC5zZXR0aW5nc19ncmlke1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcblx0XHRtYXJnaW46IDE0MHB4IGF1dG8gYXV0byBhdXRvO1xyXG5cdH1cclxuXHJcblx0I2xvZ29fc2V0dGluZ3N7Ym90dG9tOiAtODZ2aDt9XHJcblxyXG5cdC5pbmZve2JvdHRvbTogLTkwdmg7fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings_grid\">\n\t<div>\n\t\t<img src=\"assets/images/account.png\">\n\t\t<p>Acount</p>\n\t</div>\n\n\t<div>\n\t\t<img src=\"assets/images/share.png\">\n\t\t<p>Share</p>\n\t</div>\n\n\t<div>\n\t\t<img src=\"assets/images/rate.png\">\n\t\t<p>Rate</p>\n\t</div>\n\n\t<div>\n\t\t<img src=\"assets/images/help.png\">\n\t\t<p>Help</p>\n\t</div>\n\n\t<div>\n\t\t<img src=\"assets/images/web.png\">\n\t\t<p>Web</p>\n\t</div>\n\n\t<div>\n\t\t<img src=\"assets/images/about.png\">\n\t\t<p>About</p>\n\t</div>\n</div>\n\n\n<img src=\"assets/images/logo_small.png\" id=\"logo_settings\">\n\n\n<div class=\"info\">\n\t<p>Design and Code by <span>Nuno Costa</span></p>\n\t<p>Copyrights Reserved © 2019</p>\n\t<p>Caxias, Lisbon</p>\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/text/text.component.css":
/*!*****************************************!*\
  !*** ./src/app/text/text.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* -- text -- */\r\n\r\n\r\n\r\nh3{\r\n\tcolor: #545353;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\tfont-size: 23px;\r\n\tfont-weight: 500;\r\n\ttext-align: center;\r\n\tmargin: auto auto;\r\n\tline-height: 200%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGV4dC90ZXh0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTs7OztBQUlmO0NBQ0MsY0FBYztDQUNkLHFDQUFxQztDQUNyQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdGV4dC90ZXh0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLSB0ZXh0IC0tICovXHJcblxyXG5cclxuXHJcbmgze1xyXG5cdGNvbG9yOiAjNTQ1MzUzO1xyXG5cdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAyM3B4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbjogYXV0byBhdXRvO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/text/text.component.html":
/*!******************************************!*\
  !*** ./src/app/text/text.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <h3 class=\"text\">{{ obterText() }}</h3>\n"

/***/ }),

/***/ "./src/app/text/text.component.ts":
/*!****************************************!*\
  !*** ./src/app/text/text.component.ts ***!
  \****************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");




var TextComponent = /** @class */ (function () {
    function TextComponent(route, globalService) {
        this.route = route;
        this.globalService = globalService;
        this.id = '';
    }
    TextComponent.prototype.obterPaginaPorId = function () {
        return this.globalService.obterPaginaPorId(this.id);
        //console.log(this.id);
    };
    TextComponent.prototype.obterText = function () {
        var text = this.obterPaginaPorId().text;
        //console.log(text);
        return text;
    };
    TextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
        });
    };
    TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text',
            template: __webpack_require__(/*! ./text.component.html */ "./src/app/text/text.component.html"),
            styles: [__webpack_require__(/*! ./text.component.css */ "./src/app/text/text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], TextComponent);
    return TextComponent;
}());



/***/ }),

/***/ "./src/app/text2/text2.component.css":
/*!*******************************************!*\
  !*** ./src/app/text2/text2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* -- text -- */\r\n\r\n\r\nh3{\r\n\tcolor: #545353;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\tfont-size: 23px;\r\n\tfont-weight: 500;\r\n\ttext-align: center;\r\n\tmargin: auto auto;\r\n\tline-height: 200%;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 500px) {\r\n.text{font-size: 18px;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGV4dDIvdGV4dDIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOzs7QUFHZjtDQUNDLGNBQWM7Q0FDZCxxQ0FBcUM7Q0FDckMsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtBQUNsQjs7O0FBRUE7QUFDQSxNQUFNLGVBQWUsQ0FBQztBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RleHQyL3RleHQyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLSB0ZXh0IC0tICovXHJcblxyXG5cclxuaDN7XHJcblx0Y29sb3I6ICM1NDUzNTM7XHJcblx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDIzcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luOiBhdXRvIGF1dG87XHJcblx0bGluZS1oZWlnaHQ6IDIwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuLnRleHR7Zm9udC1zaXplOiAxOHB4O31cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/text2/text2.component.html":
/*!********************************************!*\
  !*** ./src/app/text2/text2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <h3 class=\"text\">{{ obterText() }}</h3>\n"

/***/ }),

/***/ "./src/app/text2/text2.component.ts":
/*!******************************************!*\
  !*** ./src/app/text2/text2.component.ts ***!
  \******************************************/
/*! exports provided: Text2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text2Component", function() { return Text2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");




var Text2Component = /** @class */ (function () {
    function Text2Component(route, globalService) {
        this.route = route;
        this.globalService = globalService;
        this.id = '';
    }
    Text2Component.prototype.obterPaginaPorId = function () {
        return this.globalService.obterPaginaPorId(this.id);
        //console.log(this.id);
    };
    Text2Component.prototype.obterText = function () {
        var text = this.obterPaginaPorId().text;
        //console.log(text);
        return text;
    };
    Text2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
        });
    };
    Text2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text2',
            template: __webpack_require__(/*! ./text2.component.html */ "./src/app/text2/text2.component.html"),
            styles: [__webpack_require__(/*! ./text2.component.css */ "./src/app/text2/text2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], Text2Component);
    return Text2Component;
}());



/***/ }),

/***/ "./src/app/top-icon/top-icon.component.css":
/*!*************************************************!*\
  !*** ./src/app/top-icon/top-icon.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* -- top icon -- */\r\n\r\n.top_icon{\r\n\tposition: fixed;\r\n\ttop: 20%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%);\r\n\t        transform: translateX(-50%);\r\n\r\n\theight: 90px;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n\t.top_icon{\r\n\tposition: static;\r\n\ttop: 0%;\r\n\tleft: 0%;\r\n\t-webkit-transform: translateX(0%);\r\n\ttransform: translateX(0%);\r\n\theight: 13vh;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWljb24vdG9wLWljb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7O0FBRW5CO0NBQ0MsZUFBZTtDQUNmLFFBQVE7Q0FDUixTQUFTO0NBQ1QsbUNBQTJCO1NBQTNCLDJCQUEyQjs7Q0FFM0IsWUFBWTtBQUNiOztBQUdBO0NBQ0M7Q0FDQSxnQkFBZ0I7Q0FDaEIsT0FBTztDQUNQLFFBQVE7Q0FDUixpQ0FBaUM7Q0FDakMseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvdG9wLWljb24vdG9wLWljb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tIHRvcCBpY29uIC0tICovXHJcblxyXG4udG9wX2ljb257XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMjAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG5cdGhlaWdodDogOTBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuXHQudG9wX2ljb257XHJcblx0cG9zaXRpb246IHN0YXRpYztcclxuXHR0b3A6IDAlO1xyXG5cdGxlZnQ6IDAlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG5cdGhlaWdodDogMTN2aDtcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/top-icon/top-icon.component.html":
/*!**************************************************!*\
  !*** ./src/app/top-icon/top-icon.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"assets/images/{{ obterTopIcon() }}\" class=\"top_icon\">"

/***/ }),

/***/ "./src/app/top-icon/top-icon.component.ts":
/*!************************************************!*\
  !*** ./src/app/top-icon/top-icon.component.ts ***!
  \************************************************/
/*! exports provided: TopIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopIconComponent", function() { return TopIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");




var TopIconComponent = /** @class */ (function () {
    function TopIconComponent(route, globalService) {
        this.route = route;
        this.globalService = globalService;
        this.id = '';
    }
    TopIconComponent.prototype.obterPaginaPorId = function () {
        return this.globalService.obterPaginaPorId(this.id);
        //console.log(this.id);
    };
    TopIconComponent.prototype.obterTopIcon = function () {
        var topicon = this.obterPaginaPorId().topicon;
        //console.log(topicon);
        return topicon;
    };
    TopIconComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
        });
    };
    TopIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-icon',
            template: __webpack_require__(/*! ./top-icon.component.html */ "./src/app/top-icon/top-icon.component.html"),
            styles: [__webpack_require__(/*! ./top-icon.component.css */ "./src/app/top-icon/top-icon.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], TopIconComponent);
    return TopIconComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nuno_\Documents\pcrepair\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map