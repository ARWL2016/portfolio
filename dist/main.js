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

/***/ "./src/app/_core/layout/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/_core/layout/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateTo(page) {
        this.router.navigate([page]);
        this.scrollToTop();
    }
    scrollToTop() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 30, vars: 0, consts: [[1, "column", "left"], [1, "column", "middle"], ["target", "_blank", "href", "https://github.com/ARWL2016", 1, "link"], [1, "icon-link", "fa", "fa-github"], ["target", "_blank", "href", "https://app.pluralsight.com/profile/alistair-willis", 1, "link"], ["target", "_blank", "href", "https://www.codewars.com/users/ARWL2016", 1, "link"], ["src", "https://www.codewars.com/users/ARWL2016/badges/micro"], [1, "column", "right"], [1, "link", 3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ALISTAIR WILLIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I'm a software developer who uses modern tools and frameworks to build responsive, modular web applications.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "EXTERNAL LINKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Pluralsight ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Codewars ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_h3_click_21_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "BACK TO TOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_h3_click_24_listener() { return ctx.navigateTo("/overview"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "OVERVIEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_h3_click_26_listener() { return ctx.navigateTo("/portfolio"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_h3_click_28_listener() { return ctx.navigateTo("/skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  display: flex;\n  display: -webkit-flex;\n  flex-grow: 0;\n  background-color: #222;\n  color: white;\n  min-height: 300px;\n  bottom: 0;\n}\n\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  font-weight: 300;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 30px 0;\n  line-height: 1.8em;\n  overflow: auto;\n}\n\n.column[_ngcontent-%COMP%] {\n  padding: 20px 20px 20px 50px;\n}\n\n.column.left[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.column.middle[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.column.right[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-family: \"Montserrat\", sans-serif;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  margin-bottom: 10px;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: #2587ce;\n  text-decoration: none;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.icon-link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\nhr[_ngcontent-%COMP%] {\n  color: #2587ce;\n  background-color: #2587ce;\n  height: 2px;\n  border: 0;\n  width: 50%;\n  text-align: left;\n  margin: 10px auto 10px 0;\n}\n\n@media (max-width: 930px) {\n  main[_ngcontent-%COMP%] {\n    padding: 30px 10px 10px 10px;\n  }\n\n  .column[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n\n@media (max-width: 670px) {\n  .column.left[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .column.middle[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  .column.right[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvcmUvbGF5b3V0L2Zvb3Rlci9DOlxcVXNlcnNcXEFsaXN0YWlyXFxEb2N1bWVudHNcXEdpdEh1YlxcUHJvamVjdHNcXHBvcnRmb2xpby9zcmNcXGFwcFxcX2NvcmVcXGxheW91dFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL19jb3JlL2xheW91dC9mb290ZXIvQzpcXFVzZXJzXFxBbGlzdGFpclxcRG9jdW1lbnRzXFxHaXRIdWJcXFByb2plY3RzXFxwb3J0Zm9saW8vc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvX2NvcmUvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNnREUsYUFBQTtFQUlBLHFCQUFBO0VEbERBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUVHRjs7QUZBQTtFQ3VDRSxhQUFBO0VBSUEscUJBQUE7RUR6Q0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQ2RrQjtFRGVsQixjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRU9GOztBRkpBO0VBQ0UsNEJBQUE7QUVPRjs7QUZMRztFQUNDLFVBQUE7QUVPSjs7QUZKRTtFQUNFLFVBQUE7QUVNSjs7QUZKRTtFQUNFLFVBQUE7QUVNSjs7QUZGQTtFQUNFLGdCQUFBO0VBQ0EscUNDbENhO0FDdUNmOztBRkZBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRUtGOztBRkZBO0VDUEUsY0F0Q2dCO0VBdUNoQixxQkFBQTtBQ2FGOztBRFhFO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FDYUo7O0FGVEU7RUFDRSxxQkFBQTtBRVdKOztBRk5FO0VBQ0UscUJBQUE7QUVTSjs7QUZMQTtFQUNFLGNDM0RnQjtFRDREaEIseUJDNURnQjtFRDZEaEIsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBRVFGOztBRkxBO0VBQ0U7SUFDRSw0QkFBQTtFRVFGOztFRkxBO0lBQ0UsYUFBQTtFRVFGO0FBQ0Y7O0FGTEE7RUFDRTtJQUNFLGFBQUE7RUVPRjs7RUZMQTtJQUNFLFVBQUE7RUVRRjs7RUZOQTtJQUNFLFVBQUE7RUVTRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvX2NvcmUvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG5mb290ZXIge1xyXG4gIEBpbmNsdWRlIGZsZXgoKTtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBAaW5jbHVkZSBmbGV4KCk7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1heC13aWR0aDogJG1heC1jb250ZW50LXdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDMwcHggMDtcclxuICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDUwcHg7XHJcblxyXG4gICAmLmxlZnQge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcblxyXG4gICYubWlkZGxlIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gICYucmlnaHQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGZvbnQtZmFtaWx5OiAkaGVhZGluZy1mb250O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICBAaW5jbHVkZSBwcm9qZWN0LWxpbmtzKCk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbi1saW5rIHtcclxuICAmOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmhyIHtcclxuICBjb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvcmRlcjogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMTBweCAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTMwcHgpIHtcclxuICBtYWluIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY29sdW1uIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjcwcHgpIHtcclxuICAuY29sdW1uLmxlZnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmNvbHVtbi5taWRkbGUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgLmNvbHVtbi5yaWdodCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG4iLCJcclxuJG1heC1jb250ZW50LXdpZHRoOiAxMjAwcHg7XHJcbiRoaWdobGlnaHQtY29sb3I6ICMyNTg3Y2U7XHJcbiRsaWdodC1ncmV5LWJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiRtdXN0YXJkLXllbGxvdzogI0ZGQzg1NztcclxuJGhlYWRpbmctZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kbGlua2VkaW4tY29sb3VyOiByZ2IoMCwgMTE5LCAxODEpO1xyXG5cclxuJGJveC1zaGFkb3ctc3R5bGU6IDBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuJGJveC1zaGFkb3ctc3R5bGUtc21hbGw6IDBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuJHRhbGwtbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG5cclxuQG1peGluIHByb2plY3QtYnV0dG9ucygkY29sb3VyKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBjb2xvcjogIzIyMjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtc2l6ZTogIDAuOXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogOHB4IDEycHggOHB4IDEycHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG91cjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcHJvamVjdC1idXR0b24tbGluaygpIHtcclxuICBAaW5jbHVkZSBwcm9qZWN0LWJ1dHRvbnMoJGhpZ2hsaWdodC1jb2xvcik7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gcHJvamVjdC1saW5rcygpIHtcclxuICBjb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleCgpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxufVxyXG4iLCJmb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGZsZXgtZ3JvdzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgYm90dG9tOiAwO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNvbHVtbiB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDUwcHg7XG59XG4uY29sdW1uLmxlZnQge1xuICB3aWR0aDogNDAlO1xufVxuLmNvbHVtbi5taWRkbGUge1xuICB3aWR0aDogMzAlO1xufVxuLmNvbHVtbi5yaWdodCB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxpbmsge1xuICBjb2xvcjogIzI1ODdjZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmxpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pY29uLWxpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmhyIHtcbiAgY29sb3I6ICMyNTg3Y2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTg3Y2U7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXI6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMTBweCBhdXRvIDEwcHggMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkzMHB4KSB7XG4gIG1haW4ge1xuICAgIHBhZGRpbmc6IDMwcHggMTBweCAxMHB4IDEwcHg7XG4gIH1cblxuICAuY29sdW1uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjcwcHgpIHtcbiAgLmNvbHVtbi5sZWZ0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbHVtbi5taWRkbGUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAuY29sdW1uLnJpZ2h0IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_core/layout/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/_core/layout/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/_shared/logo/logo.component */ "./src/app/_shared/logo/logo.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 0, consts: [["id", "header", 1, "background"], ["routerLink", "/overview", "routerLinkActive", "selected-link"], ["routerLink", "/portfolio", "routerLinkActive", "selected-link"], ["routerLink", "/skills", "routerLinkActive", "selected-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OVERVIEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ABOUT\u00A0ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [app_shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__["LogoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["div.background[_ngcontent-%COMP%] {\n  background-color: #222;\n  font-family: \"Montserrat\", sans-serif;\n  min-height: 80px;\n  width: 100%;\n  padding: 15px;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 50px;\n  width: 80%;\n  max-width: 1200px;\n  margin: 0 auto;\n  transition: width 300ms;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  display: -webkit-flex;\n  margin: 0;\n  flex-grow: 1;\n  align-items: center;\n  height: 50px;\n  justify-content: flex-end;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: inline-block;\n  color: white;\n  margin-left: 20px;\n  margin-bottom: 4px;\n  padding: 10px;\n}\n\nul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #FFF;\n  font-size: 0.85rem;\n  padding: 5px 0 5px 0;\n}\n\nul[_ngcontent-%COMP%]   a.selected-link[_ngcontent-%COMP%] {\n  border-bottom: 4px solid #2587ce;\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 770px) {\n  div.background[_ngcontent-%COMP%] {\n    min-height: 120px;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    width: 95%;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    padding: 10px 20px;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  div.background[_ngcontent-%COMP%] {\n    padding: 20px 10px 10px 10px;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 10px 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvcmUvbGF5b3V0L2hlYWRlci9DOlxcVXNlcnNcXEFsaXN0YWlyXFxEb2N1bWVudHNcXEdpdEh1YlxcUHJvamVjdHNcXHBvcnRmb2xpby9zcmNcXGFwcFxcX2NvcmVcXGxheW91dFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL19jb3JlL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9fY29yZS9sYXlvdXQvaGVhZGVyL0M6XFxVc2Vyc1xcQWxpc3RhaXJcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0RGOztBRElBO0VFd0NFLGFBQUE7RUFJQSxxQkFBQTtFRjFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7RUFDQSxpQkVoQmtCO0VGaUJsQixjQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURDQTtFRTRCRSxhQUFBO0VBSUEscUJBQUE7RUY5QkEsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ01GOztBREpFO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ01KOztBREhFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0tKOztBREhJO0VBQ0UsZ0NBQUE7RUFDRixnQkFBQTtBQ0tKOztBREVBO0VBQ0U7SUFDRSxpQkFBQTtFQ0NGOztFREVBO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUNDRjs7RURFQTtJQUNFLGdCQUFBO0VDQ0Y7RURDRTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUNDSjtBQUNGOztBRE9BO0VBQ0U7SUFDRSw0QkFBQTtFQ0xGOztFRFFBO0lBQ0UsV0FBQTtFQ0xGOztFRFFBO0lBQ0UsZ0JBQUE7RUNMRjtFRE9FO0lBQ0UsaUJBQUE7RUNMSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvX2NvcmUvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG5kaXYuYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxubmF2IHtcclxuICBAaW5jbHVkZSBmbGV4KCk7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogJG1heC1jb250ZW50LXdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zO1xyXG59XHJcblxyXG51bCB7XHJcbiAgQGluY2x1ZGUgZmxleCgpO1xyXG4gIG1hcmdpbjogMDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xyXG5cclxuICAgICYuc2VsZWN0ZWQtbGluayB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcclxuICBkaXYuYmFja2dyb3VuZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIGRpdi5iYWNrZ3JvdW5kIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgcGFkZGluZzogMTBweCAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbiIsImRpdi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcztcbn1cblxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIG1hcmdpbjogMDtcbiAgZmxleC1ncm93OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG51bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG51bCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbn1cbnVsIGEuc2VsZWN0ZWQtbGluayB7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjU4N2NlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xuICBkaXYuYmFja2dyb3VuZCB7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gIH1cblxuICBuYXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogOTUlO1xuICB9XG5cbiAgdWwge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgdWwgbGkge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgZGl2LmJhY2tncm91bmQge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4IDEwcHg7XG4gIH1cblxuICBuYXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgdWwge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgdWwgbGkge1xuICAgIHBhZGRpbmc6IDEwcHggM3B4O1xuICB9XG59IiwiXHJcbiRtYXgtY29udGVudC13aWR0aDogMTIwMHB4O1xyXG4kaGlnaGxpZ2h0LWNvbG9yOiAjMjU4N2NlO1xyXG4kbGlnaHQtZ3JleS1iYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4kbXVzdGFyZC15ZWxsb3c6ICNGRkM4NTc7XHJcbiRoZWFkaW5nLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGxpbmtlZGluLWNvbG91cjogcmdiKDAsIDExOSwgMTgxKTtcclxuXHJcbiRib3gtc2hhZG93LXN0eWxlOiAwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiRib3gtc2hhZG93LXN0eWxlLXNtYWxsOiAwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiR0YWxsLWxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuXHJcbkBtaXhpbiBwcm9qZWN0LWJ1dHRvbnMoJGNvbG91cikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXNpemU6ICAwLjlyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvdXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHByb2plY3QtYnV0dG9uLWxpbmsoKSB7XHJcbiAgQGluY2x1ZGUgcHJvamVjdC1idXR0b25zKCRoaWdobGlnaHQtY29sb3IpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHByb2plY3QtbGlua3MoKSB7XHJcbiAgY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgoKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_core/services/content.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_core/services/content.service.ts ***!
  \***************************************************/
/*! exports provided: ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






class ContentService {
    constructor(http) {
        this.http = http;
        this.contentSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.content = this.contentSource.asObservable();
    }
    loadProjectData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.http.get('/content').subscribe(content => {
                this.contentSource.next(content);
            });
        });
    }
}
ContentService.ɵfac = function ContentService_Factory(t) { return new (t || ContentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ContentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContentService, factory: ContentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_core/services/ping.service.ts":
/*!************************************************!*\
  !*** ./src/app/_core/services/ping.service.ts ***!
  \************************************************/
/*! exports provided: PingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PingService", function() { return PingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class PingService {
    constructor(http) {
        this.http = http;
        this.primary = false;
        this.secondary = false;
    }
    ping(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this[type] === false) {
                try {
                    // await this.http.post('/ping', {type}).toPromise();
                    this[type] = true;
                }
                catch (err) {
                    console.log('Heroku request error');
                }
            }
        });
    }
}
PingService.ɵfac = function PingService_Factory(t) { return new (t || PingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PingService, factory: PingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_shared/animations.ts":
/*!***************************************!*\
  !*** ./src/app/_shared/animations.ts ***!
  \***************************************/
/*! exports provided: pageTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageTransition", function() { return pageTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

// import { Component, Input } from '@angular/core';
const pageTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showPage', [
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

/***/ "./src/app/_shared/button-link/button-link.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_shared/button-link/button-link.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLinkComponent", function() { return ButtonLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ButtonLinkComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonLinkComponent.ɵfac = function ButtonLinkComponent_Factory(t) { return new (t || ButtonLinkComponent)(); };
ButtonLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonLinkComponent, selectors: [["app-button-link"]], inputs: { href: "href", value: "value", iconClass: "iconClass" }, decls: 3, vars: 4, consts: [["target", "_blank", 3, "href"]], template: function ButtonLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.iconClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value, "\n");
    } }, styles: ["a[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  color: #222;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  display: inline-block;\n  padding: 8px 12px;\n  border: 2px solid #2587ce;\n  border-radius: 3px;\n  font-weight: 500;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n  transition: background-color 300ms;\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #2587ce;\n  color: white;\n}\na[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX3NoYXJlZC9idXR0b24tbGluay9DOlxcVXNlcnNcXEFsaXN0YWlyXFxEb2N1bWVudHNcXEdpdEh1YlxcUHJvamVjdHNcXHBvcnRmb2xpby9zcmNcXGFwcFxcX3NoYXJlZFxcYnV0dG9uLWxpbmtcXGJ1dHRvbi1saW5rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9fc2hhcmVkL2J1dHRvbi1saW5rL2J1dHRvbi1saW5rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9fc2hhcmVkL2J1dHRvbi1saW5rL0M6XFxVc2Vyc1xcQWxpc3RhaXJcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBR0Esa0NBQUE7QUNIRjtBREtFO0VBQ0UsZUFBQTtFQUNBLHlCRXJCYztFRnNCZCxZQUFBO0FDSEo7QURNRTtFQUNFLGVBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL19zaGFyZWQvYnV0dG9uLWxpbmsvYnV0dG9uLWxpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG5hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1zaXplOiAgMC45cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG4iLCJhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgY29sb3I6ICMyMjI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjU4N2NlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XG59XG5hOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU4N2NlO1xuICBjb2xvcjogd2hpdGU7XG59XG5hIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59IiwiXHJcbiRtYXgtY29udGVudC13aWR0aDogMTIwMHB4O1xyXG4kaGlnaGxpZ2h0LWNvbG9yOiAjMjU4N2NlO1xyXG4kbGlnaHQtZ3JleS1iYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4kbXVzdGFyZC15ZWxsb3c6ICNGRkM4NTc7XHJcbiRoZWFkaW5nLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGxpbmtlZGluLWNvbG91cjogcmdiKDAsIDExOSwgMTgxKTtcclxuXHJcbiRib3gtc2hhZG93LXN0eWxlOiAwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiRib3gtc2hhZG93LXN0eWxlLXNtYWxsOiAwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiR0YWxsLWxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuXHJcbkBtaXhpbiBwcm9qZWN0LWJ1dHRvbnMoJGNvbG91cikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXNpemU6ICAwLjlyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvdXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHByb2plY3QtYnV0dG9uLWxpbmsoKSB7XHJcbiAgQGluY2x1ZGUgcHJvamVjdC1idXR0b25zKCRoaWdobGlnaHQtY29sb3IpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHByb2plY3QtbGlua3MoKSB7XHJcbiAgY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgoKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonLinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button-link',
                templateUrl: './button-link.component.html',
                styleUrls: ['./button-link.component.scss']
            }]
    }], function () { return []; }, { href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], iconClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/_shared/logo/logo.component.ts":
