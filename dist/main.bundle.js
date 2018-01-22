webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

// import { Component, Input } from '@angular/core';
var pageTransition = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('showPage', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('on', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0)' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('void => on', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in')
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('on => void', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }))
    ])
]);

//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../../../../src/app/app-component/app.component.footer.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  background-color: #222;\n  color: white;\n  min-height: 300px;\n  bottom: 0; }\n\n.footer-content-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  font-weight: 300;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px;\n  line-height: 1.8em;\n  overflow: auto; }\n\n.footer-column {\n  padding: 20px 20px 20px 50px; }\n  .footer-column:nth-child(1) {\n    width: 40%; }\n  .footer-column:nth-child(2) {\n    width: 30%; }\n  .footer-column:nth-child(3) {\n    width: 30%; }\n\n.footer-heading {\n  font-size: 0.9em;\n  font-family: \"Montserrat\", sans-serif; }\n\n.footer-text {\n  font-size: 0.9em;\n  margin-bottom: 10px; }\n\n.footer-link {\n  color: #2587ce;\n  text-decoration: none; }\n  .footer-link:hover {\n    text-decoration: underline;\n    cursor: pointer; }\n  .footer-link:hover {\n    text-decoration: none; }\n\n.footer-icon-link:hover {\n  text-decoration: none; }\n\n.footer-line {\n  color: #2587ce;\n  background-color: #2587ce;\n  height: 2px;\n  border: 0;\n  width: 50%;\n  text-align: left;\n  margin: 10px auto 10px 0; }\n\n@media (max-width: 930px) {\n  .footer-content-wrapper {\n    padding: 30px 10px 10px 10px; }\n  .footer-column {\n    padding: 10px; } }\n\n@media (max-width: 670px) {\n  .footer-column:nth-child(1) {\n    display: none; }\n  .footer-column:nth-child(2) {\n    width: 50%; }\n  .footer-column:nth-child(3) {\n    width: 50%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-component/app.component.header.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  background-color: #222;\n  font-family: 'Montserrat', sans-serif;\n  min-height: 80px;\n  width: 100%;\n  padding: 15px; }\n\n.header-content {\n  width: 80%;\n  max-width: 1000px;\n  margin: 0 auto;\n  transition: width 300ms; }\n\n.titlebar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 50px;\n  margin-top: 0px; }\n\n.titlebar-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 50px;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.titlebar-list-item {\n  list-style-type: none;\n  display: inline-block;\n  color: white;\n  margin-left: 20px;\n  margin-bottom: 4px;\n  padding: 10px; }\n\n.titlebar-list-item_selected {\n  border-bottom: 4px solid #2587ce;\n  margin-bottom: 0; }\n\n.titlebar-anchor {\n  text-decoration: none;\n  color: #FFF;\n  font-size: 0.85rem;\n  padding: 5px 0 5px 0; }\n\n@media screen and (max-width: 770px) {\n  .header-content {\n    width: 95%; }\n  .titlebar {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .titlebar-list {\n    margin-top: 30px; }\n  .titlebar-list-item {\n    margin-left: 10px;\n    padding: 10px 20px; }\n  .header {\n    min-height: 120px; } }\n\n@media screen and (max-width: 400px) {\n  .header {\n    padding: 20px 10px 10px 10px; }\n  .header-content {\n    width: 100%; }\n  .titlebar-list {\n    margin-top: 25px; }\n  .titlebar-list-item {\n    padding: 10px 3px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-component/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- HEADER SECTION -->\r\n<header\r\n  class=\"header\"\r\n  id=\"header\">\r\n  <div class=\"header-content\">\r\n  <nav class=\"titlebar\">\r\n    <!-- LOGO COMPONENT -->\r\n    <app-logo></app-logo>\r\n    <ul class=\"titlebar-list\">\r\n      <li class=\"titlebar-list-item\">\r\n        <a class=\"titlebar-anchor\" routerLink=\"/overview\" routerLinkActive=\"titlebar-list-item_selected\">OVERVIEW</a>\r\n      </li>\r\n      <li class=\"titlebar-list-item\">\r\n        <a class=\"titlebar-anchor\" routerLink=\"/portfolio\" routerLinkActive=\"titlebar-list-item_selected\">PORTFOLIO</a>\r\n      </li>\r\n      <li class=\"titlebar-list-item\">\r\n        <a class=\"titlebar-anchor\" routerLink=\"/skills\" routerLinkActive=\"titlebar-list-item_selected\">ABOUT&nbsp;ME</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  </div>\r\n</header>\r\n\r\n<!-- ROUTER OUTLET -->\r\n<div class=\"content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<!-- FOOTER SECTION -->\r\n<footer class=\"footer\">\r\n  <div class=\"footer-content-wrapper\">\r\n    <div class=\"footer-column footer-bio-wrapper\">\r\n      <h3 class=\"footer-heading\">ALISTAIR WILLIS</h3>\r\n      <p class=\"footer-text\">I'm a software developer who uses modern tools and frameworks to build responsive, modular web applications.</p>\r\n      <p class=\"footer-text\">Available for hire: March 2018.</p>\r\n    </div>\r\n    <div class=\"footer-column footer-contacts-wrapper\">\r\n      <h3 class=\"footer-heading\">EXTERNAL LINKS</h3>\r\n      <a class=\"footer-link\" target=\"_blank\" href=\"https://github.com/ARWL2016\">Github\r\n        <i class=\"footer-icon-link fa fa-github\" aria-hidden=\"true\"></i>\r\n      </a><br>\r\n      <a class=\"footer-link\" target=\"_blank\" href=\"https://app.pluralsight.com/profile/alistair-willis\">\r\n        Pluralsight\r\n      </a><br>\r\n      <a class=\"footer-link\" target=\"_blank\" href=\"https://www.codewars.com/users/ARWL2016\">\r\n        Codewars <img src=\"https://www.codewars.com/users/ARWL2016/badges/micro\">\r\n      </a>\r\n    </div>\r\n    <div class=\"footer-column footer-links-wrapper\">\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"scrollToTop()\">BACK TO TOP</h3>\r\n      <hr class=\"footer-line\">\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"navigateTo('/overview')\">OVERVIEW</h3>\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"navigateTo('/portfolio')\">PORTFOLIO</h3>\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"navigateTo('/skills')\">SKILLS</h3>\r\n    </div>\r\n  </div>\r\n</footer>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app-component/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  min-height: 100vh; }\n\n.content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  background-color: #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-component/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_data_service__ = __webpack_require__("../../../../../src/app/services/project-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
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
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app-component/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-component/app.component.scss"), __webpack_require__("../../../../../src/app/app-component/app.component.header.scss"), __webpack_require__("../../../../../src/app/app-component/app.component.footer.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_project_data_service__["a" /* ProjectDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_project_data_service__["a" /* ProjectDataService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_app_component_app_component__ = __webpack_require__("../../../../../src/app/app-component/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__overview_overview_component__ = __webpack_require__("../../../../../src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__email_email_component__ = __webpack_require__("../../../../../src/app/email/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_services_project_data_service__ = __webpack_require__("../../../../../src/app/services/project-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_email_email_service__ = __webpack_require__("../../../../../src/app/email/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_services_ping_service__ = __webpack_require__("../../../../../src/app/services/ping.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_shared_logo_component__ = __webpack_require__("../../../../../src/app/shared/logo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6_app_app_component_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__overview_overview_component__["a" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_8__portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_9__skills_skills_component__["a" /* SkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__email_email_component__["a" /* EmailComponent */],
            __WEBPACK_IMPORTED_MODULE_14_app_shared_logo_component__["a" /* LogoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot([
                { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_7__overview_overview_component__["a" /* OverviewComponent */] },
                { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_8__portfolio_portfolio_component__["a" /* PortfolioComponent */] },
                { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_9__skills_skills_component__["a" /* SkillsComponent */] },
                { path: '', redirectTo: 'overview', pathMatch: 'full' },
            ])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11_app_services_project_data_service__["a" /* ProjectDataService */],
            __WEBPACK_IMPORTED_MODULE_12_app_email_email_service__["a" /* EmailService */],
            __WEBPACK_IMPORTED_MODULE_13_app_services_ping_service__["a" /* PingService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6_app_app_component_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/email/email.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"email-section\">\n  <form (ngSubmit)=\"sendEmail()\" [formGroup]=\"emailForm\">\n    <div class=\"form-heading-wrapper\">\n      <img src=\"../../assets/icons/email.png\" alt=\"email icon\">\n      <h2>Contact Me</h2>\n    </div>\n    <div class=\"form-input-wrapper\">\n      <label for=\"name\">Your name</label>\n      <input\n        id=\"name\"\n        type=\"text\"\n        name=\"name\"\n        formControlName=\"name\">\n    </div>\n    <div class=\"form-input-wrapper\">\n      <label for=\"email\">Your email</label>\n      <input\n        id=\"email\"\n        type=\"email\"\n        name=\"email\"\n        formControlName=\"email\">\n    </div>\n    <div class=\"textarea-wrapper\">\n      <label for=\"message\">Your message</label>\n      <textarea\n        id=\"message\"\n        name=\"message\"\n        formControlName=\"message\"></textarea>\n    </div>\n    <div class=\"validation-message\">\n      <i *ngIf=\"validationMessage\" class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i>\n      {{validationMessage}}\n    </div>\n    <button\n      type=\"submit\"\n      [disabled]=\"btnDisabled\">\n      <div class=\"spinner\" *ngIf=\"showLoader\"></div>\n      <i *ngIf=\"btnLabel=='Message Sent'\" class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>{{btnLabel}}\n    </button>\n  </form>\n</section>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/email/email.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\n  width: 20px;\n  height: 20px;\n  margin: 0 auto;\n  background-color: #333;\n  display: inline-block;\n  border-radius: 100%;\n  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n  animation: sk-scaleout 1.0s infinite ease-in-out; }\n\n@-webkit-keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n    opacity: 0; } }\n\n@keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0; } }\n\nsection.email-section {\n  background-color: #FFC857; }\n  section.email-section form {\n    margin: 0 auto;\n    padding: 50px 0;\n    max-width: 1000px;\n    width: 80%; }\n    section.email-section form .form-heading-wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: left;\n          -ms-flex-pack: left;\n              justify-content: left;\n      padding: 10px;\n      margin-bottom: 6px; }\n    section.email-section form h2 {\n      padding: 3px 0;\n      margin-left: 18px;\n      text-transform: uppercase;\n      font-family: \"Montserrat\", sans-serif;\n      font-size: 1.4em; }\n    section.email-section form label {\n      display: block;\n      color: black;\n      font-size: 0.9em;\n      font-weight: bold;\n      margin-bottom: 4px;\n      margin-left: 3px; }\n    section.email-section form .validation-message {\n      font-size: 0.9em;\n      margin-left: 10px;\n      min-height: 2em; }\n      section.email-section form .validation-message i {\n        color: red;\n        margin: 0 10px; }\n    section.email-section form button {\n      background-color: #FFF;\n      color: #222;\n      letter-spacing: 1px;\n      font-size: 0.9rem;\n      display: inline-block;\n      padding: 8px 12px 8px 12px;\n      border: 2px solid #2587ce;\n      border-radius: 3px;\n      margin-right: 5px;\n      margin-bottom: 5px;\n      font-weight: 500;\n      text-align: center;\n      transition: background-color 300ms;\n      margin: 10px;\n      min-width: 240px;\n      text-transform: uppercase;\n      font-weight: bold;\n      font-size: 0.8em;\n      height: 40px; }\n      section.email-section form button:hover {\n        cursor: pointer;\n        background-color: #2587ce; }\n      section.email-section form button:disabled {\n        cursor: no-drop; }\n      section.email-section form button i {\n        color: green;\n        font-size: 1.5em;\n        margin-right: 8px; }\n    section.email-section form .form-input-wrapper {\n      display: inline-block;\n      padding: 10px;\n      width: 50%; }\n      section.email-section form .form-input-wrapper input {\n        margin: 0;\n        width: 100%;\n        height: 3.2em;\n        padding: 15px;\n        font-size: 1em;\n        font-family: monospace; }\n    section.email-section form .form-input-wrapper:nth-child(3) {\n      float: right; }\n    section.email-section form .textarea-wrapper {\n      padding: 10px;\n      width: 100%; }\n      section.email-section form .textarea-wrapper textarea {\n        width: 100%;\n        min-height: 140px;\n        padding: 15px;\n        font-size: 1em;\n        font-family: monospace; }\n\n@media screen and (max-width: 600px) {\n  section.email-section form .form-input-wrapper {\n    display: block;\n    width: 100%;\n    float: none; }\n  .form-input-wrapper:nth-child(3) {\n    margin-bottom: 12px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_email_email_service__ = __webpack_require__("../../../../../src/app/email/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailComponent = (function () {
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
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].email]],
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]],
            message: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]]
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
    return EmailComponent;
}());
EmailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-email',
        template: __webpack_require__("../../../../../src/app/email/email.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email/email.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_email_email_service__["a" /* EmailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_email_email_service__["a" /* EmailService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], EmailComponent);

var _a, _b;
//# sourceMappingURL=email.component.js.map

/***/ }),

