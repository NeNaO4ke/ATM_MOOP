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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/flex-layout */ 2681);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 2508);
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
/* harmony import */ var _components_account_list_item_account_list_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/account-list-item/account-list-item.component */ 3942);
/* harmony import */ var _interceptors_httpRequest_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interceptors/httpRequest.interceptor */ 1915);
/* harmony import */ var _pages_select_new_account_type_select_new_account_type_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/select-new-account-type/select-new-account-type.component */ 3482);
/* harmony import */ var _components_account_plan_list_item_account_plan_list_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/account-plan-list-item/account-plan-list-item.component */ 8737);
/* harmony import */ var _pages_new_account_new_account_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/new-account/new-account.component */ 8835);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/notification.service */ 2013);
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/notification/notification.component */ 5981);
/* harmony import */ var _pages_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/withdraw/withdraw.component */ 1823);
/* harmony import */ var _pages_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/deposit/deposit.component */ 2753);
/* harmony import */ var _pages_transactions_history_transactions_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/transactions-history/transactions-history.component */ 8204);
/* harmony import */ var _components_transaction_list_item_transaction_list_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/transaction-list-item/transaction-list-item.component */ 3078);
/* harmony import */ var _pages_card_info_card_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/card-info/card-info.component */ 3086);
/* harmony import */ var _pages_change_pin_code_change_pin_code_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/change-pin-code/change-pin-code.component */ 6739);
/* harmony import */ var _pages_new_transaction_new_transaction_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/new-transaction/new-transaction.component */ 9450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 2560);






























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [
        _services_atm_http_service__WEBPACK_IMPORTED_MODULE_6__.AtmHttpService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormBuilder,
        _services_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService,
        _services_notification_service__WEBPACK_IMPORTED_MODULE_16__.NotificationService,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_10__.NavigationService,
        // Http Interceptor(s) -  adds with Client Credentials
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HTTP_INTERCEPTORS, useClass: _interceptors_httpRequest_interceptor__WEBPACK_IMPORTED_MODULE_12__.HttpRequestInterceptor, multi: true }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__.FlexLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_atm_window_atm_window_component__WEBPACK_IMPORTED_MODULE_5__.AtmWindowComponent,
        _components_atm_list_atm_list_component__WEBPACK_IMPORTED_MODULE_2__.AtmListComponent,
        _components_atm_login_atm_login_component__WEBPACK_IMPORTED_MODULE_3__.AtmLoginComponent,
        _components_atm_main_menu_atm_main_menu_component__WEBPACK_IMPORTED_MODULE_4__.AtmMainMenuComponent,
        _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_8__.AtmHeaderComponent,
        _pages_my_accounts_my_accounts_component__WEBPACK_IMPORTED_MODULE_9__.MyAccountsComponent,
        _components_account_list_item_account_list_item_component__WEBPACK_IMPORTED_MODULE_11__.AccountListItemComponent,
        _pages_select_new_account_type_select_new_account_type_component__WEBPACK_IMPORTED_MODULE_13__.SelectNewAccountTypeComponent,
        _components_account_plan_list_item_account_plan_list_item_component__WEBPACK_IMPORTED_MODULE_14__.AccountPlanListItemComponent,
        _pages_new_account_new_account_component__WEBPACK_IMPORTED_MODULE_15__.NewAccountComponent,
        _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_17__.NotificationComponent,
        _pages_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_18__.WithdrawComponent,
        _pages_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_19__.DepositComponent,
        _pages_transactions_history_transactions_history_component__WEBPACK_IMPORTED_MODULE_20__.TransactionsHistoryComponent,
        _components_transaction_list_item_transaction_list_item_component__WEBPACK_IMPORTED_MODULE_21__.TransactionListItemComponent,
        _pages_card_info_card_info_component__WEBPACK_IMPORTED_MODULE_22__.CardInfoComponent,
        _pages_change_pin_code_change_pin_code_component__WEBPACK_IMPORTED_MODULE_23__.ChangePinCodeComponent,
        _pages_new_transaction_new_transaction_component__WEBPACK_IMPORTED_MODULE_24__.NewTransactionComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__.FlexLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 3942:
/*!*****************************************************************************!*\
  !*** ./src/app/components/account-list-item/account-list-item.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountListItemComponent": () => (/* binding */ AccountListItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function AccountListItemComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1)(1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Balance:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.account.accountName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r0.account.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.account.accountType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.account.balance.amount, " ", ctx_r0.account.balance.currency, "");
} }
class AccountListItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccountListItemComponent.ɵfac = function AccountListItemComponent_Factory(t) { return new (t || AccountListItemComponent)(); };
AccountListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountListItemComponent, selectors: [["app-account-list-item"]], inputs: { account: "account" }, decls: 1, vars: 1, consts: [["class", "account-info", 4, "ngIf"], [1, "account-info"]], template: function AccountListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AccountListItemComponent_button_0_Template, 16, 5, "button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.account);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".account-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 20px auto;\n  width: 80%;\n  height: 60px;\n  padding: 5px;\n}\n.account-info[_ngcontent-%COMP%]:active {\n  padding: 5px;\n}\n.account-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtBQUNSO0FBRUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBQVIiLCJmaWxlIjoiYWNjb3VudC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG5cbiAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 8737:
/*!***************************************************************************************!*\
  !*** ./src/app/components/account-plan-list-item/account-plan-list-item.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPlanListItemComponent": () => (/* binding */ AccountPlanListItemComponent)
/* harmony export */ });
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/account.service */ 9876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function AccountPlanListItemComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountPlanListItemComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.selectPlan()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Credit plan:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div")(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Credit limit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Lending rate:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.transactionalPlan.planName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.transactionalPlan.creditMoneyAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.transactionalPlan.lendingRate, "%");
} }
function AccountPlanListItemComponent_button_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Year interest rate:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.savingPlan.interestRate);
} }
function AccountPlanListItemComponent_button_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Payment period:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.savingPlan.paymentStepPeriod.period);
} }
function AccountPlanListItemComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountPlanListItemComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.selectPlan()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Saving plan:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AccountPlanListItemComponent_button_2_div_6_Template, 5, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AccountPlanListItemComponent_button_2_div_7_Template, 5, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Addition allowed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.savingPlan.planName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.savingPlan.interestRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.savingPlan.paymentStepPeriod);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.savingPlan.additionAllowed ? "Yes" : "No");
} }
class AccountPlanListItemComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.disabled = false;
    }
    ngOnInit() {
    }
    selectPlan() {
        if (this.savingPlan) {
            this.accountService.newPlan$.next({ plan: this.savingPlan, index: this.index });
            this.accountService.atmState$.next(src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState.NEW_ACCOUNT);
        }
        else if (this.transactionalPlan) {
            this.accountService.newPlan$.next({ plan: this.transactionalPlan, index: this.index });
            this.accountService.atmState$.next(src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState.NEW_ACCOUNT);
        }
    }
}
AccountPlanListItemComponent.ɵfac = function AccountPlanListItemComponent_Factory(t) { return new (t || AccountPlanListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService)); };
AccountPlanListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AccountPlanListItemComponent, selectors: [["app-account-plan-list-item"]], inputs: { disabled: "disabled", transactionalPlan: "transactionalPlan", savingPlan: "savingPlan", index: "index" }, decls: 3, vars: 2, consts: [[1, "account-plan"], [3, "disabled", "click", 4, "ngIf"], [3, "disabled", "click"], [4, "ngIf"]], template: function AccountPlanListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AccountPlanListItemComponent_button_1_Template, 16, 4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AccountPlanListItemComponent_button_2_Template, 13, 5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.transactionalPlan);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.savingPlan);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".account-plan[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.account-plan[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.account-plan[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.account-plan[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtcGxhbi1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ1E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQ1o7QUFFUTtFQUNJLFlBQUE7QUFBWiIsImZpbGUiOiJhY2NvdW50LXBsYW4tbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtcGxhbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG5cbiAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/account.service */ 9876);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);








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
    this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState;
    this.currentState$ = this.accountService.atmState$;
    this.stateName$ = this.accountService.stateName$;
    this.currentState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(state => {
      if (state == this.ATM_STATES.NEW_ACCOUNT) {
        switch (this.accountService.planType$.value) {
          case src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AccountType.SAVING:
            return 'Create new saving account';

          case src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AccountType.TRANSACTIONAL:
            return 'Create new transactional account';

          default:
            return state;
        }
      }

      return state + ' asd';
    }));
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
  consts: [[1, "header-btn-container"], ["fxFlex", "33", 2, "text-align", "start"], [3, "click", 4, "ngIf"], ["fxFlex", "33", 2, "text-align", "center", "font-size", "16px"], ["fxFlex", "33", 2, "text-align", "end"], [3, "click"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 2, ctx.stateName$), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/atm-http.service */ 9823);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/account.service */ 9876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);










function AtmLoginComponent_div_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Card number lenght must be 16 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AtmLoginComponent_div_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AtmLoginComponent_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.httpErrors.cardNumber, " ");
  }
}

function AtmLoginComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AtmLoginComponent_div_7_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AtmLoginComponent_div_7_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AtmLoginComponent_div_7_span_3_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.loginForm.get("cardNumber").errors == null ? null : ctx_r0.loginForm.get("cardNumber").errors["minlength"]) || (ctx_r0.loginForm.get("cardNumber").errors == null ? null : ctx_r0.loginForm.get("cardNumber").errors["maxlength"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("cardNumber").errors == null ? null : ctx_r0.loginForm.get("cardNumber").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("cardNumber").errors == null ? null : ctx_r0.loginForm.get("cardNumber").errors["httpError"]);
  }
}

function AtmLoginComponent_div_8_div_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Pin code lenght must be 4 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AtmLoginComponent_div_8_div_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AtmLoginComponent_div_8_div_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Invalid pin code. Should be 4 digits. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AtmLoginComponent_div_8_div_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.httpErrors.pinCode, " ");
  }
}

function AtmLoginComponent_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AtmLoginComponent_div_8_div_6_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AtmLoginComponent_div_8_div_6_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AtmLoginComponent_div_8_div_6_span_3_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AtmLoginComponent_div_8_div_6_span_4_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r5.loginForm.get("pinCode").errors == null ? null : ctx_r5.loginForm.get("pinCode").errors["minlength"]) || (ctx_r5.loginForm.get("pinCode").errors == null ? null : ctx_r5.loginForm.get("pinCode").errors["maxlength"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.loginForm.get("pinCode").errors == null ? null : ctx_r5.loginForm.get("pinCode").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.loginForm.get("pinCode").errors == null ? null : ctx_r5.loginForm.get("pinCode").errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.loginForm.get("pinCode").errors == null ? null : ctx_r5.loginForm.get("pinCode").errors["httpError"]);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AtmLoginComponent_div_8_div_6_Template, 5, 4, "div", 4);
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
      pinCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^\\d{1,4}$")])
    });
    this.httpErrors = {
      cardNumber: '',
      pinCode: ''
    };
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
        cardNumber: '5169162679576631',
        pinCode: '6969'
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
      this.atmHttpService.verifyAtm(this.loginForm.get('cardNumber')?.value, this.selectedAtm$.value.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
        this.loginForm.get('cardNumber')?.setErrors({
          httpError: true
        });
        this.httpErrors.cardNumber = err.error?.message ?? '';
        this.accountService.cardNumber = null;
        this.isVerified$.next(false);
        return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
      })).subscribe({
        next: () => {
          this.loginForm.get('cardNumber')?.disable();
          this.accountService.cardNumber = this.loginForm.get('cardNumber')?.value ?? null;
          this.isVerified$.next(true);
        }
      });
      return;
    }

    this.loginForm.markAllAsTouched();
    this.atmHttpService.loginToAtm(this.loginForm.get('cardNumber').value, this.loginForm.get('pinCode').value, this.selectedAtm$.value.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      this.loginForm.get('pinCode')?.setErrors({
        httpError: true
      }, {
        emitEvent: false
      });
      this.httpErrors.pinCode = err.error?.message ?? '';
      this.isVerified$.next(true);
      return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
    })).subscribe({
      next: () => {
        this.afterLogin.emit();
      },
      error: err => {
        this.loginForm.get('pinCode')?.setErrors({
          httpError: true
        }, {
          emitEvent: true
        });
        this.httpErrors.pinCode = err.error?.message ?? '';
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
  consts: [[1, "atm-login", 3, "formGroup"], [1, "field-row"], ["for", "cardNumber"], ["fxFlex", "60", "id", "cardNumber", "formControlName", "cardNumber", "type", "text", 3, "autocomplete"], ["class", "error-border", "fxFlex", "100", "fxLayoutAlign", "flex-end center", 4, "ngIf"], ["class", "field-row", 4, "ngIf"], ["type", "submit", 2, "margin-top", "10px", "width", "50px", 3, "disabled", "click"], ["fxFlex", "100", "fxLayoutAlign", "flex-end center", 1, "error-border"], [4, "ngIf"], ["for", "pinCode"], ["fxFlex", "60", "id", "pinCode", "formControlName", "pinCode", "type", "password"]],
  template: function AtmLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2)(3, "u");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "C");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "ard number:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AtmLoginComponent_div_7_Template, 4, 3, "div", 4);
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".atm-login[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0bS1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiYXRtLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF0bS1sb2dpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"],
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
        this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState;
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/atm-http.service */ 9823);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 9876);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _atm_list_atm_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atm-list/atm-list.component */ 388);
/* harmony import */ var _atm_login_atm_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atm-login/atm-login.component */ 278);
/* harmony import */ var _atm_main_menu_atm_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atm-main-menu/atm-main-menu.component */ 274);
/* harmony import */ var _pages_my_accounts_my_accounts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/my-accounts/my-accounts.component */ 8342);
/* harmony import */ var _pages_select_new_account_type_select_new_account_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/select-new-account-type/select-new-account-type.component */ 3482);
/* harmony import */ var _pages_new_account_new_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/new-account/new-account.component */ 8835);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../notification/notification.component */ 5981);
/* harmony import */ var _pages_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pages/withdraw/withdraw.component */ 1823);
/* harmony import */ var _pages_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pages/deposit/deposit.component */ 2753);
/* harmony import */ var _pages_transactions_history_transactions_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pages/transactions-history/transactions-history.component */ 8204);
/* harmony import */ var _pages_card_info_card_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pages/card-info/card-info.component */ 3086);
/* harmony import */ var _pages_change_pin_code_change_pin_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pages/change-pin-code/change-pin-code.component */ 6739);
/* harmony import */ var _pages_new_transaction_new_transaction_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../pages/new-transaction/new-transaction.component */ 9450);






















function AtmWindowComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 11)(1, "app-atm-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("onAtmSelect", function AtmWindowComponent_div_10_Template_app_atm_list_onAtmSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r12.onAtmSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "app-atm-login", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("afterLogin", function AtmWindowComponent_div_10_Template_app_atm_login_afterLogin_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r14.afterLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("atmList", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 2, ctx_r0.atmList$));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("selectedAtm$", ctx_r0.selectedAtm$);
  }
}

function AtmWindowComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-atm-main-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function AtmWindowComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-my-accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function AtmWindowComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-select-new-account-type");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function AtmWindowComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-new-account");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function AtmWindowComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-withdraw");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function AtmWindowComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function AtmWindowComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-transactions-history");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function AtmWindowComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-card-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function AtmWindowComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-change-pin-code");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function AtmWindowComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-new-transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function AtmWindowComponent_app_notification_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-notification");
  }
}

class AtmWindowComponent {
  constructor(atmHttpService, accountService, notificationService) {
    this.atmHttpService = atmHttpService;
    this.accountService = accountService;
    this.notificationService = notificationService;
    this.atmList$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject([]);
    this.selectedAtm$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject(null);
    this.atmState$ = this.accountService.atmState$;
    this.notifications$ = this.notificationService.notification$;
    this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState;
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
    this.atmState$.next(src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState.MAIN_MENU);
  }

}

AtmWindowComponent.ɵfac = function AtmWindowComponent_Factory(t) {
  return new (t || AtmWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__.AtmHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService));
};

AtmWindowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
  type: AtmWindowComponent,
  selectors: [["app-atm-window"]],
  decls: 23,
  vars: 17,
  consts: [[1, "window", 2, "width", "500px", "height", "400px"], [1, "title-bar"], [1, "title-bar-text"], [1, "title-bar-controls"], ["aria-label", "Minimize"], ["aria-label", "Maximize"], ["aria-label", "Close"], [1, "window-body", 3, "ngSwitch"], ["fxLayout", "row", "fxLayoutAlign", "space-between stretch", "fxFlex", "", "style", "height: 100%;", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between stretch", "fxFlex", "", 2, "height", "100%"], ["fxFlex", "45", 3, "atmList", "onAtmSelect"], ["fxFlex", "", 3, "selectedAtm$", "afterLogin"]],
  template: function AtmWindowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, "ATM");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "button", 4)(6, "button", 5)(7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, AtmWindowComponent_div_10_Template, 4, 4, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, AtmWindowComponent_div_11_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, AtmWindowComponent_div_12_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, AtmWindowComponent_div_13_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](14, AtmWindowComponent_div_14_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](15, AtmWindowComponent_div_15_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](16, AtmWindowComponent_div_16_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](17, AtmWindowComponent_div_17_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](18, AtmWindowComponent_div_18_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, AtmWindowComponent_div_19_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](20, AtmWindowComponent_div_20_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](21, AtmWindowComponent_app_notification_21_Template, 1, 0, "app-notification", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](22, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngSwitch", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](9, 13, ctx.atmState$));
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.LOGIN);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.MAIN_MENU);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.MY_ACCOUNTS);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.CHOOSE_PLAN);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.NEW_ACCOUNT);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.WITHDRAW);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.DEPOSIT);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.TRANSACTION_HISTORY);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.CARD_INFO);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.CHANGE_PIN);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngSwitchCase", ctx.ATM_STATES.NEW_TRANSACTION);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](22, 15, ctx.notifications$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgSwitchCase, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultFlexDirective, _atm_list_atm_list_component__WEBPACK_IMPORTED_MODULE_4__.AtmListComponent, _atm_login_atm_login_component__WEBPACK_IMPORTED_MODULE_5__.AtmLoginComponent, _atm_main_menu_atm_main_menu_component__WEBPACK_IMPORTED_MODULE_6__.AtmMainMenuComponent, _pages_my_accounts_my_accounts_component__WEBPACK_IMPORTED_MODULE_7__.MyAccountsComponent, _pages_select_new_account_type_select_new_account_type_component__WEBPACK_IMPORTED_MODULE_8__.SelectNewAccountTypeComponent, _pages_new_account_new_account_component__WEBPACK_IMPORTED_MODULE_9__.NewAccountComponent, _notification_notification_component__WEBPACK_IMPORTED_MODULE_10__.NotificationComponent, _pages_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_11__.WithdrawComponent, _pages_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__.DepositComponent, _pages_transactions_history_transactions_history_component__WEBPACK_IMPORTED_MODULE_13__.TransactionsHistoryComponent, _pages_card_info_card_info_component__WEBPACK_IMPORTED_MODULE_14__.CardInfoComponent, _pages_change_pin_code_change_pin_code_component__WEBPACK_IMPORTED_MODULE_15__.ChangePinCodeComponent, _pages_new_transaction_new_transaction_component__WEBPACK_IMPORTED_MODULE_16__.NewTransactionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
  styles: [".window[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 20px;\n  resize: none;\n}\n\n.title-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  width: 98.8%;\n  box-sizing: border-box;\n}\n\n.window-body[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: unset;\n  padding: 8px;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.window-body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0bS13aW5kb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxXQUFBO0FBQ1IiLCJmaWxlIjoiYXRtLXdpbmRvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aW5kb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbi50aXRsZS1iYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDJweDtcbiAgICB3aWR0aDogOTguOCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLndpbmRvdy1ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiB1bnNldDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iXX0= */"]
});

/***/ }),

/***/ 5981:
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



class NotificationComponent {
  constructor(notificationService) {
    this.notificationService = notificationService;
    this.notifications$ = this.notificationService.notification$;
  }

  ngOnInit() {}

  closeWindow() {
    this.notifications$.next('');
  }

}

NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
  return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService));
};

NotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NotificationComponent,
  selectors: [["app-notification"]],
  decls: 15,
  vars: 3,
  consts: [[1, "window", "atm-notification", 2, "width", "300px"], [1, "title-bar"], [1, "title-bar-text"], [1, "title-bar-controls"], ["aria-label", "Minimize"], ["aria-label", "Maximize"], ["aria-label", "Close"], [1, "window-body"], [3, "click"]],
  template: function NotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "button", 4)(6, "button", 5)(7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div")(13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_13_listener() {
        return ctx.closeWindow();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "OK");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 1, ctx.notifications$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: [".atm-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: auto;\n  resize: none;\n}\n.atm-notification[_ngcontent-%COMP%]   .window-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFUTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQVoiLCJmaWxlIjoibm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF0bS1ub3RpZmljYXRpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICByZXNpemU6IG5vbmU7XG5cbiAgICAud2luZG93LWJvZHkge1xuICAgICAgICBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"]
});

/***/ }),

/***/ 3078:
/*!*************************************************************************************!*\
  !*** ./src/app/components/transaction-list-item/transaction-list-item.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionListItemComponent": () => (/* binding */ TransactionListItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function TransactionListItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "button")(2, "div", 2)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Transaction #", ctx_r0.transaction.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 6, ctx_r0.transaction.startTime, "short"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("From: ", ctx_r0.transaction.fromAccount.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Amount: ", ctx_r0.transaction.amount == null ? null : ctx_r0.transaction.amount.amount, " ", ctx_r0.transaction.amount == null ? null : ctx_r0.transaction.amount.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("To: ", ctx_r0.transaction.toAccount.id, "");
} }
class TransactionListItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
TransactionListItemComponent.ɵfac = function TransactionListItemComponent_Factory(t) { return new (t || TransactionListItemComponent)(); };
TransactionListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionListItemComponent, selectors: [["app-transaction-list-item"]], inputs: { transaction: "transaction" }, decls: 1, vars: 1, consts: [["class", "transaction-info", 4, "ngIf"], [1, "transaction-info"], [1, "main-info"], [1, "additional-info"]], template: function TransactionListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TransactionListItemComponent_div_0_Template, 15, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transaction);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe], styles: [".transaction-info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.transaction-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.transaction-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%], .transaction-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .additional-info[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUNSO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBQ1oiLCJmaWxlIjoidHJhbnNhY3Rpb24tbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zYWN0aW9uLWluZm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgICAgIC5tYWluLWluZm8sIC5hZGRpdGlvbmFsLWluZm8ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 1915:
/*!*********************************************************!*\
  !*** ./src/app/interceptors/httpRequest.interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpRequestInterceptor": () => (/* binding */ HttpRequestInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


/** Inject With Credentials into the request */
class HttpRequestInterceptor {
    constructor() { }
    intercept(request, next) {
        request = request.clone({
            withCredentials: true
        });
        return next.handle(request);
    }
    ;
}
HttpRequestInterceptor.ɵfac = function HttpRequestInterceptor_Factory(t) { return new (t || HttpRequestInterceptor)(); };
HttpRequestInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpRequestInterceptor, factory: HttpRequestInterceptor.ɵfac });


/***/ }),

/***/ 5675:
/*!**********************************************!*\
  !*** ./src/app/interfaces/app.interfaces.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatus": () => (/* binding */ AccountStatus),
/* harmony export */   "AccountType": () => (/* binding */ AccountType),
/* harmony export */   "AtmState": () => (/* binding */ AtmState),
/* harmony export */   "AtmStatus": () => (/* binding */ AtmStatus),
/* harmony export */   "CardStatus": () => (/* binding */ CardStatus),
/* harmony export */   "TransactionStatus": () => (/* binding */ TransactionStatus),
/* harmony export */   "TransactionType": () => (/* binding */ TransactionType),
/* harmony export */   "UserStatus": () => (/* binding */ UserStatus)
/* harmony export */ });
var AtmStatus;
(function (AtmStatus) {
    AtmStatus["IDLE"] = "IDLE";
    AtmStatus["DOWN"] = "DOWN";
    AtmStatus["UPDATING"] = "UPDATING";
    AtmStatus["IN_USAGE"] = "IN_USAGE";
})(AtmStatus || (AtmStatus = {}));
var AccountType;
(function (AccountType) {
    AccountType["TRANSACTIONAL"] = "TRANSACTIONAL";
    AccountType["SAVING"] = "SAVING";
})(AccountType || (AccountType = {}));
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["OK"] = "OK";
    AccountStatus["FROZEN"] = "FROZEN";
    AccountStatus["TERMINATED"] = "TERMINATED";
    AccountStatus["ACCUMULATING"] = "ACCUMULATING";
})(AccountStatus || (AccountStatus = {}));
var AtmState;
(function (AtmState) {
    AtmState["LOGIN"] = "Login";
    AtmState["MAIN_MENU"] = "Main menu";
    AtmState["MY_ACCOUNTS"] = "My accounts";
    AtmState["NEW_TRANSACTION"] = "New transaction";
    AtmState["WITHDRAW"] = "Withdraw";
    AtmState["DEPOSIT"] = "Deposit";
    AtmState["TRANSACTION_HISTORY"] = "Transaction history";
    AtmState["CARD_INFO"] = "Card info";
    AtmState["NEW_ACCOUNT"] = "New account";
    AtmState["CHOOSE_PLAN"] = "Choose your plan";
    AtmState["ACCOUNT_INFO"] = "Account info";
    AtmState["CHANGE_PIN"] = "Change pin code";
})(AtmState || (AtmState = {}));
var CardStatus;
(function (CardStatus) {
    CardStatus["BLOCKED"] = "BLOCKED";
    CardStatus["IN_USAGE"] = "IN_USAGE";
    CardStatus["CHEWED"] = "CHEWED";
    CardStatus["OK"] = "OK";
})(CardStatus || (CardStatus = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["COMMITTED"] = "COMMITTED";
    TransactionStatus["PROCESSING"] = "PROCESSING";
    TransactionStatus["REJECTED"] = "REJECTED";
    TransactionStatus["SCHEDULED"] = "SCHEDULED";
})(TransactionStatus || (TransactionStatus = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["TRANSFERRING"] = "TRANSFERRING";
    TransactionType["WITHDRAWAL"] = "WITHDRAWAL";
    TransactionType["DEPOSIT"] = "DEPOSIT";
})(TransactionType || (TransactionType = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["OK"] = "OK";
    UserStatus["FROZEN"] = "FROZEN";
    UserStatus["BLOCKED"] = "BLOCKED";
    UserStatus["SUSPENDED"] = "SUSPENDED";
})(UserStatus || (UserStatus = {}));