/*!************************************************!*\
  !*** ./src/app/_shared/logo/logo.component.ts ***!
  \************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class LogoComponent {
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 6, vars: 0, consts: [[1, "logo-wrapper"], ["src", "../assets/logos/logo_blue-100.png", "routerLink", "/overview", 1, "titlebar-logo"], [1, "logo-title"], [1, "logo-name"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Full Stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Alistair Willis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".logo-wrapper[_ngcontent-%COMP%] {\n  width: 280px;\n  min-width: 280px;\n  height: 45px;\n  position: relative;\n  display: inline-block;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 45px;\n  width: auto;\n  outline: none;\n}\n.logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.logo-wrapper[_ngcontent-%COMP%]   .logo-title[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  position: absolute;\n  top: 2px;\n  left: 85px;\n  padding: 0;\n}\n.logo-wrapper[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 100px;\n  font-size: 1.1em;\n  letter-spacing: 1.3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX3NoYXJlZC9sb2dvL0M6XFxVc2Vyc1xcQWxpc3RhaXJcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcYXBwXFxfc2hhcmVkXFxsb2dvXFxsb2dvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9fc2hhcmVkL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0o7QURBSTtFQUNFLGVBQUE7QUNFTjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvX3NoYXJlZC9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby13cmFwcGVyIHtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgbWluLXdpZHRoOiAyODBweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9nby10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBsZWZ0OiA4NXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5sb2dvLW5hbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMnB4O1xyXG4gICAgbGVmdDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xyXG4gIH1cclxufVxyXG4iLCIubG9nby13cmFwcGVyIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvZ28td3JhcHBlciBpbWcge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmxvZ28td3JhcHBlciBpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubG9nby13cmFwcGVyIC5sb2dvLXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJweDtcbiAgbGVmdDogODVweDtcbiAgcGFkZGluZzogMDtcbn1cbi5sb2dvLXdyYXBwZXIgLmxvZ28tbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMnB4O1xuICBsZWZ0OiAxMDBweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_core/services/content.service */ "./src/app/_core/services/content.service.ts");
/* harmony import */ var _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_core/layout/header/header.component */ "./src/app/_core/layout/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_core/layout/footer/footer.component */ "./src/app/_core/layout/footer/footer.component.ts");







class AppComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        console.log('app component init');
        this.data.loadProjectData();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["role", "main", 1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  min-height: 100vh;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-shrink: 0;\n  background-color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBbGlzdGFpclxcRG9jdW1lbnRzXFxHaXRIdWJcXFByb2plY3RzXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQzpcXFVzZXJzXFxBbGlzdGFpclxcRG9jdW1lbnRzXFxHaXRIdWJcXFByb2plY3RzXFxwb3J0Zm9saW8vc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDZ0RFLGFBQUE7RUFJQSxxQkFBQTtFRGxEQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FFR0Y7O0FGQUE7RUNxQ0UsYUFBQTtFQUlBLHFCQUFBO0VEdkNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBRU9GIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIEBpbmNsdWRlIGZsZXgoKTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBAaW5jbHVkZSBmbGV4KCk7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIlxyXG4kbWF4LWNvbnRlbnQtd2lkdGg6IDEyMDBweDtcclxuJGhpZ2hsaWdodC1jb2xvcjogIzI1ODdjZTtcclxuJGxpZ2h0LWdyZXktYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuJG11c3RhcmQteWVsbG93OiAjRkZDODU3O1xyXG4kaGVhZGluZy1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRsaW5rZWRpbi1jb2xvdXI6IHJnYigwLCAxMTksIDE4MSk7XHJcblxyXG4kYm94LXNoYWRvdy1zdHlsZTogMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xyXG4kYm94LXNoYWRvdy1zdHlsZS1zbWFsbDogMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xyXG4kdGFsbC1saW5lLWhlaWdodDogMS44ZW07XHJcblxyXG5AbWl4aW4gcHJvamVjdC1idXR0b25zKCRjb2xvdXIpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1zaXplOiAgMC45cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA4cHggMTJweCA4cHggMTJweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3VyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwcm9qZWN0LWJ1dHRvbi1saW5rKCkge1xyXG4gIEBpbmNsdWRlIHByb2plY3QtYnV0dG9ucygkaGlnaGxpZ2h0LWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBwcm9qZWN0LWxpbmtzKCkge1xyXG4gIGNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _core_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var app_shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/_shared/logo/logo.component */ "./src/app/_shared/logo/logo.component.ts");
/* harmony import */ var _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_core/layout/header/header.component */ "./src/app/_core/layout/header/header.component.ts");
/* harmony import */ var _core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_core/layout/footer/footer.component */ "./src/app/_core/layout/footer/footer.component.ts");
/* harmony import */ var _overview_banner_banner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./overview/banner/banner.component */ "./src/app/overview/banner/banner.component.ts");
/* harmony import */ var _overview_skills_summary_skills_summary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./overview/skills-summary/skills-summary.component */ "./src/app/overview/skills-summary/skills-summary.component.ts");
/* harmony import */ var _overview_featured_apps_featured_apps_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./overview/featured-apps/featured-apps.component */ "./src/app/overview/featured-apps/featured-apps.component.ts");
/* harmony import */ var _portfolio_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./portfolio/search/search.component */ "./src/app/portfolio/search/search.component.ts");
/* harmony import */ var _portfolio_stat_stat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./portfolio/stat/stat.component */ "./src/app/portfolio/stat/stat.component.ts");
/* harmony import */ var _shared_button_link_button_link_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_shared/button-link/button-link.component */ "./src/app/_shared/button-link/button-link.component.ts");
/* harmony import */ var _portfolio_portfolio_banner_portfolio_banner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./portfolio/portfolio-banner/portfolio-banner.component */ "./src/app/portfolio/portfolio-banner/portfolio-banner.component.ts");
/* harmony import */ var _skills_skills_table_skills_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./skills/skills-table/skills-table.component */ "./src/app/skills/skills-table/skills-table.component.ts");
























