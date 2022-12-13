"use strict";
(self["webpackChunkATM"] = self["webpackChunkATM"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_atm_window_atm_window_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/atm-window/atm-window.component */ 3489);


class AppComponent {
    constructor() {
        this.title = 'ATM';
    }
    ngOnInit() {
        // const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/x-www-form-urlencoded'});
        // this.http.post(
        //   `${environment.backApi}/login`,
        //   'number=2440735783328557&pin=5384&atm=1', //{"number": 2440735783328557, "pin": 5384, "atm": 1},
        //   {headers}
        // )
        // // of('')
        // .pipe(
        //   switchMap(res => {
        //     console.log(res);
        //     return this.http.get(`${environment.backApi}/account/plans`, {headers, withCredentials: true})
        //   })
        // )
        // .subscribe(e => {
        //   console.log(e);
        // })
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[2, "display", "flex"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-atm-window");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_components_atm_window_atm_window_component__WEBPACK_IMPORTED_MODULE_0__.AtmWindowComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ 2681);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_atm_list_atm_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/atm-list/atm-list.component */ 388);
/* harmony import */ var _components_atm_login_atm_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/atm-login/atm-login.component */ 278);
/* harmony import */ var _components_atm_main_menu_atm_main_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/atm-main-menu/atm-main-menu.component */ 274);
/* harmony import */ var _components_atm_window_atm_window_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/atm-window/atm-window.component */ 3489);
/* harmony import */ var _services_atm_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/atm-http.service */ 9823);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/utils.service */ 8270);
/* harmony import */ var _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/atm-header/atm-header.component */ 1490);
/* harmony import */ var _pages_my_accounts_my_accounts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/my-accounts/my-accounts.component */ 8342);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/navigation.service */ 9565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        _services_atm_http_service__WEBPACK_IMPORTED_MODULE_6__.AtmHttpService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder,
        _services_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_10__.NavigationService
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_atm_window_atm_window_component__WEBPACK_IMPORTED_MODULE_5__.AtmWindowComponent,
        _components_atm_list_atm_list_component__WEBPACK_IMPORTED_MODULE_2__.AtmListComponent,
        _components_atm_login_atm_login_component__WEBPACK_IMPORTED_MODULE_3__.AtmLoginComponent,
        _components_atm_main_menu_atm_main_menu_component__WEBPACK_IMPORTED_MODULE_4__.AtmMainMenuComponent,
        _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_8__.AtmHeaderComponent,
        _pages_my_accounts_my_accounts_component__WEBPACK_IMPORTED_MODULE_9__.MyAccountsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 1490:
/*!***************************************************************!*\
  !*** ./src/app/components/atm-header/atm-header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtmHeaderComponent": () => (/* binding */ AtmHeaderComponent)
/* harmony export */ });
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/account.service */ 9876);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);







function AtmHeaderComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AtmHeaderComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.navigationService.goTo(ctx_r1.lastState));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

class AtmHeaderComponent {
  constructor(accountService, navigationService) {
    this.accountService = accountService;
    this.navigationService = navigationService;
    this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmStates;
    this.currentState$ = this.accountService.atmState$;
  }

  ngOnInit() {}

}

AtmHeaderComponent.ɵfac = function AtmHeaderComponent_Factory(t) {
  return new (t || AtmHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService));
};

AtmHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AtmHeaderComponent,
  selectors: [["app-atm-header"]],
  inputs: {
    lastState: "lastState"
  },
  decls: 9,
  vars: 4,
  consts: [[1, "header-btn-container"], ["fxFlex", "33", 2, "text-align", "start"], [3, "click", 4, "ngIf"], ["fxFlex", "33", 2, "text-align", "center"], ["fxFlex", "33", 2, "text-align", "end"], [3, "click"]],
  template: function AtmHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AtmHeaderComponent_button_2_Template, 2, 0, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AtmHeaderComponent_Template_button_click_7_listener() {
        return ctx.navigationService.goTo(ctx.ATM_STATES.LOGIN);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Exit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.lastState);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 2, ctx.currentState$), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: [".header-btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0bS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImF0bS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gdGV4dC1hbGlnbjogZW5kO1xufSJdfQ== */"]
});

/***/ }),

/***/ 388:
/*!***********************************************************!*\
  !*** ./src/app/components/atm-list/atm-list.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtmListComponent": () => (/* binding */ AtmListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);







