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

/***/ "../../../../../src/app/app-component/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header\r\n  class=\"header\"\r\n  id=\"header\"\r\n>\r\n\r\n  <div class=\"header-content\">\r\n\r\n  <nav class=\"titlebar\">\r\n    <img class=\"titlebar-logo\" src=\"../assets/logo-white-text-2.png\" [routerLink]=\"['/overview']\">\r\n      <ul class=\"titlebar-list\">\r\n        <li class=\"titlebar-list-item\">\r\n          <a class=\"titlebar-anchor\" [routerLink]=\"['/overview']\" routerLinkActive=\"titlebar-list-item_selected\">OVERVIEW</a>\r\n        </li>\r\n        <li class=\"titlebar-list-item\">\r\n          <a class=\"titlebar-anchor\" [routerLink]=\"['/portfolio']\" routerLinkActive=\"titlebar-list-item_selected\">PORTFOLIO</a>\r\n        </li>\r\n        <li class=\"titlebar-list-item\">\r\n          <a class=\"titlebar-anchor\" [routerLink]=\"['/skills']\" routerLinkActive=\"titlebar-list-item_selected\">ABOUT&nbsp;ME</a>\r\n        </li>\r\n      </ul>\r\n  </nav>\r\n\r\n\r\n  </div>\r\n  <!-- header content -->\r\n</header>\r\n\r\n<div class=\"content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<footer class=\"footer\">\r\n  <div class=\"footer-content-wrapper\">\r\n    <div class=\"footer-column footer-bio-wrapper\">\r\n      <h3 class=\"footer-heading\">ALISTAIR WILLIS</h3>\r\n      <p class=\"footer-text\">I'm a software developer who uses modern tools and frameworks to build responsive, modular web applications.</p>\r\n      <p class=\"footer-text\">Available for hire: March 2018.</p>\r\n    </div>\r\n\r\n    <div class=\"footer-column footer-contacts-wrapper\">\r\n      <h3 class=\"footer-heading\">EXTERNAL LINKS</h3>\r\n      <a class=\"footer-link\" target=\"_blank\" href=\"https://github.com/ARWL2016\">Github\r\n        <i class=\"footer-icon-link fa fa-github\" aria-hidden=\"true\"></i>\r\n      </a><br>\r\n      <a class=\"footer-link\" target=\"_blank\" href=\"https://app.pluralsight.com/profile/alistair-willis\">\r\n        Pluralsight\r\n      </a><br>\r\n      <a class=\"footer-link\" target=\"_blank\" href=\"https://www.codewars.com/users/ARWL2016\">\r\n        Codewars <img src=\"https://www.codewars.com/users/ARWL2016/badges/micro\">\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"footer-column footer-links-wrapper\">\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"scrollToTop()\">BACK TO TOP</h3>\r\n      <hr class=\"footer-line\">\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"navigateTo('/overview')\">OVERVIEW</h3>\r\n      <!-- <p class=\"footer-text\">See an overview of my projects and link to live websites and the source code.</p> -->\r\n\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"navigateTo('/portfolio')\">PORTFOLIO</h3>\r\n      <!-- <p class=\"footer-text\">See an overview of my projects and link to live websites and the source code.</p> -->\r\n\r\n      <h3 class=\"footer-heading footer-link\" (click)=\"navigateTo('/skills')\">SKILLS</h3>\r\n      <!-- <p class=\"footer-text\">Get a summary of my technical skills and read about my coding philosophy.</p> -->\r\n    </div>\r\n  </div>\r\n\r\n</footer>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app-component/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #222;\n  min-height: 90px;\n  width: 100%; }\n\n.header-content {\n  width: 80%;\n  max-width: 1000px;\n  margin: 0 auto;\n  transition: width 300ms; }\n\n.titlebar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 50px;\n  margin-top: 20px; }\n\n.titlebar-logo {\n  width: 250px;\n  height: 45px;\n  padding-top: 8px;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0; }\n  .titlebar-logo:hover {\n    cursor: pointer; }\n\n.titlebar-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 50px;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.titlebar-list-item {\n  list-style-type: none;\n  display: inline-block;\n  color: white;\n  margin-left: 20px;\n  margin-bottom: 4px;\n  padding: 10px; }\n\n.titlebar-list-item_selected {\n  border-bottom: 4px solid #2587ce;\n  margin-bottom: 0; }\n\n.titlebar-anchor {\n  text-decoration: none;\n  color: #FFF;\n  font-size: 0.9rem;\n  padding: 5px 0 5px 0; }\n\n@media (max-width: 670px) {\n  .header-content {\n    width: 95%; }\n  .titlebar {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .titlebar-list {\n    margin-top: 30px; }\n  .titlebar-list-item {\n    margin-left: 10px; }\n  .header {\n    min-height: 140px; } }\n\n.footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  background-color: #222;\n  color: white;\n  min-height: 300px;\n  bottom: 0; }\n\n.footer-content-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  font-weight: 300;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px;\n  line-height: 1.8em;\n  overflow: auto; }\n\n.footer-column {\n  padding: 20px 20px 20px 50px; }\n  .footer-column:nth-child(1) {\n    width: 40%; }\n  .footer-column:nth-child(2) {\n    width: 30%; }\n  .footer-column:nth-child(3) {\n    width: 30%; }\n\n.footer-heading {\n  font-size: 0.9em; }\n\n.footer-text {\n  font-size: 0.9em;\n  margin-bottom: 10px; }\n\n.footer-link {\n  color: #2587ce;\n  text-decoration: none; }\n  .footer-link:hover {\n    text-decoration: underline;\n    cursor: pointer; }\n  .footer-link:hover {\n    text-decoration: none; }\n\n.footer-icon-link:hover {\n  text-decoration: none; }\n\n.footer-line {\n  color: #2587ce;\n  background-color: #2587ce;\n  height: 2px;\n  border: 0;\n  width: 50%;\n  text-align: left;\n  margin: 10px auto 10px 0; }\n\n@media (max-width: 930px) {\n  .footer-content-wrapper {\n    padding: 30px 10px 10px 10px; }\n  .footer-column {\n    padding: 10px; } }\n\n@media (max-width: 670px) {\n  .footer-column:nth-child(1) {\n    display: none; }\n  .footer-column:nth-child(2) {\n    width: 50%; }\n  .footer-column:nth-child(3) {\n    width: 50%; } }\n\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  min-height: 100vh; }\n\n.content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  background-color: #FFF; }\n", ""]);

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
    // private fragment: string;
    function AppComponent(router) {
        this.router = router;
        // componentLoaded = '/overview';
        // backgroundImage = 'url("../assets/splash-wide.png")';
        // minHeight = '600px';
        this.username = 'alistairrwillis';
        this.hostname = 'gmail.com';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.navigateTo = function (page) {
        // window.scroll({top: 0, left: 0, behavior: 'smooth' });
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
        styles: [__webpack_require__("../../../../../src/app/app-component/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_project_data_service__ = __webpack_require__("../../../../../src/app/services/project-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__overview_overview_component__ = __webpack_require__("../../../../../src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_8__overview_overview_component__["a" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_10__skills_skills_component__["a" /* SkillsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot([
                { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_8__overview_overview_component__["a" /* OverviewComponent */] },
                { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_component__["a" /* PortfolioComponent */] },
                { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_10__skills_skills_component__["a" /* SkillsComponent */] },
                { path: '', redirectTo: 'overview', pathMatch: 'full' },
            ])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7_app_services_project_data_service__["a" /* ProjectDataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6_app_app_component_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "  <div [@showPage]=\"'on'\">\r\n  <!-- <div *ngIf=\"componentLoaded==='/overview'\" class=\"banner\"> -->\r\n    <section class=\"banner-section\" >\r\n      <div class=\"banner-content\">\r\n        <h1 class=\"banner-header\">Full Stack Web Developer</h1>\r\n        <p class=\"banner-text\">HTML | CSS | JAVASCRIPT | JQUERY | ANGULAR | NODE | EXPRESS | MONGODB | MYSQL</p>\r\n\r\n        <p>\r\n          <a href=\"https://github.com/{{name}}\" target=\"_blank\"><i class=\"banner-icon-link fa fa-github\" aria-hidden=\"true\"></i></a>\r\n          <a href=\"mailto:{{username}}@{{hostname}}\" target=\"_blank\"><i class=\"banner-icon-link fa fa-envelope\" aria-hidden=\"true\"></i></a>\r\n        </p>\r\n      </div>\r\n    </section>\r\n    <!-- banner end -->\r\n\r\n  <section class=\"skills-section\">\r\n\r\n        <article class=\"skill-card\">\r\n          <i class=\"fa fa-laptop skill-icon\" aria-hidden=\"true\"></i>\r\n          <h3 class=\"skill-card-heading\">Fluid Design</h3>\r\n          <p class=\"skill-card-text\">\r\n            Using front end libraries like Twitter Bootstrap, as well as custom CSS written in functional style with CSS,\r\n            I create web applications with fluid, responsive and intuitive user interfaces.\r\n          </p>\r\n        </article>\r\n        <article class=\"skill-card\">\r\n          <i class=\"fa fa-industry skill-icon\" aria-hidden=\"true\"></i>\r\n          <h3 class=\"skill-card-heading\">Modern Frameworks</h3>\r\n          <p class=\"skill-card-text\">\r\n            Utilizing a modern, component based framework like AngularJS and Angular / Typescript, I build modular web applications which are easy to quick to develop\r\n            and easy to maintain.\r\n          </p>\r\n        </article>\r\n        <article class=\"skill-card\">\r\n          <i class=\"fa fa-database skill-icon\" aria-hidden=\"true\"></i>\r\n          <h3 class=\"skill-card-heading\">Full Stack Javascript</h3>\r\n          <p class=\"skill-card-text\">\r\n            Using Javascript-based back end technologies such as Node, Express, and MongoDB, I benefit from\r\n            increased efficiency by working in a single language across the whole stack.\r\n          </p>\r\n        </article>\r\n\r\n  </section>\r\n\r\n  <section class=\"portfolio-section\">\r\n    <div class=\"portfolio-content\">\r\n      <div class=\"section-heading-wrapper\">\r\n        <img class=\"project-icon\" src=\"../../assets/webpage-128.png\">\r\n        <h2 class=\"section-heading\">FEATURED WEB APPLICATIONS</h2>\r\n      </div>\r\n      <div class=\"projects\">\r\n\r\n        <article *ngFor=\"let project of projectData\" class=\"project\">\r\n          <div class=\"image-column\">\r\n            <img src={{project.image_url}} class=\"project-image\" [ngStyle]=\"{'order': project.image_order}\" >\r\n          </div>\r\n          <div class=\"text-column\">\r\n            <div class=\"text-wrapper\">\r\n            <h3 class=\"project-heading\">{{project.name | uppercase }}</h3>\r\n            <p class=\"project-text\">{{project.summary}}</p>\r\n              <div class=\"project-links\">\r\n                <a class=\"project-link\" target=\"_blank\" href={{project.github_link}}><i class=\"project-link-icon fa fa-github\" aria-hidden=\"true\"></i>&nbsp;SOURCE&nbsp;CODE</a>\r\n                <a class=\"project-link\" target=\"_blank\" href={{project.website_link}}><i class=\"project-link-icon fa fa-external-link-square\" aria-hidden=\"true\"></i>&nbsp;VIEW&nbsp;WEBSITE</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </article>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner-content {\n  max-width: 1000px;\n  margin: 0 auto; }\n\n.skills-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  max-width: 1000px;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 50px; }\n\n.portfolio-section {\n  width: 100%;\n  background-color: #ededed;\n  margin-bottom: -30px;\n  overflow: auto; }\n\n.portfolio-content {\n  max-width: 1000px;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 25px; }\n  .portfolio-content:last-child {\n    margin-bottom: 100px; }\n\n@media (max-width: 890px) {\n  .banner-content {\n    width: 95%; }\n  .skills-section {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .portfolio-content {\n    width: 95%; } }\n\n.banner-section {\n  height: 650px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/splash-wide.png") + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  overflow: auto; }\n\n.banner-content {\n  margin-top: 230px; }\n\n.banner-header {\n  margin-bottom: 20px;\n  border: 1px dotted white;\n  padding: 5px;\n  padding-left: 10px;\n  letter-spacing: 3px;\n  font-size: 3.2rem;\n  background-color: white;\n  opacity: 0.7; }\n\n.banner-text {\n  font-size: 1.2rem;\n  line-height: 30px;\n  color: white;\n  letter-spacing: 1.5px; }\n\n.banner-icon-link {\n  font-size: 2em;\n  color: white;\n  padding: 15px 20px 15px 0; }\n\n.skill-card {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 33.3%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  line-height: 2rem;\n  padding: 25px;\n  transition: width 300ms; }\n\n.skill-icon {\n  font-size: 2rem;\n  margin-bottom: 5px; }\n\n.skill-card-heading {\n  margin-bottom: 10px;\n  text-align: center; }\n\n.skill-card-text {\n  text-align: center; }\n\n.section-heading-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 100px; }\n\n.project-icon {\n  width: 64px; }\n\n.section-heading {\n  margin-left: 20px;\n  border-radius: 30px;\n  letter-spacing: 2px;\n  font-size: 2.0em;\n  background-color: #FFF;\n  padding: 5px 15px 5px 15px; }\n\n.project {\n  background-color: #fff;\n  border-radius: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-top: 50px;\n  width: 100%;\n  box-shadow: 2px 2px 4px #444; }\n  .project:last-child {\n    margin-bottom: 50px; }\n\n.image-column {\n  width: 310px;\n  float: left; }\n\n.text-column {\n  float: left; }\n\n.text-wrapper {\n  margin: 30px 30px 30px 0; }\n\n.project-image {\n  width: 250px;\n  margin: 30px;\n  border: 1px solid #222;\n  border-radius: 3px;\n  transition: all 250ms; }\n\n.project-text {\n  margin-top: 10px;\n  line-height: 2rem; }\n\n.project-links {\n  margin-top: 40px; }\n\n.project-link {\n  background-color: #FFF;\n  color: #222;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  display: inline-block;\n  padding: 8px 12px 8px 12px;\n  border: 2px solid #2587ce;\n  border-radius: 3px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  transition: background-color 300ms;\n  text-decoration: none;\n  font-weight: 500; }\n  .project-link:hover {\n    cursor: pointer;\n    background-color: #2587ce; }\n\n.project-link-icon {\n  font-size: 1.2em; }\n\n@media (max-width: 890px) {\n  .image-column {\n    width: 200px; }\n  .project-image {\n    width: 150px; }\n  .skill-card {\n    width: 100%; } }\n\n@media (max-width: 670px) {\n  .banner-header {\n    font-size: 2em;\n    margin-top: 100px; }\n  .banner-text {\n    font-size: 1em; } }\n\n@media (max-width: 610px) {\n  .project-image {\n    display: none; }\n  .image-column {\n    width: 0px; }\n  .text-wrapper {\n    margin: 30px 30px 30px 30px; } }\n", ""]);

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
    function OverviewComponent(_data) {
        this._data = _data;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        console.log('overview loaded');
        this.projectData = this._data.projectData.filter(function (project) { return project.featured; });
    };
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-overview',
        template: __webpack_require__("../../../../../src/app/overview/overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/overview/overview.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_project_data_service__["a" /* ProjectDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_project_data_service__["a" /* ProjectDataService */]) === "function" && _a || Object])
], OverviewComponent);