/***/ }),

/***/ 3086:
/*!********************************************************!*\
  !*** ./src/app/pages/card-info/card-info.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardInfoComponent": () => (/* binding */ CardInfoComponent)
/* harmony export */ });
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/atm-http.service */ 9823);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 9876);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/atm-header/atm-header.component */ 1490);







function CardInfoComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Date of birth:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 1, ctx_r1.accountInfo.card.user.birthdayDate, "mediumDate"));
} }
function CardInfoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "button", 3)(2, "div", 4)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CardInfoComponent_div_1_div_7_Template, 6, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "User status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Card number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 8)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Card status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 9)(24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "ATM address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 10)(29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Bank:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 11)(34, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardInfoComponent_div_1_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.changePinCode()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Change Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", ctx_r0.accountInfo.card.user.firstName, " ", (tmp_0_0 = ctx_r0.accountInfo.card.user.middleName) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "", " ", (tmp_0_0 = ctx_r0.accountInfo.card.user.lastName) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.accountInfo.card.user.birthdayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.accountInfo.card.user.userStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.userCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.accountInfo.card.cardStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.accountInfo.atm.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.accountInfo.card.bank.name);
} }
class CardInfoComponent {
    constructor(atmHttpService, accountService, navigationService) {
        this.atmHttpService = atmHttpService;
        this.accountService = accountService;
        this.navigationService = navigationService;
        this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState;
        this.userCard = this.accountService.cardNumber;
    }
    ngOnInit() {
        this.atmHttpService.getAccountInfo()
            .subscribe(data => {
            this.accountInfo = data;
        });
    }
    changePinCode() {
        this.navigationService.goTo(src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState.CHANGE_PIN);
    }
}
CardInfoComponent.ɵfac = function CardInfoComponent_Factory(t) { return new (t || CardInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__.AtmHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService)); };
CardInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CardInfoComponent, selectors: [["app-card-info"]], decls: 2, vars: 2, consts: [[3, "lastState"], ["class", "atm-card-info", 4, "ngIf"], [1, "atm-card-info"], ["disabled", "", 1, "atm-user-card"], [1, "name-section"], ["class", "dob-section", 4, "ngIf"], [1, "user-status-section"], [1, "card-section"], [1, "card-status-section"], [1, "atm-section"], [1, "bank-section"], [1, "page-features"], [3, "click"], [1, "dob-section"]], template: function CardInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-atm-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CardInfoComponent_div_1_Template, 36, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("lastState", ctx.ATM_STATES.MAIN_MENU);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.accountInfo);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_4__.AtmHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: [".atm-card-info[_ngcontent-%COMP%] {\n  height: 90%;\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.atm-user-card[_ngcontent-%COMP%] {\n  width: 70%;\n  height: inherit;\n  font-size: 14px;\n  color: black;\n  margin: auto;\n  box-sizing: border-box;\n}\n\n.atm-user-card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 5px auto;\n}\n\n.page-features[_ngcontent-%COMP%] {\n  height: 60%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQUoiLCJmaWxlIjoiY2FyZC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF0bS1jYXJkLWluZm8ge1xuICAgIGhlaWdodDogOTAlO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmF0bS11c2VyLWNhcmQge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICB9XG59XG5cbi5wYWdlLWZlYXR1cmVzIHtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufSJdfQ== */"] });


/***/ }),

/***/ 6739:
/*!********************************************************************!*\
  !*** ./src/app/pages/change-pin-code/change-pin-code.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePinCodeComponent": () => (/* binding */ ChangePinCodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/atm-http.service */ 9823);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/atm-header/atm-header.component */ 1490);











function ChangePinCodeComponent_div_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Pin code should be 4 characters lenght. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ChangePinCodeComponent_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ChangePinCodeComponent_div_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Invalid pin code. Should be 4 digits. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ChangePinCodeComponent_div_8_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r4.httpErrors.pinCode, " ");
} }
function ChangePinCodeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ChangePinCodeComponent_div_8_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ChangePinCodeComponent_div_8_span_2_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ChangePinCodeComponent_div_8_span_3_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ChangePinCodeComponent_div_8_span_4_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r0.pinCodeForm.get("pinCode").errors == null ? null : ctx_r0.pinCodeForm.get("pinCode").errors["minLength"]) || (ctx_r0.pinCodeForm.get("pinCode").errors == null ? null : ctx_r0.pinCodeForm.get("pinCode").errors["maxLength"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.pinCodeForm.get("pinCode").errors == null ? null : ctx_r0.pinCodeForm.get("pinCode").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.pinCodeForm.get("pinCode").errors == null ? null : ctx_r0.pinCodeForm.get("pinCode").errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.pinCodeForm.get("pinCode").errors == null ? null : ctx_r0.pinCodeForm.get("pinCode").errors["httpError"]);
} }
class ChangePinCodeComponent {
    constructor(fb, atmHttpService, notificationService, navigationService) {
        this.fb = fb;
        this.atmHttpService = atmHttpService;
        this.notificationService = notificationService;
        this.navigationService = navigationService;
        this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState;
        this.pinCodeForm = this.fb.group({
            pinCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^\\d{1,4}$")])
        });
        this.httpErrors = {
            pinCode: ''
        };
    }
    ngOnInit() {
    }
    submitForm() {
        if (this.pinCodeForm.get('pinCode')?.value && this.pinCodeForm.get('pinCode')?.invalid) {
            this.pinCodeForm.markAllAsTouched();
            return;
        }
        this.atmHttpService.changePinCode(this.pinCodeForm.get('pinCode').value)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
            this.httpErrors.pinCode = err.error?.message ?? '';
            this.pinCodeForm.get('pinCode')?.setErrors({ httpError: true }, { emitEvent: true });
            return rxjs__WEBPACK_IMPORTED_MODULE_8__.EMPTY;
        }))
            .subscribe(resp => {
            this.navigationService.goTo(src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState.CARD_INFO);
            this.notificationService.notification$.next('Pin code changed successfully!');
        });
    }
}
ChangePinCodeComponent.ɵfac = function ChangePinCodeComponent_Factory(t) { return new (t || ChangePinCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__.AtmHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService)); };
ChangePinCodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ChangePinCodeComponent, selectors: [["app-change-pin-code"]], decls: 12, vars: 3, consts: [[3, "lastState"], [1, "change-pin-form"], [1, "field-row", 3, "formGroup"], ["for", "pinCode"], ["fxFlex", "60", "id", "pinCode", "formControlName", "pinCode", "type", "password"], ["class", "error-border", "fxLayoutAlign", "flex-end center", "fxFlex", "100", 4, "ngIf"], [1, "submit-row"], [3, "click"], ["fxLayoutAlign", "flex-end center", "fxFlex", "100", 1, "error-border"], [4, "ngIf"]], template: function ChangePinCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-atm-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "label", 3)(4, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "ew pin code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ChangePinCodeComponent_div_8_Template, 5, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePinCodeComponent_Template_button_click_10_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Change pin code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("lastState", ctx.ATM_STATES.CARD_INFO);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.pinCodeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.pinCodeForm.get("pinCode")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.pinCodeForm.get("pinCode")) == null ? null : tmp_2_0.touched));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_4__.AtmHeaderComponent], styles: [".change-pin-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 90%;\n}\n.change-pin-form[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  width: 100%;\n}\n.change-pin-form[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.change-pin-form[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 24px;\n  height: 44px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.change-pin-form[_ngcontent-%COMP%]   .submit-row[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n}\n.change-pin-form[_ngcontent-%COMP%]   .submit-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 50px;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1waW4tY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFDUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNaO0FBR0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQURSO0FBR1E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFEWiIsImZpbGUiOiJjaGFuZ2UtcGluLWNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbmdlLXBpbi1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MCU7XG5cblxuICAgIC5maWVsZC1yb3cge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJtaXQtcm93IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 2753:
/*!****************************************************!*\
  !*** ./src/app/pages/deposit/deposit.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositComponent": () => (/* binding */ DepositComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/atm-http.service */ 9823);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/atm-header/atm-header.component */ 1490);