const routes = [
    { path: 'overview', component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_7__["OverviewComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"] },
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _overview_overview_component__WEBPACK_IMPORTED_MODULE_7__["OverviewComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
        _email_email_component__WEBPACK_IMPORTED_MODULE_10__["EmailComponent"],
        app_shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_11__["LogoComponent"],
        _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
        _core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _overview_banner_banner_component__WEBPACK_IMPORTED_MODULE_14__["BannerComponent"],
        _overview_skills_summary_skills_summary_component__WEBPACK_IMPORTED_MODULE_15__["SkillsSummaryComponent"],
        _overview_featured_apps_featured_apps_component__WEBPACK_IMPORTED_MODULE_16__["FeaturedAppsComponent"],
        _portfolio_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
        _portfolio_stat_stat_component__WEBPACK_IMPORTED_MODULE_18__["StatComponent"],
        _shared_button_link_button_link_component__WEBPACK_IMPORTED_MODULE_19__["ButtonLinkComponent"],
        _portfolio_portfolio_banner_portfolio_banner_component__WEBPACK_IMPORTED_MODULE_20__["PortfolioBannerComponent"],
        _skills_skills_table_skills_table_component__WEBPACK_IMPORTED_MODULE_21__["SkillsTableComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _overview_overview_component__WEBPACK_IMPORTED_MODULE_7__["OverviewComponent"],
                    _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
                    _email_email_component__WEBPACK_IMPORTED_MODULE_10__["EmailComponent"],
                    app_shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_11__["LogoComponent"],
                    _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                    _core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                    _overview_banner_banner_component__WEBPACK_IMPORTED_MODULE_14__["BannerComponent"],
                    _overview_skills_summary_skills_summary_component__WEBPACK_IMPORTED_MODULE_15__["SkillsSummaryComponent"],
                    _overview_featured_apps_featured_apps_component__WEBPACK_IMPORTED_MODULE_16__["FeaturedAppsComponent"],
                    _portfolio_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
                    _portfolio_stat_stat_component__WEBPACK_IMPORTED_MODULE_18__["StatComponent"],
                    _shared_button_link_button_link_component__WEBPACK_IMPORTED_MODULE_19__["ButtonLinkComponent"],
                    _portfolio_portfolio_banner_portfolio_banner_component__WEBPACK_IMPORTED_MODULE_20__["PortfolioBannerComponent"],
                    _skills_skills_table_skills_table_component__WEBPACK_IMPORTED_MODULE_21__["SkillsTableComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
                ],
                bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_email_email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/email/email.service */ "./src/app/email/email.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function EmailComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 17);
} }
function EmailComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 18);
} }
function EmailComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 19);
} }
class EmailComponent {
    constructor(emailService, formBuilder) {
        this.emailService = emailService;
        this.formBuilder = formBuilder;
        this.btnLabel = 'Send Message';
        this.btnDisabled = false;
        this.showLoader = false;
        this.createForm();
    }
    // set up reactive form
    createForm() {
        this.emailForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.emailCtrl = this.emailForm.get('email');
        this.nameCtrl = this.emailForm.get('name');
        this.messageCtrl = this.emailForm.get('message');
    }
    sendEmail() {
        const valid = this.validateForm();
        if (valid) {
            this.btnDisabled = true;
            this.btnLabel = '';
            this.showLoader = true;
            this.emailService.sendEmail(this.emailForm.value)
                .then(res => this.handleResponse(res))
                .catch(err => this.handleError(err));
        }
    }
    validateForm() {
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
    }
    handleResponse(res) {
        this.showLoader = false;
        this.btnLabel = 'Message Sent';
        this.resetForm();
    }
    handleError(err) {
        this.showLoader = false;
        this.validationMessage = 'Oops! Something went wrong.';
        this.btnLabel = 'Send';
    }
    resetForm() {
        this.emailForm.setValue({ name: '', email: '', message: '' });
    }
}
EmailComponent.ɵfac = function EmailComponent_Factory(t) { return new (t || EmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_email_email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
EmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailComponent, selectors: [["app-email"]], decls: 25, vars: 7, consts: [[1, "email-section"], [3, "formGroup", "ngSubmit"], [1, "form-heading-wrapper"], ["src", "../../assets/icons/email.png", "alt", "email icon"], [1, "form-input-wrapper"], ["for", "name"], ["id", "name", "type", "text", "name", "name", "formControlName", "name"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "formControlName", "email"], [1, "textarea-wrapper"], ["for", "message"], ["id", "message", "name", "message", "formControlName", "message"], [1, "validation-message"], ["class", "fa fa-exclamation-circle", 4, "ngIf"], ["type", "submit", 3, "disabled"], ["class", "spinner", 4, "ngIf"], ["class", "fa fa-check-circle", 4, "ngIf"], [1, "fa", "fa-exclamation-circle"], [1, "spinner"], [1, "fa", "fa-check-circle"]], template: function EmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmailComponent_Template_form_ngSubmit_1_listener() { return ctx.sendEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EmailComponent_i_19_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EmailComponent_div_22_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EmailComponent_i_23_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.emailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validationMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.btnDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.btnLabel == "Message Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.btnLabel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin: 0 auto;\n  background-color: #333;\n  display: inline-block;\n  border-radius: 100%;\n  -webkit-animation: sk-scaleout 1s infinite ease-in-out;\n  animation: sk-scaleout 1s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    opacity: 0;\n  }\n}\n\n@keyframes sk-scaleout {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n\nsection.email-section[_ngcontent-%COMP%] {\n  background-color: #FFC857;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 50px 0;\n  max-width: 1200px;\n  width: 80%;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-heading-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n  padding: 10px;\n  margin-bottom: 6px;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 3px 0;\n  margin-left: 18px;\n  text-transform: uppercase;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.4em;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: black;\n  font-size: 0.9em;\n  font-weight: bold;\n  margin-bottom: 4px;\n  margin-left: 3px;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .validation-message[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  margin-left: 10px;\n  min-height: 2em;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .validation-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: red;\n  margin: 0 10px;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  color: #222;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  display: inline-block;\n  padding: 8px 12px 8px 12px;\n  border: 2px solid #2587ce;\n  border-radius: 3px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  text-align: center;\n  transition: background-color 300ms;\n  margin: 10px;\n  min-width: 240px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 0.8em;\n  height: 40px;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #2587ce;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: no-drop;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: green;\n  font-size: 1.5em;\n  margin-right: 8px;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-input-wrapper[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px;\n  width: 50%;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  height: 3.2em;\n  padding: 15px;\n  font-size: 1em;\n  font-family: monospace;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-input-wrapper[_ngcontent-%COMP%]:nth-child(3) {\n  float: right;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .textarea-wrapper[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n}\n\nsection.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .textarea-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 140px;\n  padding: 15px;\n  font-size: 1em;\n  font-family: monospace;\n}\n\n@media screen and (max-width: 600px) {\n  section.email-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-input-wrapper[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    float: none;\n  }\n\n  .form-input-wrapper[_ngcontent-%COMP%]:nth-child(3) {\n    margin-bottom: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwvQzpcXFVzZXJzXFxBbGlzdGFpclxcRG9jdW1lbnRzXFxHaXRIdWJcXFByb2plY3RzXFxwb3J0Zm9saW8vc3JjXFxzdHlsZXNcXF9sb2FkZXIuc2NzcyIsInNyYy9hcHAvZW1haWwvZW1haWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VtYWlsL0M6XFxVc2Vyc1xcQWxpc3RhaXJcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcYXBwXFxlbWFpbFxcZW1haWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VtYWlsL0M6XFxVc2Vyc1xcQWxpc3RhaXJcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBRUEsbUJBQUE7RUFDQSxzREFBQTtFQUNBLDhDQUFBO0FDRkY7O0FES0E7RUFDRTtJQUFLLDJCQUFBO0VDREw7RURFQTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUVFLG1CQUFBO0VDREY7RURFRTtJQUVBLG1CQUFBO0lBQ0EsVUFBQTtFQ0FGO0FBQ0Y7O0FDM0JBO0VBQ0UseUJBQUE7QUQ2QkY7O0FDM0JFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkNSZ0I7RURTaEIsVUFBQTtBRDZCSjs7QUMzQkk7RUNzQ0YsYUFBQTtFQUlBLHFCQUFBO0VEeENJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBRGlDTjs7QUM5Qkk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQ3BCUztFRHFCVCxnQkFBQTtBRGdDTjs7QUM3Qkk7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEK0JOOztBQzVCSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEOEJOOztBQzdCTTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FEK0JSOztBQzNCSTtFQ25DRixzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtDQUFBO0VEd0JJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUQwQ047O0FFckVFO0VBQ0UsZUFBQTtFQUNBLHlCQTVCYztBRm1HbEI7O0FDN0NNO0VBQ0UsZUFBQTtBRCtDUjs7QUM1Q007RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRDhDUjs7QUMxQ0k7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FENENOOztBQzFDTTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUQ0Q1I7O0FDeENJO0VBQ0UsWUFBQTtBRDBDTjs7QUN2Q0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBRHlDTjs7QUN2Q007RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FEeUNSOztBQ25DQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VEc0NGOztFQ25DQTtJQUNFLG1CQUFBO0VEc0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lbWFpbC9lbWFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEF1dGhvcjogaHR0cDovL3RvYmlhc2FobGluLmNvbS9zcGlua2l0L1xyXG5cclxuLnNwaW5uZXIge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2stc2NhbGVvdXQgMS4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb246IHNrLXNjYWxlb3V0IDEuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1zY2FsZW91dCB7XHJcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1zY2FsZW91dCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9IDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG4iLCIuc3Bpbm5lciB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1zY2FsZW91dCAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBzay1zY2FsZW91dCAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXNjYWxlb3V0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBzay1zY2FsZW91dCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5zZWN0aW9uLmVtYWlsLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDODU3O1xufVxuc2VjdGlvbi5lbWFpbC1zZWN0aW9uIGZvcm0ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNTBweCAwO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgd2lkdGg6IDgwJTtcbn1cbnNlY3Rpb24uZW1haWwtc2VjdGlvbiBmb3JtIC5mb3JtLWhlYWRpbmctd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5zZWN0aW9uLmVtYWlsLXNlY3Rpb24gZm9ybSBoMiB7XG4gIHBhZGRpbmc6IDNweCAwO1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuc2VjdGlvbi5lbWFpbC1zZWN0aW9uIGZvcm0gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuc2VjdGlvbi5lbWFpbC1zZWN0aW9uIGZvcm0gLnZhbGlkYXRpb24tbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtaW4taGVpZ2h0OiAyZW07XG59XG5zZWN0aW9uLmVtYWlsLXNlY3Rpb24gZm9ybSAudmFsaWRhdGlvbi1tZXNzYWdlIGkge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW46IDAgMTBweDtcbn1cbnNlY3Rpb24uZW1haWwtc2VjdGlvbiBmb3JtIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGNvbG9yOiAjMjIyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHggMTJweCA4cHggMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzI1ODdjZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcbiAgbWFyZ2luOiAxMHB4O1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuc2VjdGlvbi5lbWFpbC1zZWN0aW9uIGZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU4N2NlO1xufVxuc2VjdGlvbi5lbWFpbC1zZWN0aW9uIGZvcm0gYnV0dG9uOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBuby1kcm9wO1xufVxuc2VjdGlvbi5lbWFpbC1zZWN0aW9uIGZvcm0gYnV0dG9uIGkge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuc2VjdGlvbi5lbWFpbC1zZWN0aW9uIGZvcm0gLmZvcm0taW5wdXQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDUwJTtcbn1cbnNlY3Rpb24uZW1haWwtc2VjdGlvbiBmb3JtIC5mb3JtLWlucHV0LXdyYXBwZXIgaW5wdXQge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMuMmVtO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cbnNlY3Rpb24uZW1haWwtc2VjdGlvbiBmb3JtIC5mb3JtLWlucHV0LXdyYXBwZXI6bnRoLWNoaWxkKDMpIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuc2VjdGlvbi5lbWFpbC1zZWN0aW9uIGZvcm0gLnRleHRhcmVhLXdyYXBwZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbnNlY3Rpb24uZW1haWwtc2VjdGlvbiBmb3JtIC50ZXh0YXJlYS13cmFwcGVyIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgc2VjdGlvbi5lbWFpbC1zZWN0aW9uIGZvcm0gLmZvcm0taW5wdXQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cblxuICAuZm9ybS1pbnB1dC13cmFwcGVyOm50aC1jaGlsZCgzKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxufSIsIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnc3JjL3N0eWxlcy9sb2FkZXInO1xyXG5cclxuc2VjdGlvbi5lbWFpbC1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbXVzdGFyZC15ZWxsb3c7XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtY29udGVudC13aWR0aDtcclxuICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgLmZvcm0taGVhZGluZy13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleCgpO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1mYW1pbHk6ICRoZWFkaW5nLWZvbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC52YWxpZGF0aW9uLW1lc3NhZ2Uge1xyXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgbWluLWhlaWdodDogMmVtO1xyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgQGluY2x1ZGUgcHJvamVjdC1idXR0b25zKCRoaWdobGlnaHQtY29sb3IpO1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogMjQwcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIGN1cnNvcjogbm8tZHJvcDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1pbnB1dC13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDMuMmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWlucHV0LXdyYXBwZXI6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0YXJlYS13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIHNlY3Rpb24uZW1haWwtc2VjdGlvbiBmb3JtIC5mb3JtLWlucHV0LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0taW5wdXQtd3JhcHBlcjpudGgtY2hpbGQoMykge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB9XHJcbn1cclxuIiwiXHJcbiRtYXgtY29udGVudC13aWR0aDogMTIwMHB4O1xyXG4kaGlnaGxpZ2h0LWNvbG9yOiAjMjU4N2NlO1xyXG4kbGlnaHQtZ3JleS1iYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4kbXVzdGFyZC15ZWxsb3c6ICNGRkM4NTc7XHJcbiRoZWFkaW5nLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGxpbmtlZGluLWNvbG91cjogcmdiKDAsIDExOSwgMTgxKTtcclxuXHJcbiRib3gtc2hhZG93LXN0eWxlOiAwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiRib3gtc2hhZG93LXN0eWxlLXNtYWxsOiAwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiR0YWxsLWxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuXHJcbkBtaXhpbiBwcm9qZWN0LWJ1dHRvbnMoJGNvbG91cikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXNpemU6ICAwLjlyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvdXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHByb2plY3QtYnV0dG9uLWxpbmsoKSB7XHJcbiAgQGluY2x1ZGUgcHJvamVjdC1idXR0b25zKCRoaWdobGlnaHQtY29sb3IpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHByb2plY3QtbGlua3MoKSB7XHJcbiAgY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgoKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email',
                templateUrl: './email.component.html',
                styleUrls: ['./email.component.scss']
            }]
    }], function () { return [{ type: app_email_email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class EmailService {
    constructor(http) {
        this.http = http;
    }
    sendEmail(email) {
        const url = 'https://formspree.io/alistairrwillis@gmail.com';
        return this.http.post(url, email)
            .toPromise();
    }
}
EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmailService, factory: EmailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/overview/banner/banner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/overview/banner/banner.component.ts ***!
  \*****************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function BannerComponent_main_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_main_1_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.scrollTo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.overview.bannerTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.overview.bannerSubtitle);
} }
class BannerComponent {
    constructor() { }
    scrollTo() {
        document.querySelector('#contactForm').scrollIntoView({ behavior: 'smooth' });
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], inputs: { overview: "overview" }, decls: 2, vars: 1, consts: [[1, "jumbotron"], [4, "ngIf"], [1, "banner-text"], ["href", "https://github.com/ARWL2016", "target", "_blank", "rel", "noopener noreferrer", 1, "banner-link"], ["title", "Open GitHub profile", 1, "banner-icon-link", "fa", "fa-github"], ["href", "https://www.linkedin.com/in/alistair-willis-developer/", "target", "_blank", "rel", "noopener noreferrer", 1, "banner-link"], ["title", "Open LinkedIn profile", 1, "banner-icon-link", "fa", "fa-linkedin"], ["title", "Email me", 1, "banner-icon-link", "fa", "fa-envelope", 3, "click"], ["href", "https://app.pluralsight.com/profile/alistair-willis", "target", "_blank", "rel", "noopener noreferrer"], ["src", "../../../assets/icons/ps.jpg", "alt", "pluralsight icon", "title", "Open Pluralsight profile", 1, "ps-icon"], ["href", "/alistair-willis", "target", "_blank", "rel", "noopener noreferrer", 1, "banner-link"], ["src", "../../../assets/icons/cv.png", "alt", "cv icon", "title", "Open / download CV", 1, "cv-icon"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerComponent_main_1_Template, 15, 2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overview);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".jumbotron[_ngcontent-%COMP%] {\n  height: 640px;\n  background-color: #222;\n  background-image: url('splash-wide-clr.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  overflow: auto;\n  font-family: \"Montserrat\", sans-serif;\n  padding: 30px;\n}\n\nmain[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 200px auto;\n  margin-top: 200px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding: 5px;\n  padding-left: 10px;\n  letter-spacing: 2.5px;\n  font-size: 3.2rem;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1));\n}\n\np.banner-text[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 30px;\n  color: #2587ce;\n  font-weight: bold;\n  letter-spacing: 1.5px;\n}\n\na.banner-link[_ngcontent-%COMP%] {\n  color: transparent;\n}\n\n.banner-icon-link[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: white;\n  padding: 15px 20px 15px 0;\n}\n\n.banner-icon-link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\ni.fa.fa-linkedin[_ngcontent-%COMP%]::before {\n  padding: 3px 5px;\n  background-color: #0077b5;\n  border-radius: 2px;\n}\n\ni.fa.fa-envelope[_ngcontent-%COMP%]:before {\n  color: #2587ce;\n}\n\n.ps-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-bottom: -5px;\n}\n\n.cv-icon[_ngcontent-%COMP%] {\n  height: 26px;\n  margin-left: 18px;\n  margin-bottom: -3px;\n}\n\n@media (max-width: 1000px) {\n  main[_ngcontent-%COMP%] {\n    margin-top: 120px;\n    width: 95%;\n  }\n}\n\n@media (max-width: 670px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n\n  .banner-text[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcnZpZXcvYmFubmVyL0M6XFxVc2Vyc1xcQWxpc3RhaXJcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcYXBwXFxvdmVydmlld1xcYmFubmVyXFxiYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL292ZXJ2aWV3L2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL292ZXJ2aWV3L2Jhbm5lci9DOlxcVXNlcnNcXEFsaXN0YWlyXFxEb2N1bWVudHNcXEdpdEh1YlxcUHJvamVjdHNcXHBvcnRmb2xpby9zcmNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0FDREY7O0FESUE7RUFDRSxpQkVka0I7RUZlbEIsa0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRE1BO0VBQ0UsbUJBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0ZBQUE7QUNKRjs7QURPQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRWpDZ0I7RUZrQ2hCLGlCQUFBO0VBQ0EscUJBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0FDTEY7O0FETUU7RUFDRSxlQUFBO0FDSko7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLHlCRWxEZ0I7RUZtRGhCLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxjRTNEZ0I7QURzRGxCOztBRFFBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRFFBO0VBRUU7SUFDRSxpQkFBQTtJQUNBLFVBQUE7RUNORjtBQUNGOztBRFdBO0VBRUU7SUFDRSxjQUFBO0VDVkY7O0VEYUE7SUFDRSxjQUFBO0VDVkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3L2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4uanVtYm90cm9uIHtcclxuICBoZWlnaHQ6IDY0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NwbGFzaC13aWRlLWNsci5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgbWF4LXdpZHRoOiAkbWF4LWNvbnRlbnQtd2lkdGg7XHJcbiAgbWFyZ2luOiAyMDBweCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbmgxIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICBmb250LXNpemU6IDMuMnJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpKTtcclxufVxyXG5cclxucC5iYW5uZXItdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG59XHJcblxyXG5hLmJhbm5lci1saW5rIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5iYW5uZXItaWNvbi1saW5rIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweCAxNXB4IDA7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5pLmZhLmZhLWxpbmtlZGluOjpiZWZvcmUge1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpbmtlZGluLWNvbG91cjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbmkuZmEuZmEtZW52ZWxvcGU6YmVmb3JlIHtcclxuICBjb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxufVxyXG5cclxuLnBzLWljb24ge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC01cHg7XHJcbn1cclxuXHJcbi5jdi1pY29uIHtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG5cclxuICBtYWluIHtcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY3MHB4KSB7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuXHJcbiAgLmJhbm5lci10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsIi5qdW1ib3Ryb24ge1xuICBoZWlnaHQ6IDY0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NwbGFzaC13aWRlLWNsci5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMzBweDtcbn1cblxubWFpbiB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDIwMHB4IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpKTtcbn1cblxucC5iYW5uZXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICMyNTg3Y2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG59XG5cbmEuYmFubmVyLWxpbmsge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5iYW5uZXItaWNvbi1saW5rIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyMHB4IDE1cHggMDtcbn1cbi5iYW5uZXItaWNvbi1saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pLmZhLmZhLWxpbmtlZGluOjpiZWZvcmUge1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2I1O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbmkuZmEuZmEtZW52ZWxvcGU6YmVmb3JlIHtcbiAgY29sb3I6ICMyNTg3Y2U7XG59XG5cbi5wcy1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG59XG5cbi5jdi1pY29uIHtcbiAgaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBtYWluIHtcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgICB3aWR0aDogOTUlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjcwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG5cbiAgLmJhbm5lci10ZXh0IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufSIsIlxyXG4kbWF4LWNvbnRlbnQtd2lkdGg6IDEyMDBweDtcclxuJGhpZ2hsaWdodC1jb2xvcjogIzI1ODdjZTtcclxuJGxpZ2h0LWdyZXktYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuJG11c3RhcmQteWVsbG93OiAjRkZDODU3O1xyXG4kaGVhZGluZy1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRsaW5rZWRpbi1jb2xvdXI6IHJnYigwLCAxMTksIDE4MSk7XHJcblxyXG4kYm94LXNoYWRvdy1zdHlsZTogMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xyXG4kYm94LXNoYWRvdy1zdHlsZS1zbWFsbDogMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xyXG4kdGFsbC1saW5lLWhlaWdodDogMS44ZW07XHJcblxyXG5AbWl4aW4gcHJvamVjdC1idXR0b25zKCRjb2xvdXIpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1zaXplOiAgMC45cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA4cHggMTJweCA4cHggMTJweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3VyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwcm9qZWN0LWJ1dHRvbi1saW5rKCkge1xyXG4gIEBpbmNsdWRlIHByb2plY3QtYnV0dG9ucygkaGlnaGxpZ2h0LWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBwcm9qZWN0LWxpbmtzKCkge1xyXG4gIGNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { overview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/overview/featured-apps/featured-apps.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/overview/featured-apps/featured-apps.component.ts ***!
  \*******************************************************************/
/*! exports provided: FeaturedAppsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedAppsComponent", function() { return FeaturedAppsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_core_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/_core/services/content.service */ "./src/app/_core/services/content.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_button_link_button_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/button-link/button-link.component */ "./src/app/_shared/button-link/button-link.component.ts");








const _c0 = function (a0) { return { "order": a0 }; };
function FeaturedAppsComponent_ng_container_12_article_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-button-link", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-button-link", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r2.website_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r2.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, project_r2.image_order));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, project_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r2.github_link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r2.website_link);
} }
function FeaturedAppsComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeaturedAppsComponent_ng_container_12_article_1_Template, 14, 11, "article", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.projects));
} }
class FeaturedAppsComponent {
    constructor(contentService) {
        this.contentService = contentService;
    }
    ngOnInit() {
        this.projects = this.contentService.content.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(content => content !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(content => content.projects.filter(p => p.featured === true)));
    }
}
FeaturedAppsComponent.ɵfac = function FeaturedAppsComponent_Factory(t) { return new (t || FeaturedAppsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"])); };
FeaturedAppsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturedAppsComponent, selectors: [["app-featured-apps"]], decls: 13, vars: 1, consts: [[1, "background"], [1, "banner"], ["src", "../../../assets/icons/webpage-128.png", 1, "project-icon"], ["routerLink", "/portfolio"], [4, "ngIf"], ["class", "project", 4, "ngFor", "ngForOf"], [1, "project"], [1, "image-column"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [3, "src", "ngStyle"], [1, "text-column"], [1, "text-wrapper"], [1, "project-links"], ["value", "View on GitHub", "iconClass", "fa fa-github", 3, "href"], ["value", "Live Site", "iconClass", "fa fa-external-link-square", 3, "href"]], template: function FeaturedAppsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "FEATURED PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Some are my recent web apps are featured below. You can view all the projects, search by language and framework, and view technical specs, on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "portfolio page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FeaturedAppsComponent_ng_container_12_Template, 3, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _shared_button_link_button_link_component__WEBPACK_IMPORTED_MODULE_5__["ButtonLinkComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: ["div.background[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f7f7f7;\n  overflow: hidden;\n}\n\nmain[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 25px;\n}\n\nmain[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 100px;\n}\n\nsection.banner[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  padding: 30px;\n  background-color: white;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);\n}\n\nsection.banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n  margin-bottom: 30px;\n}\n\nsection.banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  letter-spacing: 2px;\n  font-size: 1.5em;\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3px 0;\n  border-bottom: 3px solid #2587ce;\n}\n\nsection.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 36px;\n}\n\nsection.banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.8em;\n}\n\nsection.banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2587ce;\n  text-decoration: none;\n}\n\nsection.banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\narticle.project[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  margin-top: 40px;\n  width: 100%;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n}\n\narticle.project[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 40px;\n}\n\narticle.project[_ngcontent-%COMP%]   .image-column[_ngcontent-%COMP%] {\n  width: 310px;\n  float: left;\n}\n\narticle.project[_ngcontent-%COMP%]   .image-column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 250px;\n  margin: 30px;\n  border: 1px solid #222;\n  border-radius: 3px;\n  transition: all 250ms;\n}\n\narticle.project[_ngcontent-%COMP%]   .text-column[_ngcontent-%COMP%] {\n  float: left;\n}\n\narticle.project[_ngcontent-%COMP%]   .text-column[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%] {\n  margin: 30px 30px 30px 0;\n}\n\narticle.project[_ngcontent-%COMP%]   .text-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n\narticle.project[_ngcontent-%COMP%]   .text-column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  line-height: 2rem;\n}\n\narticle.project[_ngcontent-%COMP%]   .text-column[_ngcontent-%COMP%]   div.project-links[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\narticle.project[_ngcontent-%COMP%]   .text-column[_ngcontent-%COMP%]   div.project-links[_ngcontent-%COMP%]   app-button-link[_ngcontent-%COMP%] {\n  margin: 0 5px 0 10px;\n}\n\n@media (max-width: 1080px) {\n  main[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n\n@media (max-width: 1000px) {\n  .banner-content[_ngcontent-%COMP%] {\n    margin-top: 120px;\n  }\n\n  article.project[_ngcontent-%COMP%]   .image-column[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n  article.project[_ngcontent-%COMP%]   .image-column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n\n@media (max-width: 670px) {\n  section.banner[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  section.banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n  section.banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n\n@media (max-width: 610px) {\n  article.project[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  article.project[_ngcontent-%COMP%]   .image-column[_ngcontent-%COMP%] {\n    width: 0px;\n  }\n  article.project[_ngcontent-%COMP%]   .image-column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n  article.project[_ngcontent-%COMP%]   .text-column[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%] {\n    margin: 30px 30px 30px 30px;\n  }\n  article.project[_ngcontent-%COMP%]   .text-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    margin: 12px auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcnZpZXcvZmVhdHVyZWQtYXBwcy9DOlxcVXNlcnNcXEFsaXN0YWlyXFxEb2N1bWVudHNcXEdpdEh1YlxcUHJvamVjdHNcXHBvcnRmb2xpby9zcmNcXGFwcFxcb3ZlcnZpZXdcXGZlYXR1cmVkLWFwcHNcXGZlYXR1cmVkLWFwcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL292ZXJ2aWV3L2ZlYXR1cmVkLWFwcHMvQzpcXFVzZXJzXFxBbGlzdGFpclxcRG9jdW1lbnRzXFxHaXRIdWJcXFByb2plY3RzXFxwb3J0Zm9saW8vc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvb3ZlcnZpZXcvZmVhdHVyZWQtYXBwcy9mZWF0dXJlZC1hcHBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLHlCQ0RzQjtFREl0QixnQkFBQTtBRUhGOztBRk1BO0VBQ0UsaUJDVmtCO0VEV2xCLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRUhGOztBRklFO0VBQ0Usb0JBQUE7QUVGSjs7QUZNQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMENDakJpQjtBQ2NuQjs7QUZLRTtFQ3VCQSxhQUFBO0VBSUEscUJBQUE7RUR4QkUsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUVBSjs7QUZHRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQ25DVztFRG9DWCxjQUFBO0VBQ0EsZ0NBQUE7QUVESjs7QUZJRTtFQUNFLFlBQUE7QUVGSjs7QUZLRTtFQUNFLGtCQ3hDZTtBQ3FDbkI7O0FGS0k7RUNaRixjQXRDZ0I7RUF1Q2hCLHFCQUFBO0FDVUY7O0FEUkU7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUNVSjs7QUZPQTtFQUNFLHNCQUFBO0VDYkEsYUFBQTtFQUlBLHFCQUFBO0VEWUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtBRURGOztBRkVFO0VBQ0UsbUJBQUE7QUVBSjs7QUZHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FFREo7O0FGR0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBRUROOztBRktFO0VBQ0UsV0FBQTtBRUhKOztBRktJO0VBQ0Usd0JBQUE7QUVITjs7QUZRSTtFQUNFLHFDQzVGUztBQ3NGZjs7QUZTSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUVQTjs7QUZVSTtFQUNFLGdCQUFBO0FFUk47O0FGVU07RUFDRSxvQkFBQTtBRVJSOztBRm1CQTtFQUNFO0lBQ0UsVUFBQTtFRWhCRjtBQUNGOztBRm1CQTtFQUVFO0lBQ0UsaUJBQUE7RUVsQkY7O0VGcUJBO0lBQ0UsWUFBQTtFRWxCRjtFRm9CRTtJQUNFLFlBQUE7RUVsQko7QUFDRjs7QUZzQkE7RUFDRTtJQUNFLGdCQUFBO0VFcEJGO0VGc0JFO0lBQ0UsY0FBQTtFRXBCSjtFRnVCRTtJQUNFLGNBQUE7RUVyQko7QUFDRjs7QUZ5QkE7RUFFRTtJQUNFLGdCQUFBO0VFeEJGO0VGMEJFO0lBQ0UsVUFBQTtFRXhCSjtFRjBCSTtJQUNFLGFBQUE7RUV4Qk47RUY2Qkk7SUFDRSwyQkFBQTtFRTNCTjtFRjhCSTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUU1Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3L2ZlYXR1cmVkLWFwcHMvZmVhdHVyZWQtYXBwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbmRpdi5iYWNrZ3JvdW5kIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleS1iYWNrZ3JvdW5kO1xyXG4gIC8vIHRvIGNvdmVyIGEgbXlzdGVyaW91cyBnYXBcclxuICAvLyBtYXJnaW4tYm90dG9tOiAtMzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBtYXgtd2lkdGg6ICRtYXgtY29udGVudC13aWR0aDtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5zZWN0aW9uLmJhbm5lciB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LXN0eWxlO1xyXG5cclxuICBoZWFkZXIge1xyXG4gICAgLy8gYm9yZGVyOiAxcHggZG90dGVkIGJsdWU7XHJcbiAgICBAaW5jbHVkZSBmbGV4KCk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICRoZWFkaW5nLWZvbnQ7XHJcbiAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMzZweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6ICR0YWxsLWxpbmUtaGVpZ2h0O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBAaW5jbHVkZSBwcm9qZWN0LWxpbmtzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gUFJPSkVDVCBDQVJEU1xyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuYXJ0aWNsZS5wcm9qZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBAaW5jbHVkZSBmbGV4KCk7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC40KTtcclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcblxyXG4gIC5pbWFnZS1jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMjI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgIC50ZXh0LXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW46IDMwcHggMzBweCAzMHB4IDA7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkaGVhZGluZy1mb250O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBkaXYucHJvamVjdC1saW5rcyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcblxyXG4gICAgICBhcHAtYnV0dG9uLWxpbmsge1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHggMCAxMHB4O1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE1FRElBIFFVRVJJRVNcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XHJcbiAgbWFpbiB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG5cclxuICAuYmFubmVyLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgfVxyXG5cclxuICBhcnRpY2xlLnByb2plY3QgLmltYWdlLWNvbHVtbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY3MHB4KSB7XHJcbiAgc2VjdGlvbi5iYW5uZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MTBweCkge1xyXG5cclxuICBhcnRpY2xlLnByb2plY3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgICAuaW1hZ2UtY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDBweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LWNvbHVtbiB7XHJcbiAgICAgIC50ZXh0LXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAzMHB4IDMwcHggMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IGF1dG87XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuIiwiXHJcbiRtYXgtY29udGVudC13aWR0aDogMTIwMHB4O1xyXG4kaGlnaGxpZ2h0LWNvbG9yOiAjMjU4N2NlO1xyXG4kbGlnaHQtZ3JleS1iYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4kbXVzdGFyZC15ZWxsb3c6ICNGRkM4NTc7XHJcbiRoZWFkaW5nLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGxpbmtlZGluLWNvbG91cjogcmdiKDAsIDExOSwgMTgxKTtcclxuXHJcbiRib3gtc2hhZG93LXN0eWxlOiAwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiRib3gtc2hhZG93LXN0eWxlLXNtYWxsOiAwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiR0YWxsLWxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuXHJcbkBtaXhpbiBwcm9qZWN0LWJ1dHRvbnMoJGNvbG91cikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXNpemU6ICAwLjlyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvdXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHByb2plY3QtYnV0dG9uLWxpbmsoKSB7XHJcbiAgQGluY2x1ZGUgcHJvamVjdC1idXR0b25zKCRoaWdobGlnaHQtY29sb3IpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHByb2plY3QtbGlua3MoKSB7XHJcbiAgY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgoKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbn1cclxuIiwiZGl2LmJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxubWFpbiB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbm1haW46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG5zZWN0aW9uLmJhbm5lciB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5zZWN0aW9uLmJhbm5lciBoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbnNlY3Rpb24uYmFubmVyIGgyIHtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogM3B4IDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMjU4N2NlO1xufVxuc2VjdGlvbi5iYW5uZXIgaW1nIHtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuc2VjdGlvbi5iYW5uZXIgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbn1cbnNlY3Rpb24uYmFubmVyIHAgYSB7XG4gIGNvbG9yOiAjMjU4N2NlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5zZWN0aW9uLmJhbm5lciBwIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hcnRpY2xlLnByb2plY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5hcnRpY2xlLnByb2plY3Q6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5hcnRpY2xlLnByb2plY3QgLmltYWdlLWNvbHVtbiB7XG4gIHdpZHRoOiAzMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5hcnRpY2xlLnByb2plY3QgLmltYWdlLWNvbHVtbiBpbWcge1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbjogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyMjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XG59XG5hcnRpY2xlLnByb2plY3QgLnRleHQtY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5hcnRpY2xlLnByb2plY3QgLnRleHQtY29sdW1uIC50ZXh0LXdyYXBwZXIge1xuICBtYXJnaW46IDMwcHggMzBweCAzMHB4IDA7XG59XG5hcnRpY2xlLnByb2plY3QgLnRleHQtY29sdW1uIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuYXJ0aWNsZS5wcm9qZWN0IC50ZXh0LWNvbHVtbiBwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5hcnRpY2xlLnByb2plY3QgLnRleHQtY29sdW1uIGRpdi5wcm9qZWN0LWxpbmtzIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbmFydGljbGUucHJvamVjdCAudGV4dC1jb2x1bW4gZGl2LnByb2plY3QtbGlua3MgYXBwLWJ1dHRvbi1saW5rIHtcbiAgbWFyZ2luOiAwIDVweCAwIDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgbWFpbiB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYmFubmVyLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICB9XG5cbiAgYXJ0aWNsZS5wcm9qZWN0IC5pbWFnZS1jb2x1bW4ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICBhcnRpY2xlLnByb2plY3QgLmltYWdlLWNvbHVtbiBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY3MHB4KSB7XG4gIHNlY3Rpb24uYmFubmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIHNlY3Rpb24uYmFubmVyIGgzIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxuICBzZWN0aW9uLmJhbm5lciBwIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSB7XG4gIGFydGljbGUucHJvamVjdCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICBhcnRpY2xlLnByb2plY3QgLmltYWdlLWNvbHVtbiB7XG4gICAgd2lkdGg6IDBweDtcbiAgfVxuICBhcnRpY2xlLnByb2plY3QgLmltYWdlLWNvbHVtbiBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgYXJ0aWNsZS5wcm9qZWN0IC50ZXh0LWNvbHVtbiAudGV4dC13cmFwcGVyIHtcbiAgICBtYXJnaW46IDMwcHggMzBweCAzMHB4IDMwcHg7XG4gIH1cbiAgYXJ0aWNsZS5wcm9qZWN0IC50ZXh0LWNvbHVtbiBhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEycHggYXV0bztcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturedAppsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-featured-apps',
                templateUrl: './featured-apps.component.html',
                styleUrls: ['./featured-apps.component.scss']
            }]
    }], function () { return [{ type: app_core_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_shared/animations */ "./src/app/_shared/animations.ts");
/* harmony import */ var app_core_services_ping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/_core/services/ping.service */ "./src/app/_core/services/ping.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var app_core_services_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/_core/services/content.service */ "./src/app/_core/services/content.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/overview/banner/banner.component.ts");
/* harmony import */ var _skills_summary_skills_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills-summary/skills-summary.component */ "./src/app/overview/skills-summary/skills-summary.component.ts");
/* harmony import */ var _featured_apps_featured_apps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./featured-apps/featured-apps.component */ "./src/app/overview/featured-apps/featured-apps.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../email/email.component */ "./src/app/email/email.component.ts");













function OverviewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-skills-summary", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-featured-apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-email", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const overview_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showPage", "on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overview", overview_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skillsSummary", overview_r1.skillsSummary);
} }
class OverviewComponent {
    constructor(pingSvc, contentService) {
        this.pingSvc = pingSvc;
        this.contentService = contentService;
    }
    ngOnInit() {
        this.overview$ = this.contentService.content.pipe(
        // filter(content => content !== null),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(content => content.overview), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(a => console.log(a)));
    }
    onWindowScroll() {
        if (window.scrollY > 400) {
            this.pingSvc.ping('primary');
        }
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_ping_service__WEBPACK_IMPORTED_MODULE_2__["PingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"])); };
OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["app-overview"]], hostBindings: function OverviewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function OverviewComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "overview"], [3, "skillsSummary"], ["id", "contactForm"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OverviewComponent_div_0_Template, 5, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.overview$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _skills_summary_skills_summary_component__WEBPACK_IMPORTED_MODULE_7__["SkillsSummaryComponent"], _featured_apps_featured_apps_component__WEBPACK_IMPORTED_MODULE_8__["FeaturedAppsComponent"], _email_email_component__WEBPACK_IMPORTED_MODULE_9__["EmailComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_1__["pageTransition"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-overview',
                templateUrl: './overview.component.html',
                styleUrls: ['./overview.component.scss'],
                animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_1__["pageTransition"]]
            }]
    }], function () { return [{ type: app_core_services_ping_service__WEBPACK_IMPORTED_MODULE_2__["PingService"] }, { type: app_core_services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
        }] }); })();