/***/ "../../../../../src/app/email/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = (function () {
    function EmailService(http) {
        this.http = http;
    }
    EmailService.prototype.sendEmail = function (email) {
        var url = 'https://formspree.io/alistairrwillis@gmail.com';
        return this.http.post(url, email)
            .toPromise();
    };
    return EmailService;
}());
EmailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], EmailService);

var _a;
//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@showPage]=\"'on'\">\r\n\r\n  <!-- BANNER SECTION -->\r\n  <section class=\"banner-section\" >\r\n    <div class=\"banner-content\">\r\n      <h1 class=\"banner-header\">Front End Web Developer</h1>\r\n      <p class=\"banner-text\">HTML | CSS | JAVASCRIPT | ANGULAR | JQUERY | NODE | EXPRESS | MONGODB</p>\r\n      <p>\r\n        <a href=\"https://github.com/ARWL2016\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"banner-icon-link fa fa-github\" aria-hidden=\"true\"></i></a>\r\n        <i (click)='scrollTo()' class=\"banner-icon-link fa fa-envelope\" aria-hidden=\"true\"></i>\r\n      </p>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- SKILLS SECTION -->\r\n  <section class=\"skills-section\">\r\n    <article class=\"skill-card\">\r\n      <i class=\"fa fa-laptop skill-icon\" aria-hidden=\"true\"></i>\r\n      <h3 class=\"skill-card-heading\">Fluid Design</h3>\r\n      <p class=\"skill-card-text\">\r\n        Using front end libraries like Twitter Bootstrap, as well as custom CSS written in functional style with CSS,\r\n        I create web applications with fluid, responsive and intuitive user interfaces.\r\n      </p>\r\n    </article>\r\n    <article class=\"skill-card\">\r\n      <i class=\"fa fa-industry skill-icon\" aria-hidden=\"true\"></i>\r\n      <h3 class=\"skill-card-heading\">Modern Frameworks</h3>\r\n      <p class=\"skill-card-text\">\r\n        Utilizing a modern, component based framework like AngularJS and Angular / Typescript, I build modular web applications which are easy to quick to develop\r\n        and easy to maintain.\r\n      </p>\r\n    </article>\r\n    <article class=\"skill-card\">\r\n      <i class=\"fa fa-server skill-icon\" aria-hidden=\"true\"></i>\r\n      <h3 class=\"skill-card-heading\">Full Stack Javascript</h3>\r\n      <p class=\"skill-card-text\">\r\n        Using Javascript-based back end technologies such as Node, Express, and MongoDB, I benefit from\r\n        increased efficiency by working in a single language across the whole stack.\r\n      </p>\r\n    </article>\r\n  </section>\r\n\r\n<!-- PORTFOLIO SECTION -->\r\n  <section class=\"portfolio-section\">\r\n  <div class=\"portfolio-content\">\r\n    <div class=\"section-banner\">\r\n      <div class=\"section-heading-wrapper\">\r\n        <img class=\"project-icon\" src=\"../../assets/icons/webpage-128.png\">\r\n        <h2 class=\"section-heading\">FEATURED WEB APPLICATIONS</h2>\r\n      </div>\r\n      <p class=\"section-banner-text\">Some are my recent web apps are featured below. You can view all the projects,\r\n        search by language and framework, and view technical specs, on the <a (click)=\"navigateTo('/portfolio')\">PORTFOLIO</a> page.\r\n      </p>\r\n    </div>\r\n    <div class=\"projects\">\r\n\r\n      <article *ngFor=\"let project of projectData\" class=\"project\">\r\n        <div class=\"image-column\">\r\n          <img src={{project.image_url}} class=\"project-image\" [ngStyle]=\"{'order': project.image_order}\" >\r\n        </div>\r\n        <div class=\"text-column\">\r\n          <div class=\"text-wrapper\">\r\n          <h3 class=\"project-heading\">{{project.name | uppercase }}</h3>\r\n          <p class=\"project-text\">{{project.summary}}</p>\r\n            <div class=\"project-links\">\r\n              <a class=\"project-link\" target=\"_blank\" href={{project.github_link}}><i class=\"project-link-icon fa fa-github\" aria-hidden=\"true\"></i>&nbsp;SOURCE&nbsp;CODE</a>\r\n              <a class=\"project-link\" target=\"_blank\" href={{project.website_link}}><i class=\"project-link-icon fa fa-external-link-square\" aria-hidden=\"true\"></i>&nbsp;VIEW&nbsp;WEBSITE</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </article>\r\n\r\n    </div>\r\n  </div>\r\n  </section>\r\n\r\n  <!-- EMAIL COMPONENT -->\r\n  <app-email id=\"contactForm\"></app-email>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner-content {\n  max-width: 1000px;\n  margin: 0 auto; }\n\n.skills-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  max-width: 1000px;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 40px; }\n\n.portfolio-section {\n  width: 100%;\n  background-color: #f7f7f7;\n  overflow: hidden; }\n\n.portfolio-content {\n  max-width: 1000px;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 25px; }\n  .portfolio-content:last-child {\n    margin-bottom: 100px; }\n\n@media (max-width: 1080px) {\n  .banner-content {\n    width: 95%; }\n  .skills-section {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .skill-card {\n    width: 100% !important;\n    margin: 0 !important; }\n  .portfolio-content {\n    width: 95%; } }\n\n.banner-section {\n  height: 600px;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/splash-wide-min.png")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  overflow: auto;\n  font-family: 'Montserrat', sans-serif;\n  padding: 30px; }\n\n.banner-content {\n  margin-top: 200px; }\n\n.banner-header {\n  margin-bottom: 20px;\n  padding: 5px;\n  padding-left: 10px;\n  letter-spacing: 2.5px;\n  font-size: 3.2rem;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1)); }\n\n.banner-text {\n  font-size: 1.1rem;\n  line-height: 30px;\n  color: white;\n  letter-spacing: 1.5px; }\n\n.banner-icon-link {\n  font-size: 2em;\n  color: white;\n  padding: 15px 20px 15px 0; }\n  .banner-icon-link:hover {\n    cursor: pointer; }\n\n.skill-card {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 33.3%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  line-height: 2rem;\n  padding: 25px;\n  margin: 10px 15px;\n  transition: width 400ms ease-in; }\n\n.skill-icon {\n  font-size: 2rem;\n  margin-bottom: 5px; }\n\n.skill-card-heading {\n  margin-top: 3px;\n  margin-bottom: 10px;\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n  border-bottom: 3px solid #2587ce; }\n\n.skill-card-text {\n  text-align: center; }\n\n.section-banner {\n  margin-top: 80px;\n  padding: 30px;\n  background-color: white;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4); }\n\n.section-heading-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: left;\n  margin-bottom: 30px; }\n\n.project-icon {\n  height: 36px; }\n\n.section-heading {\n  margin-left: 18px;\n  letter-spacing: 2px;\n  font-size: 1.5em;\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3px 0;\n  border-bottom: 3px solid #2587ce; }\n\n.section-banner-text {\n  line-height: 1.8em; }\n  .section-banner-text a {\n    color: #2587ce;\n    text-decoration: none; }\n    .section-banner-text a:hover {\n      text-decoration: underline;\n      cursor: pointer; }\n\n.project {\n  background-color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-top: 40px;\n  width: 100%;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4); }\n  .project:last-child {\n    margin-bottom: 40px; }\n\n.project-heading {\n  font-family: \"Montserrat\", sans-serif; }\n\n.image-column {\n  width: 310px;\n  float: left; }\n\n.text-column {\n  float: left; }\n\n.text-wrapper {\n  margin: 30px 30px 30px 0; }\n\n.project-image {\n  width: 250px;\n  margin: 30px;\n  border: 1px solid #222;\n  border-radius: 3px;\n  transition: all 250ms; }\n\n.project-text {\n  margin-top: 10px;\n  line-height: 2rem; }\n\n.project-links {\n  margin-top: 40px; }\n\n.project-link {\n  background-color: #FFF;\n  color: #222;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  display: inline-block;\n  padding: 8px 12px 8px 12px;\n  border: 2px solid #2587ce;\n  border-radius: 3px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  text-align: center;\n  transition: background-color 300ms;\n  text-decoration: none;\n  font-weight: 500;\n  text-align: center; }\n  .project-link:hover {\n    cursor: pointer;\n    background-color: #2587ce; }\n\n.project-link-icon {\n  font-size: 1.2em; }\n\n@media (max-width: 1000px) {\n  .banner-content {\n    margin-top: 120px; }\n  .image-column {\n    width: 200px; }\n  .project-image {\n    width: 150px; } }\n\n@media (max-width: 670px) {\n  .section-banner {\n    margin-top: 10px; }\n  .banner-header {\n    font-size: 2em; }\n  .banner-text {\n    font-size: 1em; } }\n\n@media (max-width: 610px) {\n  .skills-section {\n    margin-bottom: 20px; }\n  .project {\n    margin-top: 30px; }\n  .project-image {\n    display: none; }\n  .image-column {\n    width: 0px; }\n  .text-wrapper {\n    margin: 30px 30px 30px 30px; }\n  .project-link {\n    width: 100%;\n    display: block;\n    margin: 12px auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_project_data_service__ = __webpack_require__("../../../../../src/app/services/project-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("../../../../../src/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_ping_service__ = __webpack_require__("../../../../../src/app/services/ping.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OverviewComponent = (function () {
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
    return OverviewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:scroll', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OverviewComponent.prototype, "onWindowScroll", null);
OverviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-overview',
        template: __webpack_require__("../../../../../src/app/overview/overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/overview/overview.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_project_data_service__["a" /* ProjectDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_project_data_service__["a" /* ProjectDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_ping_service__["a" /* PingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_ping_service__["a" /* PingService */]) === "function" && _c || Object])
], OverviewComponent);

var _a, _b, _c;
//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" [@showPage]=\"'on'\">\r\n\r\n  <!-- SEARCH SECTION -->\r\n  <section class=\"search-wrapper\" >\r\n    <form>\r\n      <label for=\"search\">SEARCH BY TECHNOLOGY</label>\r\n      <div class=\"input-wrapper\">\r\n        <input\r\n          class=\"search-input\"\r\n          name=\"search\"\r\n          type=\"text\"\r\n          autocomplete=\"off\"\r\n          [formControl]=\"searchTerm\"\r\n          placeholder=\"e.g. angular\">\r\n        <i class=\"search-icon fa fa-search\" aria-hidden=\"true\"></i>\r\n      </div>\r\n      <p *ngIf=\"results !== 1\" class=\"search-result\">{{results}} results</p>\r\n      <p *ngIf=\"results === 1\" class=\"search-result\">{{results}} result</p>\r\n    </form>\r\n  </section>\r\n\r\n  <!-- PORTFOLIO SECTION -->\r\n  <section *ngIf=\"projectData\" class=\"portfolio-content\">\r\n\r\n    <article class=\"project-card\" *ngFor=\"let project of projectData\" [@showPage]=\"'on'\">\r\n      <h1 class=\"project-heading\">{{ project.name }}</h1>\r\n      <span class=\"project-stack-type\">\r\n          <i *ngIf=\"project.type.frontend\" title=\"front end\" class=\"fa fa-desktop\" aria-hidden=\"true\"></i>\r\n          <i *ngIf=\"project.type.server\" title=\"server\" class=\"fa fa-server\" aria-hidden=\"true\"></i>\r\n          <i *ngIf=\"project.type.database\" title=\"database\" class=\"fa fa-database\" aria-hidden=\"true\"></i>\r\n      </span>\r\n      <p class=\"project-tech\">{{ project.tech | uppercase }}</p>\r\n      <div class=\"project-columns\">\r\n        <div class=\"project-image-column\">\r\n          <a href={{project.website_link}} target=\"_blank\">\r\n            <img src={{project.image_url}} class=\"project-image\" [ngStyle]=\"{'order': project.image_order}\" >\r\n          </a>\r\n          <div class=\"project-stat-wrapper\">\r\n            <p class=\"project-stat\">PAGE SIZE\r\n              <span class=\"project-stat-badge\" >{{ project.pingdom_page_size_kb }}kb</span>\r\n              <i class=\"tooltip fa fa-question-circle-o\" title=\"Data is raw size without browser caching\" aria-hidden=\"true\"></i>\r\n            </p>\r\n            <p class=\"project-stat\">LOAD TIME\r\n              <span class=\"project-stat-badge\">{{ project.pingdom_average_load_time }}s</span>\r\n              <i class=\"tooltip fa fa-question-circle-o\" title=\"Measured by Pingdom Website Speed Test. Average of four speeds measured from San Jose, New York, Stockholm and Melbourne.\" aria-hidden=\"true\"></i>\r\n            </p>\r\n            <p class=\"project-stat\">PAGE SPEED SCORE\r\n              <span class=\"project-stat-badge\">{{ project.google_page_speed_score }}%</span>\r\n              <i class=\"tooltip fa fa-question-circle-o\" title=\"Score is from Google Page Speed Insights (desktop).\" aria-hidden=\"true\"></i>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-text-column\">\r\n          <p class=\"project-text\">{{ project.user_stories }}</p>\r\n          <ul class=\"project-list\">\r\n            <li class=\"project-list-item\" *ngFor=\"let highlight of project.highlights\">{{ highlight }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"project-links-wrapper\">\r\n        <a class=\"project-link\" target=\"_blank\" href={{project.github_link}}><i class=\"project-link-icon fa fa-github\" aria-hidden=\"true\"></i>&nbsp;SOURCE&nbsp;CODE</a>\r\n        <a class=\"project-link\" target=\"_blank\" href={{project.website_link}}><i class=\"project-link-icon fa fa-external-link-square\" aria-hidden=\"true\"></i>&nbsp;VIEW&nbsp;WEBSITE</a>\r\n      </div>\r\n\r\n    </article>\r\n  </section>\r\n\r\n</div>\r\n\r\n<img\r\n  *ngIf=\"showBackToTopIcon\"\r\n  (click)=\"scrollToTop()\"\r\n  [@showPage]=\"'on'\"\r\n  class=\"back-to-top-icon\"\r\n  src=\"../../assets/icons/up-arrow-64.png\">\r\n"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-wrapper {\n  background-color: #f7f7f7;\n  min-height: 95vh;\n  overflow: hidden; }\n\n.portfolio-content,\n.search-wrapper {\n  max-width: 1000px;\n  width: 80%;\n  margin: 0 auto;\n  transition: width 300ms; }\n\n.search-wrapper {\n  padding-top: 50px; }\n  .search-wrapper label {\n    display: block;\n    font-size: 0.9em;\n    font-weight: bold;\n    letter-spacing: 0.1px;\n    padding: 5px 8px; }\n  .search-wrapper .input-wrapper {\n    position: relative; }\n    .search-wrapper .input-wrapper i.search-icon {\n      position: absolute;\n      top: 14px;\n      left: 12px;\n      font-size: 1.2em; }\n    .search-wrapper .input-wrapper input {\n      height: 46px;\n      font-size: 1.2em;\n      border-radius: 10px;\n      padding: 10px;\n      padding-left: 44px;\n      width: 50%;\n      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n      border: 1px solid #2587ce;\n      transition: box-shadow 400ms; }\n      .search-wrapper .input-wrapper input:focus {\n        box-shadow: 0 0 1px 1px #2587ce;\n        outline: none; }\n\n.search-result {\n  color: #444;\n  font-style: italic;\n  padding: 7px; }\n\n.project-card {\n  background-color: #fff;\n  border-radius: 5px;\n  margin-top: 50px;\n  padding: 30px;\n  width: 100%;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4); }\n  .project-card:first-child {\n    margin-top: 30px; }\n  .project-card:last-child {\n    margin-bottom: 100px; }\n\n.project-heading {\n  margin-bottom: 10px;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 2.2em;\n  color: #2587ce;\n  display: inline-block; }\n\n.project-stack-type {\n  float: right;\n  padding: 12px; }\n  .project-stack-type i {\n    padding-left: 5px; }\n\n.project-tech {\n  font-size: 0.9em;\n  letter-spacing: 2px;\n  color: #444;\n  margin-bottom: 10px;\n  background-color: #FFC857;\n  padding: 8px;\n  border-radius: 3px; }\n\n.project-columns {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 20px 0 30px 0; }\n\n.project-image-column {\n  float: left; }\n\n.project-text-column {\n  float: left;\n  margin: 0 20px 0 20px; }\n\n.project-image {\n  width: 300px;\n  border-radius: 3px;\n  transition: width 300ms; }\n\n.project-text {\n  line-height: 1.8em; }\n\n.project-list {\n  line-height: 1.8em; }\n\n.project-list-item {\n  list-style-type: square; }\n\n.project-stat-wrapper {\n  background-color: #f7f7f7;\n  padding: 10px 15px 10px 15px;\n  margin-top: 20px;\n  border-radius: 3px; }\n\n.project-stat {\n  font-weight: bold;\n  font-size: 0.85em;\n  letter-spacing: 1.5px;\n  line-height: 2.2em; }\n\n.project-stat-badge {\n  background-color: #FFC857;\n  padding: 3px 8px 3px 8px;\n  border-radius: 10px;\n  color: black;\n  font-size: 0.8em;\n  text-align: right; }\n\n.tooltip {\n  font-size: 1em;\n  color: #2587ce; }\n  .tooltip:hover {\n    cursor: pointer; }\n\n.project-links-wrapper {\n  margin-left: 320px; }\n\n.project-link {\n  background-color: #FFF;\n  color: #222;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  display: inline-block;\n  padding: 8px 12px 8px 12px;\n  border: 2px solid #2587ce;\n  border-radius: 3px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  text-align: center;\n  transition: background-color 300ms;\n  text-decoration: none;\n  font-weight: 500; }\n  .project-link:hover {\n    cursor: pointer;\n    background-color: #2587ce; }\n\n.project-link-icon {\n  font-size: 1.2em; }\n\n.back-to-top-icon {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  border-radius: 32px;\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);\n  transition: all 500ms; }\n  .back-to-top-icon:hover {\n    cursor: pointer; }\n\n@media screen and (max-width: 930px) {\n  .portfolio-content,\n  .search-wrapper {\n    width: 95%; }\n  .project-image {\n    width: 200px; }\n  .project-links-wrapper {\n    margin-left: 220px; } }\n\n@media screen and (max-width: 595px) {\n  .search-wrapper {\n    padding: 20px 10px 0 10px; }\n    .search-wrapper .input-wrapper input {\n      width: 100%; }\n  .project-card {\n    padding: 25px;\n    margin-top: 10px; }\n  .project-stack-type {\n    display: none; }\n  .project-tech {\n    line-height: 1.4em; }\n  .project-image-column {\n    display: none; }\n  .project-list {\n    margin-left: 20px; }\n  .project-links-wrapper {\n    margin-left: 0px; }\n  .project-link {\n    width: 100%;\n    display: block;\n    margin: 0;\n    margin-top: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_project_data_service__ = __webpack_require__("../../../../../src/app/services/project-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("../../../../../src/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_ping_service__ = __webpack_require__("../../../../../src/app/services/ping.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PortfolioComponent = (function () {
    function PortfolioComponent(dataService, ping) {
        this.dataService = dataService;
        this.ping = ping;
        // project data
        this.projectData = [];
        // search
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        // UI props
        this.showBackToTopIcon = false;
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
    return PortfolioComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:scroll', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PortfolioComponent.prototype, "onWindowScroll", null);
PortfolioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_project_data_service__["a" /* ProjectDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_project_data_service__["a" /* ProjectDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_ping_service__["a" /* PingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_ping_service__["a" /* PingService */]) === "function" && _b || Object])
], PortfolioComponent);

