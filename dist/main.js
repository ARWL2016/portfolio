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

/***/ "./src/animations.ts":
/*!***************************!*\
  !*** ./src/animations.ts ***!
  \***************************/
/*! exports provided: pageTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageTransition", function() { return pageTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// import { Component, Input } from '@angular/core';
var pageTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showPage', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => on', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('on => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(0, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ])
]);



/***/ }),

/***/ "./src/app/app-component/app.component.footer.scss":
/*!*********************************************************!*\
  !*** ./src/app/app-component/app.component.footer.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  display: flex;\n  display: -webkit-flex;\n  flex-grow: 0;\n  background-color: #222;\n  color: white;\n  min-height: 300px;\n  bottom: 0; }\n\n.footer-content-wrapper {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  font-weight: 300;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px;\n  line-height: 1.8em;\n  overflow: auto; }\n\n.footer-column {\n  padding: 20px 20px 20px 50px; }\n\n.footer-column:nth-child(1) {\n    width: 40%; }\n\n.footer-column:nth-child(2) {\n    width: 30%; }\n\n.footer-column:nth-child(3) {\n    width: 30%; }\n\n.footer-heading {\n  font-size: 0.9em;\n  font-family: \"Montserrat\", sans-serif; }\n\n.footer-text {\n  font-size: 0.9em;\n  margin-bottom: 10px; }\n\n.footer-link {\n  color: #2587ce;\n  text-decoration: none; }\n\n.footer-link:hover {\n    text-decoration: underline;\n    cursor: pointer; }\n\n.footer-link:hover {\n    text-decoration: none; }\n\n.footer-icon-link:hover {\n  text-decoration: none; }\n\n.footer-line {\n  color: #2587ce;\n  background-color: #2587ce;\n  height: 2px;\n  border: 0;\n  width: 50%;\n  text-align: left;\n  margin: 10px auto 10px 0; }\n\n@media (max-width: 930px) {\n  .footer-content-wrapper {\n    padding: 30px 10px 10px 10px; }\n  .footer-column {\n    padding: 10px; } }\n\n@media (max-width: 670px) {\n  .footer-column:nth-child(1) {\n    display: none; }\n  .footer-column:nth-child(2) {\n    width: 50%; }\n  .footer-column:nth-child(3) {\n    width: 50%; } }\n"

/***/ }),

/***/ "./src/app/app-component/app.component.header.scss":
/*!*********************************************************!*\
  !*** ./src/app/app-component/app.component.header.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: #222;\n  font-family: 'Montserrat', sans-serif;\n  min-height: 80px;\n  width: 100%;\n  padding: 15px; }\n\n.header-content {\n  width: 80%;\n  max-width: 1000px;\n  margin: 0 auto;\n  transition: width 300ms; }\n\n.titlebar {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 50px;\n  margin-top: 0px; }\n\n.titlebar-list {\n  display: flex;\n  display: -webkit-flex;\n  margin: 0;\n  flex-grow: 1;\n  align-items: center;\n  height: 50px;\n  justify-content: flex-end; }\n\n.titlebar-list-item {\n  list-style-type: none;\n  display: inline-block;\n  color: white;\n  margin-left: 20px;\n  margin-bottom: 4px;\n  padding: 10px; }\n\n.titlebar-list-item_selected {\n  border-bottom: 4px solid #2587ce;\n  margin-bottom: 0; }\n\n.titlebar-anchor {\n  text-decoration: none;\n  color: #FFF;\n  font-size: 0.85rem;\n  padding: 5px 0 5px 0; }\n\n@media screen and (max-width: 770px) {\n  .header-content {\n    width: 95%; }\n  .titlebar {\n    flex-direction: column;\n    align-items: center; }\n  .titlebar-list {\n    margin-top: 30px; }\n  .titlebar-list-item {\n    margin-left: 10px;\n    padding: 10px 20px; }\n  .header {\n    min-height: 120px; } }\n\n@media screen and (max-width: 400px) {\n  .header {\n    padding: 20px 10px 10px 10px; }\n  .header-content {\n    width: 100%; }\n  .titlebar-list {\n    margin-top: 25px; }\n  .titlebar-list-item {\n    padding: 10px 3px; } }\n"

/***/ }),

/***/ "./src/app/app-component/app.component.html":
/*!**************************************************!*\
  !*** ./src/app/app-component/app.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HEADER SECTION -->\r\n<header role=\"banner\"\r\n  class=\"header\"\r\n  id=\"header\">\r\n  <div class=\"header-content\">\r\n  <nav class=\"titlebar\" role=\"navigation\">\r\n    <!-- LOGO COMPONENT -->\r\n    <app-logo></app-logo>\r\n    <ul class=\"titlebar-list\">\r\n      <li class=\"titlebar-list-item\">\r\n        <a class=\"titlebar-anchor\" routerLink=\"/overview\" routerLinkActive=\"titlebar-list-item_selected\">OVERVIEW</a>\r\n      </li>\r\n      <li class=\"titlebar-list-item\">\r\n        <a class=\"titlebar-anchor\" routerLink=\"/portfolio\" routerLinkActive=\"titlebar-list-item_selected\">PORTFOLIO</a>\r\n      </li>\r\n      <li class=\"titlebar-list-item\">\r\n        <a class=\"titlebar-anchor\" routerLink=\"/skills\" routerLinkActive=\"titlebar-list-item_selected\">ABOUT&nbsp;ME</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  </div>\r\n</header>\r\n\r\n<!-- ROUTER OUTLET -->\r\n<main class=\"content\" role=\"main\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<!-- FOOTER SECTION -->\r\n<footer class=\"footer\">\r\n  <div class=\"footer-content-wrapper\">\r\n    <div class=\"footer-column footer-bio-wrapper\">\r\n      <h3 class=\"footer-heading\">ALISTAIR WILLIS</h3>\r\n      <p class=\"footer-text\">I'm a software developer who uses modern tools and frameworks to build responsive, modular web applications.</p>\r\n      <p class=\"footer-text\">Available for hire: March 2018.</p>\r\n    </div>\r\n    <div class=\"footer-column footer-contacts-wrapper\">\r\n      <h3 class=\"footer-heading\">EXTERNAL LINKS</h3>\r\n      <a class=\"footer-link\" target=\"_blank\" href=\"https://github.com/ARWL2016\">Github\r\n        <i class=\"footer-icon-link fa fa-github\" aria-hidden=\"true\"></i>\r\n      </a><br>\r\n      <a class=\"footer-link\" target=\"_blank\" href=\"https://app.pluralsight.com/profile/alistair-willis\">\r\n        Pluralsight\r\n      </a><br>\r\n      <a class=\"footer-link\" target=\"_blank\" href=\"https://www.codewars.com/users/ARWL2016\">\r\n        Codewars <img src=\"https://www.codewars.com/users/ARWL2016/badges/micro\">\r\n      </a>\r\n    </div>\r\n    <div class=\"footer-column footer-links-wrapper\">\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"scrollToTop()\">BACK TO TOP</h3>\r\n      <hr class=\"footer-line\">\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"navigateTo('/overview')\">OVERVIEW</h3>\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"navigateTo('/portfolio')\">PORTFOLIO</h3>\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"navigateTo('/skills')\">SKILLS</h3>\r\n    </div>\r\n  </div>\r\n</footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/app-component/app.component.scss":
/*!**************************************************!*\
  !*** ./src/app/app-component/app.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  min-height: 100vh; }\n\n.content {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-shrink: 0;\n  background-color: #FFF; }\n"

/***/ }),