/***/ }),

/***/ "./src/app/overview/skills-summary/skills-summary.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/overview/skills-summary/skills-summary.component.ts ***!
  \*********************************************************************/
/*! exports provided: SkillsSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsSummaryComponent", function() { return SkillsSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SkillsSummaryComponent_article_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](skill_r1.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r1.content, " ");
} }
class SkillsSummaryComponent {
    constructor() { }
}
SkillsSummaryComponent.ɵfac = function SkillsSummaryComponent_Factory(t) { return new (t || SkillsSummaryComponent)(); };
SkillsSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsSummaryComponent, selectors: [["app-skills-summary"]], inputs: { skillsSummary: "skillsSummary" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function SkillsSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillsSummaryComponent_article_1_Template, 6, 4, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillsSummary);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["main[_ngcontent-%COMP%] {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  max-width: 1200px;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\narticle[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  display: -webkit-flex;\n  width: 33.3%;\n  flex-direction: column;\n  line-height: 2rem;\n  padding: 25px;\n  margin: 10px 15px;\n  transition: width 400ms ease-in;\n}\n\narticle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 5px;\n}\n\narticle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-bottom: 10px;\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n  border-bottom: 3px solid #2587ce;\n}\n\narticle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n@media (max-width: 1080px) {\n  main[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n\n  article[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin: 0 !important;\n  }\n}\n\n@media (max-width: 610px) {\n  main[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcnZpZXcvc2tpbGxzLXN1bW1hcnkvQzpcXFVzZXJzXFxBbGlzdGFpclxcRG9jdW1lbnRzXFxHaXRIdWJcXFByb2plY3RzXFxwb3J0Zm9saW8vc3JjXFxhcHBcXG92ZXJ2aWV3XFxza2lsbHMtc3VtbWFyeVxcc2tpbGxzLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL292ZXJ2aWV3L3NraWxscy1zdW1tYXJ5L0M6XFxVc2Vyc1xcQWxpc3RhaXJcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL292ZXJ2aWV3L3NraWxscy1zdW1tYXJ5L3NraWxscy1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDZ0RFLGFBQUE7RUFJQSxxQkFBQTtFRGxEQSxtQkFBQTtFQUNBLGlCQ0prQjtFREtsQixVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUVHRjs7QUZBQTtFQUNFLG1CQUFBO0VDcUNBLGFBQUE7RUFJQSxxQkFBQTtFRHZDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FFT0Y7O0FGTEU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUVPSjs7QUZKRTtFQUVFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNDM0JXO0VENEJYLGdDQUFBO0FFS0o7O0FGRkU7RUFDRSxrQkFBQTtBRUlKOztBRkFBO0VBQ0U7SUFDRSxpQ0FBQTtFRUdGOztFRkFBO0lBQ0Usc0JBQUE7SUFDQSxvQkFBQTtFRUdGO0FBQ0Y7O0FGRUE7RUFDRTtJQUNFLG1CQUFBO0VFQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3L3NraWxscy1zdW1tYXJ5L3NraWxscy1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxubWFpbiB7XHJcbiAgQGluY2x1ZGUgZmxleCgpO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWF4LXdpZHRoOiAkbWF4LWNvbnRlbnQtd2lkdGg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbmFydGljbGUge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQGluY2x1ZGUgZmxleCgpO1xyXG4gIHdpZHRoOiAzMy4zJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggNDAwbXMgZWFzZS1pbjtcclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICAvLyBib3JkZXI6IDFweCBkb3R0ZWQgeWVsbG93O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAkaGVhZGluZy1mb250O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRoaWdobGlnaHQtY29sb3I7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICBtYWluIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGFydGljbGUge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjEwcHgpIHtcclxuICBtYWluIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJcclxuJG1heC1jb250ZW50LXdpZHRoOiAxMjAwcHg7XHJcbiRoaWdobGlnaHQtY29sb3I6ICMyNTg3Y2U7XHJcbiRsaWdodC1ncmV5LWJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiRtdXN0YXJkLXllbGxvdzogI0ZGQzg1NztcclxuJGhlYWRpbmctZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kbGlua2VkaW4tY29sb3VyOiByZ2IoMCwgMTE5LCAxODEpO1xyXG5cclxuJGJveC1zaGFkb3ctc3R5bGU6IDBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuJGJveC1zaGFkb3ctc3R5bGUtc21hbGw6IDBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuJHRhbGwtbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG5cclxuQG1peGluIHByb2plY3QtYnV0dG9ucygkY29sb3VyKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBjb2xvcjogIzIyMjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtc2l6ZTogIDAuOXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogOHB4IDEycHggOHB4IDEycHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG91cjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcHJvamVjdC1idXR0b24tbGluaygpIHtcclxuICBAaW5jbHVkZSBwcm9qZWN0LWJ1dHRvbnMoJGhpZ2hsaWdodC1jb2xvcik7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gcHJvamVjdC1saW5rcygpIHtcclxuICBjb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleCgpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxufVxyXG4iLCJtYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmFydGljbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIHdpZHRoOiAzMy4zJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmc6IDI1cHg7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCA0MDBtcyBlYXNlLWluO1xufVxuYXJ0aWNsZSBpIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5hcnRpY2xlIGgzIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMyNTg3Y2U7XG59XG5hcnRpY2xlIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgbWFpbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgYXJ0aWNsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSB7XG4gIG1haW4ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills-summary',
                templateUrl: './skills-summary.component.html',
                styleUrls: ['./skills-summary.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { skillsSummary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/portfolio/portfolio-banner/portfolio-banner.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-banner/portfolio-banner.component.ts ***!
  \**************************************************************************/