const _c0 = function (a1) {
  return {
    "atm-list-item": true,
    "atm-list-item__selected": a1
  };
};

function AtmListComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AtmListComponent_li_5_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.selectItem(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const atm_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx_r0.selectedIndex) === i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", atm_r1.id, ": ", atm_r1.address, " ");
  }
}

class AtmListComponent {
  constructor() {
    this.atmList = [{
      "id": 1,
      "address": "Street numero uno",
      "atmStatus": src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmStatus.IDLE,
      "banks": [{
        "id": 1,
        "name": "9 vbyv kozu kulakom"
      }]
    }, {
      "id": 2,
      "address": "Street numero dos",
      "atmStatus": src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmStatus.IDLE,
      "banks": [{
        "id": 1,
        "name": "9 vbyv kozu kulakom"
      }, {
        "id": 2,
        "name": "Bank number2"
      }]
    }, {
      "id": 3,
      "address": "Street numero uno",
      "atmStatus": src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmStatus.IDLE,
      "banks": [{
        "id": 3,
        "name": "9 vbyv kozu kulakom"
      }]
    }];
    this.selectedIndex = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.onAtmSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }

  ngOnInit() {}

  selectItem(index) {
    this.selectedIndex.next(index);
    this.onAtmSelect.emit(this.atmList[index]);
  }

}

AtmListComponent.ɵfac = function AtmListComponent_Factory(t) {
  return new (t || AtmListComponent)();
};

AtmListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AtmListComponent,
  selectors: [["app-atm-list"]],
  inputs: {
    atmList: "atmList"
  },
  outputs: {
    onAtmSelect: "onAtmSelect"
  },
  decls: 6,
  vars: 1,
  consts: [[1, "atm-list"], [1, "tree-view"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"]],
  template: function AtmListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1)(2, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ATM List");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AtmListComponent_li_5_Template, 3, 7, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.atmList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: [".atm-list[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100%;\n  position: relative;\n}\n\n.tree-view[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.atm-list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.atm-list-item__selected[_ngcontent-%COMP%] {\n  outline: 1px dotted #00f;\n  background-color: navy;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0bS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUNJO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDUiIsImZpbGUiOiJhdG0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdG0tbGlzdCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50cmVlLXZpZXcge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmF0bS1saXN0LWl0ZW0ge1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICZfX3NlbGVjdGVkIHtcbiAgICAgICAgb3V0bGluZTogMXB4IGRvdHRlZCAjMDBmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59Il19 */"]
});

/***/ }),

/***/ 278:
/*!*************************************************************!*\
  !*** ./src/app/components/atm-login/atm-login.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtmLoginComponent": () => (/* binding */ AtmLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/atm-http.service */ 9823);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/account.service */ 9876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);










function AtmLoginComponent_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Card number lenght must be 16 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AtmLoginComponent_div_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AtmLoginComponent_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " This card is not supported by this ATM. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AtmLoginComponent_div_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " An error occured, try again later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AtmLoginComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AtmLoginComponent_div_7_span_3_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AtmLoginComponent_div_7_span_4_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AtmLoginComponent_div_7_span_5_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AtmLoginComponent_div_7_span_6_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r0.loginForm.get("cardNumber").errors["minLength"]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.loginForm.get("cardNumber").errors == null ? null : ctx_r0.loginForm.get("cardNumber").errors["minlength"]) || (ctx_r0.loginForm.get("cardNumber").errors == null ? null : ctx_r0.loginForm.get("cardNumber").errors["maxlength"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("cardNumber").errors == null ? null : ctx_r0.loginForm.get("cardNumber").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("cardNumber").errors == null ? null : ctx_r0.loginForm.get("cardNumber").errors["invalidCard"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("cardNumber").errors == null ? null : ctx_r0.loginForm.get("cardNumber").errors["httpError"]);
  }
}