/***/ "./src/app/app-component/app.component.ts":
/*!************************************************!*\
  !*** ./src/app/app-component/app.component.ts ***!
  \************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/project-data.service */ "./src/app/services/project-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, data) {
        this.router = router;
        this.data = data;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data.getProjectData();
    };
    AppComponent.prototype.navigateTo = function (page) {
        this.router.navigate([page]);
        this.scrollToTop();
    };
    AppComponent.prototype.scrollToTop = function () {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app-component/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app-component/app.component.scss"), __webpack_require__(/*! ./app.component.header.scss */ "./src/app/app-component/app.component.header.scss"), __webpack_require__(/*! ./app.component.footer.scss */ "./src/app/app-component/app.component.footer.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__["ProjectDataService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var app_app_component_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app-component/app.component */ "./src/app/app-component/app.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var app_services_project_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/project-data.service */ "./src/app/services/project-data.service.ts");
/* harmony import */ var app_email_email_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/email/email.service */ "./src/app/email/email.service.ts");
/* harmony import */ var app_services_ping_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/ping.service */ "./src/app/services/ping.service.ts");
/* harmony import */ var app_shared_logo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/logo.component */ "./src/app/shared/logo.component.ts");
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
                app_app_component_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _overview_overview_component__WEBPACK_IMPORTED_MODULE_7__["OverviewComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
                _email_email_component__WEBPACK_IMPORTED_MODULE_10__["EmailComponent"],
                app_shared_logo_component__WEBPACK_IMPORTED_MODULE_14__["LogoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'overview', component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_7__["OverviewComponent"] },
                    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"] },
                    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"] },
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                ])
            ],
            providers: [
                app_services_project_data_service__WEBPACK_IMPORTED_MODULE_11__["ProjectDataService"],
                app_email_email_service__WEBPACK_IMPORTED_MODULE_12__["EmailService"],
                app_services_ping_service__WEBPACK_IMPORTED_MODULE_13__["PingService"]
            ],
            bootstrap: [app_app_component_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/email/email.component.html":
/*!********************************************!*\
  !*** ./src/app/email/email.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"email-section\">\n  <form (ngSubmit)=\"sendEmail()\" [formGroup]=\"emailForm\">\n    <div class=\"form-heading-wrapper\">\n      <img src=\"../../assets/icons/email.png\" alt=\"email icon\">\n      <h2>Contact Me</h2>\n    </div>\n    <div class=\"form-input-wrapper\">\n      <label for=\"name\">Your name</label>\n      <input\n        id=\"name\"\n        type=\"text\"\n        name=\"name\"\n        formControlName=\"name\">\n    </div>\n    <div class=\"form-input-wrapper\">\n      <label for=\"email\">Your email</label>\n      <input\n        id=\"email\"\n        type=\"email\"\n        name=\"email\"\n        formControlName=\"email\">\n    </div>\n    <div class=\"textarea-wrapper\">\n      <label for=\"message\">Your message</label>\n      <textarea\n        id=\"message\"\n        name=\"message\"\n        formControlName=\"message\"></textarea>\n    </div>\n    <div class=\"validation-message\">\n      <i *ngIf=\"validationMessage\" class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i>\n      {{validationMessage}}\n    </div>\n    <button\n      type=\"submit\"\n      [disabled]=\"btnDisabled\">\n      <div class=\"spinner\" *ngIf=\"showLoader\"></div>\n      <i *ngIf=\"btnLabel=='Message Sent'\" class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>{{btnLabel}}\n    </button>\n  </form>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/email/email.component.scss":
/*!********************************************!*\
  !*** ./src/app/email/email.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  width: 20px;\n  height: 20px;\n  margin: 0 auto;\n  background-color: #333;\n  display: inline-block;\n  border-radius: 100%;\n  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n  animation: sk-scaleout 1.0s infinite ease-in-out; }\n\n@-webkit-keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n    opacity: 0; } }\n\n@keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0; } }\n\nsection.email-section {\n  background-color: #FFC857; }\n\nsection.email-section form {\n    margin: 0 auto;\n    padding: 50px 0;\n    max-width: 1000px;\n    width: 80%; }\n\nsection.email-section form .form-heading-wrapper {\n      display: flex;\n      display: -webkit-flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: left;\n      padding: 10px;\n      margin-bottom: 6px; }\n\nsection.email-section form h2 {\n      padding: 3px 0;\n      margin-left: 18px;\n      text-transform: uppercase;\n      font-family: \"Montserrat\", sans-serif;\n      font-size: 1.4em; }\n\nsection.email-section form label {\n      display: block;\n      color: black;\n      font-size: 0.9em;\n      font-weight: bold;\n      margin-bottom: 4px;\n      margin-left: 3px; }\n\nsection.email-section form .validation-message {\n      font-size: 0.9em;\n      margin-left: 10px;\n      min-height: 2em; }\n\nsection.email-section form .validation-message i {\n        color: red;\n        margin: 0 10px; }\n\nsection.email-section form button {\n      background-color: #FFF;\n      color: #222;\n      letter-spacing: 1px;\n      font-size: 0.9rem;\n      display: inline-block;\n      padding: 8px 12px 8px 12px;\n      border: 2px solid #2587ce;\n      border-radius: 3px;\n      margin-right: 5px;\n      margin-bottom: 5px;\n      font-weight: 500;\n      text-align: center;\n      transition: background-color 300ms;\n      margin: 10px;\n      min-width: 240px;\n      text-transform: uppercase;\n      font-weight: bold;\n      font-size: 0.8em;\n      height: 40px; }\n\nsection.email-section form button:hover {\n        cursor: pointer;\n        background-color: #2587ce; }\n\nsection.email-section form button:disabled {\n        cursor: no-drop; }\n\nsection.email-section form button i {\n        color: green;\n        font-size: 1.5em;\n        margin-right: 8px; }\n\nsection.email-section form .form-input-wrapper {\n      display: inline-block;\n      padding: 10px;\n      width: 50%; }\n\nsection.email-section form .form-input-wrapper input {\n        margin: 0;\n        width: 100%;\n        height: 3.2em;\n        padding: 15px;\n        font-size: 1em;\n        font-family: monospace; }\n\nsection.email-section form .form-input-wrapper:nth-child(3) {\n      float: right; }\n\nsection.email-section form .textarea-wrapper {\n      padding: 10px;\n      width: 100%; }\n\nsection.email-section form .textarea-wrapper textarea {\n        width: 100%;\n        min-height: 140px;\n        padding: 15px;\n        font-size: 1em;\n        font-family: monospace; }\n\n@media screen and (max-width: 600px) {\n  section.email-section form .form-input-wrapper {\n    display: block;\n    width: 100%;\n    float: none; }\n  .form-input-wrapper:nth-child(3) {\n    margin-bottom: 12px; } }\n"

/***/ }),