/*! exports provided: PortfolioBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioBannerComponent", function() { return PortfolioBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function PortfolioBannerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.portfolioContent.introduction, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PortfolioBannerComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} }
function PortfolioBannerComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
} }
function PortfolioBannerComponent_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " All projects are hosted on free dynos at Heroku. There may be an initial loading delay while the server wakes up. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Some projects have not been subject to full cross browser testing. A modern desktop browser is recommended. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PortfolioBannerComponent {
    constructor() {
        this.showDetails = false;
    }
    ngOnInit() {
    }
    toggleDetails() {
        this.showDetails = !this.showDetails;
    }
}
PortfolioBannerComponent.ɵfac = function PortfolioBannerComponent_Factory(t) { return new (t || PortfolioBannerComponent)(); };
PortfolioBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioBannerComponent, selectors: [["app-portfolio-banner"]], inputs: { portfolioContent: "portfolioContent" }, decls: 12, vars: 4, consts: [[1, "portfolio-banner"], [1, "heading"], ["src", "../../assets/icons/webpage-128.png", 1, "project-icon"], [3, "innerHtml", 4, "ngIf"], [1, "toggle", 3, "click"], ["class", "fa fa-caret-right", 4, "ngIf"], ["class", "fa fa-sort-down", 4, "ngIf"], [4, "ngIf"], [3, "innerHtml"], [1, "fa", "fa-caret-right"], [1, "fa", "fa-sort-down"]], template: function PortfolioBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PortfolioBannerComponent_div_5_Template, 1, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioBannerComponent_Template_div_click_6_listener() { return ctx.toggleDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PortfolioBannerComponent_i_7_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PortfolioBannerComponent_i_8_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Accessibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PortfolioBannerComponent_ul_11_Template, 5, 0, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.portfolioContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".portfolio-banner {\n  margin-top: 80px;\n  padding: 30px;\n  background-color: white;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);\n  line-height: 1.8em;\n}\n.portfolio-banner div.heading {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n  margin-bottom: 30px;\n}\n.portfolio-banner div.heading img {\n  height: 36px;\n}\n.portfolio-banner div.heading h2 {\n  margin-left: 18px;\n  letter-spacing: 2px;\n  font-size: 1.5em;\n  font-family: \"Montserrat\", sans-serif;\n  padding: 3px 0;\n  border-bottom: 3px solid #2587ce;\n}\n.portfolio-banner div.toggle {\n  cursor: pointer;\n}\n.portfolio-banner div.toggle i {\n  float: left;\n}\n.portfolio-banner div.toggle i.fa-caret-right {\n  padding: 5px 10px 0 5px;\n}\n.portfolio-banner div.toggle i.fa-sort-down {\n  padding: 0px 7px 5px 5px;\n}\n.portfolio-banner div.toggle p:last-of-type {\n  margin-top: 10px;\n  font-weight: bold;\n}\n.portfolio-banner ul {\n  padding: 0 40px;\n}\n.portfolio-banner ul li {\n  list-style-type: dot;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby1iYW5uZXIvQzpcXFVzZXJzXFxBbGlzdGFpclxcRG9jdW1lbnRzXFxHaXRIdWJcXFByb2plY3RzXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHBvcnRmb2xpb1xccG9ydGZvbGlvLWJhbm5lclxccG9ydGZvbGlvLWJhbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby1iYW5uZXIvQzpcXFVzZXJzXFxBbGlzdGFpclxcRG9jdW1lbnRzXFxHaXRIdWJcXFByb2plY3RzXFxwb3J0Zm9saW8vc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby1iYW5uZXIvcG9ydGZvbGlvLWJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMENDRWlCO0VERGpCLGtCQ0dpQjtBQ0puQjtBRkdFO0VDeUNBLGFBQUE7RUFJQSxxQkFBQTtFRDNDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRUdKO0FGREk7RUFDRSxZQUFBO0FFR047QUZESTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQ2xCUztFRG1CVCxjQUFBO0VBQ0EsZ0NBQUE7QUVHTjtBRkNFO0VBQ0UsZUFBQTtBRUNKO0FGQUk7RUFDRSxXQUFBO0FFRU47QUZBSTtFQUNFLHVCQUFBO0FFRU47QUZBSTtFQUNFLHdCQUFBO0FFRU47QUZBSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUVFTjtBRkVFO0VBQ0UsZUFBQTtBRUFKO0FGQ0k7RUFDRSxvQkFBQTtBRUNOIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby1iYW5uZXIvcG9ydGZvbGlvLWJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5wb3J0Zm9saW8tYmFubmVyIHtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctc3R5bGU7XHJcbiAgbGluZS1oZWlnaHQ6ICR0YWxsLWxpbmUtaGVpZ2h0O1xyXG5cclxuICBkaXYuaGVhZGluZyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4KCk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgZm9udC1mYW1pbHk6ICRoZWFkaW5nLWZvbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGhpZ2hsaWdodC1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpdi50b2dnbGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgaS5mYS1jYXJldC1yaWdodHtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHggMCA1cHg7XHJcbiAgICB9XHJcbiAgICBpLmZhLXNvcnQtZG93biB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCA3cHggNXB4IDVweDtcclxuICAgIH1cclxuICAgIHA6bGFzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICBsaSB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogZG90O1xyXG4gICAgICAvLyBmb250LXNpemU6IDAuOTVlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iLCJcclxuJG1heC1jb250ZW50LXdpZHRoOiAxMjAwcHg7XHJcbiRoaWdobGlnaHQtY29sb3I6ICMyNTg3Y2U7XHJcbiRsaWdodC1ncmV5LWJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiRtdXN0YXJkLXllbGxvdzogI0ZGQzg1NztcclxuJGhlYWRpbmctZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kbGlua2VkaW4tY29sb3VyOiByZ2IoMCwgMTE5LCAxODEpO1xyXG5cclxuJGJveC1zaGFkb3ctc3R5bGU6IDBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuJGJveC1zaGFkb3ctc3R5bGUtc21hbGw6IDBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuJHRhbGwtbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG5cclxuQG1peGluIHByb2plY3QtYnV0dG9ucygkY29sb3VyKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBjb2xvcjogIzIyMjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtc2l6ZTogIDAuOXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogOHB4IDEycHggOHB4IDEycHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG91cjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcHJvamVjdC1idXR0b24tbGluaygpIHtcclxuICBAaW5jbHVkZSBwcm9qZWN0LWJ1dHRvbnMoJGhpZ2hsaWdodC1jb2xvcik7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gcHJvamVjdC1saW5rcygpIHtcclxuICBjb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleCgpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxufVxyXG4iLCIucG9ydGZvbGlvLWJhbm5lciB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbn1cbi5wb3J0Zm9saW8tYmFubmVyIGRpdi5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ucG9ydGZvbGlvLWJhbm5lciBkaXYuaGVhZGluZyBpbWcge1xuICBoZWlnaHQ6IDM2cHg7XG59XG4ucG9ydGZvbGlvLWJhbm5lciBkaXYuaGVhZGluZyBoMiB7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDNweCAwO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzI1ODdjZTtcbn1cbi5wb3J0Zm9saW8tYmFubmVyIGRpdi50b2dnbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucG9ydGZvbGlvLWJhbm5lciBkaXYudG9nZ2xlIGkge1xuICBmbG9hdDogbGVmdDtcbn1cbi5wb3J0Zm9saW8tYmFubmVyIGRpdi50b2dnbGUgaS5mYS1jYXJldC1yaWdodCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDAgNXB4O1xufVxuLnBvcnRmb2xpby1iYW5uZXIgZGl2LnRvZ2dsZSBpLmZhLXNvcnQtZG93biB7XG4gIHBhZGRpbmc6IDBweCA3cHggNXB4IDVweDtcbn1cbi5wb3J0Zm9saW8tYmFubmVyIGRpdi50b2dnbGUgcDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wb3J0Zm9saW8tYmFubmVyIHVsIHtcbiAgcGFkZGluZzogMCA0MHB4O1xufVxuLnBvcnRmb2xpby1iYW5uZXIgdWwgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IGRvdDtcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-banner',
                templateUrl: './portfolio-banner.component.html',
                styleUrls: ['./portfolio-banner.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { portfolioContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_core_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/_core/services/content.service */ "./src/app/_core/services/content.service.ts");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/animations */ "./src/app/_shared/animations.ts");