function DepositComponent_div_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Value should be positive. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DepositComponent_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DepositComponent_div_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r3.httpErrors.amount, " ");
} }
function DepositComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DepositComponent_div_8_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DepositComponent_div_8_span_2_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DepositComponent_div_8_span_3_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.amountForm.get("amount").errors == null ? null : ctx_r0.amountForm.get("amount").errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.amountForm.get("amount").errors == null ? null : ctx_r0.amountForm.get("amount").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.amountForm.get("amount").errors == null ? null : ctx_r0.amountForm.get("amount").errors["httpError"]);
} }
class DepositComponent {
    constructor(fb, notificationService, atmHttpService, navigationService) {
        this.fb = fb;
        this.notificationService = notificationService;
        this.atmHttpService = atmHttpService;
        this.navigationService = navigationService;
        this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState;
        this.httpErrors = {
            amount: ''
        };
        this.amountForm = this.fb.group({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)])
        });
    }
    ngOnInit() {
    }
    submitForm() {
        if (this.amountForm.get('amount')?.invalid || !this.amountForm.get('amount')?.value) {
            this.amountForm.markAllAsTouched();
            return;
        }
        this.atmHttpService.deposit(this.amountForm.get('amount').value)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
            if (err.status === 400) {
                this.amountForm.get('amount')?.setErrors({ httpError: true });
                this.httpErrors.amount = err.error.message;
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_8__.EMPTY;
        }))
            .subscribe(() => {
            this.notificationService.notification$.next('Deposit was successfull!');
            this.navigationService.goTo(src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState.MAIN_MENU);
        });
    }
}
DepositComponent.ɵfac = function DepositComponent_Factory(t) { return new (t || DepositComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_2__.AtmHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService)); };
DepositComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DepositComponent, selectors: [["app-deposit"]], decls: 12, vars: 3, consts: [[3, "lastState"], [1, "atm-withdraw"], [1, "field-row", 3, "formGroup"], ["for", "amount"], ["fxFlex", "60", "id", "amount", "formControlName", "amount", "type", "number"], ["class", "error-border", "fxLayoutAlign", "flex-end center", "fxFlex", "100", 4, "ngIf"], [1, "submit-row"], [3, "click"], ["fxLayoutAlign", "flex-end center", "fxFlex", "100", 1, "error-border"], [4, "ngIf"]], template: function DepositComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-atm-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "label", 3)(4, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "mount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DepositComponent_div_8_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DepositComponent_Template_button_click_10_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Deposit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("lastState", ctx.ATM_STATES.MAIN_MENU);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.amountForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.amountForm.get("amount")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.amountForm.get("amount")) == null ? null : tmp_2_0.touched));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_4__.AtmHeaderComponent], styles: [".atm-withdraw[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  align-content: center;\n  flex-wrap: wrap;\n}\n.atm-withdraw[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  width: 100%;\n}\n.atm-withdraw[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.atm-withdraw[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 24px;\n  height: 44px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.atm-withdraw[_ngcontent-%COMP%]   .submit-row[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n}\n.atm-withdraw[_ngcontent-%COMP%]   .submit-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 50px;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcG9zaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBQ1I7QUFBUTtFQUNJLGVBQUE7QUFFWjtBQUFRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRVo7QUFFSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQVI7QUFFUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFaIiwiZmlsZSI6ImRlcG9zaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXRtLXdpdGhkcmF3IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5maWVsZC1yb3cge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJtaXQtcm93IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/atm-http.service */ 9823);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/atm-header/atm-header.component */ 1490);
/* harmony import */ var _components_account_list_item_account_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/account-list-item/account-list-item.component */ 3942);









function MyAccountsComponent_app_account_list_item_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-account-list-item", 6);
  }

  if (rf & 2) {
    const account_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("account", account_r1);
  }
}

class MyAccountsComponent {
  constructor(atmHttpService, navigationService) {
    this.atmHttpService = atmHttpService;
    this.navigationService = navigationService;
    this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState;
    this.accounts$ = this.atmHttpService.getAllAccounts();
  }

  ngOnInit() {}

}

MyAccountsComponent.ɵfac = function MyAccountsComponent_Factory(t) {
  return new (t || MyAccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__.AtmHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService));
};

MyAccountsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: MyAccountsComponent,
  selectors: [["app-my-accounts"]],
  decls: 9,
  vars: 4,
  consts: [[1, "atm-my-accounts"], [3, "lastState"], [1, "my-accounts-features"], [3, "click"], [1, "account-list"], ["fxFlex", "50", 3, "account", 4, "ngFor", "ngForOf"], ["fxFlex", "50", 3, "account"]],
  template: function MyAccountsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-atm-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MyAccountsComponent_Template_button_click_3_listener() {
        return ctx.navigationService.goTo(ctx.ATM_STATES.CHOOSE_PLAN);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "New Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, MyAccountsComponent_app_account_list_item_7_Template, 1, 1, "app-account-list-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("lastState", ctx.ATM_STATES.MAIN_MENU);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 2, ctx.accounts$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_3__.AtmHeaderComponent, _components_account_list_item_account_list_item_component__WEBPACK_IMPORTED_MODULE_4__.AccountListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: [".atm-my-accounts[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.my-accounts-features[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 30%;\n}\n\n.my-accounts-features[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 33%;\n  height: 45px;\n}\n\n.account-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  overflow: auto;\n  width: 100%;\n  height: 60%;\n  max-height: 60%;\n  background: #fff;\n  box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;\n  padding: 12px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFjY291bnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvR0FBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoibXktYWNjb3VudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXRtLW15LWFjY291bnRzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5teS1hY2NvdW50cy1mZWF0dXJlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMzAlO1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICB9XG59XG5cbi5hY2NvdW50LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAlO1xuICAgIG1heC1oZWlnaHQ6IDYwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAjZmZmLCBpbnNldCAxcHggMXB4IGdyZXksIGluc2V0IC0ycHggLTJweCAjZGZkZmRmLCBpbnNldCAycHggMnB4ICMwYTBhMGE7XG4gICAgcGFkZGluZzogMTJweCA4cHg7XG59Il19 */"]
});

/***/ }),

/***/ 8835:
/*!************************************************************!*\
  !*** ./src/app/pages/new-account/new-account.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewAccountComponent": () => (/* binding */ NewAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/account.service */ 9876);
/* harmony import */ var src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/atm-http.service */ 9823);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/atm-header/atm-header.component */ 1490);
/* harmony import */ var _components_account_plan_list_item_account_plan_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/account-plan-list-item/account-plan-list-item.component */ 8737);













function NewAccountComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-account-plan-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true)("transactionalPlan", ctx_r0.transactionalPlan);
} }
function NewAccountComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-account-plan-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true)("savingPlan", ctx_r1.savingPlan);
} }
function NewAccountComponent_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Account name lenght should be from 3 to 64 characters characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function NewAccountComponent_div_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function NewAccountComponent_div_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " An error occured, try again later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function NewAccountComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, NewAccountComponent_div_11_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, NewAccountComponent_div_11_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, NewAccountComponent_div_11_span_3_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r2.planForm.get("accountName").errors == null ? null : ctx_r2.planForm.get("accountName").errors["minlength"]) || (ctx_r2.planForm.get("accountName").errors == null ? null : ctx_r2.planForm.get("accountName").errors["maxlength"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.planForm.get("accountName").errors == null ? null : ctx_r2.planForm.get("accountName").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.planForm.get("accountName").errors == null ? null : ctx_r2.planForm.get("accountName").errors["httpError"]);
} }
function NewAccountComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currency_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](currency_r7);
} }
class NewAccountComponent {
    constructor(accountService, fb, atmHttpService, navigationService, notificationService) {
        this.accountService = accountService;
        this.fb = fb;
        this.atmHttpService = atmHttpService;
        this.navigationService = navigationService;
        this.notificationService = notificationService;
        this.index = -1;
        this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState;
        this.planForm = this.fb.group({
            accountName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(64), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3)]),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
        });
        this.currencyList = [];
    }
    ngOnInit() {
        this.accountService.newPlan$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(res => !!res))
            .subscribe(data => {
            if (this.accountService.planType$.value === src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AccountType.TRANSACTIONAL) {
                this.transactionalPlan = data?.plan;
            }
            else if (this.accountService.planType$.value === src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AccountType.SAVING) {
                this.savingPlan = data?.plan;
            }
            this.index = data?.index ?? -1;
        });
        this.atmHttpService.getCurrency()
            .subscribe(currency => {
            this.currencyList = currency;
            this.planForm.patchValue({ currency: this.currencyList[0] ?? '' }, { emitEvent: false });
        });
    }
    submitForm() {
        if (this.planForm.get('accountName')?.invalid ||
            this.planForm.get('currency')?.invalid) {
            this.planForm.markAllAsTouched();
            return;
        }
        if (this.savingPlan) {
            this.atmHttpService.createSavingAccount(this.index, this.planForm.get('currency').value, this.planForm.get('accountName').value)
                .subscribe(() => {
                this.navigationService.goTo(src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState.MAIN_MENU);
                this.notificationService.notification$.next('Saving plan successfully created!');
            });
        }
        else if (this.transactionalPlan) {
            this.atmHttpService.createTransactionalAccount(this.index, this.planForm.get('currency').value, this.planForm.get('accountName').value)
                .subscribe(() => {
                this.navigationService.goTo(src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState.MAIN_MENU);
                this.notificationService.notification$.next('Transactional plan successfully created!');
            });
        }
    }
    ngOnDestroy() {
        this.accountService.newPlan$.next(null);
    }
}
NewAccountComponent.ɵfac = function NewAccountComponent_Factory(t) { return new (t || NewAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_2__.AtmHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService)); };
NewAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NewAccountComponent, selectors: [["app-new-account"]], decls: 22, vars: 7, consts: [[3, "lastState"], [1, "new-account-create"], ["class", "transactional-account", 4, "ngIf"], ["class", "saving-account", 4, "ngIf"], [1, "plan-form", 3, "formGroup"], [1, "field-row"], ["for", "accountName"], ["fxFlex", "60", "id", "accountName", "formControlName", "accountName", "type", "text", 3, "autocomplete"], ["class", "error-border", "fxLayoutAlign", "flex-end center", "fxFlex", "100", 4, "ngIf"], ["for", "currency"], ["fxFlex", "60", "id", "currency", "formControlName", "currency"], [4, "ngFor", "ngForOf"], [1, "submit-row"], [3, "click"], [1, "transactional-account"], [3, "disabled", "transactionalPlan"], [1, "saving-account"], [3, "disabled", "savingPlan"], ["fxLayoutAlign", "flex-end center", "fxFlex", "100", 1, "error-border"], [4, "ngIf"]], template: function NewAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-atm-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, NewAccountComponent_div_2_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, NewAccountComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "label", 6)(7, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "ccount name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, NewAccountComponent_div_11_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 5)(13, "label", 9)(14, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "urrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, NewAccountComponent_option_18_Template, 2, 1, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NewAccountComponent_Template_button_click_20_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Create account");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("lastState", ctx.ATM_STATES.CHOOSE_PLAN);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.transactionalPlan);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.savingPlan);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.planForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("autocomplete", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.planForm.get("accountName")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.planForm.get("accountName")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.currencyList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_5__.AtmHeaderComponent, _components_account_plan_list_item_account_plan_list_item_component__WEBPACK_IMPORTED_MODULE_6__.AccountPlanListItemComponent], styles: [".plan-form[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n.plan-form[_ngcontent-%COMP%]   .submit-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksY0FBQTtBQURSO0FBR0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBRFIiLCJmaWxlIjoibmV3LWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxhbi1mb3JtIHtcbiAgICBcbiAgICAuZmllbGQtcm93IHtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgfVxuICAgIC5zdWJtaXQtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 9450:
/*!********************************************************************!*\
  !*** ./src/app/pages/new-transaction/new-transaction.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTransactionComponent": () => (/* binding */ NewTransactionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/atm-http.service */ 9823);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/atm-header/atm-header.component */ 1490);











function NewTransactionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.httpError, " ");
} }
function NewTransactionComponent_div_3_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", account_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](account_r9.accountName);
} }
function NewTransactionComponent_div_3_div_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function NewTransactionComponent_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NewTransactionComponent_div_3_div_8_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.transactionForm.get("senderAccountid").errors == null ? null : ctx_r3.transactionForm.get("senderAccountid").errors["required"]);
} }
function NewTransactionComponent_div_3_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Value should be greater than 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function NewTransactionComponent_div_3_div_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function NewTransactionComponent_div_3_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NewTransactionComponent_div_3_div_15_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, NewTransactionComponent_div_3_div_15_span_2_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.transactionForm.get("amount").errors == null ? null : ctx_r4.transactionForm.get("amount").errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.transactionForm.get("amount").errors == null ? null : ctx_r4.transactionForm.get("amount").errors["required"]);
} }
function NewTransactionComponent_div_3_div_22_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function NewTransactionComponent_div_3_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NewTransactionComponent_div_3_div_22_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.transactionForm.get("receiverAccountId").errors == null ? null : ctx_r5.transactionForm.get("receiverAccountId").errors["required"]);
} }
function NewTransactionComponent_div_3_div_31_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function NewTransactionComponent_div_3_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NewTransactionComponent_div_3_div_31_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.transactionForm.get("scheduledTime").errors == null ? null : ctx_r6.transactionForm.get("scheduledTime").errors["required"]);
} }
function NewTransactionComponent_div_3_div_46_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function NewTransactionComponent_div_3_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NewTransactionComponent_div_3_div_46_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r7.transactionForm.get("period").errors == null ? null : ctx_r7.transactionForm.get("period").errors["required"]) || (ctx_r7.transactionForm.get("inittialRepeats").errors == null ? null : ctx_r7.transactionForm.get("inittialRepeats").errors["required"]));
} }
function NewTransactionComponent_div_3_div_56_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function NewTransactionComponent_div_3_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NewTransactionComponent_div_3_div_56_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r8.transactionForm.get("period").errors == null ? null : ctx_r8.transactionForm.get("period").errors["required"]) || (ctx_r8.transactionForm.get("inittialRepeats").errors == null ? null : ctx_r8.transactionForm.get("inittialRepeats").errors["required"]));
} }
function NewTransactionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "label", 7)(3, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "ender account:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, NewTransactionComponent_div_3_option_7_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, NewTransactionComponent_div_3_div_8_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6)(10, "label", 11)(11, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "mount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, NewTransactionComponent_div_3_div_15_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 6)(17, "label", 13)(18, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "eceiver account id:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, NewTransactionComponent_div_3_div_22_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "e");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "nd at:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, NewTransactionComponent_div_3_div_31_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Re");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "ular:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 20)(40, "label", 21)(41, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewTransactionComponent_div_3_Template_img_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.periodGuide()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "eriod:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, NewTransactionComponent_div_3_div_46_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 20)(50, "label", 24)(51, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewTransactionComponent_div_3_Template_img_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.repeatGuide()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "I");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "nitial repeats:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, NewTransactionComponent_div_3_div_56_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 26)(58, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewTransactionComponent_div_3_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.submitForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Submit for processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.transactionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.accounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r1.transactionForm.get("senderAccountid")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.transactionForm.get("senderAccountid")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.transactionForm.get("amount")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.transactionForm.get("amount")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.transactionForm.get("receiverAccountId")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.transactionForm.get("receiverAccountId")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r1.transactionForm.get("scheduledTime")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.transactionForm.get("scheduledTime")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r1.transactionForm.get("period")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.transactionForm.get("period")) == null ? null : tmp_6_0.touched) || ((tmp_6_0 = ctx_r1.transactionForm.get("inittialRepeats")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.transactionForm.get("inittialRepeats")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r1.transactionForm.get("period")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.transactionForm.get("period")) == null ? null : tmp_7_0.touched) || ((tmp_7_0 = ctx_r1.transactionForm.get("inittialRepeats")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.transactionForm.get("inittialRepeats")) == null ? null : tmp_7_0.touched));
} }
class NewTransactionComponent {
    constructor(fb, atmHttpService, notificationService, navigationService) {
        this.fb = fb;
        this.atmHttpService = atmHttpService;
        this.notificationService = notificationService;
        this.navigationService = navigationService;
        this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState;
        this.httpError = '';
        this.accounts = [];
        this.transactionForm = this.fb.group({
            senderAccountid: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)]),
            receiverAccountId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            sendAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false),
            scheduledTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            isRegular: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false),
            period: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            inittialRepeats: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null),
        });
    }
    ngOnInit() {
        this.atmHttpService.getAllAccounts()
            .subscribe(accounts => {
            this.accounts = accounts;
            this.transactionForm.patchValue({ senderAccountid: accounts[0].id }, { emitEvent: false });
            this.transactionForm.get('scheduledTime')?.disable();
            this.transactionForm.get('period')?.disable();
            this.transactionForm.get('inittialRepeats')?.disable();
        });
        this.transactionForm.get('sendAt')?.valueChanges
            .subscribe(event => {
            if (event) {
                this.transactionForm.get('scheduledTime')?.enable();
            }
            else {
                this.transactionForm.get('scheduledTime')?.disable();
            }
        });
        this.transactionForm.get('isRegular')?.valueChanges
            .subscribe(event => {
            if (event) {
                this.transactionForm.get('period')?.enable();
                this.transactionForm.get('inittialRepeats')?.enable();
            }
            else {
                this.transactionForm.get('period')?.disable();
                this.transactionForm.get('inittialRepeats')?.disable();
            }
        });
    }
    periodGuide() {
        this.notificationService.notification$.next('Example format:   P1D - 1 day, P1M2D - 1 month and 2 days, P1Y - 1 year etc.');
    }
    repeatGuide() {
        this.notificationService.notification$.next('If smaller than 0, then will send unlimited times.');
    }
    submitForm() {
        if (this.transactionForm.invalid) {
            this.transactionForm.markAllAsTouched();
            return;
        }
        if (!this.transactionForm.get('isRegular')?.value && !this.transactionForm.get('sendAt')?.value) {
            this.sendTransfer();
        }
    }
    sendTransfer() {
        this.atmHttpService.createNewTransferFromTransaction(this.transactionForm.get('amount').value, this.transactionForm.get('senderAccountid').value, this.transactionForm.get('receiverAccountId').value)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
            if (err.status === 404) {
                this.httpError = 'Receiver account not found';
            }
            else {
                this.httpError = err.error.message;
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_8__.EMPTY;
        }))
            .subscribe(() => {
            this.navigationService.goTo(src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState.MAIN_MENU);
            this.notificationService.notification$.next('Transfer was sent to process, you can see current status of transfer in Transactions History');
        });
    }
}
NewTransactionComponent.ɵfac = function NewTransactionComponent_Factory(t) { return new (t || NewTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__.AtmHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService)); };
NewTransactionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NewTransactionComponent, selectors: [["app-new-transaction"]], decls: 4, vars: 3, consts: [[3, "lastState"], [1, "atm-new-transaction"], ["class", "form-error-border", 4, "ngIf"], ["class", "new-transaction-form", 3, "formGroup", 4, "ngIf"], [1, "form-error-border"], [1, "new-transaction-form", 3, "formGroup"], [1, "field-row"], ["for", "senderAccountid"], ["fxFlex", "60", "name", "senderAccountid", "formControlName", "senderAccountid", "id", "senderAccountid"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error-border", "fxFlex", "100", "fxLayoutAlign", "flex-end center", 4, "ngIf"], ["for", "amount"], ["fxFlex", "60", "id", "amount", "formControlName", "amount", "type", "number"], ["for", "receiverAccountId"], ["fxFlex", "60", "id", "receiverAccountId", "formControlName", "receiverAccountId", "type", "number"], ["fxFlex", "30", "id", "sendAt", "formControlName", "sendAt", "type", "checkbox"], ["for", "sendAt"], ["fxFlex", "60", "id", "scheduledTime", "formControlName", "scheduledTime", "placeholder", "", "type", "datetime-local"], ["fxFlex", "30", "id", "isRegular", "formControlName", "isRegular", "type", "checkbox"], ["for", "isRegular"], ["fxFlex", "60", "fxLayoutAlign", "space-between center"], ["for", "period", "fxLayoutAlign", "flex-start center"], ["height", "12px", "src", "https://img.icons8.com/pixels/512/experimental-info-pix.png", "alt", "Info", 2, "aspect-ratio", "1", "cursor", "pointer", 3, "click"], ["fxFlex", "60", "id", "period", "formControlName", "period", "type", "text"], ["for", "period"], ["fxFlex", "60", "id", "inittialRepeats", "formControlName", "inittialRepeats", "type", "text"], [1, "submit-row"], [3, "click"], [3, "value"], ["fxFlex", "100", "fxLayoutAlign", "flex-end center", 1, "error-border"], [4, "ngIf"]], template: function NewTransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-atm-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, NewTransactionComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, NewTransactionComponent_div_3_Template, 60, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("lastState", ctx.ATM_STATES.MAIN_MENU);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.httpError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.accounts.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_4__.AtmHeaderComponent], styles: [".atm-new-transaction[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.form-error-border[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy10cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoibmV3LXRyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF0bS1uZXctdHJhbnNhY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5mb3JtLWVycm9yLWJvcmRlciB7XG4gICAgY29sb3I6IHJlZDtcbn0iXX0= */"] });


/***/ }),