/***/ "./src/app/email/email.component.ts":
/*!******************************************!*\
  !*** ./src/app/email/email.component.ts ***!
  \******************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_email_email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/email/email.service */ "./src/app/email/email.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailComponent = /** @class */ (function () {
    function EmailComponent(emailService, formBuilder) {
        this.emailService = emailService;
        this.formBuilder = formBuilder;
        this.btnLabel = 'Send Message';
        this.btnDisabled = false;
        this.showLoader = false;
        this.createForm();
    }
    // set up reactive form
    EmailComponent.prototype.createForm = function () {
        this.emailForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.emailCtrl = this.emailForm.get('email');
        this.nameCtrl = this.emailForm.get('name');
        this.messageCtrl = this.emailForm.get('message');
    };
    EmailComponent.prototype.sendEmail = function () {
        var _this = this;
        var valid = this.validateForm();
        if (valid) {
            this.btnDisabled = true;
            this.btnLabel = '';
            this.showLoader = true;
            this.emailService.sendEmail(this.emailForm.value)
                .then(function (res) { return _this.handleResponse(res); })
                .catch(function (err) { return _this.handleError(err); });
        }
    };
    EmailComponent.prototype.validateForm = function () {
        this.validationMessage = '';
        if (this.emailCtrl.invalid) {
            this.validationMessage = 'Please include a valid email.';
            return false;
        }
        else if (!this.nameCtrl.value || !this.messageCtrl.value) {
            this.validationMessage = 'Please complete all form fields.';
            return false;
        }
        else {
            return true;
        }
    };
    EmailComponent.prototype.handleResponse = function (res) {
        this.showLoader = false;
        this.btnLabel = 'Message Sent';
        this.resetForm();
    };
    EmailComponent.prototype.handleError = function (err) {
        this.showLoader = false;
        this.validationMessage = 'Oops! Something went wrong.';
        this.btnLabel = 'Send';
    };
    EmailComponent.prototype.resetForm = function () {
        this.emailForm.setValue({ name: '', email: '', message: '' });
    };
    EmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.scss */ "./src/app/email/email.component.scss")]
        }),
        __metadata("design:paramtypes", [app_email_email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/email/email.service.ts":
/*!****************************************!*\
  !*** ./src/app/email/email.service.ts ***!
  \****************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
    }
    EmailService.prototype.sendEmail = function (email) {
        var url = 'https://formspree.io/alistairrwillis@gmail.com';
        return this.http.post(url, email)
            .toPromise();
    };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/overview/overview.component.html":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@showPage]=\"'on'\">\r\n\r\n  <!-- BANNER SECTION -->\r\n  <section class=\"banner-section\" >\r\n    <div class=\"banner-content\">\r\n      <h1 class=\"banner-header\">Front End Developer</h1>\r\n      <p class=\"banner-text\">HTML | CSS | JAVASCRIPT (ES6) | ANGULAR | JQUERY | NODE | AGILE</p>\r\n      <p>\r\n        <a class=\"banner-link\" href=\"https://github.com/ARWL2016\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n          <i class=\"banner-icon-link fa fa-github\" aria-hidden=\"true\" title=\"Open GitHub profile\"></i>\r\n        </a>\r\n        <a class=\"banner-link\" href=\"https://www.linkedin.com/in/alistair-willis-developer/\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n          <i class=\"banner-icon-link fa fa-linkedin\" aria-hidden=\"true\" title=\"Open LinkedIn profile\"></i>\r\n        </a>\r\n        <i (click)='scrollTo()' class=\"banner-icon-link fa fa-envelope\" aria-hidden=\"true\" title=\"Email me\"></i>\r\n        <a href=\"https://app.pluralsight.com/profile/alistair-willis\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n          <img class=\"ps-icon\" src=\"assets/icons/ps.jpg\" alt=\"pluralsight icon\" title=\"Open Pluralsight profile\">\r\n        </a>\r\n        <a class=\"banner-link\" href=\"/alistair-willis\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n          <img class=\"cv-icon\" src=\"assets/icons/cv.png\" alt=\"cv icon\" title=\"Open / download CV\">\r\n        </a>\r\n      </p>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- SKILLS SECTION -->\r\n  <section class=\"skills-section\">\r\n    <article class=\"skill-card\">\r\n      <i class=\"fa fa-laptop skill-icon\" aria-hidden=\"true\"></i>\r\n      <h3 class=\"skill-card-heading\">Fluid Design</h3>\r\n      <p class=\"skill-card-text\">\r\n        Using front end libraries such as Bootstrap and Foundation, as well as custom CSS written in a maintainable style with Sass,\r\n        I create web applications with responsive and intuitive user interfaces.\r\n      </p>\r\n    </article>\r\n    <article class=\"skill-card\">\r\n      <i class=\"fa fa-industry skill-icon\" aria-hidden=\"true\"></i>\r\n      <h3 class=\"skill-card-heading\">Modern Libraries</h3>\r\n      <p class=\"skill-card-text\">\r\n        As well as JavaScript and jQuery, I utilize modern, component-based libraries such as Angular, React and Vue to build modular web applications which are quick\r\n        to develop and highly performant.\r\n      </p>\r\n    </article>\r\n    <article class=\"skill-card\">\r\n      <i class=\"fa fa-server skill-icon\" aria-hidden=\"true\"></i>\r\n      <h3 class=\"skill-card-heading\">Full Stack Experience</h3>\r\n      <p class=\"skill-card-text\">\r\n        Using JavaScript based back end technologies such as Node, Express and MongoDB, I've built RESTful APIs and\r\n        authentication modules. I've also worked with MySQL, PHP and C#.\r\n      </p>\r\n    </article>\r\n  </section>\r\n\r\n<!-- PORTFOLIO SECTION -->\r\n  <section class=\"portfolio-section\">\r\n  <div class=\"portfolio-content\">\r\n    <div class=\"section-banner\">\r\n      <div class=\"section-heading-wrapper\">\r\n        <img class=\"project-icon\" src=\"../../assets/icons/webpage-128.png\">\r\n        <h2 class=\"section-heading\">FEATURED WEB APPLICATIONS</h2>\r\n      </div>\r\n      <p class=\"section-banner-text\">Some are my recent web apps are featured below. You can view all the projects,\r\n        search by language and framework, and view technical specs, on the <a (click)=\"navigateTo('/portfolio')\">PORTFOLIO</a> page.\r\n      </p>\r\n    </div>\r\n    <div class=\"projects\">\r\n\r\n      <article *ngFor=\"let project of projectData\" class=\"project\">\r\n        <div class=\"image-column\">\r\n          <a href={{project.website_link}} target=\"_blank\" rel=\"noopener noreferrer\">\r\n            <img src={{project.image_url}} class=\"project-image\" [ngStyle]=\"{'order': project.image_order}\" >\r\n          </a>\r\n        </div>\r\n        <div class=\"text-column\">\r\n          <div class=\"text-wrapper\">\r\n          <h3 class=\"project-heading\">{{project.name | uppercase }}</h3>\r\n          <p class=\"project-text\">{{project.summary}}</p>\r\n            <div class=\"project-links\">\r\n              <a class=\"project-link\" target=\"_blank\" href={{project.github_link}}><i class=\"project-link-icon fa fa-github\" aria-hidden=\"true\"></i>&nbsp;SOURCE&nbsp;CODE</a>\r\n              <a class=\"project-link\" target=\"_blank\" href={{project.website_link}}><i class=\"project-link-icon fa fa-external-link-square\" aria-hidden=\"true\"></i>&nbsp;VIEW&nbsp;WEBSITE</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </article>\r\n\r\n    </div>\r\n  </div>\r\n  </section>\r\n\r\n  <!-- EMAIL COMPONENT -->\r\n  <app-email id=\"contactForm\"></app-email>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/overview/overview.component.scss":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner-content {\n  max-width: 1000px;\n  margin: 0 auto; }\n\n.skills-section {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  max-width: 1000px;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 40px; }\n\n.portfolio-section {\n  width: 100%;\n  background-color: #f7f7f7;\n  overflow: hidden; }\n\n.portfolio-content {\n  max-width: 1000px;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 25px; }\n\n.portfolio-content:last-child {\n    margin-bottom: 100px; }\n\n@media (max-width: 1080px) {\n  .banner-content {\n    width: 95%; }\n  .skills-section {\n    flex-direction: column !important; }\n  .skill-card {\n    width: 100% !important;\n    margin: 0 !important; }\n  .portfolio-content {\n    width: 95%; } }\n\n.banner-section {\n  height: 600px;\n  background-color: #222;\n  background-image: url('splash-wide-clr.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  overflow: auto;\n  font-family: 'Montserrat', sans-serif;\n  padding: 30px; }\n\n.banner-content {\n  margin-top: 200px; }\n\n.banner-header {\n  margin-bottom: 16px;\n  padding: 5px;\n  padding-left: 10px;\n  letter-spacing: 2.5px;\n  font-size: 3.2rem;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1)); }\n\n.banner-text {\n  font-size: 1.1rem;\n  line-height: 30px;\n  color: #2587ce;\n  font-weight: bold;\n  letter-spacing: 1.5px; }\n\na.banner-link {\n  color: transparent; }\n\n.banner-icon-link {\n  font-size: 2em;\n  color: white;\n  padding: 15px 20px 15px 0; }\n\n.banner-icon-link:hover {\n    cursor: pointer; }\n\ni.fa.fa-linkedin::before {\n  padding: 3px 5px;\n  background-color: #0077b5;\n  border-radius: 2px; }\n\ni.fa.fa-envelope:before {\n  color: #2587ce; }\n\n.ps-icon {\n  width: 30px;\n  margin-bottom: -5px; }\n\n.cv-icon {\n  height: 26px;\n  margin-left: 18px;\n  margin-bottom: -3px; }\n\n.skill-card {\n  align-items: center;\n  display: flex;\n  display: -webkit-flex;\n  width: 33.3%;\n  flex-direction: column;\n  line-height: 2rem;\n  padding: 25px;\n  margin: 10px 15px;\n  transition: width 400ms ease-in; }\n\n.skill-icon {\n  font-size: 2rem;\n  margin-bottom: 5px; }\n\n.skill-card-heading {\n  margin-top: 3px;\n  margin-bottom: 10px;\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n  border-bottom: 3px solid #2587ce; }\n\n.skill-card-text {\n  text-align: center; }\n\n.section-banner {\n  margin-top: 80px;\n  padding: 30px;\n  background-color: white;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4); }\n\n.section-heading-wrapper {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n  margin-bottom: 30px; }\n\n.project-icon {\n  height: 36px; }\n\n.section-heading {\n  margin-left: 18px;\n  letter-spacing: 2px;\n  font-size: 1.5em;\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3px 0;\n  border-bottom: 3px solid #2587ce; }\n\n.section-banner-text {\n  line-height: 1.8em; }\n\n.section-banner-text a {\n    color: #2587ce;\n    text-decoration: none; }\n\n.section-banner-text a:hover {\n      text-decoration: underline;\n      cursor: pointer; }\n\n.project {\n  background-color: #fff;\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  margin-top: 40px;\n  width: 100%;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4); }\n\n.project:last-child {\n    margin-bottom: 40px; }\n\n.project-heading {\n  font-family: \"Montserrat\", sans-serif; }\n\n.image-column {\n  width: 310px;\n  float: left; }\n\n.text-column {\n  float: left; }\n\n.text-wrapper {\n  margin: 30px 30px 30px 0; }\n\n.project-image {\n  width: 250px;\n  margin: 30px;\n  border: 1px solid #222;\n  border-radius: 3px;\n  transition: all 250ms; }\n\n.project-text {\n  margin-top: 10px;\n  line-height: 2rem; }\n\n.project-links {\n  margin-top: 40px; }\n\n.project-link {\n  background-color: #FFF;\n  color: #222;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  display: inline-block;\n  padding: 8px 12px 8px 12px;\n  border: 2px solid #2587ce;\n  border-radius: 3px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  text-align: center;\n  transition: background-color 300ms;\n  text-decoration: none;\n  font-weight: 500;\n  text-align: center; }\n\n.project-link:hover {\n    cursor: pointer;\n    background-color: #2587ce; }\n\n.project-link-icon {\n  font-size: 1.2em; }\n\n@media (max-width: 1000px) {\n  .banner-content {\n    margin-top: 120px; }\n  .image-column {\n    width: 200px; }\n  .project-image {\n    width: 150px; } }\n\n@media (max-width: 670px) {\n  .section-banner {\n    margin-top: 10px; }\n  .banner-header {\n    font-size: 2em; }\n  .banner-text {\n    font-size: 1em; } }\n\n@media (max-width: 610px) {\n  .skills-section {\n    margin-bottom: 20px; }\n  .project {\n    margin-top: 30px; }\n  .project-image {\n    display: none; }\n  .image-column {\n    width: 0px; }\n  .text-wrapper {\n    margin: 30px 30px 30px 30px; }\n  .project-link {\n    width: 100%;\n    display: block;\n    margin: 12px auto; } }\n"

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_project_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/project-data.service */ "./src/app/services/project-data.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations */ "./src/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_ping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/ping.service */ "./src/app/services/ping.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(dataService, router, ping) {
        this.dataService = dataService;
        this.router = router;
        this.ping = ping;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.getProjectData();
    };
    OverviewComponent.prototype.getProjectData = function () {
        var _this = this;
        if (this.dataService.projectData) {
            this.projectData = this.dataService.projectData.filter(function (project) { return project.featured; });
        }
        else {
            this.dataService.getProjectData()
                .then(function (data) {
                _this.projectData = data.filter(function (project) { return project.featured; });
            });
        }
    };
    OverviewComponent.prototype.onWindowScroll = function () {
        if (!this.ping.pinged.primary && window.scrollY > 400) {
            this.ping.postPing('primary');
        }
    };
    OverviewComponent.prototype.scrollTo = function () {
        document.querySelector('#contactForm').scrollIntoView({ behavior: 'smooth' });
    };
    OverviewComponent.prototype.navigateTo = function (page) {
        this.router.navigate([page]);
        this.scrollToTop();
    };
    OverviewComponent.prototype.scrollToTop = function () {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OverviewComponent.prototype, "onWindowScroll", null);
    OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/overview/overview.component.scss")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["pageTransition"]]
        }),
        __metadata("design:paramtypes", [app_services_project_data_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            app_services_ping_service__WEBPACK_IMPORTED_MODULE_4__["PingService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" [@showPage]=\"'on'\">\r\n\r\n  <!-- BANNER SECTION -->\r\n  <section class=\"portfolio-banner\">\r\n    <div class=\"heading\">\r\n      <img class=\"project-icon\" src=\"../../assets/icons/webpage-128.png\">\r\n      <h2>PORTFOLIO</h2>\r\n    </div>\r\n    <p>This page contains information about and links to some of my recent web application projects.</p>\r\n    <p>More detailed technical information for each app is available on the Github README page.</p>\r\n    <div class=\"toggle\" (click)=\"toggleDetails()\">\r\n      <i *ngIf=\"!showDetails\" class=\"fa fa-caret-right\"></i>\r\n      <i *ngIf=\"showDetails\" class=\"fa fa-sort-down\"></i>\r\n      <p>Accessibility</p>\r\n    </div>\r\n\r\n    <ul *ngIf=\"showDetails\">\r\n      <li>\r\n          All projects are hosted on free dynos at Heroku. There may be an initial loading delay while the server wakes up.\r\n      </li>\r\n      <li>\r\n          Some projects have not been subject to full cross browser testing. A modern desktop browser is recommended.\r\n      </li>\r\n    </ul>\r\n\r\n  </section>\r\n\r\n  <!-- SEARCH SECTION -->\r\n  <section class=\"search-wrapper\" >\r\n    <form>\r\n      <label for=\"search\">SEARCH BY TECHNOLOGY</label>\r\n      <div class=\"input-wrapper\">\r\n        <input #searchInput\r\n          class=\"search-input\"\r\n          name=\"search\"\r\n          type=\"text\"\r\n          autocomplete=\"off\"\r\n          [formControl]=\"searchTerm\"\r\n          placeholder=\"e.g. angular\">\r\n        <i class=\"search-icon fa fa-search\" aria-hidden=\"true\"></i>\r\n      </div>\r\n      <p *ngIf=\"results !== 1\" class=\"search-result\">{{results}} results</p>\r\n      <p *ngIf=\"results === 1\" class=\"search-result\">{{results}} result</p>\r\n    </form>\r\n  </section>\r\n\r\n  <!-- PORTFOLIO SECTION -->\r\n  <section *ngIf=\"projectData\" class=\"portfolio-content\">\r\n\r\n    <article class=\"project-card\" *ngFor=\"let project of projectData\" [@showPage]=\"'on'\">\r\n      <h1 class=\"project-heading\">{{ project.name }}</h1>\r\n      <span class=\"project-stack-type\">\r\n          <i *ngIf=\"project.type.frontend\" title=\"front end\" class=\"fa fa-desktop\" aria-hidden=\"true\"></i>\r\n          <i *ngIf=\"project.type.server\" title=\"server\" class=\"fa fa-server\" aria-hidden=\"true\"></i>\r\n          <i *ngIf=\"project.type.database\" title=\"database\" class=\"fa fa-database\" aria-hidden=\"true\"></i>\r\n      </span>\r\n      <p class=\"project-tech\">{{ project.tech | uppercase }}</p>\r\n      <div class=\"project-columns\">\r\n        <div class=\"project-image-column\">\r\n          <a href={{project.website_link}} target=\"_blank\" rel=\"noopener noreferrer\">\r\n            <img src={{project.image_url}} class=\"project-image\" [ngStyle]=\"{'order': project.image_order}\" >\r\n          </a>\r\n          <div class=\"project-stat-wrapper\">\r\n            <p class=\"project-stat\">PAGE SIZE\r\n              <span class=\"project-stat-badge\" >{{ project.pingdom_page_size_kb }}kb</span>\r\n              <i class=\"tooltip fa fa-question-circle-o\" title=\"Data is raw size without browser caching\" aria-hidden=\"true\"></i>\r\n            </p>\r\n            <p class=\"project-stat\">LOAD TIME\r\n              <span class=\"project-stat-badge\">{{ project.pingdom_average_load_time }}s</span>\r\n              <i class=\"tooltip fa fa-question-circle-o\" title=\"Measured by Pingdom Website Speed Test. Average of four speeds measured from San Jose, New York, Stockholm and Melbourne.\" aria-hidden=\"true\"></i>\r\n            </p>\r\n            <p class=\"project-stat\">PAGE SPEED SCORE\r\n              <span class=\"project-stat-badge\">{{ project.google_page_speed_score }}%</span>\r\n              <i class=\"tooltip fa fa-question-circle-o\" title=\"Score is from Google Page Speed Insights (desktop).\" aria-hidden=\"true\"></i>\r\n            </p>\r\n            <p class=\"project-stat\">SECURITY GRADE\r\n                <span class=\"project-stat-badge\">{{ project.mozilla_security_grade }}</span>\r\n                <i class=\"tooltip fa fa-question-circle-o\" title=\"Security assessment is by Mozilla Observatory.\" aria-hidden=\"true\"></i>\r\n              </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-text-column\">\r\n          <p class=\"project-text\">{{ project.user_stories }}</p>\r\n          <ul class=\"project-list\">\r\n            <li class=\"project-list-item\" *ngFor=\"let highlight of project.highlights\">{{ highlight }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"project-links-wrapper\">\r\n        <a class=\"project-link\" target=\"_blank\" href={{project.github_link}}><i class=\"project-link-icon fa fa-github\" aria-hidden=\"true\"></i>&nbsp;SOURCE&nbsp;CODE</a>\r\n        <a class=\"project-link\" target=\"_blank\" href={{project.website_link}}><i class=\"project-link-icon fa fa-external-link-square\" aria-hidden=\"true\"></i>&nbsp;VIEW&nbsp;WEBSITE</a>\r\n      </div>\r\n\r\n    </article>\r\n  </section>\r\n\r\n</div>\r\n\r\n<img\r\n  *ngIf=\"showBackToTopIcon\"\r\n  (click)=\"scrollToTop()\"\r\n  [@showPage]=\"'on'\"\r\n  class=\"back-to-top-icon\"\r\n  src=\"../../assets/icons/up-arrow-64.png\">\r\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-wrapper {\n  background-color: #f7f7f7;\n  min-height: 95vh;\n  overflow: hidden; }\n\n.portfolio-banner,\n.portfolio-content,\n.search-wrapper {\n  max-width: 1000px;\n  width: 80%;\n  margin: 0 auto;\n  transition: width 300ms; }\n\n.portfolio-banner {\n  margin-top: 80px;\n  padding: 30px;\n  background-color: white;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n  line-height: 1.8em; }\n\n.portfolio-banner div.heading {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    margin-bottom: 30px; }\n\n.portfolio-banner div.heading img {\n      height: 36px; }\n\n.portfolio-banner div.heading h2 {\n      margin-left: 18px;\n      letter-spacing: 2px;\n      font-size: 1.5em;\n      font-family: \"Montserrat\", sans-serif;\n      padding: 3px 0;\n      border-bottom: 3px solid #2587ce; }\n\n.portfolio-banner div.toggle {\n    cursor: pointer; }\n\n.portfolio-banner div.toggle i {\n      float: left; }\n\n.portfolio-banner div.toggle i.fa-caret-right {\n      padding: 5px 10px 0 5px; }\n\n.portfolio-banner div.toggle i.fa-sort-down {\n      padding: 0px 7px 5px 5px; }\n\n.portfolio-banner div.toggle p:last-of-type {\n      margin-top: 10px;\n      font-weight: bold; }\n\n.portfolio-banner ul {\n    padding: 0 40px; }\n\n.portfolio-banner ul li {\n      list-style-type: dot; }\n\n.search-wrapper {\n  padding-top: 50px; }\n\n.search-wrapper label {\n    display: block;\n    font-size: 0.9em;\n    font-weight: bold;\n    letter-spacing: 0.1px;\n    padding: 5px 8px; }\n\n.search-wrapper .input-wrapper {\n    position: relative; }\n\n.search-wrapper .input-wrapper i.search-icon {\n      position: absolute;\n      top: 14px;\n      left: 12px;\n      font-size: 1.2em; }\n\n.search-wrapper .input-wrapper input {\n      height: 46px;\n      font-size: 1.2em;\n      border-radius: 10px;\n      padding: 10px;\n      padding-left: 44px;\n      width: 100%;\n      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n      border: 1px solid #2587ce;\n      transition: box-shadow 400ms; }\n\n.search-wrapper .input-wrapper input:focus {\n        box-shadow: 0 0 1px 1px #2587ce;\n        outline: none; }\n\n.search-result {\n  color: #444;\n  font-style: italic;\n  padding: 7px; }\n\n.project-card {\n  background-color: #fff;\n  border-radius: 5px;\n  margin-top: 50px;\n  padding: 30px;\n  width: 100%;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4); }\n\n.project-card:first-child {\n    margin-top: 30px; }\n\n.project-card:last-child {\n    margin-bottom: 100px; }\n\n.project-heading {\n  margin-bottom: 10px;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 2.2em;\n  color: #2587ce;\n  display: inline-block; }\n\n.project-stack-type {\n  float: right;\n  padding: 12px; }\n\n.project-stack-type i {\n    padding-left: 5px; }\n\n.project-tech {\n  font-size: 0.9em;\n  letter-spacing: 2px;\n  color: #444;\n  margin-bottom: 10px;\n  background-color: #FFC857;\n  padding: 8px;\n  border-radius: 3px; }\n\n.project-columns {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  margin: 20px 0 30px 0; }\n\n.project-image-column {\n  float: left; }\n\n.project-text-column {\n  float: left;\n  margin: 0 20px 0 20px; }\n\n.project-image {\n  width: 300px;\n  border-radius: 3px;\n  transition: width 300ms; }\n\n.project-text {\n  line-height: 1.8em;\n  margin-bottom: 8px; }\n\n.project-list {\n  line-height: 1.8em;\n  margin-left: 20px; }\n\n.project-list-item {\n  list-style-type: square; }\n\n.project-stat-wrapper {\n  background-color: #f7f7f7;\n  padding: 10px 15px 10px 15px;\n  margin-top: 20px;\n  border-radius: 3px; }\n\n.project-stat {\n  font-weight: bold;\n  font-size: 0.85em;\n  letter-spacing: 1.5px;\n  line-height: 2.2em; }\n\n.project-stat-badge {\n  background-color: #FFC857;\n  padding: 3px 8px 3px 8px;\n  border-radius: 10px;\n  color: black;\n  font-size: 0.8em;\n  text-align: right; }\n\n.tooltip {\n  font-size: 1em;\n  color: #73b6e6; }\n\n.tooltip:hover {\n    cursor: pointer; }\n\n.project-links-wrapper {\n  margin-left: 320px; }\n\n.project-link {\n  background-color: #FFF;\n  color: #222;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  display: inline-block;\n  padding: 8px 12px 8px 12px;\n  border: 2px solid #2587ce;\n  border-radius: 3px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  text-align: center;\n  transition: background-color 300ms;\n  text-decoration: none;\n  font-weight: 500; }\n\n.project-link:hover {\n    cursor: pointer;\n    background-color: #2587ce; }\n\n.project-link-icon {\n  font-size: 1.2em; }\n\n.back-to-top-icon {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  border-radius: 32px;\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);\n  transition: all 500ms; }\n\n.back-to-top-icon:hover {\n    cursor: pointer; }\n\n@media screen and (max-width: 930px) {\n  .portfolio-banner,\n  .portfolio-content,\n  .search-wrapper {\n    width: 95%; }\n  .project-image {\n    width: 200px; }\n  .project-links-wrapper {\n    margin-left: 220px; } }\n\n@media screen and (max-width: 595px) {\n  .search-wrapper {\n    padding: 20px 10px 0 10px; }\n    .search-wrapper .input-wrapper input {\n      width: 100%; }\n  .project-card {\n    padding: 25px;\n    margin-top: 10px; }\n  .project-stack-type {\n    display: none; }\n  .project-tech {\n    line-height: 1.4em; }\n  .project-image-column {\n    display: none; }\n  .project-links-wrapper {\n    margin-left: 0px; }\n  .project-link {\n    width: 100%;\n    display: block;\n    margin: 0;\n    margin-top: 10px; } }\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_project_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/project-data.service */ "./src/app/services/project-data.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations */ "./src/animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_ping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/ping.service */ "./src/app/services/ping.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(dataService, ping) {
        this.dataService = dataService;
        this.ping = ping;
        // project data
        this.projectData = [];
        // search
        this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        // UI props
        this.showBackToTopIcon = false;
        this.showDetails = false;
        this.createSearchListener();
    }
    Object.defineProperty(PortfolioComponent.prototype, "results", {
        get: function () {
            return this.projectData.length;
        },
        enumerable: true,
        configurable: true
    });
    PortfolioComponent.prototype.ngOnInit = function () {
        this.getData();
        this.pingProjects('primary');
    };
    PortfolioComponent.prototype.ngAfterViewInit = function () {
        this.searchInputRef.nativeElement.focus();
    };
    PortfolioComponent.prototype.getData = function () {
        var _this = this;
        if (this.dataService.projectData) {
            this.projectData = this.dataService.projectData;
        }
        else {
            this.dataService.getProjectData()
                .then(function (data) {
                _this.projectData = data;
            });
        }
    };
    PortfolioComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    PortfolioComponent.prototype.pingProjects = function (type) {
        if (!this.ping.pinged[type]) {
            this.ping.postPing(type);
        }
    };
    PortfolioComponent.prototype.createSearchListener = function () {
        var _this = this;
        this.searchTerm.valueChanges
            .subscribe(function (newValue) { return _this.search(); });
    };
    PortfolioComponent.prototype.onWindowScroll = function () {
        if (window.scrollY > 2000) {
            this.pingProjects('secondary');
        }
        if (window.scrollY > 1000) {
            this.showBackToTopIcon = true;
        }
        else {
            this.showBackToTopIcon = false;
        }
    };
    PortfolioComponent.prototype.scrollToTop = function () {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };
    PortfolioComponent.prototype.search = function () {
        var filter = this.searchTerm.value.trim().concat(',');
        this.projectData = this.transform(this.dataService.projectData, filter);
    };
    PortfolioComponent.prototype.transform = function (allProjects, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        if (filterBy) {
            return allProjects.filter(function (project) { return project.tags.toLocaleLowerCase().match(filterBy); });
        }
        return allProjects;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PortfolioComponent.prototype, "searchInputRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PortfolioComponent.prototype, "onWindowScroll", null);
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["pageTransition"]]
        }),
        __metadata("design:paramtypes", [app_services_project_data_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDataService"], app_services_ping_service__WEBPACK_IMPORTED_MODULE_4__["PingService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/services/ping.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/ping.service.ts ***!
  \******************************************/
/*! exports provided: PingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PingService", function() { return PingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var PingService = /** @class */ (function () {
    function PingService(http) {
        this.http = http;
        this.pinged = {
            primary: false,
            secondary: false
        };
    }
    PingService.prototype.postPing = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pinged[type] = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.post('/ping', { type: type }).toPromise()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log('Heroku request error');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PingService);
    return PingService;
}());



/***/ }),