/* harmony import */ var app_core_services_ping_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_core/services/ping.service */ "./src/app/_core/services/ping.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _portfolio_banner_portfolio_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio-banner/portfolio-banner.component */ "./src/app/portfolio/portfolio-banner/portfolio-banner.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/portfolio/search/search.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _stat_stat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stat/stat.component */ "./src/app/portfolio/stat/stat.component.ts");
/* harmony import */ var _shared_button_link_button_link_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_shared/button-link/button-link.component */ "./src/app/_shared/button-link/button-link.component.ts");













function PortfolioComponent_section_3_article_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 29);
} }
function PortfolioComponent_section_3_article_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 30);
} }
function PortfolioComponent_section_3_article_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 31);
} }
function PortfolioComponent_section_3_article_1_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const highlight_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](highlight_r8);
} }
const _c0 = function (a0) { return { "order": a0 }; };
function PortfolioComponent_section_3_article_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PortfolioComponent_section_3_article_1_i_4_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PortfolioComponent_section_3_article_1_i_5_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PortfolioComponent_section_3_article_1_i_6_Template, 1, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-stat", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-stat", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-stat", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-stat", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PortfolioComponent_section_3_article_1_li_23_Template, 2, 1, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-button-link", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-button-link", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showPage", "on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r3.type.frontend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r3.type.server);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r3.type.database);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 17, project_r3.tech));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r3.website_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r3.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, project_r3.image_order));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r3.pingdom_page_size_kb);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r3.pingdom_average_load_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r3.google_page_speed_score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r3.mozilla_security_grade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.user_stories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r3.highlights);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r3.github_link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r3.website_link);
} }
function PortfolioComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioComponent_section_3_article_1_Template, 27, 21, "article", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.displayedProjects);
} }
function PortfolioComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_img_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showPage", "on");
} }
class PortfolioComponent {
    constructor(contentService, pingSvc) {
        this.contentService = contentService;
        this.pingSvc = pingSvc;
        this.searchResultsCount = 0;
        this.showBackToTopIcon = false;
    }
    ngOnInit() {
        this.scrollToTop();
        this.pingSvc.ping('primary');
        this.contentService.content.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(content => content !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe((content) => {
            this.displayedProjects = this.allProjects = content.projects;
            this.portfolioContent = content.portfolio;
        });
    }
    onWindowScroll() {
        if (window.scrollY > 2000) {
            this.pingSvc.ping('secondary');
        }
        if (window.scrollY > 1000) {
            this.showBackToTopIcon = true;
        }
        else {
            this.showBackToTopIcon = false;
        }
    }
    scrollToTop() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
    onSearchValueChanged(searchTerm) {
        const filter = searchTerm.trim().concat(',');
        this.displayedProjects = this.transform(this.allProjects, filter);
        this.searchResultsCount = this.displayedProjects.length;
    }
    transform(allProjects, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        if (filterBy) {
            return allProjects.filter(project => project.tags.toLocaleLowerCase().match(filterBy));
        }
        return allProjects;
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_ping_service__WEBPACK_IMPORTED_MODULE_3__["PingService"])); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], hostBindings: function PortfolioComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function PortfolioComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 5, vars: 5, consts: [[1, "page-wrapper"], [3, "portfolioContent"], [3, "searchResultsCount", "searchValueChanged"], ["class", "portfolio-content", 4, "ngIf"], ["class", "back-to-top-icon", "src", "../../assets/icons/up-arrow-64.png", 3, "click", 4, "ngIf"], [1, "portfolio-content"], ["class", "project-card", 4, "ngFor", "ngForOf"], [1, "project-card"], [1, "icon-container"], ["title", "front end", "class", "fa fa-desktop", 4, "ngIf"], ["title", "server", "class", "fa fa-server", 4, "ngIf"], ["title", "database", "class", "fa fa-database", 4, "ngIf"], [1, "tech"], [1, "column-container"], [1, "left"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "project-image", 3, "src", "ngStyle"], [1, "project-stat-wrapper"], ["label", "PAGE SIZE", "unit", "kb", "note", "Data is raw size without browser caching", 3, "value"], ["label", "LOAD TIME", "unit", "s", "note", "Measured by Pingdom Website Speed Test. Average of four speeds measured from San Jose, New York, Stockholm and Melbourne.", 3, "value"], ["label", "PAGE SPEED SCORE", "unit", "%", "note", "Score is from Google Page Speed Insights (desktop).", 3, "value"], ["label", "SECURITY GRADE", "note", "Security assessment is by Mozilla Observatory.", 3, "value"], [1, "right"], [1, "project-text"], [1, "project-list"], ["class", "project-list-item", 4, "ngFor", "ngForOf"], [1, "button-container"], ["value", "Source Code", "iconClass", "fa fa-github", 3, "href"], ["value", "Live Site", "iconClass", "fa fa-external-link-square", 3, "href"], ["title", "front end", 1, "fa", "fa-desktop"], ["title", "server", 1, "fa", "fa-server"], ["title", "database", 1, "fa", "fa-database"], [1, "project-list-item"], ["src", "../../assets/icons/up-arrow-64.png", 1, "back-to-top-icon", 3, "click"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-portfolio-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchValueChanged", function PortfolioComponent_Template_app_search_searchValueChanged_2_listener($event) { return ctx.onSearchValueChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioComponent_section_3_Template, 2, 1, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PortfolioComponent_img_4_Template, 1, 1, "img", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showPage", "on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("portfolioContent", ctx.portfolioContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchResultsCount", ctx.searchResultsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayedProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBackToTopIcon);
    } }, directives: [_portfolio_banner_portfolio_banner_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioBannerComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _stat_stat_component__WEBPACK_IMPORTED_MODULE_8__["StatComponent"], _shared_button_link_button_link_component__WEBPACK_IMPORTED_MODULE_9__["ButtonLinkComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"]], styles: [".page-wrapper[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  min-height: 95vh;\n  overflow: hidden;\n}\n\n.portfolio-content[_ngcontent-%COMP%], app-search[_ngcontent-%COMP%], app-portfolio-banner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 80%;\n  margin: 0 auto;\n  transition: width 300ms;\n}\n\napp-search[_ngcontent-%COMP%], app-portfolio-banner[_ngcontent-%COMP%] {\n  display: block;\n}\n\narticle.project-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 5px;\n  margin-top: 50px;\n  padding: 30px;\n  width: 100%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);\n}\n\narticle.project-card[_ngcontent-%COMP%]:first-child {\n  margin-top: 30px;\n}\n\narticle.project-card[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 100px;\n}\n\narticle.project-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 2.2em;\n  color: #2587ce;\n  display: inline-block;\n}\n\narticle.project-card[_ngcontent-%COMP%]   span.icon-container[_ngcontent-%COMP%] {\n  float: right;\n  padding: 12px;\n}\n\narticle.project-card[_ngcontent-%COMP%]   span.icon-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\narticle.project-card[_ngcontent-%COMP%]   .tech[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  letter-spacing: 2px;\n  color: #444;\n  margin-bottom: 10px;\n  background-color: #FFC857;\n  padding: 8px;\n  border-radius: 3px;\n}\n\narticle.project-card[_ngcontent-%COMP%]   div.column-container[_ngcontent-%COMP%] {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  margin: 20px 0 30px 0;\n}\n\narticle.project-card[_ngcontent-%COMP%]   div.column-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  float: left;\n}\n\narticle.project-card[_ngcontent-%COMP%]   div.column-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  float: left;\n  margin: 0 20px 0 20px;\n}\n\n.project-image[_ngcontent-%COMP%] {\n  width: 300px;\n  border-radius: 3px;\n  transition: width 300ms;\n}\n\n.project-text[_ngcontent-%COMP%] {\n  line-height: 1.8em;\n  margin-bottom: 8px;\n}\n\n.project-list[_ngcontent-%COMP%] {\n  line-height: 1.8em;\n  margin-left: 20px;\n}\n\n.project-list-item[_ngcontent-%COMP%] {\n  list-style-type: square;\n}\n\n.project-stat-wrapper[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 10px 15px 10px 15px;\n  margin-top: 20px;\n  border-radius: 3px;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  margin-left: 320px;\n  display: flex;\n  display: -webkit-flex;\n}\n\n.button-container[_ngcontent-%COMP%]   app-button-link[_ngcontent-%COMP%] {\n  margin: 0 5px 5px 0;\n  display: block;\n}\n\n.back-to-top-icon[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  border-radius: 32px;\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);\n  transition: all 500ms;\n}\n\n.back-to-top-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 930px) {\n  app-portfolio-banner[_ngcontent-%COMP%], app-search[_ngcontent-%COMP%], .portfolio-content[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n\n  .project-image[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .button-container[_ngcontent-%COMP%] {\n    margin-left: 220px;\n  }\n}\n\n@media screen and (max-width: 595px) {\n  .search-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 10px 0 10px;\n  }\n  .search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  article.project-card[_ngcontent-%COMP%] {\n    padding: 25px;\n    margin-top: 10px;\n  }\n  article.project-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  article.project-card[_ngcontent-%COMP%]   .tech[_ngcontent-%COMP%] {\n    line-height: 1.4em;\n  }\n\n  div.column-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .button-container[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    flex-direction: column;\n  }\n\n  app-search[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    margin: 0;\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL0M6XFxVc2Vyc1xcQWxpc3RhaXJcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcYXBwXFxwb3J0Zm9saW9cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL0M6XFxVc2Vyc1xcQWxpc3RhaXJcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSx5QkNGc0I7RURHdEIsZ0JBQUE7RUFFQSxnQkFBQTtBRUpGOztBRk9BOzs7RUFHRSxpQkNia0I7RURjbEIsVUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBRUpGOztBRk9BOztFQUVFLGNBQUE7QUVKRjs7QUZPQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMENDdkJpQjtBQ21CbkI7O0FGTUU7RUFDRSxnQkFBQTtBRUpKOztBRk9FO0VBQ0Usb0JBQUE7QUVMSjs7QUZRRTtFQUNFLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNDM0NjO0VENENkLHFCQUFBO0FFTko7O0FGU0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBRVBKOztBRlNJO0VBQ0UsaUJBQUE7QUVQTjs7QUZXRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkMzRGE7RUQ0RGIsWUFBQTtFQUNBLGtCQUFBO0FFVEo7O0FGWUU7RUNsQkEsYUFBQTtFQUlBLHFCQUFBO0VEZ0JFLG1CQUFBO0VBQ0EscUJBQUE7QUVOSjs7QUZRSTtFQUNFLFdBQUE7QUVOTjs7QUZTSTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBRVBOOztBRmVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUVaRjs7QUZnQkE7RUFDRSxrQkNyRmlCO0VEc0ZqQixrQkFBQTtBRWJGOztBRmdCQTtFQUNFLGtCQzFGaUI7RUQyRmpCLGlCQUFBO0FFYkY7O0FGZ0JBO0VBQ0UsdUJBQUE7QUViRjs7QUZtQkE7RUFDRSx5QkM3R3NCO0VEOEd0Qiw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUVoQkY7O0FGbUJBO0VBQ0Usa0JBQUE7RUNyRUEsYUFBQTtFQUlBLHFCQUFBO0FDc0RGOztBRmNFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FFWko7O0FGa0JBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0FFZkY7O0FGZ0JFO0VBQ0UsZUFBQTtBRWRKOztBRnNCQTtFQUNFOzs7SUFHRSxVQUFBO0VFbkJGOztFRnNCQTtJQUNFLFlBQUE7RUVuQkY7O0VGc0JBO0lBQ0Usa0JBQUE7RUVuQkY7QUFDRjs7QUZzQkE7RUFDRTtJQUNFLHlCQUFBO0VFcEJGO0VGc0JJO0lBQ0UsV0FBQTtFRXBCTjs7RUZ5QkE7SUFDRSxhQUFBO0lBQ0EsZ0JBQUE7RUV0QkY7RUZ3QkU7SUFDRSxhQUFBO0VFdEJKO0VGeUJFO0lBQ0Usa0JBQUE7RUV2Qko7O0VGMkJBO0lBQ0UsYUFBQTtFRXhCRjs7RUYyQkE7SUFDRSxnQkFBQTtJQUNBLHNCQUFBO0VFeEJGOztFRjJCQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsU0FBQTtJQUNBLGdCQUFBO0VFeEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLy8gUEFHRSBMQVlPVVQgKioqKioqKioqKioqXHJcblxyXG4ucGFnZS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleS1iYWNrZ3JvdW5kO1xyXG4gIG1pbi1oZWlnaHQ6IDk1dmg7XHJcbiAgLy8gcHJldmVudHMgd2hpdGUgc3BhY2UgYXQgYm90dG9tXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBvcnRmb2xpby1jb250ZW50LFxyXG5hcHAtc2VhcmNoLFxyXG5hcHAtcG9ydGZvbGlvLWJhbm5lciB7XHJcbiAgbWF4LXdpZHRoOiAkbWF4LWNvbnRlbnQtd2lkdGg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcztcclxufVxyXG5cclxuYXBwLXNlYXJjaCxcclxuYXBwLXBvcnRmb2xpby1iYW5uZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5hcnRpY2xlLnByb2plY3QtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LXN0eWxlO1xyXG5cclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMi4yZW07XHJcbiAgICBjb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIHNwYW4uaWNvbi1jb250YWluZXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGVjaCB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtdXN0YXJkLXllbGxvdztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4gIGRpdi5jb2x1bW4tY29udGFpbmVyIHtcclxuICAgIEBpbmNsdWRlIGZsZXgoKTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW46IDIwcHggMCAzMHB4IDA7XHJcblxyXG4gICAgLmxlZnQge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLnByb2plY3QtaW1hZ2Uge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXM7XHJcbn1cclxuXHJcbi8vIHRoaXMgcGFyYWdyYXBoIHNpdHMgbmV4dCB0byB0aGUgaW1hZ2VcclxuLnByb2plY3QtdGV4dCB7XHJcbiAgbGluZS1oZWlnaHQ6ICR0YWxsLWxpbmUtaGVpZ2h0O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdCB7XHJcbiAgbGluZS1oZWlnaHQ6ICR0YWxsLWxpbmUtaGVpZ2h0O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xyXG59XHJcblxyXG5cclxuLy8gU1RBVFMgKioqKioqKioqKioqKioqKioqKipcclxuXHJcbi5wcm9qZWN0LXN0YXQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXktYmFja2dyb3VuZDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMyMHB4O1xyXG4gIEBpbmNsdWRlIGZsZXgoKTtcclxuXHJcbiAgYXBwLWJ1dHRvbi1saW5rIHtcclxuICAgIG1hcmdpbjogMCA1cHggNXB4IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuLmJhY2stdG8tdG9wLWljb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMjBweDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOnBvaW50ZXJcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBNRURJQSBRVUVSSUVTXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTMwcHgpIHtcclxuICBhcHAtcG9ydGZvbGlvLWJhbm5lcixcclxuICBhcHAtc2VhcmNoLFxyXG4gIC5wb3J0Zm9saW8tY29udGVudCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk1cHgpIHtcclxuICAuc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4IDAgMTBweDtcclxuICAgIC5pbnB1dC13cmFwcGVyIHtcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcnRpY2xlLnByb2plY3QtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudGVjaCB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpdi5jb2x1bW4tY29udGFpbmVyIC5sZWZ0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIGFwcC1zZWFyY2gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiXHJcbiRtYXgtY29udGVudC13aWR0aDogMTIwMHB4O1xyXG4kaGlnaGxpZ2h0LWNvbG9yOiAjMjU4N2NlO1xyXG4kbGlnaHQtZ3JleS1iYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4kbXVzdGFyZC15ZWxsb3c6ICNGRkM4NTc7XHJcbiRoZWFkaW5nLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGxpbmtlZGluLWNvbG91cjogcmdiKDAsIDExOSwgMTgxKTtcclxuXHJcbiRib3gtc2hhZG93LXN0eWxlOiAwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiRib3gtc2hhZG93LXN0eWxlLXNtYWxsOiAwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiR0YWxsLWxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuXHJcbkBtaXhpbiBwcm9qZWN0LWJ1dHRvbnMoJGNvbG91cikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXNpemU6ICAwLjlyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvdXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHByb2plY3QtYnV0dG9uLWxpbmsoKSB7XHJcbiAgQGluY2x1ZGUgcHJvamVjdC1idXR0b25zKCRoaWdobGlnaHQtY29sb3IpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHByb2plY3QtbGlua3MoKSB7XHJcbiAgY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgoKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbn1cclxuIiwiLnBhZ2Utd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIG1pbi1oZWlnaHQ6IDk1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wb3J0Zm9saW8tY29udGVudCxcbmFwcC1zZWFyY2gsXG5hcHAtcG9ydGZvbGlvLWJhbm5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXM7XG59XG5cbmFwcC1zZWFyY2gsXG5hcHAtcG9ydGZvbGlvLWJhbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5hcnRpY2xlLnByb2plY3QtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbmFydGljbGUucHJvamVjdC1jYXJkOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmFydGljbGUucHJvamVjdC1jYXJkOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cbmFydGljbGUucHJvamVjdC1jYXJkIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIuMmVtO1xuICBjb2xvcjogIzI1ODdjZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuYXJ0aWNsZS5wcm9qZWN0LWNhcmQgc3Bhbi5pY29uLWNvbnRhaW5lciB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMTJweDtcbn1cbmFydGljbGUucHJvamVjdC1jYXJkIHNwYW4uaWNvbi1jb250YWluZXIgaSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuYXJ0aWNsZS5wcm9qZWN0LWNhcmQgLnRlY2gge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzQ0NDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzg1NztcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5hcnRpY2xlLnByb2plY3QtY2FyZCBkaXYuY29sdW1uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAyMHB4IDAgMzBweCAwO1xufVxuYXJ0aWNsZS5wcm9qZWN0LWNhcmQgZGl2LmNvbHVtbi1jb250YWluZXIgLmxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cbmFydGljbGUucHJvamVjdC1jYXJkIGRpdi5jb2x1bW4tY29udGFpbmVyIC5yaWdodCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XG59XG5cbi5wcm9qZWN0LWltYWdlIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zO1xufVxuXG4ucHJvamVjdC10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5wcm9qZWN0LWxpc3Qge1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xuICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcbn1cblxuLnByb2plY3Qtc3RhdC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAzMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xufVxuLmJ1dHRvbi1jb250YWluZXIgYXBwLWJ1dHRvbi1saW5rIHtcbiAgbWFyZ2luOiAwIDVweCA1cHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5iYWNrLXRvLXRvcC1pY29uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcztcbn1cbi5iYWNrLXRvLXRvcC1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzBweCkge1xuICBhcHAtcG9ydGZvbGlvLWJhbm5lcixcbmFwcC1zZWFyY2gsXG4ucG9ydGZvbGlvLWNvbnRlbnQge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cblxuICAucHJvamVjdC1pbWFnZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG5cbiAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk1cHgpIHtcbiAgLnNlYXJjaC13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggMCAxMHB4O1xuICB9XG4gIC5zZWFyY2gtd3JhcHBlciAuaW5wdXQtd3JhcHBlciBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBhcnRpY2xlLnByb2plY3QtY2FyZCB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIGFydGljbGUucHJvamVjdC1jYXJkIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgYXJ0aWNsZS5wcm9qZWN0LWNhcmQgLnRlY2gge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgfVxuXG4gIGRpdi5jb2x1bW4tY29udGFpbmVyIC5sZWZ0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIGFwcC1zZWFyY2gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59Il19 */"], data: { animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_2__["pageTransition"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.scss'],
                animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_2__["pageTransition"]]
            }]
    }], function () { return [{ type: app_core_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"] }, { type: app_core_services_ping_service__WEBPACK_IMPORTED_MODULE_3__["PingService"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
        }] }); })();