/***/ 3482:
/*!************************************************************************************!*\
  !*** ./src/app/pages/select-new-account-type/select-new-account-type.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectNewAccountTypeComponent": () => (/* binding */ SelectNewAccountTypeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/atm-http.service */ 9823);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 9876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/atm-header/atm-header.component */ 1490);
/* harmony import */ var _components_account_plan_list_item_account_plan_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/account-plan-list-item/account-plan-list-item.component */ 8737);









function SelectNewAccountTypeComponent_div_1_app_account_plan_list_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-account-plan-list-item", 9);
  }

  if (rf & 2) {
    const plan_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("index", i_r4)("transactionalPlan", plan_r3);
  }
}

function SelectNewAccountTypeComponent_div_1_app_account_plan_list_item_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-account-plan-list-item", 10);
  }

  if (rf & 2) {
    const plan_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("index", i_r6)("savingPlan", plan_r5);
  }
}

function SelectNewAccountTypeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Credit transactional");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SelectNewAccountTypeComponent_div_1_app_account_plan_list_item_5_Template, 1, 2, "app-account-plan-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Saving");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SelectNewAccountTypeComponent_div_1_app_account_plan_list_item_10_Template, 1, 2, "app-account-plan-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.atmPlans$.value.plans.transactional);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.atmPlans$.value.plans.saving);
  }
}

class SelectNewAccountTypeComponent {
  constructor(atmHttpService, accountService) {
    this.atmHttpService = atmHttpService;
    this.accountService = accountService;
    this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState;
    this.atmPlans$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
  }

  ngOnInit() {
    this.atmHttpService.getPlans().subscribe(plans => {
      this.atmPlans$.next(plans);
    });
    this.accountService.newPlan$.next(null);
  }

}

SelectNewAccountTypeComponent.ɵfac = function SelectNewAccountTypeComponent_Factory(t) {
  return new (t || SelectNewAccountTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__.AtmHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService));
};

SelectNewAccountTypeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SelectNewAccountTypeComponent,
  selectors: [["app-select-new-account-type"]],
  decls: 3,
  vars: 4,
  consts: [[3, "lastState"], ["class", "plans", 4, "ngIf"], [1, "plans"], [1, "transactional"], [1, "transactional-list"], [3, "index", "transactionalPlan", 4, "ngFor", "ngForOf"], [1, "saving"], [1, "saving-list"], [3, "index", "savingPlan", 4, "ngFor", "ngForOf"], [3, "index", "transactionalPlan"], [3, "index", "savingPlan"]],
  template: function SelectNewAccountTypeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-atm-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SelectNewAccountTypeComponent_div_1_Template, 11, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("lastState", ctx.ATM_STATES.MY_ACCOUNTS);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx.atmPlans$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_3__.AtmHeaderComponent, _components_account_plan_list_item_account_plan_list_item_component__WEBPACK_IMPORTED_MODULE_4__.AccountPlanListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".plans[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n  max-height: 80%;\n}\n.plans[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50%;\n}\n.plans[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n.saving-list[_ngcontent-%COMP%], .transactional-list[_ngcontent-%COMP%] {\n  overflow: auto;\n  width: 100%;\n  min-height: 100%;\n  background: #fff;\n  box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;\n  padding: 12px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1uZXctYWNjb3VudC10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFDUjtBQUNRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9HQUFBO0VBQ0EsaUJBQUE7QUFESiIsImZpbGUiOiJzZWxlY3QtbmV3LWFjY291bnQtdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1heC1oZWlnaHQ6IDgwJTtcblxuICAgID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDUwJTtcblxuICAgICAgICA+IHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2F2aW5nLWxpc3QsIC50cmFuc2FjdGlvbmFsLWxpc3Qge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggI2ZmZiwgaW5zZXQgMXB4IDFweCBncmV5LCBpbnNldCAtMnB4IC0ycHggI2RmZGZkZiwgaW5zZXQgMnB4IDJweCAjMGEwYTBhO1xuICAgIHBhZGRpbmc6IDEycHggOHB4O1xuXG59Il19 */"]
});

/***/ }),

/***/ 8204:
/*!******************************************************************************!*\
  !*** ./src/app/pages/transactions-history/transactions-history.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsHistoryComponent": () => (/* binding */ TransactionsHistoryComponent)
/* harmony export */ });
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/atm-http.service */ 9823);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/atm-header/atm-header.component */ 1490);
/* harmony import */ var _components_transaction_list_item_transaction_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/transaction-list-item/transaction-list-item.component */ 3078);






function TransactionsHistoryComponent_div_1_app_transaction_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-transaction-list-item", 4);
} if (rf & 2) {
    const transaction_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("transaction", transaction_r2);
} }
function TransactionsHistoryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransactionsHistoryComponent_div_1_app_transaction_list_item_1_Template, 1, 1, "app-transaction-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.transactionsHitory);
} }
class TransactionsHistoryComponent {
    constructor(atmHttpService) {
        this.atmHttpService = atmHttpService;
        this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState;
    }
    ngOnInit() {
        this.atmHttpService.getTransactionsHistory()
            .subscribe(transactions => {
            this.transactionsHitory = transactions;
        });
    }
}
TransactionsHistoryComponent.ɵfac = function TransactionsHistoryComponent_Factory(t) { return new (t || TransactionsHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_1__.AtmHttpService)); };
TransactionsHistoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TransactionsHistoryComponent, selectors: [["app-transactions-history"]], decls: 2, vars: 2, consts: [[3, "lastState"], ["class", "atm-transactions-history", 4, "ngIf"], [1, "atm-transactions-history"], [3, "transaction", 4, "ngFor", "ngForOf"], [3, "transaction"]], template: function TransactionsHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-atm-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransactionsHistoryComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lastState", ctx.ATM_STATES.MAIN_MENU);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.transactionsHitory);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_2__.AtmHeaderComponent, _components_transaction_list_item_transaction_list_item_component__WEBPACK_IMPORTED_MODULE_3__.TransactionListItemComponent], styles: [".atm-transactions-history[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  overflow: auto;\n  width: 100%;\n  height: 90%;\n  max-height: 90%;\n  background: #fff;\n  box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;\n  padding: 12px 8px;\n}\n.atm-transactions-history[_ngcontent-%COMP%]   app-transaction-list-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9ucy1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFHQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvR0FBQTtFQUNBLGlCQUFBO0FBREo7QUFHSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFEUiIsImZpbGUiOiJ0cmFuc2FjdGlvbnMtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdG0tdHJhbnNhY3Rpb25zLWhpc3Rvcnkge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgbWF4LWhlaWdodDogOTAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4ICNmZmYsIGluc2V0IDFweCAxcHggZ3JleSwgaW5zZXQgLTJweCAtMnB4ICNkZmRmZGYsIGluc2V0IDJweCAycHggIzBhMGEwYTtcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcblxuICAgIGFwcC10cmFuc2FjdGlvbi1saXN0LWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 1823:
/*!******************************************************!*\
  !*** ./src/app/pages/withdraw/withdraw.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawComponent": () => (/* binding */ WithdrawComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/atm-http.service */ 9823);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/atm-header/atm-header.component */ 1490);