/***/ "./src/app/services/project-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/project-data.service.ts ***!
  \**************************************************/
/*! exports provided: ProjectDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDataService", function() { return ProjectDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ProjectDataService = /** @class */ (function () {
    function ProjectDataService(http) {
        this.http = http;
    }
    ProjectDataService.prototype.getProjectData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.http.get('/data/projects').toPromise()];
                    case 1:
                        _a.projectData = _b.sent();
                        return [2 /*return*/, this.projectData];
                }
            });
        });
    };
    ProjectDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectDataService);
    return ProjectDataService;
}());



/***/ }),

/***/ "./src/app/shared/logo.component.scss":
/*!********************************************!*\
  !*** ./src/app/shared/logo.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-wrapper {\n  width: 280px;\n  min-width: 280px;\n  height: 45px;\n  position: relative;\n  display: inline-block;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold; }\n  .logo-wrapper img {\n    height: 45px;\n    width: auto;\n    outline: none; }\n  .logo-wrapper img:hover {\n      cursor: pointer; }\n  .logo-wrapper .logo-title {\n    font-size: 0.9em;\n    position: absolute;\n    top: 2px;\n    left: 85px;\n    padding: 0; }\n  .logo-wrapper .logo-name {\n    position: absolute;\n    top: 22px;\n    left: 100px;\n    font-size: 1.1em;\n    letter-spacing: 1.3px; }\n"

/***/ }),