/***/ }),

/***/ "./src/app/portfolio/search/search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/portfolio/search/search.component.ts ***!
  \******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const _c0 = ["searchInput"];
class SearchComponent {
    constructor() {
        this.searchResultsCount = 0;
        this.searchValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        this.searchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => value.trim().toLocaleLowerCase()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).subscribe(value => {
            this.searchValueChanged.emit(value);
        });
    }
    ngAfterViewInit() {
        this.searchInputRef.nativeElement.focus();
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInputRef = _t.first);
    } }, inputs: { searchResultsCount: "searchResultsCount" }, outputs: { searchValueChanged: "searchValueChanged" }, decls: 9, vars: 3, consts: [["for", "search"], [1, "input-wrapper"], ["name", "search", "type", "text", "autocomplete", "off", "placeholder", "e.g. angular", 1, "search-input", 3, "formControl"], ["searchInput", ""], [1, "fa", "fa-search"], [1, "search-result"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SEARCH BY TECHNOLOGY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.searchResultsCount, " ", ctx.searchResultsCount === 1 ? "result" : "results", "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: ["form[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9em;\n  font-weight: bold;\n  letter-spacing: 0.1px;\n  padding: 5px 8px;\n}\nform[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\nform[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  left: 12px;\n  font-size: 1.2em;\n}\nform[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 46px;\n  font-size: 1.2em;\n  border-radius: 10px;\n  padding: 10px;\n  padding-left: 44px;\n  width: 100%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);\n  border: 1px solid #2587ce;\n  transition: box-shadow 400ms;\n}\nform[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 1px 1px #2587ce;\n  outline: none;\n}\n.search-result[_ngcontent-%COMP%] {\n  color: #444;\n  font-style: italic;\n  padding: 7px;\n}\n@media screen and (max-width: 930px) {\n  form[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n@media screen and (max-width: 595px) {\n  form[_ngcontent-%COMP%] {\n    padding: 20px 10px 0 10px;\n  }\n  form[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3NlYXJjaC9DOlxcVXNlcnNcXEFsaXN0YWlyXFxEb2N1bWVudHNcXEdpdEh1YlxcUHJvamVjdHNcXHBvcnRmb2xpby9zcmNcXGFwcFxccG9ydGZvbGlvXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvcnRmb2xpby9zZWFyY2gvQzpcXFVzZXJzXFxBbGlzdGFpclxcRG9jdW1lbnRzXFxHaXRIdWJcXFByb2plY3RzXFxwb3J0Zm9saW8vc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0FDREY7QURHRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUU7RUFDRSxrQkFBQTtBQ0ZKO0FESUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNGTjtBREtJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMENFdEJhO0VGdUJiLHlCQUFBO0VBQ0EsNEJBQUE7QUNITjtBRElNO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0FDRlI7QURRQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNMRjtBRFNBO0VBQ0U7SUFDRSxVQUFBO0VDTkY7QUFDRjtBRFdBO0VBQ0U7SUFDRSx5QkFBQTtFQ1RGO0VEWUk7SUFDRSxXQUFBO0VDVk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDE0cHg7XHJcbiAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNDRweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LXN0eWxlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDQwMG1zO1xyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IHtcclxuICBjb2xvcjogIzQ0NDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgcGFkZGluZzogN3B4O1xyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTMwcHgpIHtcclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5NXB4KSB7XHJcbiAgZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggMCAxMHB4O1xyXG5cclxuICAgIC5pbnB1dC13cmFwcGVyIHtcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJmb3JtIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5mb3JtIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG59XG5mb3JtIC5pbnB1dC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuZm9ybSAuaW5wdXQtd3JhcHBlciBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5mb3JtIC5pbnB1dC13cmFwcGVyIGlucHV0IHtcbiAgaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNTg3Y2U7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgNDAwbXM7XG59XG5mb3JtIC5pbnB1dC13cmFwcGVyIGlucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggIzI1ODdjZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNlYXJjaC1yZXN1bHQge1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBwYWRkaW5nOiA3cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzMHB4KSB7XG4gIGZvcm0ge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5NXB4KSB7XG4gIGZvcm0ge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwIDEwcHg7XG4gIH1cbiAgZm9ybSAuaW5wdXQtd3JhcHBlciBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iLCJcclxuJG1heC1jb250ZW50LXdpZHRoOiAxMjAwcHg7XHJcbiRoaWdobGlnaHQtY29sb3I6ICMyNTg3Y2U7XHJcbiRsaWdodC1ncmV5LWJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiRtdXN0YXJkLXllbGxvdzogI0ZGQzg1NztcclxuJGhlYWRpbmctZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kbGlua2VkaW4tY29sb3VyOiByZ2IoMCwgMTE5LCAxODEpO1xyXG5cclxuJGJveC1zaGFkb3ctc3R5bGU6IDBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuJGJveC1zaGFkb3ctc3R5bGUtc21hbGw6IDBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuJHRhbGwtbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG5cclxuQG1peGluIHByb2plY3QtYnV0dG9ucygkY29sb3VyKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBjb2xvcjogIzIyMjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtc2l6ZTogIDAuOXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogOHB4IDEycHggOHB4IDEycHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG91cjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcHJvamVjdC1idXR0b24tbGluaygpIHtcclxuICBAaW5jbHVkZSBwcm9qZWN0LWJ1dHRvbnMoJGhpZ2hsaWdodC1jb2xvcik7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gcHJvamVjdC1saW5rcygpIHtcclxuICBjb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleCgpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return []; }, { searchInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput']
        }], searchResultsCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchValueChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/portfolio/stat/stat.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/stat/stat.component.ts ***!
  \**************************************************/
/*! exports provided: StatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComponent", function() { return StatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StatComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatComponent.ɵfac = function StatComponent_Factory(t) { return new (t || StatComponent)(); };
StatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatComponent, selectors: [["app-stat"]], inputs: { label: "label", value: "value", note: "note", unit: "unit" }, decls: 5, vars: 4, consts: [[1, "fa", "fa-question-circle-o", 3, "title"]], template: function StatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.value, "", ctx.unit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.note);
    } }, styles: ["p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.85em;\n  letter-spacing: 1.5px;\n  line-height: 2.2em;\n}\n\nspan[_ngcontent-%COMP%] {\n  background-color: #FFC857;\n  padding: 3px 8px 3px 8px;\n  border-radius: 10px;\n  color: black;\n  font-size: 0.8em;\n  text-align: right;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #73b6e6;\n  margin-left: 5px;\n}\n\ni[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3N0YXQvQzpcXFVzZXJzXFxBbGlzdGFpclxcRG9jdW1lbnRzXFxHaXRIdWJcXFByb2plY3RzXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHBvcnRmb2xpb1xcc3RhdFxcc3RhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL3N0YXQvc3RhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL3N0YXQvQzpcXFVzZXJzXFxBbGlzdGFpclxcRG9jdW1lbnRzXFxHaXRIdWJcXFByb2plY3RzXFxwb3J0Zm9saW8vc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSx5QkVOZTtFRk9mLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREdFO0VBQ0UsZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3N0YXQvc3RhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbnAge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICBsaW5lLWhlaWdodDogMi4yZW07XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtdXN0YXJkLXllbGxvdztcclxuICBwYWRkaW5nOiAzcHggOHB4IDNweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuaSB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgY29sb3I6IGxpZ2h0ZW4oJGhpZ2hsaWdodC1jb2xvciwgMjAlKTtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIiwicCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBsaW5lLWhlaWdodDogMi4yZW07XG59XG5cbnNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDODU3O1xuICBwYWRkaW5nOiAzcHggOHB4IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmkge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICM3M2I2ZTY7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5pOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIlxyXG4kbWF4LWNvbnRlbnQtd2lkdGg6IDEyMDBweDtcclxuJGhpZ2hsaWdodC1jb2xvcjogIzI1ODdjZTtcclxuJGxpZ2h0LWdyZXktYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuJG11c3RhcmQteWVsbG93OiAjRkZDODU3O1xyXG4kaGVhZGluZy1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRsaW5rZWRpbi1jb2xvdXI6IHJnYigwLCAxMTksIDE4MSk7XHJcblxyXG4kYm94LXNoYWRvdy1zdHlsZTogMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xyXG4kYm94LXNoYWRvdy1zdHlsZS1zbWFsbDogMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xyXG4kdGFsbC1saW5lLWhlaWdodDogMS44ZW07XHJcblxyXG5AbWl4aW4gcHJvamVjdC1idXR0b25zKCRjb2xvdXIpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1zaXplOiAgMC45cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA4cHggMTJweCA4cHggMTJweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3VyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwcm9qZWN0LWJ1dHRvbi1saW5rKCkge1xyXG4gIEBpbmNsdWRlIHByb2plY3QtYnV0dG9ucygkaGlnaGxpZ2h0LWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBwcm9qZWN0LWxpbmtzKCkge1xyXG4gIGNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stat',
                templateUrl: './stat.component.html',
                styleUrls: ['./stat.component.scss']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], note: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/skills/skills-table/skills-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/skills/skills-table/skills-table.component.ts ***!
  \***************************************************************/
/*! exports provided: SkillsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsTableComponent", function() { return SkillsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SkillsTableComponent_table_0_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r2.professional);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r2.amateur);
} }
function SkillsTableComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Professional Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Other Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SkillsTableComponent_table_0_tr_7_Template, 7, 3, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.skillsTable);
} }
class SkillsTableComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsTableComponent.ɵfac = function SkillsTableComponent_Factory(t) { return new (t || SkillsTableComponent)(); };
SkillsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsTableComponent, selectors: [["app-skills-table"]], inputs: { skillsTable: "skillsTable" }, decls: 1, vars: 1, consts: [["class", "skills-table", 4, "ngIf"], [1, "skills-table"], [1, "category"], [1, "professional"], [1, "amateur"], [4, "ngFor", "ngForOf"]], template: function SkillsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkillsTableComponent_table_0_Template, 8, 1, "table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.skillsTable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["table[_ngcontent-%COMP%] {\n  border: 1px solid #2587ce;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);\n  border-collapse: collapse;\n  margin-bottom: 20px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 10px;\n  line-height: 1.5em;\n  font-size: 1.1em;\n}\n\nth[_ngcontent-%COMP%], td.category[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  background-color: #2587ce;\n  border: 1px solid #0e324c;\n}\n\ntd.professional[_ngcontent-%COMP%], td.amateur[_ngcontent-%COMP%] {\n  border: 1px solid #555;\n}\n\ntd.professional[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy10YWJsZS9DOlxcVXNlcnNcXEFsaXN0YWlyXFxEb2N1bWVudHNcXEdpdEh1YlxcUHJvamVjdHNcXHBvcnRmb2xpby9zcmNcXGFwcFxcc2tpbGxzXFxza2lsbHMtdGFibGVcXHNraWxscy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2tpbGxzL3NraWxscy10YWJsZS9DOlxcVXNlcnNcXEFsaXN0YWlyXFxEb2N1bWVudHNcXEdpdEh1YlxcUHJvamVjdHNcXHBvcnRmb2xpby9zcmNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9za2lsbHMvc2tpbGxzLXRhYmxlL3NraWxscy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0VBQ0EsMENDSWlCO0VESGpCLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FFREY7O0FGS0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRUZGOztBRktBOztFQUVFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQ25CZ0I7RURvQmhCLHlCQUFBO0FFRkY7O0FGS0E7O0VBRUUsc0JBQUE7QUVGRjs7QUZLQTtFQUNFLGlCQUFBO0FFRkYiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLXRhYmxlL3NraWxscy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXI6MXB4IHNvbGlkICRoaWdobGlnaHQtY29sb3I7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctc3R5bGU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG50ZCwgdGgge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbn1cclxuXHJcbnRoLFxyXG50ZC5jYXRlZ29yeSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRoaWdobGlnaHQtY29sb3IsIDMwJSk7XHJcbn1cclxuXHJcbnRkLnByb2Zlc3Npb25hbCxcclxudGQuYW1hdGV1ciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxufVxyXG5cclxudGQucHJvZmVzc2lvbmFsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIlxyXG4kbWF4LWNvbnRlbnQtd2lkdGg6IDEyMDBweDtcclxuJGhpZ2hsaWdodC1jb2xvcjogIzI1ODdjZTtcclxuJGxpZ2h0LWdyZXktYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuJG11c3RhcmQteWVsbG93OiAjRkZDODU3O1xyXG4kaGVhZGluZy1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRsaW5rZWRpbi1jb2xvdXI6IHJnYigwLCAxMTksIDE4MSk7XHJcblxyXG4kYm94LXNoYWRvdy1zdHlsZTogMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xyXG4kYm94LXNoYWRvdy1zdHlsZS1zbWFsbDogMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xyXG4kdGFsbC1saW5lLWhlaWdodDogMS44ZW07XHJcblxyXG5AbWl4aW4gcHJvamVjdC1idXR0b25zKCRjb2xvdXIpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1zaXplOiAgMC45cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA4cHggMTJweCA4cHggMTJweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3VyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwcm9qZWN0LWJ1dHRvbi1saW5rKCkge1xyXG4gIEBpbmNsdWRlIHByb2plY3QtYnV0dG9ucygkaGlnaGxpZ2h0LWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBwcm9qZWN0LWxpbmtzKCkge1xyXG4gIGNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG59XHJcbiIsInRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI1ODdjZTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG50aCxcbnRkLmNhdGVnb3J5IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1ODdjZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBlMzI0Yztcbn1cblxudGQucHJvZmVzc2lvbmFsLFxudGQuYW1hdGV1ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XG59XG5cbnRkLnByb2Zlc3Npb25hbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills-table',
                templateUrl: './skills-table.component.html',
                styleUrls: ['./skills-table.component.scss']
            }]
    }], function () { return []; }, { skillsTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_shared/animations */ "./src/app/_shared/animations.ts");