var _a;
//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" [@showPage]=\"'on'\">\r\n\r\n  <div class=\"search-input-wrapper\" >\r\n    <form (keyup)=\"search()\">\r\n      <input class=\"search-input\" name=\"search\" type=\"text\" [(ngModel)]=\"searchTerm\" placeholder=\"search by technology\">\r\n      <i class=\"search-icon fa fa-search\" aria-hidden=\"true\"></i>\r\n      <p *ngIf=\"results !== 1\" class=\"search-result\">{{results}} results</p>\r\n      <p *ngIf=\"results === 1\" class=\"search-result\">{{results}} result</p>\r\n    </form>\r\n  </div>\r\n\r\n<section *ngIf=\"projectData\" class=\"portfolio-content\">\r\n\r\n  <article class=\"project-card\" *ngFor=\"let project of projectData\" [@showPage]=\"'on'\">\r\n    <h1 class=\"project-heading\">{{ project.name }}</h1>\r\n    <p class=\"project-tech\">{{ project.tech | uppercase }}</p>\r\n    <div class=\"project-columns\">\r\n      <div class=\"project-image-column\">\r\n        <img src={{project.image_url}} class=\"project-image\" [ngStyle]=\"{'order': project.image_order}\" >\r\n        <div class=\"project-stat-wrapper\">\r\n          <p class=\"project-stat\">PAGE SIZE <span class=\"project-stat-badge\">{{ project.page_size }}kb</span></p>\r\n          <p class=\"project-stat\">LOAD TIME <span class=\"project-stat-badge\">{{ project.page_load_time }}s</span></p>\r\n          <p class=\"project-stat\">PAGE SPEED SCORE <span class=\"project-stat-badge\">{{ project.page_speed_score }}%</span></p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"project-text-column\">\r\n        <p class=\"project-text\">{{ project.user_stories }}</p>\r\n        <ul class=\"project-list\">\r\n          <li class=\"project-list-item\" *ngFor=\"let highlight of project.highlights\">{{ highlight }}</li>\r\n        </ul>\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"project-links-wrapper\">\r\n      <a class=\"project-link\" target=\"_blank\" href={{project.github_link}}><i class=\"project-link-icon fa fa-github\" aria-hidden=\"true\"></i>&nbsp;SOURCE&nbsp;CODE</a>\r\n      <a class=\"project-link\" target=\"_blank\" href={{project.website_link}}><i class=\"project-link-icon fa fa-external-link-square\" aria-hidden=\"true\"></i>&nbsp;VIEW&nbsp;WEBSITE</a>\r\n    </div>\r\n\r\n  </article>\r\n\r\n</section>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-wrapper {\n  background-color: #ededed;\n  border: 1px solid #ededed;\n  min-height: 70vh; }\n\n.portfolio-content,\n.search-input-wrapper {\n  max-width: 1000px;\n  width: 80%;\n  margin: 0 auto;\n  transition: width 300ms; }\n\n.search-input-wrapper {\n  position: relative; }\n\n.search-input {\n  height: 46px;\n  font-size: 1.2em;\n  border-radius: 10px;\n  padding: 10px;\n  padding-left: 44px;\n  width: 500px;\n  margin-top: 50px;\n  border: 1px solid #2587ce;\n  transition: box-shadow 400ms; }\n  .search-input:focus {\n    box-shadow: 0 0 1px 1px #2587ce;\n    outline: none; }\n\n.search-icon {\n  position: absolute;\n  top: 64px;\n  left: 16px;\n  font-size: 1.2em; }\n\n.search-result {\n  color: #444;\n  font-style: italic;\n  padding: 7px; }\n\n.project-card {\n  background-color: #fff;\n  border-radius: 5px;\n  margin-top: 50px;\n  padding: 30px;\n  width: 100%;\n  box-shadow: 2px 2px 4px #444; }\n  .project-card:first-child {\n    margin-top: 30px; }\n  .project-card:last-child {\n    margin-bottom: 100px; }\n\n.project-heading {\n  margin-bottom: 10px;\n  font-size: 2.2em;\n  color: #2587ce; }\n\n.project-tech {\n  font-size: 0.9em;\n  letter-spacing: 2px;\n  color: #444;\n  margin-bottom: 10px;\n  background-color: #ededed;\n  padding: 8px;\n  border-radius: 3px; }\n\n.project-columns {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 20px 0 30px 0; }\n\n.project-image-column {\n  float: left; }\n\n.project-text-column {\n  float: left;\n  margin: 0 20px 0 20px; }\n\n.project-image {\n  width: 300px;\n  border-radius: 3px;\n  transition: width 300ms; }\n\n.project-text {\n  line-height: 1.8em; }\n\n.project-list {\n  line-height: 1.8em; }\n\n.project-list-item {\n  list-style-type: square; }\n\n.project-stat-wrapper {\n  background-color: #ededed;\n  padding: 10px 15px 10px 15px;\n  margin-top: 20px;\n  border-radius: 3px; }\n\n.project-stat {\n  font-weight: bold;\n  font-size: 0.9em;\n  letter-spacing: 2px;\n  line-height: 2.2em; }\n\n.project-stat-badge {\n  background-color: #2587ce;\n  padding: 3px 8px 3px 8px;\n  border-radius: 10px;\n  color: white;\n  font-size: 0.9em;\n  text-align: right; }\n\n.project-links-wrapper {\n  margin-left: 320px; }\n\n.project-link {\n  background-color: #FFF;\n  color: #222;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  display: inline-block;\n  padding: 8px 12px 8px 12px;\n  border: 2px solid #2587ce;\n  border-radius: 3px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  transition: background-color 300ms;\n  text-decoration: none;\n  font-weight: 500; }\n  .project-link:hover {\n    cursor: pointer;\n    background-color: #2587ce; }\n\n.project-link-icon {\n  font-size: 1.2em; }\n\n@media (max-width: 930px) {\n  .portfolio-content,\n  .search-input-wrapper {\n    width: 95%; }\n  .project-image {\n    width: 200px; }\n  .project-links-wrapper {\n    margin-left: 220px; } }\n\n@media (max-width: 595px) {\n  .project-image-column {\n    display: none; }\n  .project-links-wrapper {\n    margin-left: 20px; } }\n", ""]);

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
    function PortfolioComponent(_data) {
        this._data = _data;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        console.log('portfolio loaded');
        this.projectData = this._data.projectData;
        this.results = this.projectData.length;
    };
    PortfolioComponent.prototype.search = function () {
        var filter = this.searchTerm.trim().concat(',');
        this.projectData = this.transform(this._data.projectData, filter);
        this.results = this.projectData.length;
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
PortfolioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_project_data_service__["a" /* ProjectDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_project_data_service__["a" /* ProjectDataService */]) === "function" && _a || Object])
], PortfolioComponent);