var _a, _b;
//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/ping.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PingService = (function () {
    function PingService(http) {
        this.http = http;
        this.pinged = {
            primary: false,
            secondary: false
        };
    }
    PingService.prototype.postPing = function (type) {
        this.pinged[type] = true;
        return this.http.post('/ping', { type: type })
            .toPromise()
            .then(function (res) {
            console.log(res);
        })
            .catch(function (e) {
            console.log('Heroku request error');
        });
    };
    return PingService;
}());
PingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PingService);

var _a;
//# sourceMappingURL=ping.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/project-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectDataService = (function () {
    function ProjectDataService(http) {
        this.http = http;
    }
    ProjectDataService.prototype.getProjectData = function () {
        var _this = this;
        return this.http.get('/data/projects')
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (data) {
            _this.projectData = data;
            return data;
        })
            .catch(function (err) { return console.log(err); });
    };
    return ProjectDataService;
}());
ProjectDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ProjectDataService);

var _a;
//# sourceMappingURL=project-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo-wrapper {\n  width: 280px;\n  min-width: 280px;\n  height: 45px;\n  position: relative;\n  display: inline-block;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold; }\n  .logo-wrapper img {\n    height: 45px;\n    width: auto;\n    outline: none; }\n    .logo-wrapper img:hover {\n      cursor: pointer; }\n  .logo-wrapper .logo-title {\n    font-size: 0.9em;\n    position: absolute;\n    top: 2px;\n    left: 85px;\n    padding: 0; }\n  .logo-wrapper .logo-name {\n    position: absolute;\n    top: 22px;\n    left: 100px;\n    font-size: 1.1em;\n    letter-spacing: 1.3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogoComponent = (function () {
    function LogoComponent() {
    }
    return LogoComponent;
}());
LogoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-logo',
        template: "\n    <div class=\"logo-wrapper\">\n      <img class=\"titlebar-logo\" src=\"../assets/logos/logo_blue.png\" routerLink=\"/overview\">\n      <div class=\"logo-title\">Front End Developer</div>\n      <div class=\"logo-name\">Alistair Willis</div>\n    </div>\n  ",
        styles: [__webpack_require__("../../../../../src/app/shared/logo.component.scss")]
    })
], LogoComponent);