/* harmony import */ var app_core_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/_core/services/content.service */ "./src/app/_core/services/content.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _skills_table_skills_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills-table/skills-table.component */ "./src/app/skills/skills-table/skills-table.component.ts");








function SkillsComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ABOUT ME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-skills-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LEARNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " I make heavy use of Pluralsight and Udemy to upgrade my skills and learn new techniques. You can view skills evaluations for JavaScript, Node and other technologies, and view a list of completed courses, on the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "profile page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "For practicing algorithms and sharpening problem solving skills I use the Codewars site. You can see my ranking for Javascript, Java and C# on the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "profile page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " and view solutions as ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "GitHub gists");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View my full CV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skills_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", skills_r1.introductionHtml, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skillsTable", skills_r1.skillsTable);
} }
class SkillsComponent {
    constructor(contentService) {
        this.contentService = contentService;
    }
    ngOnInit() {
        this.skills$ = this.contentService.content.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(content => content.skills), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(a => console.log(a)));
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"])); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 4, vars: 4, consts: [[1, "page-wrapper"], [1, "content-wrapper"], ["class", "skills-section", 4, "ngIf"], [1, "skills-section"], [1, "skills-heading-wrapper"], ["src", "../../assets/icons/skills.png", 1, "skills-icon"], [1, "skills-heading"], [1, "skills-text", 3, "innerHTML"], [3, "skillsTable"], ["src", "../../assets/icons/studying.png", 1, "skills-icon"], [1, "skills-text"], ["href", "https://app.pluralsight.com/profile/alistair-willis", "target", "_blank", 1, "text-link"], ["href", "https://www.codewars.com/users/ARWL2016", "target", "_blank", 1, "text-link"], ["href", "https://gist.github.com/ARWL2016", "target", "blank", 1, "text-link"], [1, "cv-link"], ["src", "../../assets/icons/pdf-64.png"], ["href", "/alistair-willis", "target", "_blank", "rel", "noopener noreferrer"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillsComponent_section_2_Template, 28, 2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showPage", "on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.skills$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _skills_table_skills_table_component__WEBPACK_IMPORTED_MODULE_5__["SkillsTableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".page-wrapper {\n  background-color: #f7f7f7;\n}\n\n.content-wrapper {\n  max-width: 1200px;\n  margin: 0 auto;\n  background-color: white;\n  padding: 20px;\n}\n\n.skills-section {\n  max-width: 1000px;\n  margin: 0 auto;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n\n.skills-heading-wrapper {\n  margin: 50px 0 30px 0;\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n}\n\n.skills-icon {\n  height: 36px;\n}\n\n.skills-heading {\n  margin-left: 18px;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.skills-text p {\n  margin-bottom: 20px;\n  line-height: 1.8em;\n}\n\n.skills-text p:last-child {\n  margin-bottom: 50px;\n}\n\n.text-link {\n  color: #2587ce;\n  text-decoration: none;\n}\n\n.text-link:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.cv-link img {\n  height: 1.5em;\n}\n\n.cv-link a {\n  color: #2587ce;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.cv-link a:hover {\n  text-decoration: underline;\n}\n\n@media (max-width: 800px) {\n  .skills-section {\n    width: 90%;\n    margin-top: 30px;\n  }\n\n  .skills-heading-wrapper {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL0M6XFxVc2Vyc1xcQWxpc3RhaXJcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcYXBwXFxza2lsbHNcXHNraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2tpbGxzL0M6XFxVc2Vyc1xcQWxpc3RhaXJcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSx5QkNGc0I7QUNEeEI7O0FGTUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUVIRjs7QUZNQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUVIRjs7QUZRQTtFQUNFLHFCQUFBO0VDeUJBLGFBQUE7RUFJQSxxQkFBQTtFRDNCQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUVERjs7QUZLQTtFQUNFLFlBQUE7QUVGRjs7QUZLQTtFQUNFLGlCQUFBO0VBQ0EscUNDbENhO0FDZ0NmOztBRlNFO0VBQ0UsbUJBQUE7RUFDQSxrQkN0Q2U7QUNnQ25COztBRlNFO0VBQ0UsbUJBQUE7QUVQSjs7QUZXQTtFQ2hCRSxjQXRDZ0I7RUF1Q2hCLHFCQUFBO0FDU0Y7O0FEUEU7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUNTSjs7QUZPRTtFQUNFLGFBQUE7QUVKSjs7QUZPRTtFQUNFLGNDaEVjO0VEaUVkLHFCQUFBO0VBQ0EseUJBQUE7QUVMSjs7QUZPSTtFQUNFLDBCQUFBO0FFTE47O0FGYUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFRVZGOztFRllBO0lBQ0UsZ0JBQUE7RUVURjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi8vIExBWU9VVCBTVFlMRVMgKioqKioqKipcclxuXHJcbi5wYWdlLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5LWJhY2tncm91bmQ7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXBwZXIge1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5za2lsbHMtc2VjdGlvbiB7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi8vIEhFQURJTkcgU1RZTEVTICoqKioqKioqXHJcblxyXG4uc2tpbGxzLWhlYWRpbmctd3JhcHBlciB7XHJcbiAgbWFyZ2luOiA1MHB4IDAgMzBweCAwO1xyXG4gIEBpbmNsdWRlIGZsZXgoKTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG5cclxufVxyXG5cclxuLnNraWxscy1pY29uIHtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5za2lsbHMtaGVhZGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICRoZWFkaW5nLWZvbnQ7XHJcbn1cclxuXHJcbi8vIFRFWFQgU1RZTEVTICoqKioqKioqXHJcblxyXG4uc2tpbGxzLXRleHQge1xyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogJHRhbGwtbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LWxpbmsge1xyXG4gQGluY2x1ZGUgcHJvamVjdC1saW5rcztcclxufVxyXG5cclxuLmN2LWxpbmsge1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLnNraWxscy1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICAuc2tpbGxzLWhlYWRpbmctd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIlxyXG4kbWF4LWNvbnRlbnQtd2lkdGg6IDEyMDBweDtcclxuJGhpZ2hsaWdodC1jb2xvcjogIzI1ODdjZTtcclxuJGxpZ2h0LWdyZXktYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuJG11c3RhcmQteWVsbG93OiAjRkZDODU3O1xyXG4kaGVhZGluZy1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRsaW5rZWRpbi1jb2xvdXI6IHJnYigwLCAxMTksIDE4MSk7XHJcblxyXG4kYm94LXNoYWRvdy1zdHlsZTogMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xyXG4kYm94LXNoYWRvdy1zdHlsZS1zbWFsbDogMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xyXG4kdGFsbC1saW5lLWhlaWdodDogMS44ZW07XHJcblxyXG5AbWl4aW4gcHJvamVjdC1idXR0b25zKCRjb2xvdXIpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1zaXplOiAgMC45cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA4cHggMTJweCA4cHggMTJweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3VyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwcm9qZWN0LWJ1dHRvbi1saW5rKCkge1xyXG4gIEBpbmNsdWRlIHByb2plY3QtYnV0dG9ucygkaGlnaGxpZ2h0LWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBwcm9qZWN0LWxpbmtzKCkge1xyXG4gIGNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG59XHJcbiIsIi5wYWdlLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnNraWxscy1zZWN0aW9uIHtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5za2lsbHMtaGVhZGluZy13cmFwcGVyIHtcbiAgbWFyZ2luOiA1MHB4IDAgMzBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cblxuLnNraWxscy1pY29uIHtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG4uc2tpbGxzLWhlYWRpbmcge1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uc2tpbGxzLXRleHQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbn1cbi5za2lsbHMtdGV4dCBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4udGV4dC1saW5rIHtcbiAgY29sb3I6ICMyNTg3Y2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi50ZXh0LWxpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3YtbGluayBpbWcge1xuICBoZWlnaHQ6IDEuNWVtO1xufVxuLmN2LWxpbmsgYSB7XG4gIGNvbG9yOiAjMjU4N2NlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uY3YtbGluayBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuc2tpbGxzLXNlY3Rpb24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4gIC5za2lsbHMtaGVhZGluZy13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG59Il19 */"], encapsulation: 2, data: { animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_1__["pageTransition"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss'],
                animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_1__["pageTransition"]],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: app_core_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


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