function WithdrawComponent_div_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Value should be positive. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function WithdrawComponent_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function WithdrawComponent_div_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r3.httpErrors.amount, " ");
} }
function WithdrawComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, WithdrawComponent_div_8_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, WithdrawComponent_div_8_span_2_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, WithdrawComponent_div_8_span_3_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.amountForm.get("amount").errors == null ? null : ctx_r0.amountForm.get("amount").errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.amountForm.get("amount").errors == null ? null : ctx_r0.amountForm.get("amount").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.amountForm.get("amount").errors == null ? null : ctx_r0.amountForm.get("amount").errors["httpError"]);
} }
class WithdrawComponent {
    constructor(fb, notificationService, atmHttpService, navigationService) {
        this.fb = fb;
        this.notificationService = notificationService;
        this.atmHttpService = atmHttpService;
        this.navigationService = navigationService;
        this.ATM_STATES = src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState;
        this.httpErrors = {
            amount: ''
        };
        this.amountForm = this.fb.group({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)])
        });
    }
    ngOnInit() {
    }
    submitForm() {
        if (this.amountForm.get('amount')?.invalid || !this.amountForm.get('amount')?.value) {
            this.amountForm.markAllAsTouched();
            return;
        }
        this.atmHttpService.withdraw(this.amountForm.get('amount').value)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
            if (err.status === 400) {
                this.amountForm.get('amount')?.setErrors({ httpError: true });
                this.httpErrors.amount = err.error.message;
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_8__.EMPTY;
        }))
            .subscribe(() => {
            this.notificationService.notification$.next('Withdraw was successfull!');
            this.navigationService.goTo(src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState.MAIN_MENU);
        });
    }
}
WithdrawComponent.ɵfac = function WithdrawComponent_Factory(t) { return new (t || WithdrawComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_atm_http_service__WEBPACK_IMPORTED_MODULE_2__.AtmHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService)); };
WithdrawComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: WithdrawComponent, selectors: [["app-withdraw"]], decls: 12, vars: 3, consts: [[3, "lastState"], [1, "atm-withdraw"], [1, "field-row", 3, "formGroup"], ["for", "amount"], ["fxFlex", "60", "id", "amount", "formControlName", "amount", "type", "number"], ["class", "error-border", "fxLayoutAlign", "flex-end center", "fxFlex", "100", 4, "ngIf"], [1, "submit-row"], [3, "click"], ["fxLayoutAlign", "flex-end center", "fxFlex", "100", 1, "error-border"], [4, "ngIf"]], template: function WithdrawComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-atm-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "label", 3)(4, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "mount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, WithdrawComponent_div_8_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WithdrawComponent_Template_button_click_10_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Withdraw");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("lastState", ctx.ATM_STATES.MAIN_MENU);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.amountForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.amountForm.get("amount")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.amountForm.get("amount")) == null ? null : tmp_2_0.touched));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _components_atm_header_atm_header_component__WEBPACK_IMPORTED_MODULE_4__.AtmHeaderComponent], styles: [".atm-withdraw[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  align-content: center;\n  flex-wrap: wrap;\n}\n.atm-withdraw[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  width: 100%;\n}\n.atm-withdraw[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.atm-withdraw[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 24px;\n  height: 44px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.atm-withdraw[_ngcontent-%COMP%]   .submit-row[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n}\n.atm-withdraw[_ngcontent-%COMP%]   .submit-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 50px;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhkcmF3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUNSO0FBQVE7RUFDSSxlQUFBO0FBRVo7QUFBUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVaO0FBRUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUFSO0FBRVE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBWiIsImZpbGUiOiJ3aXRoZHJhdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdG0td2l0aGRyYXcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLmZpZWxkLXJvdyB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN1Ym1pdC1yb3cge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);



class AccountService {
    constructor() {
        this._cardNumber = null;
        this.atmState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState.LOGIN);
        this.stateName$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.newPlan$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.planType$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.newPlan$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(plan => !!plan)).subscribe(data => {
            if (typeof data?.plan.additionAllowed == 'undefined') {
                this.planType$.next(_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AccountType.TRANSACTIONAL);
            }
            else if (typeof data?.plan.creditMoneyAmount == 'undefined') {
                this.planType$.next(_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AccountType.SAVING);
            }
        });
        this.atmState$.subscribe(state => {
            if (state == _interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState.NEW_ACCOUNT) {
                switch (this.planType$.value) {
                    case _interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AccountType.SAVING:
                        this.stateName$.next('Create new saving account');
                        break;
                    case _interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AccountType.TRANSACTIONAL:
                        this.stateName$.next('Create new transactional account');
                        break;
                }
                return;
            }
            this.stateName$.next(state);
        });
    }
    set cardNumber(number) {
        this._cardNumber = number;
    }
    get cardNumber() {
        return this._cardNumber;
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/app.interfaces */ 5675);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.service */ 8270);







class AtmHttpService {
    constructor(http, utilsService) {
        this.http = http;
        this.utilsService = utilsService;
    }
    getAllAtm() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/atm/all`;
        return this.http.get(url);
    }
    verifyAtm(cardNumber, atmId) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/card/verify-atm-support-bank`;
        return this.http.post(url, { cardNumber, atmId });
    }
    loginToAtm(number, pin, atm) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.appUrl}/login`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(url, this.utilsService.toUrlEncoded({ number, pin, atm }), { headers });
    }
    getAllAccounts() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/account/all-my`;
        return this.http.get(url);
    }
    getAccountInfo() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/account/auth`;
        return this.http.get(url);
    }
    logoutFromAtm() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.appUrl}/logout`;
        return this.http.post(url, {}, { withCredentials: true });
    }
    getPlans() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/account/plans`);
    }
    getCurrency() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/account/currency`);
    }
    createSavingAccount(plan, currencyUnitCode, accountName) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/account/saving/plan`;
        return this.http.post(url, { plan, currencyUnitCode, accountName });
    }
    createTransactionalAccount(plan, currencyUnitCode, accountName) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/account/transactional/plan`;
        return this.http.post(url, { plan, currencyUnitCode, accountName });
    }
    withdraw(amount) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/transfer/withdraw`;
        return this.http.post(url, { amount });
    }
    deposit(amount) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/transfer/deposit`;
        return this.http.post(url, { amount });
    }
    getTransactionsHistory() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/transaction/history`;
        return this.http.get(url);
    }
    changePinCode(pin) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/card/update-pin`;
        return this.http.put(url, { pin });
    }
    createNewTransferFromTransaction(amount, senderAccountId, receiverAccountId) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backApi}/transfer`;
        return this.http.put(url, { amount, senderAccountId, receiverAccountId });
    }
}
AtmHttpService.ɵfac = function AtmHttpService_Factory(t) { return new (t || AtmHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService)); };
AtmHttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AtmHttpService, factory: AtmHttpService.ɵfac });


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
/* harmony import */ var _interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/app.interfaces */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.service */ 9876);
/* harmony import */ var _atm_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atm-http.service */ 9823);




class NavigationService {
    constructor(accountService, atmHttpService) {
        this.accountService = accountService;
        this.atmHttpService = atmHttpService;
    }
    goTo(state) {
        if (state === _interfaces_app_interfaces__WEBPACK_IMPORTED_MODULE_0__.AtmState.LOGIN) {
            this.atmHttpService.logoutFromAtm()
                .subscribe(() => { });
        }
        this.accountService.atmState$.next(state);
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_atm_http_service__WEBPACK_IMPORTED_MODULE_2__.AtmHttpService)); };
NavigationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2013:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class NotificationService {
    constructor() {
        this.notification$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


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
        // return 'https://4a54-212-90-62-127.eu.ngrok.io';
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