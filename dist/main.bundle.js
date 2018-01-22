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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("../../../animations/@angular/animations.es5.js");
// import { Component, Input } from '@angular/core';
var pageTransition = animations_1.trigger('showPage', [
    animations_1.state('on', animations_1.style({ transform: 'translateY(0)' })),
    animations_1.transition('void => on', [
        animations_1.style({ opacity: 0 }),
        animations_1.animate('600ms ease-in')
    ]),
    animations_1.transition('on => void', [
        animations_1.animate(0, animations_1.style({ opacity: 0 }))
    ])
]);
exports.pageTransition = pageTransition;
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../../../../src/app/app-component/app.component.footer.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  background-color: #222;\n  color: white;\n  min-height: 300px;\n  bottom: 0; }\n\n.footer-content-wrapper {\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  font-weight: 300;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px;\n  line-height: 1.8em;\n  overflow: auto; }\n\n.footer-column {\n  padding: 20px 20px 20px 50px; }\n\n.footer-column:nth-child(1) {\n    width: 40%; }\n\n.footer-column:nth-child(2) {\n    width: 30%; }\n\n.footer-column:nth-child(3) {\n    width: 30%; }\n\n.footer-heading {\n  font-size: 0.9em;\n  font-family: \"Montserrat\", sans-serif; }\n\n.footer-text {\n  font-size: 0.9em;\n  margin-bottom: 10px; }\n\n.footer-link {\n  color: #2587ce;\n  text-decoration: none; }\n\n.footer-link:hover {\n    text-decoration: underline;\n    cursor: pointer; }\n\n.footer-link:hover {\n    text-decoration: none; }\n\n.footer-icon-link:hover {\n  text-decoration: none; }\n\n.footer-line {\n  color: #2587ce;\n  background-color: #2587ce;\n  height: 2px;\n  border: 0;\n  width: 50%;\n  text-align: left;\n  margin: 10px auto 10px 0; }\n\n@media (max-width: 930px) {\n  .footer-content-wrapper {\n    padding: 30px 10px 10px 10px; }\n  .footer-column {\n    padding: 10px; } }\n\n@media (max-width: 670px) {\n  .footer-column:nth-child(1) {\n    display: none; }\n  .footer-column:nth-child(2) {\n    width: 50%; }\n  .footer-column:nth-child(3) {\n    width: 50%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-component/app.component.header.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  background-color: #222;\n  font-family: 'Montserrat', sans-serif;\n  min-height: 80px;\n  width: 100%;\n  padding: 15px; }\n\n.header-content {\n  width: 80%;\n  max-width: 1000px;\n  margin: 0 auto;\n  -webkit-transition: width 300ms;\n  transition: width 300ms; }\n\n.titlebar {\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 50px;\n  margin-top: 0px; }\n\n.titlebar-list {\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  margin: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 50px;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.titlebar-list-item {\n  list-style-type: none;\n  display: inline-block;\n  color: white;\n  margin-left: 20px;\n  margin-bottom: 4px;\n  padding: 10px; }\n\n.titlebar-list-item_selected {\n  border-bottom: 4px solid #2587ce;\n  margin-bottom: 0; }\n\n.titlebar-anchor {\n  text-decoration: none;\n  color: #FFF;\n  font-size: 0.85rem;\n  padding: 5px 0 5px 0; }\n\n@media screen and (max-width: 770px) {\n  .header-content {\n    width: 95%; }\n  .titlebar {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .titlebar-list {\n    margin-top: 30px; }\n  .titlebar-list-item {\n    margin-left: 10px;\n    padding: 10px 20px; }\n  .header {\n    min-height: 120px; } }\n\n@media screen and (max-width: 400px) {\n  .header {\n    padding: 20px 10px 10px 10px; }\n  .header-content {\n    width: 100%; }\n  .titlebar-list {\n    margin-top: 25px; }\n  .titlebar-list-item {\n    padding: 10px 3px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-component/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- HEADER SECTION -->\r\n<header role=\"banner\"\r\n  class=\"header\"\r\n  id=\"header\">\r\n  <div class=\"header-content\">\r\n  <nav class=\"titlebar\" role=\"navigation\">\r\n    <!-- LOGO COMPONENT -->\r\n    <app-logo></app-logo>\r\n    <ul class=\"titlebar-list\">\r\n      <li class=\"titlebar-list-item\">\r\n        <a class=\"titlebar-anchor\" routerLink=\"/overview\" routerLinkActive=\"titlebar-list-item_selected\">OVERVIEW</a>\r\n      </li>\r\n      <li class=\"titlebar-list-item\">\r\n        <a class=\"titlebar-anchor\" routerLink=\"/portfolio\" routerLinkActive=\"titlebar-list-item_selected\">PORTFOLIO</a>\r\n      </li>\r\n      <li class=\"titlebar-list-item\">\r\n        <a class=\"titlebar-anchor\" routerLink=\"/skills\" routerLinkActive=\"titlebar-list-item_selected\">ABOUT&nbsp;ME</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  </div>\r\n</header>\r\n\r\n<!-- ROUTER OUTLET -->\r\n<main class=\"content\" role=\"main\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<!-- FOOTER SECTION -->\r\n<footer class=\"footer\">\r\n  <div class=\"footer-content-wrapper\">\r\n    <div class=\"footer-column footer-bio-wrapper\">\r\n      <h3 class=\"footer-heading\">ALISTAIR WILLIS</h3>\r\n      <p class=\"footer-text\">I'm a software developer who uses modern tools and frameworks to build responsive, modular web applications.</p>\r\n      <p class=\"footer-text\">Available for hire: March 2018.</p>\r\n    </div>\r\n    <div class=\"footer-column footer-contacts-wrapper\">\r\n      <h3 class=\"footer-heading\">EXTERNAL LINKS</h3>\r\n      <a class=\"footer-link\" target=\"_blank\" href=\"https://github.com/ARWL2016\">Github\r\n        <i class=\"footer-icon-link fa fa-github\" aria-hidden=\"true\"></i>\r\n      </a><br>\r\n      <a class=\"footer-link\" target=\"_blank\" href=\"https://app.pluralsight.com/profile/alistair-willis\">\r\n        Pluralsight\r\n      </a><br>\r\n      <a class=\"footer-link\" target=\"_blank\" href=\"https://www.codewars.com/users/ARWL2016\">\r\n        Codewars <img src=\"https://www.codewars.com/users/ARWL2016/badges/micro\">\r\n      </a>\r\n    </div>\r\n    <div class=\"footer-column footer-links-wrapper\">\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"scrollToTop()\">BACK TO TOP</h3>\r\n      <hr class=\"footer-line\">\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"navigateTo('/overview')\">OVERVIEW</h3>\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"navigateTo('/portfolio')\">PORTFOLIO</h3>\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"navigateTo('/skills')\">SKILLS</h3>\r\n    </div>\r\n  </div>\r\n</footer>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app-component/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  min-height: 100vh; }\n\n.content {\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  background-color: #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-component/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var project_data_service_1 = __webpack_require__("../../../../../src/app/services/project-data.service.ts");
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
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app-component/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-component/app.component.scss"), __webpack_require__("../../../../../src/app/app-component/app.component.header.scss"), __webpack_require__("../../../../../src/app/app-component/app.component.footer.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof project_data_service_1.ProjectDataService !== "undefined" && project_data_service_1.ProjectDataService) === "function" && _b || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app-component/app.component.ts");
var overview_component_1 = __webpack_require__("../../../../../src/app/overview/overview.component.ts");
var portfolio_component_1 = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
var skills_component_1 = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
var email_component_1 = __webpack_require__("../../../../../src/app/email/email.component.ts");
var project_data_service_1 = __webpack_require__("../../../../../src/app/services/project-data.service.ts");
var email_service_1 = __webpack_require__("../../../../../src/app/email/email.service.ts");
var ping_service_1 = __webpack_require__("../../../../../src/app/services/ping.service.ts");
var logo_component_1 = __webpack_require__("../../../../../src/app/shared/logo.component.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            overview_component_1.OverviewComponent,
            portfolio_component_1.PortfolioComponent,
            skills_component_1.SkillsComponent,
            email_component_1.EmailComponent,
            logo_component_1.LogoComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'overview', component: overview_component_1.OverviewComponent },
                { path: 'portfolio', component: portfolio_component_1.PortfolioComponent },
                { path: 'skills', component: skills_component_1.SkillsComponent },
                { path: '', redirectTo: 'overview', pathMatch: 'full' },
            ])
        ],
        providers: [
            project_data_service_1.ProjectDataService,
            email_service_1.EmailService,
            ping_service_1.PingService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
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
exports.push([module.i, ".spinner {\n  width: 20px;\n  height: 20px;\n  margin: 0 auto;\n  background-color: #333;\n  display: inline-block;\n  border-radius: 100%;\n  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n  animation: sk-scaleout 1.0s infinite ease-in-out; }\n\n@-webkit-keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n    opacity: 0; } }\n\n@keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0; } }\n\nsection.email-section {\n  background-color: #FFC857; }\n\nsection.email-section form {\n    margin: 0 auto;\n    padding: 50px 0;\n    max-width: 1000px;\n    width: 80%; }\n\nsection.email-section form .form-heading-wrapper {\n      display: flex;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: left;\n          -ms-flex-pack: left;\n              justify-content: left;\n      padding: 10px;\n      margin-bottom: 6px; }\n\nsection.email-section form h2 {\n      padding: 3px 0;\n      margin-left: 18px;\n      text-transform: uppercase;\n      font-family: \"Montserrat\", sans-serif;\n      font-size: 1.4em; }\n\nsection.email-section form label {\n      display: block;\n      color: black;\n      font-size: 0.9em;\n      font-weight: bold;\n      margin-bottom: 4px;\n      margin-left: 3px; }\n\nsection.email-section form .validation-message {\n      font-size: 0.9em;\n      margin-left: 10px;\n      min-height: 2em; }\n\nsection.email-section form .validation-message i {\n        color: red;\n        margin: 0 10px; }\n\nsection.email-section form button {\n      background-color: #FFF;\n      color: #222;\n      letter-spacing: 1px;\n      font-size: 0.9rem;\n      display: inline-block;\n      padding: 8px 12px 8px 12px;\n      border: 2px solid #2587ce;\n      border-radius: 3px;\n      margin-right: 5px;\n      margin-bottom: 5px;\n      font-weight: 500;\n      text-align: center;\n      -webkit-transition: background-color 300ms;\n      transition: background-color 300ms;\n      margin: 10px;\n      min-width: 240px;\n      text-transform: uppercase;\n      font-weight: bold;\n      font-size: 0.8em;\n      height: 40px; }\n\nsection.email-section form button:hover {\n        cursor: pointer;\n        background-color: #2587ce; }\n\nsection.email-section form button:disabled {\n        cursor: no-drop; }\n\nsection.email-section form button i {\n        color: green;\n        font-size: 1.5em;\n        margin-right: 8px; }\n\nsection.email-section form .form-input-wrapper {\n      display: inline-block;\n      padding: 10px;\n      width: 50%; }\n\nsection.email-section form .form-input-wrapper input {\n        margin: 0;\n        width: 100%;\n        height: 3.2em;\n        padding: 15px;\n        font-size: 1em;\n        font-family: monospace; }\n\nsection.email-section form .form-input-wrapper:nth-child(3) {\n      float: right; }\n\nsection.email-section form .textarea-wrapper {\n      padding: 10px;\n      width: 100%; }\n\nsection.email-section form .textarea-wrapper textarea {\n        width: 100%;\n        min-height: 140px;\n        padding: 15px;\n        font-size: 1em;\n        font-family: monospace; }\n\n@media screen and (max-width: 600px) {\n  section.email-section form .form-input-wrapper {\n    display: block;\n    width: 100%;\n    float: none; }\n  .form-input-wrapper:nth-child(3) {\n    margin-bottom: 12px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email/email.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var email_service_1 = __webpack_require__("../../../../../src/app/email/email.service.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            name: ['', [forms_1.Validators.required]],
            message: ['', [forms_1.Validators.required]]
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
    core_1.Component({
        selector: 'app-email',
        template: __webpack_require__("../../../../../src/app/email/email.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email/email.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof email_service_1.EmailService !== "undefined" && email_service_1.EmailService) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object])
], EmailComponent);
exports.EmailComponent = EmailComponent;
var _a, _b;
//# sourceMappingURL=email.component.js.map

/***/ }),

/***/ "../../../../../src/app/email/email.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], EmailService);
exports.EmailService = EmailService;
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
exports.push([module.i, ".banner-content {\n  max-width: 1000px;\n  margin: 0 auto; }\n\n.skills-section {\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  max-width: 1000px;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 40px; }\n\n.portfolio-section {\n  width: 100%;\n  background-color: #f7f7f7;\n  overflow: hidden; }\n\n.portfolio-content {\n  max-width: 1000px;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 25px; }\n\n.portfolio-content:last-child {\n    margin-bottom: 100px; }\n\n@media (max-width: 1080px) {\n  .banner-content {\n    width: 95%; }\n  .skills-section {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .skill-card {\n    width: 100% !important;\n    margin: 0 !important; }\n  .portfolio-content {\n    width: 95%; } }\n\n.banner-section {\n  height: 600px;\n  background-color: #222;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/splash-wide-min.png")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  overflow: auto;\n  font-family: 'Montserrat', sans-serif;\n  padding: 30px; }\n\n.banner-content {\n  margin-top: 200px; }\n\n.banner-header {\n  margin-bottom: 20px;\n  padding: 5px;\n  padding-left: 10px;\n  letter-spacing: 2.5px;\n  font-size: 3.2rem;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0.9)), to(rgba(255, 255, 255, 0.1)));\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1)); }\n\n.banner-text {\n  font-size: 1.1rem;\n  line-height: 30px;\n  color: white;\n  letter-spacing: 1.5px; }\n\n.banner-icon-link {\n  font-size: 2em;\n  color: white;\n  padding: 15px 20px 15px 0; }\n\n.banner-icon-link:hover {\n    cursor: pointer; }\n\n.skill-card {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  width: 33.3%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  line-height: 2rem;\n  padding: 25px;\n  margin: 10px 15px;\n  -webkit-transition: width 400ms ease-in;\n  transition: width 400ms ease-in; }\n\n.skill-icon {\n  font-size: 2rem;\n  margin-bottom: 5px; }\n\n.skill-card-heading {\n  margin-top: 3px;\n  margin-bottom: 10px;\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n  border-bottom: 3px solid #2587ce; }\n\n.skill-card-text {\n  text-align: center; }\n\n.section-banner {\n  margin-top: 80px;\n  padding: 30px;\n  background-color: white;\n  -webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4); }\n\n.section-heading-wrapper {\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: left;\n  margin-bottom: 30px; }\n\n.project-icon {\n  height: 36px; }\n\n.section-heading {\n  margin-left: 18px;\n  letter-spacing: 2px;\n  font-size: 1.5em;\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3px 0;\n  border-bottom: 3px solid #2587ce; }\n\n.section-banner-text {\n  line-height: 1.8em; }\n\n.section-banner-text a {\n    color: #2587ce;\n    text-decoration: none; }\n\n.section-banner-text a:hover {\n      text-decoration: underline;\n      cursor: pointer; }\n\n.project {\n  background-color: #fff;\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-top: 40px;\n  width: 100%;\n  -webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4); }\n\n.project:last-child {\n    margin-bottom: 40px; }\n\n.project-heading {\n  font-family: \"Montserrat\", sans-serif; }\n\n.image-column {\n  width: 310px;\n  float: left; }\n\n.text-column {\n  float: left; }\n\n.text-wrapper {\n  margin: 30px 30px 30px 0; }\n\n.project-image {\n  width: 250px;\n  margin: 30px;\n  border: 1px solid #222;\n  border-radius: 3px;\n  -webkit-transition: all 250ms;\n  transition: all 250ms; }\n\n.project-text {\n  margin-top: 10px;\n  line-height: 2rem; }\n\n.project-links {\n  margin-top: 40px; }\n\n.project-link {\n  background-color: #FFF;\n  color: #222;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  display: inline-block;\n  padding: 8px 12px 8px 12px;\n  border: 2px solid #2587ce;\n  border-radius: 3px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  text-align: center;\n  -webkit-transition: background-color 300ms;\n  transition: background-color 300ms;\n  text-decoration: none;\n  font-weight: 500;\n  text-align: center; }\n\n.project-link:hover {\n    cursor: pointer;\n    background-color: #2587ce; }\n\n.project-link-icon {\n  font-size: 1.2em; }\n\n@media (max-width: 1000px) {\n  .banner-content {\n    margin-top: 120px; }\n  .image-column {\n    width: 200px; }\n  .project-image {\n    width: 150px; } }\n\n@media (max-width: 670px) {\n  .section-banner {\n    margin-top: 10px; }\n  .banner-header {\n    font-size: 2em; }\n  .banner-text {\n    font-size: 1em; } }\n\n@media (max-width: 610px) {\n  .skills-section {\n    margin-bottom: 20px; }\n  .project {\n    margin-top: 30px; }\n  .project-image {\n    display: none; }\n  .image-column {\n    width: 0px; }\n  .text-wrapper {\n    margin: 30px 30px 30px 30px; }\n  .project-link {\n    width: 100%;\n    display: block;\n    margin: 12px auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var project_data_service_1 = __webpack_require__("../../../../../src/app/services/project-data.service.ts");
var animations_1 = __webpack_require__("../../../../../src/animations.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ping_service_1 = __webpack_require__("../../../../../src/app/services/ping.service.ts");
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
    core_1.HostListener('window:scroll', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OverviewComponent.prototype, "onWindowScroll", null);
OverviewComponent = __decorate([
    core_1.Component({
        selector: 'app-overview',
        template: __webpack_require__("../../../../../src/app/overview/overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/overview/overview.component.scss")],
        animations: [animations_1.pageTransition]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof project_data_service_1.ProjectDataService !== "undefined" && project_data_service_1.ProjectDataService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof ping_service_1.PingService !== "undefined" && ping_service_1.PingService) === "function" && _c || Object])
], OverviewComponent);
exports.OverviewComponent = OverviewComponent;
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
exports.push([module.i, ".page-wrapper {\n  background-color: #f7f7f7;\n  min-height: 95vh;\n  overflow: hidden; }\n\n.portfolio-content,\n.search-wrapper {\n  max-width: 1000px;\n  width: 80%;\n  margin: 0 auto;\n  -webkit-transition: width 300ms;\n  transition: width 300ms; }\n\n.search-wrapper {\n  padding-top: 50px; }\n\n.search-wrapper label {\n    display: block;\n    font-size: 0.9em;\n    font-weight: bold;\n    letter-spacing: 0.1px;\n    padding: 5px 8px; }\n\n.search-wrapper .input-wrapper {\n    position: relative; }\n\n.search-wrapper .input-wrapper i.search-icon {\n      position: absolute;\n      top: 14px;\n      left: 12px;\n      font-size: 1.2em; }\n\n.search-wrapper .input-wrapper input {\n      height: 46px;\n      font-size: 1.2em;\n      border-radius: 10px;\n      padding: 10px;\n      padding-left: 44px;\n      width: 50%;\n      -webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n              box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n      border: 1px solid #2587ce;\n      -webkit-transition: -webkit-box-shadow 400ms;\n      transition: -webkit-box-shadow 400ms;\n      transition: box-shadow 400ms;\n      transition: box-shadow 400ms, -webkit-box-shadow 400ms; }\n\n.search-wrapper .input-wrapper input:focus {\n        -webkit-box-shadow: 0 0 1px 1px #2587ce;\n                box-shadow: 0 0 1px 1px #2587ce;\n        outline: none; }\n\n.search-result {\n  color: #444;\n  font-style: italic;\n  padding: 7px; }\n\n.project-card {\n  background-color: #fff;\n  border-radius: 5px;\n  margin-top: 50px;\n  padding: 30px;\n  width: 100%;\n  -webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4); }\n\n.project-card:first-child {\n    margin-top: 30px; }\n\n.project-card:last-child {\n    margin-bottom: 100px; }\n\n.project-heading {\n  margin-bottom: 10px;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 2.2em;\n  color: #2587ce;\n  display: inline-block; }\n\n.project-stack-type {\n  float: right;\n  padding: 12px; }\n\n.project-stack-type i {\n    padding-left: 5px; }\n\n.project-tech {\n  font-size: 0.9em;\n  letter-spacing: 2px;\n  color: #444;\n  margin-bottom: 10px;\n  background-color: #FFC857;\n  padding: 8px;\n  border-radius: 3px; }\n\n.project-columns {\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 20px 0 30px 0; }\n\n.project-image-column {\n  float: left; }\n\n.project-text-column {\n  float: left;\n  margin: 0 20px 0 20px; }\n\n.project-image {\n  width: 300px;\n  border-radius: 3px;\n  -webkit-transition: width 300ms;\n  transition: width 300ms; }\n\n.project-text {\n  line-height: 1.8em; }\n\n.project-list {\n  line-height: 1.8em;\n  margin-left: 20px; }\n\n.project-list-item {\n  list-style-type: square; }\n\n.project-stat-wrapper {\n  background-color: #f7f7f7;\n  padding: 10px 15px 10px 15px;\n  margin-top: 20px;\n  border-radius: 3px; }\n\n.project-stat {\n  font-weight: bold;\n  font-size: 0.85em;\n  letter-spacing: 1.5px;\n  line-height: 2.2em; }\n\n.project-stat-badge {\n  background-color: #FFC857;\n  padding: 3px 8px 3px 8px;\n  border-radius: 10px;\n  color: black;\n  font-size: 0.8em;\n  text-align: right; }\n\n.tooltip {\n  font-size: 1em;\n  color: #2587ce; }\n\n.tooltip:hover {\n    cursor: pointer; }\n\n.project-links-wrapper {\n  margin-left: 320px; }\n\n.project-link {\n  background-color: #FFF;\n  color: #222;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  display: inline-block;\n  padding: 8px 12px 8px 12px;\n  border: 2px solid #2587ce;\n  border-radius: 3px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  text-align: center;\n  -webkit-transition: background-color 300ms;\n  transition: background-color 300ms;\n  text-decoration: none;\n  font-weight: 500; }\n\n.project-link:hover {\n    cursor: pointer;\n    background-color: #2587ce; }\n\n.project-link-icon {\n  font-size: 1.2em; }\n\n.back-to-top-icon {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  border-radius: 32px;\n  -webkit-box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);\n          box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);\n  -webkit-transition: all 500ms;\n  transition: all 500ms; }\n\n.back-to-top-icon:hover {\n    cursor: pointer; }\n\n@media screen and (max-width: 930px) {\n  .portfolio-content,\n  .search-wrapper {\n    width: 95%; }\n  .project-image {\n    width: 200px; }\n  .project-links-wrapper {\n    margin-left: 220px; } }\n\n@media screen and (max-width: 595px) {\n  .search-wrapper {\n    padding: 20px 10px 0 10px; }\n    .search-wrapper .input-wrapper input {\n      width: 100%; }\n  .project-card {\n    padding: 25px;\n    margin-top: 10px; }\n  .project-stack-type {\n    display: none; }\n  .project-tech {\n    line-height: 1.4em; }\n  .project-image-column {\n    display: none; }\n  .project-links-wrapper {\n    margin-left: 0px; }\n  .project-link {\n    width: 100%;\n    display: block;\n    margin: 0;\n    margin-top: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var project_data_service_1 = __webpack_require__("../../../../../src/app/services/project-data.service.ts");
var animations_1 = __webpack_require__("../../../../../src/animations.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var ping_service_1 = __webpack_require__("../../../../../src/app/services/ping.service.ts");
var PortfolioComponent = (function () {
    function PortfolioComponent(dataService, ping) {
        this.dataService = dataService;
        this.ping = ping;
        // project data
        this.projectData = [];
        // search
        this.searchTerm = new forms_1.FormControl();
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
    core_1.HostListener('window:scroll', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PortfolioComponent.prototype, "onWindowScroll", null);
PortfolioComponent = __decorate([
    core_1.Component({
        selector: 'app-portfolio',
        template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.scss")],
        animations: [animations_1.pageTransition]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof project_data_service_1.ProjectDataService !== "undefined" && project_data_service_1.ProjectDataService) === "function" && _a || Object, typeof (_b = typeof ping_service_1.PingService !== "undefined" && ping_service_1.PingService) === "function" && _b || Object])
], PortfolioComponent);
exports.PortfolioComponent = PortfolioComponent;
var _a, _b;
//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/ping.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], PingService);
exports.PingService = PingService;
var _a;
//# sourceMappingURL=ping.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/project-data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ProjectDataService);
exports.ProjectDataService = ProjectDataService;
var _a;
//# sourceMappingURL=project-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo-wrapper {\n  width: 280px;\n  min-width: 280px;\n  height: 45px;\n  position: relative;\n  display: inline-block;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold; }\n  .logo-wrapper img {\n    height: 45px;\n    width: auto;\n    outline: none; }\n  .logo-wrapper img:hover {\n      cursor: pointer; }\n  .logo-wrapper .logo-title {\n    font-size: 0.9em;\n    position: absolute;\n    top: 2px;\n    left: 85px;\n    padding: 0; }\n  .logo-wrapper .logo-name {\n    position: absolute;\n    top: 22px;\n    left: 100px;\n    font-size: 1.1em;\n    letter-spacing: 1.3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/logo.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var LogoComponent = (function () {
    function LogoComponent() {
    }
    return LogoComponent;
}());
LogoComponent = __decorate([
    core_1.Component({
        selector: 'app-logo',
        template: "\n    <div class=\"logo-wrapper\">\n      <img class=\"titlebar-logo\" src=\"../assets/logos/logo_blue-100.png\" routerLink=\"/overview\">\n      <div class=\"logo-title\">Front End Developer</div>\n      <div class=\"logo-name\">Alistair Willis</div>\n    </div>\n  ",
        styles: [__webpack_require__("../../../../../src/app/shared/logo.component.scss")]
    })
], LogoComponent);
exports.LogoComponent = LogoComponent;
//# sourceMappingURL=logo.component.js.map

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" [@showPage]=\"'on'\">\r\n  <div class=\"content-wrapper\">\r\n  <section class=\"skills-section\">\r\n\r\n    <div class=\"skills-heading-wrapper\">\r\n      <img class=\"skills-icon\" src=\"../../assets/icons/skills.png\">\r\n      <h2 class=\"skills-heading\">ABOUT ME</h2>\r\n    </div>\r\n    <p class=\"skills-text\">\r\n      I am an aspiring web developer specializing in full stack Javascript applications using the MEAN stack -\r\n      Angular / AngularJS, Express, Node and MongoDB. I work with a modern development environment, using Webpack\r\n      for module bundling, NPM for package management and build scripts, and various CSS frameworks for rapid\r\n      prototyping, as well as native CSS.\r\n    </p>\r\n    <p class=\"skills-text\">\r\n      As a developer, I strive to write code which is clean and concise but readable and easy to maintain. I work\r\n      mainly with Angular because I value its clear organisation and separation of concerns. I also make\r\n      use of any syntax and methods which improve code clarity and maintainability, such as ES6, promises, Sass\r\n      and the B.E.M. methodology for modular CSS.\r\n    </p>\r\n    <p class=\"skills-text\">\r\n      The table below shows the key technologies used in the apps featured on this site. Items in <b>bold</b> represent\r\n      core proficiencies.\r\n    </p>\r\n\r\n    <table class=\"skills-table\">\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Languages</td>\r\n        <td class=\"skills-table-cell\"><b>HTML, CSS, Javascript (ES6)</b>, Typescript, SQL</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">CSS Frameworks / Preprocessors</td>\r\n        <td class=\"skills-table-cell\"><b>Sass</b>, Bootstrap, MaterializeCSS</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Front End</td>\r\n        <td class=\"skills-table-cell\"><b>Angular, AngularJS</b>, Vue.js JQuery</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Server Side</td>\r\n        <td class=\"skills-table-cell\"><b>Node, Express</b></td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Data Layer</td>\r\n        <td class=\"skills-table-cell\"><b>MongoDB, Mongoose</b>, MySQL</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Testing</td>\r\n        <td class=\"skills-table-cell\">Mocha, Chai, Supertest</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Build Tools</td>\r\n        <td class=\"skills-table-cell\"><b>NPM Scripts</b>, Bower, Webpack</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n          <td class=\"skills-table-cell\">Version Control</td>\r\n          <td class=\"skills-table-cell\"><b>Git, Github</b></td>\r\n        </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Hosting</td>\r\n        <td class=\"skills-table-cell\">Heroku, MLab</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Tools</td>\r\n        <td class=\"skills-table-cell\"><b>Visual Studio Code, Powershell, Chrome DevTools</b>, Postman, Robomongo, MySQL Workbench</td>\r\n      </tr>\r\n    </table>\r\n\r\n    <div class=\"skills-heading-wrapper\">\r\n        <img class=\"skills-icon\" src=\"../../assets/icons/studying.png\">\r\n        <h2 class=\"skills-heading\">LEARNING</h2>\r\n    </div>\r\n    <p class=\"skills-text\">\r\n      I make heavy use of Pluralsight to upgrade my skills and learn new techniques.\r\n      You can view skills evaluations for Javascript, Node and other technologies,\r\n      and view a list of completed courses, on the <a class=\"text-link\" href=\"https://app.pluralsight.com/profile/alistair-willis\" target=\"_blank\">profile page.</a>\r\n    </p>\r\n    <p class=\"skills-text\">For practicing algorithms and sharpening problem solving skills\r\n      I use the Codewars site. You can see my ranking for Javascript, Java and C# on the\r\n      <a class=\"text-link\" href=\"https://www.codewars.com/users/ARWL2016\" target=\"_blank\">profile page</a> and view solutions as <a class=\"text-link\" href=\"https://gist.github.com/ARWL2016\" target=\"blank\">Github gists</a>.\r\n    </p>\r\n\r\n    <span class=\"cv-link\">\r\n      <a href=\"/Alistair-Willis-CV\" target=\"_blank\" rel=\"noopener noreferrer\">View my CV</a>\r\n    </span>\r\n\r\n  </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-wrapper {\n  background-color: #f7f7f7; }\n\n.content-wrapper {\n  max-width: 1000px;\n  margin: 0 auto;\n  background-color: white;\n  padding: 20px; }\n\n.skills-section {\n  max-width: 800px;\n  margin: 0 auto;\n  margin-top: 100px;\n  margin-bottom: 100px; }\n\n.skills-heading-wrapper {\n  margin: 50px 0 30px 0;\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: left; }\n\n.skills-icon {\n  height: 36px; }\n\n.skills-heading {\n  margin-left: 18px;\n  font-family: \"Montserrat\", sans-serif; }\n\n.skills-text {\n  margin-bottom: 20px;\n  line-height: 1.8em; }\n\n.skills-text:last-child {\n    margin-bottom: 50px; }\n\n.text-link {\n  color: #2587ce;\n  text-decoration: none; }\n\n.text-link:hover {\n    text-decoration: underline;\n    cursor: pointer; }\n\n.skills-table {\n  border: 1px solid #2587ce;\n  -webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n  border-collapse: collapse;\n  margin-bottom: 20px; }\n\n.skills-table-cell {\n  padding: 10px;\n  line-height: 1.5em;\n  font-size: 1.1em; }\n\n.skills-table-cell:first-child {\n  color: white;\n  font-weight: bold;\n  background-color: #2587ce;\n  border: 1px solid #0e324c; }\n\n.skills-table-cell:nth-child(2) {\n  border: 1px solid #555; }\n\n@media (max-width: 800px) {\n  .skills-section {\n    width: 90%;\n    margin-top: 30px; }\n  .skills-heading-wrapper {\n    margin-top: 30px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var animations_1 = __webpack_require__("../../../../../src/animations.ts");
var SkillsComponent = (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    core_1.Component({
        selector: 'app-skills',
        template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skills/skills.component.scss")],
        animations: [animations_1.pageTransition]
    }),
    __metadata("design:paramtypes", [])
], SkillsComponent);
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=skills.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/splash-wide-min.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "splash-wide-min.f9494c86fd482cf19acb.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map