//# sourceMappingURL=logo.component.js.map

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" [@showPage]=\"'on'\">\r\n  <div class=\"content-wrapper\">\r\n  <section class=\"skills-section\">\r\n\r\n    <div class=\"skills-heading-wrapper\">\r\n      <img class=\"skills-icon\" src=\"../../assets/icons/skills.png\">\r\n      <h2 class=\"skills-heading\">ABOUT ME</h2>\r\n    </div>\r\n    <p class=\"skills-text\">\r\n      I am an aspiring web developer specializing in full stack Javascript applications using the MEAN stack -\r\n      Angular / AngularJS, Express, Node and MongoDB. I work with a modern development environment, using Webpack\r\n      for module bundling, NPM for package management and build scripts, and various CSS frameworks for rapid\r\n      prototyping, as well as native CSS.\r\n    </p>\r\n    <p class=\"skills-text\">\r\n      As a developer, I strive to write code which is clean and concise but readable and easy to maintain. I work\r\n      mainly with Angular because I value its clear organisation and separation of concerns. I also make\r\n      use of any syntax and methods which improve code clarity and maintainability, such as ES6, promises, Sass\r\n      and the B.E.M. methodology for modular CSS.\r\n    </p>\r\n    <p class=\"skills-text\">\r\n      The table below shows the key technologies used in the apps featured on this site. Items in <b>bold</b> represent\r\n      core proficiencies.\r\n      </p>\r\n\r\n    <table class=\"skills-table\">\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Languages</td>\r\n        <td class=\"skills-table-cell\"><b>HTML, CSS, Javascript (ES6)</b>, Typescript, SQL</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">CSS Frameworks / Preprocessors</td>\r\n        <td class=\"skills-table-cell\"><b>Sass</b>, Bootstrap, MaterializeCSS</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Front End</td>\r\n        <td class=\"skills-table-cell\"><b>Angular, AngularJS</b>, Vue.js JQuery</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Server Side</td>\r\n        <td class=\"skills-table-cell\"><b>Node, Express</b></td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Data Layer</td>\r\n        <td class=\"skills-table-cell\"><b>MongoDB, Mongoose</b>, MySQL</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Testing</td>\r\n        <td class=\"skills-table-cell\">Mocha, Chai, Supertest</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Build Tools</td>\r\n        <td class=\"skills-table-cell\"><b>NPM Scripts</b>, Bower, Webpack</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n          <td class=\"skills-table-cell\">Version Control</td>\r\n          <td class=\"skills-table-cell\"><b>Git, Github</b></td>\r\n        </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Hosting</td>\r\n        <td class=\"skills-table-cell\">Heroku, MLab</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Tools</td>\r\n        <td class=\"skills-table-cell\"><b>Visual Studio Code, Powershell, Chrome DevTools</b>, Postman, Robomongo, MySQL Workbench</td>\r\n      </tr>\r\n    </table>\r\n\r\n    <div class=\"skills-heading-wrapper\">\r\n        <img class=\"skills-icon\" src=\"../../assets/icons/studying.png\">\r\n        <h2 class=\"skills-heading\">LEARNING</h2>\r\n    </div>\r\n    <p class=\"skills-text\">\r\n      I make heavy use of Pluralsight to upgrade my skills and learn new techniques.\r\n      You can view skills evaluations for Javascript, Node and other technologies,\r\n      and view a list of completed courses, on the <a class=\"text-link\" href=\"https://app.pluralsight.com/profile/alistair-willis\" target=\"_blank\">profile page.</a>\r\n    </p>\r\n    <p class=\"skills-text\">For practicing algorithms and sharpening problem solving skills\r\n      I use the Codewars site. You can see my ranking for Javascript, Java and C# on the\r\n      <a class=\"text-link\" href=\"https://www.codewars.com/users/ARWL2016\" target=\"_blank\">profile page</a> and view solutions as <a class=\"text-link\" href=\"https://gist.github.com/ARWL2016\" target=\"blank\">Github gists</a>.\r\n\r\n    </p>\r\n\r\n\r\n  </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-wrapper {\n  background-color: #f7f7f7; }\n\n.content-wrapper {\n  max-width: 1000px;\n  margin: 0 auto;\n  background-color: white;\n  padding: 20px; }\n\n.skills-section {\n  max-width: 800px;\n  margin: 0 auto;\n  margin-top: 100px;\n  margin-bottom: 100px; }\n\n.skills-heading-wrapper {\n  margin: 50px 0 30px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: left; }\n\n.skills-icon {\n  height: 36px; }\n\n.skills-heading {\n  margin-left: 18px;\n  font-family: \"Montserrat\", sans-serif; }\n\n.skills-text {\n  margin-bottom: 20px;\n  line-height: 1.8em; }\n  .skills-text:last-child {\n    margin-bottom: 50px; }\n\n.text-link {\n  color: #2587ce;\n  text-decoration: none; }\n  .text-link:hover {\n    text-decoration: underline;\n    cursor: pointer; }\n\n.skills-table {\n  border: 1px solid #2587ce;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n  border-collapse: collapse;\n  margin-bottom: 20px; }\n\n.skills-table-cell {\n  padding: 10px;\n  line-height: 1.5em;\n  font-size: 1.1em; }\n\n.skills-table-cell:first-child {\n  color: white;\n  font-weight: bold;\n  background-color: #2587ce;\n  border: 1px solid #0e324c; }\n\n.skills-table-cell:nth-child(2) {\n  border: 1px solid #555; }\n\n@media (max-width: 800px) {\n  .skills-section {\n    width: 90%;\n    margin-top: 30px; }\n  .skills-heading-wrapper {\n    margin-top: 30px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("../../../../../src/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-skills',
        template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skills/skills.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [])
], SkillsComponent);

//# sourceMappingURL=skills.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/splash-wide-min.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "splash-wide-min.0cf284b9f3c489e0cc33.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map