/***/ "./src/app/shared/logo.component.ts":
/*!******************************************!*\
  !*** ./src/app/shared/logo.component.ts ***!
  \******************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logo',
            template: "\n    <div class=\"logo-wrapper\">\n      <img class=\"titlebar-logo\" src=\"../assets/logos/logo_blue-100.png\" routerLink=\"/overview\">\n      <div class=\"logo-title\">Front End Developer</div>\n      <div class=\"logo-name\">Alistair Willis</div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/shared/logo.component.scss")]
        })
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" [@showPage]=\"'on'\">\r\n  <div class=\"content-wrapper\">\r\n  <section class=\"skills-section\">\r\n\r\n    <div class=\"skills-heading-wrapper\">\r\n      <img class=\"skills-icon\" src=\"../../assets/icons/skills.png\">\r\n      <h2 class=\"skills-heading\">ABOUT ME</h2>\r\n    </div>\r\n    <p class=\"skills-text\">\r\n      I'm a front end developer with a special interest in modular JavaScript libraries and frameworks.\r\n      In my professional life, I work with AngularJS, but for personal projects, I have also used React, Vue and Angular 4.0.\r\n    </p>\r\n    <p class=\"skills-text\">\r\n      For styling, I've worked with with CSS frameworks like Bootstrap and AngularJS-Materialize, but I also enjoy the challenge of working in native CSS or Sass.\r\n      I’m also familiar with various tools used in modern development, such as Webpack for module bundling, npm for package management and build scripts and Git / GitHub for version control.\r\n      In my professional capacity, I've also used Sourcetree, Bitbucket and Jira to manage workflows.\r\n    </p>\r\n    <p class=\"skills-text\">\r\n      Front end development makes up about three quarters of my experience, but I’ve also done a fair amount of work in Node, especially using the Express framework and MongoDB. I’ve built RESTful APIs to support CRUD applications, and I’ve also implemented authentication modules both locally and using OAuth. I have some experience creating databases with MySQL and writing SQL queries.\r\n    </p>\r\n    <p class=\"skills-text\">\r\n      As a developer, I write code which is clean and concise yet readable, explicit and easy to maintain, making use of any language features that improve code clarity. I particularly value the new features of ES6, the type-checking capability of TypeScript and improved code structure made possible by using Sass.\r\n    </p>\r\n    <p class=\"skills-text\">\r\n      The table below shows the key technologies that I've professionally or in the apps featured on this site. Items in <b>bold</b> represent\r\n      core proficiencies.\r\n    </p>\r\n\r\n    <table class=\"skills-table\">\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Languages</td>\r\n        <td class=\"skills-table-cell\"><b>HTML, CSS, JavaScript (ES6)</b>, TypeScript, SQL</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">CSS Frameworks / Preprocessors</td>\r\n        <td class=\"skills-table-cell\"><b>Sass</b>, Less, Bootstrap, AngularJS-Materialize</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Front End</td>\r\n        <td class=\"skills-table-cell\"><b>Angular, AngularJS, jQuery</b>, Vue.js, React</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Server Side</td>\r\n        <td class=\"skills-table-cell\"><b>Node, Express</b></td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Data Layer</td>\r\n        <td class=\"skills-table-cell\"><b>MongoDB, Mongoose</b>, MySQL</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Testing</td>\r\n        <td class=\"skills-table-cell\"><b>Jasmine</b>, Mocha, Chai, Supertest</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Build Tools</td>\r\n        <td class=\"skills-table-cell\"><b>NPM Scripts</b>, Bower, Webpack</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n          <td class=\"skills-table-cell\">Version Control</td>\r\n          <td class=\"skills-table-cell\"><b>Git, Github, Bitbucket, Sourcetree</b></td>\r\n        </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Hosting</td>\r\n        <td class=\"skills-table-cell\">Heroku, MLab</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Tools</td>\r\n        <td class=\"skills-table-cell\"><b>Visual Studio Code, PHPStorm, Powershell, Chrome DevTools</b>, Postman, Robomongo, MySQL Workbench</td>\r\n      </tr>\r\n    </table>\r\n\r\n    <div class=\"skills-heading-wrapper\">\r\n        <img class=\"skills-icon\" src=\"../../assets/icons/studying.png\">\r\n        <h2 class=\"skills-heading\">LEARNING</h2>\r\n    </div>\r\n    <p class=\"skills-text\">\r\n      I make heavy use of Pluralsight to upgrade my skills and learn new techniques.\r\n      You can view skills evaluations for JavaScript, Node and other technologies,\r\n      and view a list of completed courses, on the <a class=\"text-link\" href=\"https://app.pluralsight.com/profile/alistair-willis\" target=\"_blank\">profile page.</a>\r\n    </p>\r\n    <p class=\"skills-text\">For practicing algorithms and sharpening problem solving skills\r\n      I use the Codewars site. You can see my ranking for Javascript, Java and C# on the\r\n      <a class=\"text-link\" href=\"https://www.codewars.com/users/ARWL2016\" target=\"_blank\">profile page</a> and view solutions as <a class=\"text-link\" href=\"https://gist.github.com/ARWL2016\" target=\"blank\">Github gists</a>.\r\n    </p>\r\n\r\n    <span class=\"cv-link\">\r\n      <img src=\"../../assets/icons/pdf-64.png\">\r\n      <a href=\"/alistair-willis\" target=\"_blank\" rel=\"noopener noreferrer\">View my full CV</a>\r\n    </span>\r\n\r\n  </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/skills/skills.component.scss":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-wrapper {\n  background-color: #f7f7f7; }\n\n.content-wrapper {\n  max-width: 1000px;\n  margin: 0 auto;\n  background-color: white;\n  padding: 20px; }\n\n.skills-section {\n  max-width: 800px;\n  margin: 0 auto;\n  margin-top: 100px;\n  margin-bottom: 100px; }\n\n.skills-heading-wrapper {\n  margin: 50px 0 30px 0;\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left; }\n\n.skills-icon {\n  height: 36px; }\n\n.skills-heading {\n  margin-left: 18px;\n  font-family: \"Montserrat\", sans-serif; }\n\n.skills-text {\n  margin-bottom: 20px;\n  line-height: 1.8em; }\n\n.skills-text:last-child {\n    margin-bottom: 50px; }\n\n.text-link {\n  color: #2587ce;\n  text-decoration: none; }\n\n.text-link:hover {\n    text-decoration: underline;\n    cursor: pointer; }\n\n.skills-table {\n  border: 1px solid #2587ce;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n  border-collapse: collapse;\n  margin-bottom: 20px; }\n\n.skills-table-cell {\n  padding: 10px;\n  line-height: 1.5em;\n  font-size: 1.1em; }\n\n.skills-table-cell:first-child {\n  color: white;\n  font-weight: bold;\n  background-color: #2587ce;\n  border: 1px solid #0e324c; }\n\n.skills-table-cell:nth-child(2) {\n  border: 1px solid #555; }\n\n.cv-link img {\n  height: 1.5em; }\n\n.cv-link a {\n  color: #2587ce;\n  text-decoration: none;\n  text-transform: uppercase; }\n\n.cv-link a:hover {\n    text-decoration: underline; }\n\n@media (max-width: 800px) {\n  .skills-section {\n    width: 90%;\n    margin-top: 30px; }\n  .skills-heading-wrapper {\n    margin-top: 30px; } }\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations */ "./src/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/skills/skills.component.scss")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["pageTransition"]]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alistair\Documents\GitHub\Projects\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map