function AtmLoginComponent_div_8_div_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Pin code lenght must be 4 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AtmLoginComponent_div_8_div_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AtmLoginComponent_div_8_div_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Pin code is incorrect. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AtmLoginComponent_div_8_div_6_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " An error occured, try again later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AtmLoginComponent_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AtmLoginComponent_div_8_div_6_span_3_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AtmLoginComponent_div_8_div_6_span_4_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AtmLoginComponent_div_8_div_6_span_5_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AtmLoginComponent_div_8_div_6_span_6_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r6.loginForm.get("pinCode").errors["minLength"]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r6.loginForm.get("pinCode").errors == null ? null : ctx_r6.loginForm.get("pinCode").errors["minlength"]) || (ctx_r6.loginForm.get("pinCode").errors == null ? null : ctx_r6.loginForm.get("pinCode").errors["maxlength"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.loginForm.get("pinCode").errors == null ? null : ctx_r6.loginForm.get("pinCode").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.loginForm.get("pinCode").errors == null ? null : ctx_r6.loginForm.get("pinCode").errors["invalidPinCode"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.loginForm.get("pinCode").errors == null ? null : ctx_r6.loginForm.get("pinCode").errors["httpError"]);
  }
}

function AtmLoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "label", 9)(2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "in Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AtmLoginComponent_div_8_div_6_Template, 7, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r1.loginForm.get("pinCode")) == null ? null : tmp_0_0.invalid) && ((tmp_0_0 = ctx_r1.loginForm.get("pinCode")) == null ? null : tmp_0_0.touched));
  }
}

class AtmLoginComponent {
  constructor(fb, atmHttpService, accountService) {
    this.fb = fb;
    this.atmHttpService = atmHttpService;
    this.accountService = accountService;
    this.afterLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.loginForm = this.fb.group({
      cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(16)]),
      pinCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4)])
    });
    this.isVerified$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.loginForm.disable();
  }

  ngOnInit() {
    this.selectedAtm$.next(null);
    this.accountService.cardNumber = null;
    this.selectedAtm$.subscribe(atm => {
      if (atm) {
        this.loginForm.enable();
        this.loginForm.reset();
        this.accountService.cardNumber = null;
      }

      this.loginForm.patchValue({
        cardNumber: '2440735783328557',
        pinCode: '5384'
      });
      this.isVerified$.next(false);
    });
    this.loginForm.get('cardNumber')?.valueChanges.subscribe(val => {
      this.loginForm.get('cardNumber')?.setValue(val?.replace(/\s/g, '') ?? '', {
        emitEvent: false
      });
    });
  }

  submitAction() {
    // this.loginForm.markAllAsTouched();
    if (this.loginForm.get('cardNumber')?.invalid || this.loginForm.get('pinCode')?.invalid && this.isVerified$.value || !this.selectedAtm$.value?.id) {
      this.loginForm.markAllAsTouched();
      return;
    }

    if (!this.isVerified$.value && this.selectedAtm$.value?.id) {
      this.loginForm.get('cardNumber')?.markAllAsTouched();
      this.atmHttpService.verifyAtm(this.loginForm.get('cardNumber')?.value, this.selectedAtm$.value.id).subscribe({
        next: () => {
          this.loginForm.get('cardNumber')?.disable();
          this.accountService.cardNumber = this.loginForm.get('cardNumber')?.value ?? null;
          this.isVerified$.next(true);
        },
        error: err => {
          if (err.status == 400) {
            this.loginForm.get('cardNumber')?.setErrors({
              invalidCard: true
            });
            this.accountService.cardNumber = null;
          } else {
            this.loginForm.get('cardNumber')?.setErrors({
              httpError: true
            });
          }

          this.isVerified$.next(false);
        }
      });
      return;
    }

    this.loginForm.markAllAsTouched();
    this.atmHttpService.loginToAtm(this.loginForm.get('cardNumber').value, this.loginForm.get('pinCode').value, this.selectedAtm$.value.id).subscribe({
      next: () => {
        this.afterLogin.emit();
      },
      error: err => {
        if (err.status == 400) {
          this.loginForm.get('pinCode')?.setErrors({
            invalidPinCode: true
          }, {
            emitEvent: true
          });
        } else {
          this.loginForm.get('pinCode')?.setErrors({
            httpError: true
          }, {
            emitEvent: true
          });
        }

        this.isVerified$.next(true);
      }
    });
  }

}

AtmLoginComponent.ɵfac = function AtmLoginComponent_Factory(t) {
  return new (t || AtmLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_0__.AtmHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService));
};

AtmLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AtmLoginComponent,
  selectors: [["app-atm-login"]],
  inputs: {
    selectedAtm$: "selectedAtm$"
  },
  outputs: {
    afterLogin: "afterLogin"
  },
  decls: 14,
  vars: 12,
  consts: [[1, "atm-login", 3, "formGroup"], [1, "field-row"], ["for", "cardNumber"], ["fxFlex", "60", "id", "cardNumber", "formControlName", "cardNumber", "type", "text", 3, "autocomplete"], ["class", "error-border", "fxFlex", "100", 4, "ngIf"], ["class", "field-row", 4, "ngIf"], ["type", "submit", 2, "margin-top", "10px", "width", "50px", 3, "disabled", "click"], ["fxFlex", "100", 1, "error-border"], [4, "ngIf"], ["for", "pinCode"], ["fxFlex", "60", "id", "pinCode", "formControlName", "pinCode", "type", "password"]],
  template: function AtmLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2)(3, "u");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "C");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "ard number:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AtmLoginComponent_div_7_Template, 7, 7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AtmLoginComponent_div_8_Template, 7, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AtmLoginComponent_Template_button_click_10_listener() {
        return ctx.submitAction();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autocomplete", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.loginForm.get("cardNumber")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("cardNumber")) == null ? null : tmp_2_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, ctx.isVerified$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 8, ctx.selectedAtm$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 10, ctx.isVerified$) ? "Login" : "Verify");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe],
  styles: [".atm-login[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.field-row[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.error-border[_ngcontent-%COMP%] {\n  margin: 0;\n  color: red;\n  width: 100%;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0bS1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJhdG0tbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXRtLWxvZ2luIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5maWVsZC1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZXJyb3ItYm9yZGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHJlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEwcHg7XG59Il19 */"],
  changeDetection: 0
});

/***/ }),

/***/ 274:
/*!*********************************************************************!*\
  !*** ./src/app/components/atm-main-menu/atm-main-menu.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtmMainMenuComponent": () => (/* binding */ AtmMainMenuComponent)
/* harmony export */ });
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/account.service */ 9876);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);
/* harmony import */ var _atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atm-header/atm-header.component */ 1490);





class AtmMainMenuComponent {
    constructor(accountService, navigationService) {
        this.accountService = accountService;
        this.navigationService = navigationService;
        this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmStates;
    }
    ngOnInit() {
    }
}
AtmMainMenuComponent.ɵfac = function AtmMainMenuComponent_Factory(t) { return new (t || AtmMainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService)); };
AtmMainMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AtmMainMenuComponent, selectors: [["app-atm-main-menu"]], decls: 15, vars: 0, consts: [[1, "atm-main-menu"], [1, "button-list"], [3, "click"]], template: function AtmMainMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-atm-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtmMainMenuComponent_Template_button_click_3_listener() { return ctx.navigationService.goTo(ctx.ATM_STATES.MY_ACCOUNTS); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "My Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtmMainMenuComponent_Template_button_click_5_listener() { return ctx.navigationService.goTo(ctx.ATM_STATES.NEW_TRANSACTION); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "New Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtmMainMenuComponent_Template_button_click_7_listener() { return ctx.navigationService.goTo(ctx.ATM_STATES.WITHDRAW); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Withdraw");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtmMainMenuComponent_Template_button_click_9_listener() { return ctx.navigationService.goTo(ctx.ATM_STATES.DEPOSIT); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Deposit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtmMainMenuComponent_Template_button_click_11_listener() { return ctx.navigationService.goTo(ctx.ATM_STATES.TRANSACTION_HISTORY); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Transactions History");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtmMainMenuComponent_Template_button_click_13_listener() { return ctx.navigationService.goTo(ctx.ATM_STATES.CARD_INFO); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Card Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } }, dependencies: [_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_3__.AtmHeaderComponent], styles: [".atm-main-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 30px;\n  height: 100%;\n}\n\n.button-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  justify-content: space-between;\n  align-items: stretch;\n}\n\n.button-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0bS1tYWluLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFDUiIsImZpbGUiOiJhdG0tbWFpbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF0bS1tYWluLW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICByb3ctZ2FwOiAzMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmJ1dHRvbi1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 3489:
/*!***************************************************************!*\
  !*** ./src/app/components/atm-window/atm-window.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtmWindowComponent": () => (/* binding */ AtmWindowComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/atm-http.service */ 9823);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 9876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _atm_list_atm_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atm-list/atm-list.component */ 388);
/* harmony import */ var _atm_login_atm_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atm-login/atm-login.component */ 278);
/* harmony import */ var _atm_main_menu_atm_main_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atm-main-menu/atm-main-menu.component */ 274);
/* harmony import */ var _pages_my_accounts_my_accounts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/my-accounts/my-accounts.component */ 8342);












function AtmWindowComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10)(1, "app-atm-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onAtmSelect", function AtmWindowComponent_div_10_Template_app_atm_list_onAtmSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onAtmSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "app-atm-login", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("afterLogin", function AtmWindowComponent_div_10_Template_app_atm_login_afterLogin_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.afterLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("atmList", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx_r0.atmList$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectedAtm$", ctx_r0.selectedAtm$);
  }
}

function AtmWindowComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-atm-main-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function AtmWindowComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-my-accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

class AtmWindowComponent {
  constructor(atmHttpService, accountService) {
    this.atmHttpService = atmHttpService;
    this.accountService = accountService;
    this.atmList$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this.selectedAtm$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.atmState$ = this.accountService.atmState$;
    this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmStates;
  }

  ngOnInit() {
    this.atmHttpService.getAllAtm().subscribe(atmList => {
      this.atmList$.next(atmList);
    });
  }

  onAtmSelect(atm) {
    this.selectedAtm$.next(atm);
  }

  afterLogin() {
    this.atmState$.next(src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmStates.MAIN_MENU);
  }

}

AtmWindowComponent.ɵfac = function AtmWindowComponent_Factory(t) {
  return new (t || AtmWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__.AtmHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService));
};

AtmWindowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AtmWindowComponent,
  selectors: [["app-atm-window"]],
  decls: 13,
  vars: 6,
  consts: [[1, "window", 2, "width", "500px", "height", "400px"], [1, "title-bar"], [1, "title-bar-text"], [1, "title-bar-controls"], ["aria-label", "Minimize"], ["aria-label", "Maximize"], ["aria-label", "Close"], [1, "window-body", 3, "ngSwitch"], ["fxLayout", "row", "fxLayoutAlign", "space-between stretch", "fxFlex", "", "style", "height: 100%;", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["fxLayout", "row", "fxLayoutAlign", "space-between stretch", "fxFlex", "", 2, "height", "100%"], ["fxFlex", "45", 3, "atmList", "onAtmSelect"], ["fxFlex", "", 3, "selectedAtm$", "afterLogin"]],
  template: function AtmWindowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "ATM");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "button", 4)(6, "button", 5)(7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, AtmWindowComponent_div_10_Template, 4, 4, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, AtmWindowComponent_div_11_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, AtmWindowComponent_div_12_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 4, ctx.atmState$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.LOGIN);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.MAIN_MENU);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.MY_ACCOUNTS);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitchCase, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _atm_list_atm_list_component__WEBPACK_IMPORTED_MODULE_3__.AtmListComponent, _atm_login_atm_login_component__WEBPACK_IMPORTED_MODULE_4__.AtmLoginComponent, _atm_main_menu_atm_main_menu_component__WEBPACK_IMPORTED_MODULE_5__.AtmMainMenuComponent, _pages_my_accounts_my_accounts_component__WEBPACK_IMPORTED_MODULE_6__.MyAccountsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: [".window[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 20px;\n}\n\n.title-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  width: 98.8%;\n  box-sizing: border-box;\n}\n\n.window-body[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: unset;\n  padding: 8px;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.window-body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0bS13aW5kb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDSTtFQUNJLFdBQUE7QUFDUiIsImZpbGUiOiJhdG0td2luZG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpbmRvdyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4udGl0bGUtYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAycHg7XG4gICAgd2lkdGg6IDk4LjglO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53aW5kb3ctYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogdW5zZXQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgPiBkaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59Il19 */"]
});

/***/ }),

/***/ 5675:
/*!**********************************************!*\
  !*** ./src/app/interfaces/app.interfaces.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtmStates": () => (/* binding */ AtmStates),
/* harmony export */   "AtmStatus": () => (/* binding */ AtmStatus)
/* harmony export */ });
var AtmStatus;
(function (AtmStatus) {
    AtmStatus["IDLE"] = "IDLE";
    // add
})(AtmStatus || (AtmStatus = {}));
var AtmStates;
(function (AtmStates) {
    AtmStates["LOGIN"] = "Login";
    AtmStates["MAIN_MENU"] = "Main menu";
    AtmStates["MY_ACCOUNTS"] = "My accounts";
    AtmStates["NEW_TRANSACTION"] = "New transaction";
    AtmStates["WITHDRAW"] = "Withdraw";
    AtmStates["DEPOSIT"] = "Deposit";
    AtmStates["TRANSACTION_HISTORY"] = "Transaction history";
    AtmStates["CARD_INFO"] = "Card info";
    AtmStates["NEW_ACCOUNT"] = "New account";
})(AtmStates || (AtmStates = {}));