var _a;
//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/project-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function ProjectDataService() {
        this.projectData = [
            {
                name: 'Book Exchange',
                tech: 'Angular 4.0, Typescript, MaterializeCSS, Node, Express, MongoDB, Mongoose, BCrypt, JSON Web Tokens',
                tags: "\n        HTML, CSS, Javascript, Angular 4.0, Typescript, MaterializeCSS,\n        Node, Express, MongoDB, Mongo, Mongoose, BCrypt, JSON Web Tokens,",
                featured: true,
                summary: "\n        Book Exchange is a book trading application which allows authenticated users to search for books on the Google Books API,\n        build a book collection, view other users' collections, and send and receive requests for books.\n        This is a full stack application built on Angular 4.0, MaterializeCSS, Node, Express and MongoDB, and deployed on\n        Heroku with data persistance in the cloud at MLab.\n          ",
                user_stories: "\n        Book Exchange is a book trading app which allows users to search data from the Google Books API and browse other users' books.\n        Authenticated users can also create and manage their own book collection, make requests to other users, and see other users'\n        requests. A messaging function is still to be implemented.\n      ",
                highlights: [
                    'UI implements progress bar, notifications, and background username check during registration',
                    'MaterializeCSS used for navbar and form components, plus icons',
                    'Google Books API basic searches need no API key so requests made from front end for speed',
                    'three entity data structure: user, book and request',
                    'Typescript interfaces used to enforce data structure on front end',
                    'authentication implemented with Bcrypt password encryption and JSON Web Tokens added to HTTP headers',
                    'REST api tested with Mocha and Expect, using Supertest for HTTP request mocking; separate test database with mock data',
                    'data persisted using MongoDB cloud provider MLab'
                ],
                image_url: 'assets/book-exchange-min.png',
                image_order: 0,
                github_link: 'https://github.com/ARWL2016/book-trading-club',
                website_link: 'https://arwl-book-exchange.herokuapp.com/browse',
                page_speed_score: 91,
                page_size: 957,
                page_load_time: 4.19
            },
            {
                name: 'Votogo',
                tech: 'Angular 4.0, Typescript, Bootstrap, Node, Express, MongoDB, Mongoose',
                tags: 'HTML, CSS, Javascript, Angular 4.0, Typescript, Bootstrap, Node, Express, MongoDB, Mongo, Mongoose,',
                featured: true,
                summary: "\n        Votogo is a full stack CRUD application that allows users to create,\n        share and view the results of surveys. It is built with Angular, Node, Express and MongoDB\n        and includes an authentication module using BCrypt.js for password encryption and JSON Web Tokens\n        for secure sessions.\n          ",
                user_stories: "\n        Votogo is a full stack CRUD application that allows authenticated users to create,\n        share and view the results of surveys. Topics can be serached by title, and voting results can be\n        viewed in both table and chart format.\n        ",
                highlights: [
                    'CRUD application with RESTful API',
                    'UI implemented using Bootstrap panels, buttons and navigation bar',
                    'Angular animations module used for smoothing transitions during data requests',
                    'Chart.js doughtnut chart implemented as Angular child component',
                    'two entity data structure: users and votes persisted with MongoDB using Mongoose schema',
                    'authentication module uses JSON Web Tokens to implement secure sessions'
                ],
                image_url: 'assets/votogo-sm.png',
                image_order: 0,
                github_link: 'https://github.com/ARWL2016/voting-app',
                website_link: 'https://votogo.herokuapp.com/home',
                page_speed_score: 91,
                page_size: 530,
                page_load_time: 4.11
            },
            {
                name: 'Stock Tracker',
                tech: 'AngularJS 1.6, CSS, Node, Express, MySQL, Chart.js',
                tags: 'HTML, CSS, Javascript, AngularJS 1.6, CSS, Node, Express, MySQL, Chart.js,',
                featured: true,
                summary: "\n        Stock Tracker is an AngularJS application which charts time series data from the FTSE 100\n        using the Quandl API. Data is cached once a day on a MySQL database, ensuring rapid load times.\n        The back end is written in Node and Express.\n        ",
                user_stories: "\n        Stock tracking application which allows users to view stock data from the FTSE 100 over the last\n        five years. Users can select and compare different stocks, and alter the timescale between three months\n        and five years.\n      ",
                highlights: [
                    'custom UI built without CSS framework',
                    'renders line graph from Chart.js using daily stock prices',
                    'back end makes daily series of requests to Quandl API to update stock data',
                    'data persisted on a MySQL database at JawsDB via Heroku'
                ],
                image_url: 'assets/stocko.png',
                image_order: 0,
                github_link: 'https://github.com/ARWL2016/stock-tracker',
                website_link: 'https://arwl-stock-tracker.herokuapp.com/main',
                page_speed_score: 0,
                page_size: 264,
                page_load_time: 3.35
            },
            {
                name: 'JS-Calculator',
                tech: 'HTML, Sass, ES6, Webpack',
                tags: 'HTML, CSS, Javascript, HTML, Sass, ES6, Webpack,',
                featured: false,
                summary: "\n        This calculator was originally written in jQuery then refactored to native Javascript to reduce\n        unnecessary dependencies. Webpack is used as a build tool to transpile ES6 and process the Sass stylesheets.\n        The project is tested with Mocha and JSDom.\n        ",
                user_stories: "\n        Browser based calculator with basic arithmetic operators and a memory function. Operations can be chained\n        and the correct order of operations will be followed. The interface uses a skeuomorphic design and\n        permits keyboard or mouse input.\n       ",
                highlights: [
                    'custom UI design written in Sass with modular structure',
                    'uses Webpack to transpile ES6 and Sass; code splitting produces separate CSS bundle',
                    'DOM manipulation written in native Javascript; DOM selections cached for greater efficiency'
                ],
                image_url: 'assets/calculator.png',
                image_order: 0,
                github_link: 'https://github.com/ARWL2016/js-calculator',
                website_link: 'https://calculator-arwl.herokuapp.com/',
                page_speed_score: 91,
                page_size: 56,
                page_load_time: 0.79
            },
            {
                name: 'Noughts and Crosses Game',
                tech: 'HTML, Sass, Javascript, JQuery, Babel, Webpack',
                tags: 'HTML, CSS, Javascript, Sass, ES6, JQuery, Babel, Webpack,',
                featured: true,
                summary: "\n        This is a noughts-and-crosses implementation built with ES6, JQuery and Sass and using Webpack as a build tool\n        to run the Babel compiler and process the style declarations to CSS. The algorithm consists of three general\n        strategy functions augmented by a small number of hard-coded moves.\n        ",
                user_stories: "\n        This is a noughts-and-crosses implementation with an unbeatable AI. Users can play against the computer\n        as O or X, play against another human, or watch a game between two computer players. The application will\n        keep score until the players change sides.\n       ",
                highlights: [
                    'JQuery and JQueryUI loaded via CDN',
                    'CSS3 transition effects create smooth game experience',
                    'Sass variables and color functions used to ensure consistent color design',
                    'uses Webpack to transpile Javascript to ES5 and Sass to CSS'
                ],
                image_url: 'assets/tictactoe.png',
                image_order: 0,
                github_link: 'https://github.com/ARWL2016/nought-and-cross-app',
                website_link: 'https://arwl-noughts-and-crosses.herokuapp.com/',
                page_speed_score: 92,
                page_size: 185,
                page_load_time: 2.96
            },
            {
                name: 'Game of Life Simulation',
                tech: 'HTML, CSS, Foundation, Javascript, JQuery',
                tags: 'HTML, CSS, Javascript, Foundation, JQuery,',
                featured: true,
                summary: "\n        This front end web application is an implementation of Conway's game of life using JQuery and Foundation.\n        Users can start and stop the simulation, add and remove cells, and change the speed.\n        ",
                user_stories: "\n        This application is an implementation of Conway's Game of Life, a grid of cells which follow a\n        few simple rules but produce complex and apparently life-life patterns. Users can start and stop\n        the simulation, add and remove cells, and change the speed.\n       ",
                highlights: [
                    'uses JQuery methods for handling user events and DOM manipulation',
                    'responsive navigation panel created with Foundation',
                    'object literals used for code encapsulation'
                ],
                image_url: 'assets/game-of-life-min.png',
                image_order: 0,
                github_link: 'https://github.com/ARWL2016/game-of-life-jquery',
                website_link: 'https://arwl-game-of-life.herokuapp.com/',
                page_speed_score: 0,
                page_size: 73,
                page_load_time: 2.65
            }
        ];
    }
    return ProjectDataService;
}());
ProjectDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProjectDataService);