/***/ }),

/***/ 8342:
/*!************************************************************!*\
  !*** ./src/app/pages/my-accounts/my-accounts.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAccountsComponent": () => (/* binding */ MyAccountsComponent)
/* harmony export */ });
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);
/* harmony import */ var _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/atm-header/atm-header.component */ 1490);




class MyAccountsComponent {
    constructor(navigationService) {
        this.navigationService = navigationService;
        this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmStates;
    }
    ngOnInit() {
    }
}
MyAccountsComponent.ɵfac = function MyAccountsComponent_Factory(t) { return new (t || MyAccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService)); };
MyAccountsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MyAccountsComponent, selectors: [["app-my-accounts"]], decls: 8, vars: 1, consts: [[1, "atm-my-accounts"], [3, "lastState"], [1, "my-accounts-features"], [3, "click"]], template: function MyAccountsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-atm-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MyAccountsComponent_Template_button_click_3_listener() { return ctx.navigationService.goTo(ctx.ATM_STATES.TRANSACTION_HISTORY); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "View history");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MyAccountsComponent_Template_button_click_5_listener() { return ctx.navigationService.goTo(ctx.ATM_STATES.NEW_ACCOUNT); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "New Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lastState", ctx.ATM_STATES.MAIN_MENU);
    } }, dependencies: [_components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_2__.AtmHeaderComponent], styles: [".atm-my-accounts[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.my-accounts-features[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30%;\n}\n\n.my-accounts-features[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 33%;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFjY291bnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSIiwiZmlsZSI6Im15LWFjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF0bS1teS1hY2NvdW50cyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubXktYWNjb3VudHMtZmVhdHVyZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 9876:
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class AccountService {
    constructor() {
        this._cardNumber = null;
        this.atmState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmStates.LOGIN);
    }
    set cardNumber(number) {
        this._cardNumber = number;
    }
    get cardNumber() {
        return this._cardNumber;
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9823:
/*!**********************************************!*\
  !*** ./src/app/services/atm-http.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtmHttpService": () => (/* binding */ AtmHttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.service */ 8270);







class AtmHttpService {
    constructor(http, utilsService) {
        this.http = http;
        this.utilsService = utilsService;
    }
    getAllAtm() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/atm/all`;
        return this.http.get(url);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([
            {
                "id": 1,
                "address": "Street numero uno",
                "atmStatus": src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmStatus.IDLE,
                "banks": [{
                        "id": 1,
                        "name": "9 vbyv kozu kulakom"
                    }]
            }, {
                "id": 2,
                "address": "Street numero dos",
                "atmStatus": src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmStatus.IDLE,
                "banks": [{
                        "id": 1,
                        "name": "9 vbyv kozu kulakom"
                    }, {
                        "id": 2,
                        "name": "Bank number2"
                    }]
            }, {
                "id": 3,
                "address": "Street numero uno",
                "atmStatus": src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmStatus.IDLE,
                "banks": [{
                        "id": 3,
                        "name": "9 vbyv kozu kulakom"
                    }]
            }
        ]);
    }
    verifyAtm(cardNumber, atmId) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/card/verify-atm-support-bank`;
        // const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
        return this.http.post(url, { cardNumber, atmId }, { withCredentials: true });
        // return of(undefined);
    }
    loginToAtm(number, pin, atm) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.appUrl}/login`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(url, this.utilsService.toUrlEncoded({ number, pin, atm }), { headers });
    }
}
AtmHttpService.ɵfac = function AtmHttpService_Factory(t) { return new (t || AtmHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService)); };
AtmHttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AtmHttpService, factory: AtmHttpService.ɵfac });


/***/ }),

/***/ 9565:
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.service */ 9876);


class NavigationService {
    constructor(accountService) {
        this.accountService = accountService;
    }
    goTo(state) {
        this.accountService.atmState$.next(state);
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
NavigationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8270:
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsService": () => (/* binding */ UtilsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UtilsService {
    constructor() { }
    toUrlEncoded(obj) {
        let str = [];
        for (var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(); };
UtilsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    get appUrl() {
        return 'http://localhost:8080';
        // return 'https://c267-212-90-62-127.eu.ngrok.io';
    },
    get backApi() {
        return `${this.appUrl}/api`;
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map