//# sourceMappingURL=project-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" [@showPage]=\"'on'\">\r\n  <div class=\"content-wrapper\">\r\n  <section class=\"skills-section\">\r\n\r\n    <div class=\"skills-heading-wrapper\">\r\n      <img class=\"skills-icon\" src=\"../../assets/skills.png\">\r\n      <h2 class=\"skills-heading\">ABOUT ME</h2>\r\n    </div>\r\n    <p class=\"skills-text\">\r\n      I am an aspiring web developer specializing in full stack Javascript applications using the MEAN stack -\r\n      Angular, Express, Node and MongoDB or MySQL. I work with a modern development environment, using Webpack\r\n      for module bundling, NPM for package management and build scripts, and various CSS frameworks for rapid\r\n      prototyping, as well as native CSS.\r\n    </p>\r\n    <p class=\"skills-text\">\r\n      As a developer, I strive to write code which is clean and concise but readable and easy to maintain. I work\r\n      mainly with Angular because I value its clear organisation and separation of concerns. I also make\r\n      use of any syntax and methods which improve code clarity and maintainability, such as ES6, promises, Sass\r\n      and the B.E.M. methodology for modular CSS.\r\n    </p>\r\n\r\n    <table class=\"skills-table\">\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Languages</td>\r\n        <td class=\"skills-table-cell\">HTML, CSS, Javascript (ES6), Typescript, SQL</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">CSS Frameworks / Preprocessors</td>\r\n        <td class=\"skills-table-cell\">Bootstrap, Sass</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Front End</td>\r\n        <td class=\"skills-table-cell\">Angular, AngularJS, JQuery</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Server Side</td>\r\n        <td class=\"skills-table-cell\">Node, Express</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Data Layer</td>\r\n        <td class=\"skills-table-cell\">MongoDB, Mongoose, MySQL</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Testing</td>\r\n        <td class=\"skills-table-cell\">Mocha, Chai, Supertest</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Build Tools</td>\r\n        <td class=\"skills-table-cell\">Npm Scripts, Bower, Webpack</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n          <td class=\"skills-table-cell\">Version Control</td>\r\n          <td class=\"skills-table-cell\">Git, Github</td>\r\n        </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Hosting</td>\r\n        <td class=\"skills-table-cell\">Heroku, MLab</td>\r\n      </tr>\r\n      <tr class=\"skills-table-row\">\r\n        <td class=\"skills-table-cell\">Tools</td>\r\n        <td class=\"skills-table-cell\">Visual Studio Code, Powershell, Chrome DevTools, Postman, Robomongo, MySQL Workbench</td>\r\n      </tr>\r\n    </table>\r\n\r\n    <div class=\"skills-heading-wrapper\">\r\n        <img class=\"skills-icon\" src=\"../../assets/studying.png\">\r\n        <h2 class=\"skills-heading\">LEARNING</h2>\r\n    </div>\r\n    <p class=\"skills-text\">\r\n      I make heavy use of Pluralsight to upgrade my skills and learn new techniques.\r\n      You can view skills evaluations for Javascript, Node and other technologies,\r\n      and view a list of completed courses, on the <a class=\"text-link\" href=\"https://app.pluralsight.com/profile/alistair-willis\" target=\"_blank\">profile page.</a>\r\n    </p>\r\n    <p class=\"skills-text\">For practicing algorithms and sharpening problem solving skills\r\n      I use the Codewars site. You can see my ranking for Javascript, Java and C# on the\r\n      <a class=\"text-link\" href=\"https://www.codewars.com/users/ARWL2016\" target=\"_blank\">profile page</a> and view solutions as <a class=\"text-link\" href=\"https://gist.github.com/ARWL2016\" target=\"blank\">Github gists</a>.\r\n\r\n    </p>\r\n\r\n\r\n  </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-wrapper {\n  background-color: #ededed; }\n\n.content-wrapper {\n  max-width: 1000px;\n  margin: 0 auto;\n  background-color: white;\n  border: 1px solid white; }\n\n.skills-section {\n  max-width: 800px;\n  margin: 0 auto;\n  margin-top: 100px;\n  margin-bottom: 100px; }\n\n.skills-heading-wrapper {\n  margin-bottom: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: left;\n  margin-top: 50px; }\n\n.skills-icon {\n  height: 36px; }\n\n.skills-heading {\n  margin-left: 18px; }\n\n.skills-text {\n  margin-bottom: 20px;\n  line-height: 1.8em; }\n  .skills-text:last-child {\n    margin-bottom: 50px; }\n\n.text-link {\n  color: #2587ce;\n  text-decoration: none; }\n  .text-link:hover {\n    text-decoration: underline;\n    cursor: pointer; }\n\n.skills-table {\n  border: 1px solid #2587ce;\n  border-collapse: collapse;\n  margin-bottom: 20px; }\n\n.skills-table-cell {\n  padding: 10px;\n  font-weight: bold;\n  border: 1px solid #0e324c;\n  line-height: 1.5em;\n  font-size: 1.1em; }\n\n.skills-table-cell:first-child {\n  color: white;\n  background-color: #2587ce; }\n\n@media (max-width: 800px) {\n  .skills-section {\n    width: 90%; } }\n", ""]);

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

/***/ "../../../../../src/assets/splash-wide.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "splash-wide.d96c2a93d881f2fca9e8.png";

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