webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\r\n  {{alert.message}}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_models_alert__ = __webpack_require__("./src/app/domain/models/alert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_services_alert_service__ = __webpack_require__("./src/app/domain/services/alert.service.ts");
// implementation of alert component and services was based on the following code
// http://jasonwatmore.com/post/2017/06/25/angular-2-4-alert-toaster-notifications
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    // tslint:disable-next-line:use-life-cycle-interface
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case __WEBPACK_IMPORTED_MODULE_1__domain_models_alert__["a" /* AlertType */].Success:
                return 'alert alert-success';
            case __WEBPACK_IMPORTED_MODULE_1__domain_models_alert__["a" /* AlertType */].Error:
                return 'alert alert-danger';
            case __WEBPACK_IMPORTED_MODULE_1__domain_models_alert__["a" /* AlertType */].Info:
                return 'alert alert-info';
            case __WEBPACK_IMPORTED_MODULE_1__domain_models_alert__["a" /* AlertType */].Warning:
                return 'alert alert-warning';
        }
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            // tslint:disable-next-line:component-selector
            selector: 'alert',
            template: __webpack_require__("./src/app/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_services_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\r\n<title> Lyle.IO</title>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import * as firebase from 'firebase';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        // firebase.initializeApp({
        //   apiKey: 'AIzaSyAhum7Lp5ptcYLI_J5n4wH3ispW_coy_2Q',
        //   authDomain: 'chat-33b20.firebaseapp.com',
        // });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_votingLocation_repository_service__ = __webpack_require__("./src/app/domain/votingLocation-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_signup_signup_component__ = __webpack_require__("./src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__updateprofile_updateprofile_component__ = __webpack_require__("./src/app/updateprofile/updateprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__updateprofile_password_change_password_change_component__ = __webpack_require__("./src/app/updateprofile/password-change/password-change.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profilepage_profilepage_component__ = __webpack_require__("./src/app/profilepage/profilepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__domain_services_authentication_service__ = __webpack_require__("./src/app/domain/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__domain_services_alert_service__ = __webpack_require__("./src/app/domain/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__domain_services_user_service__ = __webpack_require__("./src/app/domain/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_server_service__ = __webpack_require__("./src/app/auth/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__disscussion_post_service__ = __webpack_require__("./src/app/disscussion/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__update_issues_update_issues_component__ = __webpack_require__("./src/app/update-issues/update-issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__disscussion_disscussion_component__ = __webpack_require__("./src/app/disscussion/disscussion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__disscussion_comments_comments_component__ = __webpack_require__("./src/app/disscussion/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__voting_locations_voting_locations_component__ = __webpack_require__("./src/app/voting-locations/voting-locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__domain_search_location_pipe__ = __webpack_require__("./src/app/domain/search-location.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__voting_locations_location_list_location_list_component__ = __webpack_require__("./src/app/voting-locations/location-list/location-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__voting_locations_location_details_location_details_component__ = __webpack_require__("./src/app/voting-locations/location-details/location-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__domain_guards_auth_guard__ = __webpack_require__("./src/app/domain/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__domain_helpers_jwt_interceptor__ = __webpack_require__("./src/app/domain/helpers/jwt.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__domain_profile_repository_service__ = __webpack_require__("./src/app/domain/profile-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__alert_alert_component__ = __webpack_require__("./src/app/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__domain_search_repository_service__ = __webpack_require__("./src/app/domain/search-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { AuthService } from './domain/services';





















var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__auth_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__auth_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_22__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__domain_guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: 'chat', pathMatch: 'full' },
            { path: 'update', component: __WEBPACK_IMPORTED_MODULE_6__updateprofile_updateprofile_component__["a" /* UpdateprofileComponent */] },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */] },
            { path: 'profile/:username', component: __WEBPACK_IMPORTED_MODULE_9__profilepage_profilepage_component__["a" /* ProfilePageComponent */] },
            { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_20__disscussion_disscussion_component__["a" /* DisscussionComponent */] },
            { path: 'locations', component: __WEBPACK_IMPORTED_MODULE_23__voting_locations_voting_locations_component__["a" /* VotingLocationsComponent */] },
        ]
    },
    { path: '**', redirectTo: 'signup' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__auth_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_5__auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__updateprofile_updateprofile_component__["a" /* UpdateprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__updateprofile_password_change_password_change_component__["a" /* PasswordChangeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__profilepage_profilepage_component__["a" /* ProfilePageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_18__update_issues_update_issues_component__["a" /* UpdateIssuesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__disscussion_disscussion_component__["a" /* DisscussionComponent */],
                __WEBPACK_IMPORTED_MODULE_21__disscussion_comments_comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__voting_locations_voting_locations_component__["a" /* VotingLocationsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__domain_search_location_pipe__["a" /* SearchLocationPipe */],
                __WEBPACK_IMPORTED_MODULE_25__voting_locations_location_list_location_list_component__["a" /* LocationListComponent */],
                __WEBPACK_IMPORTED_MODULE_31__alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_26__voting_locations_location_details_location_details_component__["a" /* LocationDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_31__alert_alert_component__["a" /* AlertComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["d" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["c" /* HttpClientModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["d" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__auth_server_service__["a" /* ServerService */],
                __WEBPACK_IMPORTED_MODULE_17__disscussion_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_0__domain_votingLocation_repository_service__["a" /* VotingLocationRepostitory */],
                __WEBPACK_IMPORTED_MODULE_27__domain_guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_13__domain_services_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_12__domain_services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_14__domain_services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_32__domain_search_repository_service__["a" /* SearchRepostitory */],
                __WEBPACK_IMPORTED_MODULE_30__domain_profile_repository_service__["a" /* ProfileRepository */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_29__domain_helpers_jwt_interceptor__["a" /* JwtInterceptor */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "body {font-family: Arial, Helvetica, sans-serif;}\r\nform {border: 3px solid #ffffff;}\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid whitesmoke;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n.x {\r\n  background: #cc1f00;\r\n}\r\nbutton:hover {\r\n    opacity: 0.5;\r\n}\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #cc1f00;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n.container {\r\n    padding: 16px;\r\n}\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n.heading {\r\n  overflow: hidden;\r\n  text-align: center;\r\n}\r\n.heading:before,\r\n.heading:after {\r\n  background-color: #000;\r\n  content: \"\";\r\n  display: inline-block;\r\n  height: 1px;\r\n  position: relative;\r\n  vertical-align: middle;\r\n  width: 50%;\r\n}\r\n.heading:before {\r\n  right: 0.5em;\r\n  margin-left: -50%;\r\n}\r\n.heading:after {\r\n  left: 0.5em;\r\n  margin-right: -50%;\r\n}\r\ninput.ng-invalid.ng-touched {\r\n  border: solid red;\r\n}\r\n#loginText{\r\n  color: whitesmoke;\r\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n}\r\n#signInBtn{\r\n  color: white;\r\n  background-color: lightblue;\r\n  border: #ffffff\r\n}\r\n#signupBtn{\r\n  background-color: lightcoral;\r\n  color: white;\r\n  border: #ffffff;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<title> Lyle.IO</title>\r\n<body class=\"container\" style=\"width: 35%; height: 35%;\">\r\n  <div class=\"row pt-3 pb-3\" style=\"background-color: #cc1f00\">\r\n    <div class=\"col text-center\">\r\n      <h2 class=\"x text-center\" id = \"loginText\">Lyle.io</h2>\r\n    </div>\r\n  </div>\r\n\r\n  <form name=\"form\" class=\"mt-2\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"imgcontainer\">\r\n      <img src=\"./assets/profile/placeholder.png\" alt=\"Avatar\" class=\"avatar\">\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n\r\n          <label for=\"username\">\r\n            <b>Username</b>\r\n          </label>\r\n\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control mb-2\"\r\n            name=\"username\"\r\n            placeholder=\"Enter your username\"\r\n            [(ngModel)]=\"model.username\"\r\n            #username=\"ngModel\"\r\n            required/>\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n          </div>\r\n\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"\">\r\n              <b>Password</b>\r\n            </label>\r\n\r\n            <input\r\n            type=\"password\"\r\n            class=\"form-control mb-2\"\r\n            name=\"password\"\r\n            placeholder=\"Enter your password\"\r\n            [(ngModel)]=\"model.password\"\r\n            #password=\"ngModel\"\r\n            required/>\r\n            <div *ngIf=\"f.submitted && !password.valid && username.valid\" class=\"help-block\">Password is required</div>\r\n            <div *ngIf=\"f.submitted && !password.valid && !username.valid\" class=\"help-block\"></div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <button class=\"btn btn-block btn-success\" id = \"signInBtn\" type=\"submit\" [disabled]=\"loading\">Login</button>\r\n      <!-- <div class=\"mt-2\">\r\n        <alert></alert>\r\n      </div> -->\r\n      <h5 class=\"heading mt-2 mb-4\">or</h5>\r\n      <button class=\"btn btn-info btn-block\" id = \"signupBtn\" type=\"register\" routerLink = \"/signup\" >Sign Up</button>\r\n    </div>\r\n  </form>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("./src/app/auth/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_services_alert_service__ = __webpack_require__("./src/app/domain/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_services_authentication_service__ = __webpack_require__("./src/app/domain/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Code adapted from https://embed.plnkr.co/plunk/UvIxFe






var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, alertService, serverService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.serverService = serverService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
            _this.loading = false;
            _this.alertService.clear();
            // this.alertService.error('Wrong username or password');
            console.log('reached');
        }, function (error) {
            console.log('reached');
            _this.alertService.clear();
            _this.alertService.error('Wrong username or password');
            _this.loading = false;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        // this.returnUrl = '/';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-login',
            moduleId: module.i,
            template: __webpack_require__("./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__domain_services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__domain_services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerService = /** @class */ (function () {
    function ServerService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
    }
    ServerService.prototype.storeUser = function (users) {
        return this.http.post('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/signup', users, this.httpOptions);
    };
    ServerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\r\n  border: solid red;\r\n}\r\n\r\n.modal{\r\n  z-index: 99999;\r\n}\r\n\r\n#headerText{\r\n  color: whitesmoke;\r\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n}\r\n\r\n#returnBtn{\r\n  -ms-flex-item-align: auto;\r\n      -ms-grid-row-align: auto;\r\n      align-self: auto;\r\n  border-radius: 2px;\r\n  border: transparent;\r\n}\r\n\r\n#bodyT{\r\n  background-color: transparent;\r\n}\r\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container border rounded w-50 mt-5\"> <!-- pageContainer -->\r\n  <div class=\"row pt-3 pb-3\" style=\"background-color: #cc1f00\"> <!-- signUp_header -->\r\n    <div class=\"col text-center\">\r\n      <h4 id= \"headerText\">Create an account</h4>\r\n    </div>\r\n  </div> <!-- signUp_header -->\r\n\r\n  <!-- sign up body -->\r\n  <div class=\"container mt-3\" id=\"test\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <form (ngSubmit)=\"addUser(f)\" #f=\"ngForm\"> <!--#f=\"ngForm // let me access the form object in js to see the submitted data\"-->\r\n          <div class=\"form-group\" ngModelGroup=\"personalData\">\r\n            <input class=\"form-control mb-2\" type=\"text\" name=\"username\" id=\"username\" placeholder=\"User Name\" required ngModel>\r\n            <input class=\"form-control mb-2\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" required ngModel>\r\n            <input class=\"form-control mb-2\" type=\"password\" name=\"ConfirmPassword\" id=\"ConfirmPassword\" placeholder=\"Confirm password\" required ngModel>\r\n            <!-- <div *ngIf=\" \" class=\"help-block\">Username is required</div> -->\r\n            <input class=\"form-control mb-2\" type=\"text\" name=\"firstname\" id=\"firstname\" placeholder=\"First Name\" required ngModel>\r\n            <input class=\"form-control mb-2\" type=\"text\" name=\"lastname\" id=\"lastname\" placeholder=\"Last Name\" required ngModel>\r\n            <input class=\"form-control mb-2\" type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email\" email required ngModel #emailAddress=\"ngModel\">\r\n            <input class=\"form-control mb-2\" type=\"text\" name=\"gradYear\" id=\"gradYear\" placeholder=\"Expected Graduation Year\" required ngModel>\r\n            <input class=\"form-control mb-2\" name=\"trackSelect\" id =\"trackSelect\" placeholder=\"Degree Track\" required ngModel>\r\n          </div>\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h6>\r\n                  <button\r\n                  class=\"btn btn-primary mb-2\"\r\n                  type=\"submit button\"\r\n                  id=\"submit\"\r\n                  data-dismiss=\"modal\"\r\n                  [disabled]=\"!f.valid\"\r\n                  >Sign Up</button>\r\n                  <a class=\"btn btn-primary mb-2\" id=\"returnBtn\" routerLink=\"/login\">Already have an account?</a>\r\n                  </h6>\r\n                </div>\r\n              </div>\r\n            </div>\r\n         </form>\r\n\r\n          <!-- Modal\r\n\r\n          <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Who you are?</h5>\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <div class=\"container mb-3\">\r\n                    <div class=\"row d-flex\">\r\n                      <div class=\"col\">\r\n                        <h6>Candidates:</h6>\r\n                      </div>\r\n                      <div class=\"col\">\r\n                        <h6>Party:</h6>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col border border-right-0 border-dark\">\r\n                        <div class=\"radio\" *ngFor=\"let candidate of candidates\" ngModelGroup=\"candidatesRadioList\">\r\n                          <label>\r\n                            <input type=\"radio\" name=\"candidate\" [value]=\"candidate\" ngModel> {{candidate}}\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col border border-dark\">\r\n                        <div class=\"radio\" *ngFor=\"let party of parties\" ngModelGroup=\"partyRadioList\">\r\n                          <label>\r\n                            <input type=\"radio\" name=\"party\" [value]=\"party\" ngModel> {{party}}\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <button\r\n                  class=\"btn btn-primary mb-2\"\r\n                  type=\"submit button\"\r\n                  id=\"submit\"\r\n                  data-dismiss=\"modal\"\r\n                  (click)=\"addUser(f)\"\r\n                  [disabled]=\"!f.valid\"\r\n                  >Sign Up</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <alert></alert>\r\n        </form>\r\n      </div>\r\n    </div> -->\r\n  <!-- </div>\r\n</div> pageContainer -->\r\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server_service__ = __webpack_require__("./src/app/auth/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_services_alert_service__ = __webpack_require__("./src/app/domain/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(serverService, router, alertService) {
        this.serverService = serverService;
        this.router = router;
        this.alertService = alertService;
        this.candidates = ['President', 'Senator', 'Congressman', 'Voter'];
        this.parties = ['Democrat', 'Republican', 'Independent'];
        this.loading = false;
        this.showCandidateList = false;
        this.showPartyList = false;
    }
    SignupComponent.prototype.addUser = function (form) {
        var _this = this;
        this.loading = true;
        this.users = {
            firstname: this.signupForm.value.personalData.firstname,
            lastname: this.signupForm.value.personalData.lastname,
            email: this.signupForm.value.personalData.email,
            username: this.signupForm.value.personalData.username,
            password: this.signupForm.value.personalData.password,
            track: this.signupForm.value.personalData.trackSelect,
            gradYear: this.signupForm.value.personalData.gradYear
        };
        console.log(this.users);
        if (this.signupForm.value.personalData.password === this.signupForm.value.personalData.ConfirmPassword) {
            this.serverService.storeUser(this.users)
                .subscribe(function (response) {
                // tslint:disable-next-line:triple-equals
                if (response == 600) {
                    _this.alertService.clear();
                    _this.alertService.error('Invalid username!');
                    _this.loading = false;
                }
                // tslint:disable-next-line:triple-equals
                if (response == null) {
                    _this.router.navigateByUrl('/login');
                }
                console.log(response);
            }, function (error) {
                _this.alertService.clear();
                _this.alertService.error('Internal server error!');
                _this.loading = false;
            });
        }
        else {
            this.alertService.clear();
            // alert('Password does not match!');
            this.alertService.error('Password does not match!');
            this.loading = false;
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */])
    ], SignupComponent.prototype, "signupForm", void 0);
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__domain_services_alert_service__["a" /* AlertService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/disscussion/comments/comments.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/disscussion/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<form (onSubmit)=\"onEnter(f)\" #f=\"ngForm\" *ngIf=\"postId\"> <!--(onsubmit)=\"onCreatePost(f)\" \"#f=ngForm\"-->\r\n  <div class=\"input-group input-group-sm\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"btn btn-primary dropdown-toggle rounded-0\" (click)=\"showComments()\" data-toggle=\"collapse\"\r\n      [attr.data-target]=\"'#'+postId\">Show Comments</span>\r\n    </div>\r\n\r\n    <input\r\n      type=\"text\"\r\n      name=\"newComments\"\r\n      class=\"form-control\"\r\n      aria-label=\"Small\"\r\n      aria-describedby=\"inputGroup-sizing-sm\"\r\n      ngModel\r\n      required\r\n      (keyup.enter)=\"onEnter(f)\"\r\n      >\r\n  </div>\r\n\r\n  <div class=\"collapse\" id=\"{{postId}}\">\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let comment of commentArr\">{{ comment.body }}\r\n        <div class=\"input-group-prepend float-right\">\r\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">{{ comment.userName }}</span>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/disscussion/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__("./src/app/disscussion/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(postService, activatedRoute) {
        this.postService = postService;
        this.activatedRoute = activatedRoute;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    CommentsComponent.prototype.ngOnInit = function () {
        this.showComments();
    };
    CommentsComponent.prototype.showComments = function () {
        var _this = this;
        this.postService.getComments(this.postId).subscribe(function (comments) {
            _this.commentArr = comments;
        });
    };
    CommentsComponent.prototype.onEnter = function (form) {
        this.comment = {
            username: this.currentUser.username,
            body: this.commentForm.value.newComments,
            postid: this.postId
        };
        // console.log(this.comment);
        this.postService.addComment(this.comment)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        this.commentForm.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* NgForm */])
    ], CommentsComponent.prototype, "commentForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], CommentsComponent.prototype, "postId", void 0);
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-comments',
            template: __webpack_require__("./src/app/disscussion/comments/comments.component.html"),
            styles: [__webpack_require__("./src/app/disscussion/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/disscussion/disscussion.component.css":
/***/ (function(module, exports) {

module.exports = "textarea{\r\n  resize: none;\r\n\r\n}\r\n\r\n#postField {\r\n  height: 20ex;\r\n}\r\n\r\n#postTitle {\r\n  font-size: 1.5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/disscussion/disscussion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n\r\n      <form (onSubmit)=\"storePosts(f)\" #f=\"ngForm\">\r\n        <div class=\"form-group\">\r\n\r\n          <button\r\n          class=\"btn btn-primary mt-2 mb-2\"\r\n          type=\"submit\"\r\n          id=\"submit\"\r\n          (click)=\"storePosts()\"\r\n          [disabled]=\"!f.valid\"\r\n          >Add Post\r\n        </button>\r\n\r\n        <textarea\r\n        rows=\"1\"\r\n        class=\"form-control mb-2\"\r\n        name=\"postTitle\"\r\n        placeholder=\"Write your title here.\"\r\n        required\r\n        ngModel>\r\n      </textarea>\r\n\r\n        <textarea\r\n          rows=\"4\"\r\n          class=\"form-control mb-2\"\r\n          name=\"newPost\"\r\n          placeholder=\"Write your post here.\"\r\n          required\r\n          ngModel>\r\n        </textarea>\r\n\r\n        <div class=\"from-group border border-muted mb-3\" *ngFor=\"let post of postsArr\">\r\n\r\n          <ul class=\"list-group\">\r\n            <div class=\"d-flex justify-content-between\">\r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-text rounded font-weight-bold\" id=\"postTitle\">{{ post.title }}</span>\r\n              </div>\r\n\r\n              <div class=\"input-group-append\"><span class=\"input-group-text rounded-0\" id=\"inputGroup-sizing-sm\">{{ post.postdate | date:'short' }}</span>\r\n                <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"post.userName == currentUser.username\" (click)=\"postDelete(post.id)\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <li class=\"list-group-item\" id=\"postField\">{{ post.body }}</li>\r\n            <div class=\"d-flex justify-content-between\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text rounded-0\" id=\"inputGroup-sizing-sm\">Username: {{ post.userName }}</span>\r\n                </div>\r\n                <div class=\"input-group\">\r\n                    <p class=\"input-group-text rounded-0\">Track: {{ post.track }}</p>\r\n                </div>\r\n                <div class=\"input-group-append\">\r\n                    <p class=\"input-group-text rounded-0\">Grad Year: {{ post.gradYear }}</p>\r\n                </div>\r\n            </div>\r\n\r\n            <app-comments [postId]=\"post.id\"></app-comments>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </form>\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/disscussion/disscussion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisscussionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_service__ = __webpack_require__("./src/app/disscussion/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisscussionComponent = /** @class */ (function () {
    function DisscussionComponent(postService, router) {
        this.postService = postService;
        this.router = router;
        this.showCommentFields = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    DisscussionComponent.prototype.ngOnInit = function () {
        this.currentForum = this.returnForum(this.currentUser);
        // localStorage.removeItem('lastPostIndex');
        // this.lastPostIndex = this.returnIndex();
        this.showPosts();
    };
    DisscussionComponent.prototype.returnForum = function (user) {
        if (user.lastForum === undefined) {
            this.currentUser.lastForum = 1;
            return this.currentUser.lastForum;
        }
        else {
            return this.currentUser.lastForum;
        }
    };
    // getTrack(user: Profile) {
    //   if (user.username === this.currentUser.username) {
    //     user.track = this.currentUser.track;
    //   } else {
    //     return;
    //   }
    // }
    DisscussionComponent.prototype.storePosts = function (form) {
        var _this = this;
        this.post = {
            username: this.currentUser.username,
            body: this.postForm.value.newPost,
            title: this.postForm.value.postTitle,
            track: this.currentUser.track,
            gradYear: this.currentUser.gradYear,
            forumid: this.currentUser.lastForum
        };
        this.postService.storePosts(this.post)
            .subscribe(function (response) { return _this.showPosts(); }, function (error) { return console.log(error); });
        this.postForm.reset();
    };
    DisscussionComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
    };
    DisscussionComponent.prototype.showPosts = function () {
        var _this = this;
        this.postService.getPosts(this).subscribe(function (posts) {
            _this.postsArr = posts;
            console.log(posts);
            for (var i = 0; i < Object.keys(_this.postsArr).length; i++) {
                _this.postsArr[i].id = posts[i].postID;
                _this.postsArr[i].title = posts[i].title;
                // if (posts[i].username === this.currentUser.username) {
                //   this.postsArr[i].track = this.currentUser.track;
                // }
            }
        });
    };
    DisscussionComponent.prototype.postDelete = function (item) {
        var _this = this;
        this.postService.deletePosts(item)
            .subscribe(function (id) {
            _this.showPosts();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */])
    ], DisscussionComponent.prototype, "postForm", void 0);
    DisscussionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-disscussion',
            template: __webpack_require__("./src/app/disscussion/disscussion.component.html"),
            styles: [__webpack_require__("./src/app/disscussion/disscussion.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], DisscussionComponent);
    return DisscussionComponent;
}());



/***/ }),

/***/ "./src/app/disscussion/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
    }
    PostService.prototype.storePosts = function (posts) {
        console.log(posts);
        return this.http.post('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/addPost', posts, this.httpOptions);
    };
    PostService.prototype.addComment = function (comments) {
        return this.http.post('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/addComment', comments, this.httpOptions);
    };
    PostService.prototype.getPosts = function (object) {
        return this.http.get("http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/posts/" + object.currentForum, this.httpOptions);
    };
    PostService.prototype.getComments = function (id) {
        return this.http.get('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/comments/' + id, this.httpOptions);
    };
    PostService.prototype.getTimeDate = function (id) {
        return this.http.get('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/posts/' + id, this.httpOptions);
    };
    PostService.prototype.deletePosts = function (id) {
        return this.http.delete('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/deletePost/' + id, this.httpOptions);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/domain/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/domain/helpers/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/domain/models/alert.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Alert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert() {
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/domain/models/profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile() {
    }
    return Profile;
}());



/***/ }),

/***/ "./src/app/domain/models/votingLocation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotingLocation; });
var VotingLocation = /** @class */ (function () {
    function VotingLocation() {
    }
    return VotingLocation;
}());



/***/ }),

/***/ "./src/app/domain/profile-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repository_service__ = __webpack_require__("./src/app/domain/repository.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileRepository = /** @class */ (function (_super) {
    __extends(ProfileRepository, _super);
    function ProfileRepository(httpClient) {
        var _this = _super.call(this, httpClient) || this;
        _this.httpClient = httpClient;
        _this.endPoint = 'http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080';
        return _this;
    }
    ProfileRepository.prototype.getAccount = function (id) {
        return this.httpClient.get(this.endPoint + "/api/profile/" + id, this.httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["a" /* catchError */])(this.handleException));
    };
    ProfileRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], ProfileRepository);
    return ProfileRepository;
}(__WEBPACK_IMPORTED_MODULE_3__repository_service__["a" /* Repostitory */]));



/***/ }),

/***/ "./src/app/domain/repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repostitory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");

// tslint:disable-next-line:import-blacklist


var Repostitory = /** @class */ (function () {
    function Repostitory(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            })
        };
    }
    Repostitory.prototype.get = function () {
        return this.httpClient.get("" + this.endPoint, this.httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["a" /* catchError */])(this.handleException));
    };
    Repostitory.prototype.getById = function (id) {
        return this.httpClient.get(this.endPoint + "/" + id, this.httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["a" /* catchError */])(this.handleException));
    };
    Repostitory.prototype.add = function (item) {
        return this.httpClient.post("" + this.endPoint, item, this.httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["a" /* catchError */])(this.handleException));
    };
    Repostitory.prototype.update = function (id, item) {
        return this.httpClient.put(this.endPoint + "/" + id, item, this.httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["a" /* catchError */])(this.handleException));
    };
    Repostitory.prototype.delete = function (id) {
        return this.httpClient.delete(this.endPoint + "/" + id, this.httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["a" /* catchError */])(this.handleException));
    };
    Repostitory.prototype.handleException = function (exception) {
        var message = exception.status + " : " + exception.statusText + "\r\n" + exception.message;
        alert(message);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(exception);
    };
    return Repostitory;
}());



/***/ }),

/***/ "./src/app/domain/search-location.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchLocationPipe = /** @class */ (function () {
    function SearchLocationPipe() {
    }
    SearchLocationPipe.prototype.transform = function (pipeData, pipeModifier) {
        if (pipeModifier && pipeData) {
            return pipeData.filter(function (eachItem) {
                return (eachItem['locationName'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
                    eachItem['address'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
                    eachItem['zipcode'].toLowerCase().includes(pipeModifier.toLowerCase()));
            });
        }
        else {
            return pipeData;
        }
    };
    SearchLocationPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'searchLocation'
        })
    ], SearchLocationPipe);
    return SearchLocationPipe;
}());



/***/ }),

/***/ "./src/app/domain/search-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchRepostitory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// tslint:disable-next-line:import-blacklist



var SearchRepostitory = /** @class */ (function () {
    function SearchRepostitory(httpClient) {
        this.httpClient = httpClient;
        this.endPoint = 'http://127.0.0.1:3000/';
        this.queryUrl = '?search=';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            })
        };
    }
    SearchRepostitory.prototype.search = function (type, query) {
        return this.httpClient.get("" + this.endPoint + type + this.queryUrl + query, this.httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["a" /* catchError */])(this.handleException));
    };
    SearchRepostitory.prototype.handleException = function (exception) {
        var message = exception.status + " : " + exception.statusText + "\r\n" + exception.message;
        alert(message);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(exception);
    };
    SearchRepostitory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], SearchRepostitory);
    return SearchRepostitory;
}());



/***/ }),

/***/ "./src/app/domain/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_alert__ = __webpack_require__("./src/app/domain/models/alert.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/domain/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        console.log('here1');
        return this.http.post('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/login', { username: username, password: password })
            .map(function (user) {
            console.log('here2');
            console.log(user);
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                console.log('here');
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/domain/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users');
    };
    UserService.prototype.getById = function (username) {
        return this.http.get('/api/users/' + username);
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users', user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.username, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/domain/votingLocation-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotingLocationRepostitory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repository_service__ = __webpack_require__("./src/app/domain/repository.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VotingLocationRepostitory = /** @class */ (function (_super) {
    __extends(VotingLocationRepostitory, _super);
    function VotingLocationRepostitory(httpClient) {
        var _this = _super.call(this, httpClient) || this;
        _this.httpClient = httpClient;
        _this.endPoint = 'http://127.0.0.1:3000/locations';
        return _this;
    }
    VotingLocationRepostitory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], VotingLocationRepostitory);
    return VotingLocationRepostitory;
}(__WEBPACK_IMPORTED_MODULE_2__repository_service__["a" /* Repostitory */]));



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-navbar></app-navbar>\r\n  <div class=\"container\">\r\n    <div class=\" mt-3 container text-center\">\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_services_user_service__ = __webpack_require__("./src/app/domain/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            moduleId: module.i,
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__domain_services_user_service__["a" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    background-color: red;\r\n  }\r\n#navBar{\r\n  background-color: red;\r\n}\r\n#homeLink {\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n}\r\n#navbarDropdownMenuLink {\r\n  font-size: 1.5rem;\r\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n}\r\n#accountLink {\r\n  font-size: 1.5rem;\r\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"container\">\r\n  <nav class=\"my-navbar navbar navbar-dark\" id =\"navBar\">\r\n    <a class=\"navbar-brand\"  routerLink=\"/home\" routerLinkActive=\"active\">\r\n      <img src=\"assets/4.png\" height=\"90\" alt=\"\">\r\n    </a>\r\n    <ul class=\"nav justify-content-end \">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link text-white \" id=\"homeLink\"routerLink=\"/home\" href=\"/home\">Home</a>\r\n      </li>\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link text-dark\" routerLink=\"/home/search\" href=\"/home/search\" >Search</a>\r\n      </li> -->\r\n      <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle text-white\"\r\n          href=\"#\"\r\n          id=\"navbarDropdownMenuLink\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">\r\n          Select a forum\r\n        </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <a class=\"dropdown-item\" routerLink=\"/home/chat/\" (click)= \"changeUserForum(1)\">General</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/home/chat/\" (click)= \"changeUserForum(2)\">Info Security</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/home/chat/\"(click)= \"changeUserForum(3)\">Game Development</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/home/chat/\" (click)= \"changeUserForum(4)\">Premed</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/home/chat/\" (click)= \"changeUserForum(5)\">Data Intensive</a>\r\n          </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle text-white\"\r\n          href=\"#\"\r\n          id=\"navbarDropdownMenuLink\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">\r\n          My Account\r\n        </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <a class=\"dropdown-item\" routerLink=\"/home/profile/{{currentUser.username}}\">View Profile</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/home/update\">Update Profile</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/login\">Logout</a>\r\n          </div>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    NavbarComponent.prototype.link = function (username) {
        this.router.navigateByUrl('home/profile/' + username);
    };
    NavbarComponent.prototype.changeUserForum = function (forum) {
        console.log('at fxn call');
        this.currentUser.lastForum = forum;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        window.location.reload();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profilepage/profilepage.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: #96d177;\r\n}\r\n\r\n#cardName {\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n}\r\n\r\n.card {\r\n  margin-top: 20px;\r\n  padding: 30px;\r\n  background-color: rgba(214, 224, 226, 0.2);\r\n  -moz-border-top-left-radius:5px;\r\n  border-top-left-radius:5px;\r\n  -moz-border-top-right-radius:5px;\r\n  border-top-right-radius:5px;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.card.hovercard {\r\n  position: relative;\r\n  padding-top: 0;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  background-color: #fff;\r\n  background-color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.card.hovercard .card-background {\r\n  height: 160px;\r\n}\r\n\r\n.card-background img {\r\n  -webkit-filter: blur(25px);\r\n  -moz-filter: blur(25px);\r\n  -o-filter: blur(25px);\r\n  -ms-filter: blur(25px);\r\n  filter: blur(25px);\r\n  margin-left: -100px;\r\n  margin-top: -200px;\r\n  min-width: 130%;\r\n}\r\n\r\n.card.hovercard .useravatar {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.card.hovercard .useravatar img {\r\n  width: 140px;\r\n  height: 130px;\r\n  max-width: 140px;\r\n  max-height: 130px;\r\n  border-radius: 50%;\r\n  border: 5px solid rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.card.hovercard .card-info {\r\n  position: absolute;\r\n  bottom: 14px;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.card.hovercard .card-info .card-title {\r\n  padding:0 5px;\r\n  font-size: 20px;\r\n  line-height: 1;\r\n  color: #262626;\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n  border-radius: 4px;\r\n}\r\n\r\n.card.hovercard .card-info {\r\n  overflow: hidden;\r\n  font-size: 12px;\r\n  line-height: 20px;\r\n  color: #737373;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.card.hovercard .bottom {\r\n  padding: 0 20px;\r\n  margin-bottom: 17px;\r\n}\r\n\r\n.btn-pref .btn {\r\n  -webkit-border-radius:0 !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/profilepage/profilepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"userShow\">\r\n  <div class=\"\">\r\n    <!-- <div class=\"card hovercard\">\r\n      <div class=\"card-background\">\r\n        <img class=\"card-bkimg\" alt=\"\" src=\"./assets/profile/placeholder.png\">\r\n      </div>\r\n      <div class=\"useravatar\">\r\n        <img alt=\"\" src=\"./assets/profile/placeholder.png\">\r\n      </div>\r\n      <div class=\"card-info\">\r\n        <span class=\"card-title font-weight-bold\" id=\"cardName\">{{userShow.firstname}} {{userShow.lastname}}</span>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"card\" *ngIf=\"userShow\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <h4>User Profile: {{userShow.username}}</h4>\r\n        </div>\r\n        <div class=\"col\" *ngIf=\"userShow.username === currentUser.username\">\r\n          <button type=\"submit\" class=\"btn btn-primary float-right\" routerLink=\"/home/update\">Update Account</button>\r\n        </div>\r\n        <div class=\"col\" *ngIf=\"userShow.username !== currentUser.username\">\r\n          <button type=\"submit\" class=\"btn btn-info float-right\" routerLink=\"/home\">Send Friend Request</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\" *ngIf=\"userShow.track\">\r\n      <h5 class=\"card-title\">Track: {{userShow.track}}</h5>\r\n      <p class=\"pull-left\">Expected Year of Graduation:\r\n          <strong>{{userShow.gradYear}}</strong>\r\n      </p>\r\n\r\n      <h5>Bio:</h5>\r\n      <p>{{userShow.bio}}</p>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card\">\r\n        <p class=\"pull-left\">Name:\r\n          <strong>{{userShow.firstname}} {{userShow.lastname}}</strong>\r\n        </p>\r\n        <p class=\"pull-left\">Email:\r\n          <strong>{{userShow.email}}</strong>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"col\">\r\n      <div class=\"card\">\r\n        <p class=\"pull-left\">Position running:\r\n          <strong>{{userShow.candidates}}</strong>\r\n        </p>\r\n        <p class=\"pull-left\">Party Affiliation:\r\n          <strong>{{userShow.party}}</strong>\r\n        </p>\r\n        <p class=\"pull-left\" *ngIf=\"userShow.phone !== 'null'\">Phone:\r\n          <strong>{{userShow?.phone}}</strong>\r\n        </p>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col\" *ngIf=\"userShow?.issues[0] != null\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Issues</h4>\r\n        </div>\r\n        <ul class=\"list-group list-group-flush\" *ngFor=\"let issue of issues\">\r\n          <li class=\"list-group-item\">{{issue}}</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n     <div class=\"col\" *ngIf=\"userShow?.historyArr[0] != null\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Voting History</h4>\r\n        </div>\r\n        <div class=\"list-group-item\" *ngIf=\"userShow.candidates === 'Voter'\">Just a voter!</div>\r\n        <ul class=\"list-group list-group-flush\" *ngFor=\"let voting of history\">\r\n          <li class=\"list-group-item\">{{voting}}</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profilepage/profilepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_profile_repository_service__ = __webpack_require__("./src/app/domain/profile-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePageComponent = /** @class */ (function () {
    function ProfilePageComponent(profileService, activatedRoute) {
        this.profileService = profileService;
        this.activatedRoute = activatedRoute;
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.activatedRoute.params.subscribe(function (params) {
            _this.profileService.getAccount(params.username).subscribe(function (user) {
                _this.userShow = user;
            });
        });
    };
    ProfilePageComponent.prototype.getProfile = function () {
        var _this = this;
        var id = +this.activatedRoute.snapshot.paramMap.get('userName');
        this.profileService.getAccount(id)
            .subscribe(function (profile) { return _this.userShow = profile; });
    };
    ProfilePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profilepage',
            template: __webpack_require__("./src/app/profilepage/profilepage.component.html"),
            styles: [__webpack_require__("./src/app/profilepage/profilepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__domain_profile_repository_service__["a" /* ProfileRepository */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.clickable-row:hover {\r\n  background-color: lightblue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <form #searchform=\"ngForm\">\r\n    <div class=\"form-row mt-4\">\r\n      <div class=\"col\">\r\n        <input #search=\"ngModel\"\r\n        class=\"form-control\"\r\n        type=\"text\"\r\n        id=\"search\"\r\n        name=\"search\"\r\n        [(ngModel)]=\"query\"\r\n        placeholder=\"Tell us what you are looking for.\"\r\n        required>\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <button type=\"submit\"\r\n        class=\"btn btn-success\"\r\n        [disabled]=\"!searchform.form.valid\"\r\n        (click)=\"submit()\">Search</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mt-3\">\r\n      <h6 class=\"text-secondary\">Search by...</h6>\r\n      <div class=\"radio form-check-inline\" *ngFor=\"let type of criteria\">\r\n        <label>\r\n          <input class=\"radio\" type=\"radio\" name=\"searchType\" [value]=\"type\" (change)=\"onSelectionChange(type)\" required> {{type}}\r\n        </label>\r\n      </div>\r\n      <div class=\"border p-2\" *ngIf=\"type === 'issues'\">\r\n        <p class=\"text-center\">Here are some of the issues people on our site care about!</p>\r\n        <div class=\"app flex-row align-items-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\" *ngFor=\"let n of issues\">\r\n              <div class=\"align-items-center\"> {{n.issue}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div *ngIf=\"inSearch\">\r\n  <h2 class=\"float-left\">\r\n    Search Results({{profiles?.length?(profiles.length):0}})\r\n  </h2>\r\n\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <th>Photo</th>\r\n      <th>Name</th>\r\n      <th>Candidacy</th>\r\n      <th>Party</th>\r\n      <th>Zipcode</th>\r\n      <th class=\"text-right\">Description</th>\r\n    </thead>\r\n    <tbody>\r\n      <tr class='clickable-row' *ngFor=\"let index of profiles\"  (click)=\"link(index.username)\">\r\n        <td>\r\n          <img class=\"img-fluid\" src=\"./assets/profile/{{index.picture}}\" alt=\"{{index.picture}}\" style=\"width: 50px; height: 50px;\">\r\n        </td>\r\n        <td>\r\n          {{ index.firstname }} {{index.lastname}}\r\n          <td>\r\n            {{index.candidates}}\r\n          </td>\r\n          <td>\r\n            {{index.party}}\r\n          </td>\r\n          <td>\r\n            {{index.zipcode}}\r\n          </td>\r\n          <td class=\"float-right\">\r\n            {{index.description}}\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"alert alert-secondary alert-block\"\r\n    id=\"alert\"\r\n    role=\"alert\"\r\n    *ngIf=\"!profiles?.length\">\r\n    No search results to display!\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_search_repository_service__ = __webpack_require__("./src/app/domain/search-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_services_alert_service__ = __webpack_require__("./src/app/domain/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchRepostitory, alertService, router) {
        this.searchRepostitory = searchRepostitory;
        this.alertService = alertService;
        this.router = router;
        this.criteria = ['Zipcode', 'Issues', 'Candidate Name'];
        this.issues = [
            { issue: 'Economy' },
            { issue: 'Jobs' },
            { issue: 'Healthcare' },
            { issue: 'Deficit' },
            { issue: 'Budget' },
            { issue: 'Immigration' },
            { issue: 'Environment' },
            { issue: 'Abortion' },
        ];
    }
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.onSelectionChange = function (idx) {
        if (idx === 'Candidate Name') {
            idx = 'Candidate';
        }
        this.type = idx;
        this.type = this.type.toLowerCase();
    };
    SearchComponent.prototype.link = function (username) {
        console.log(username);
        this.router.navigateByUrl('home/profile/' + username);
    };
    SearchComponent.prototype.submit = function () {
        var _this = this;
        // console.log(`${this.query} ---- ${this.type}`);
        this.inSearch = true;
        this.profiles = null;
        if (!this.type) {
            this.alertService.clear();
            this.alertService.warn('Please select a search createria.');
        }
        else {
            this.alertService.clear();
            this.searchRepostitory.search(this.type, this.query).subscribe(function (data) {
                _this.profiles = data;
                console.log(_this.profiles);
            });
        }
        this.query = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "query", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SearchComponent.prototype, "type", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__domain_search_repository_service__["a" /* SearchRepostitory */],
            __WEBPACK_IMPORTED_MODULE_2__domain_services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/update-issues/update-issues.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/update-issues/update-issues.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <form #issuesForm=\"ngForm\" class=\"mb-3\">\r\n    <div class=\"card border-0\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-header bg-light text-center\">Tell us some of the issues that you care about?</h5>\r\n        <div>\r\n          <div class=\"app flex-row align-items-center\">\r\n            <div class=\"row\">\r\n              <div class=\" col-md-4\" *ngFor=\"let n of issues\">\r\n                <div class=\"\">\r\n                  <input type=\"checkbox\"  name=\"checkboxes\" [(ngModel)]=\"n.selected\"> {{n.issue}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-center\"> <input type=\"checkbox\" name=\"selectAll\"[(ngModel)]=\"selectedAll\" />Select All</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"text-center\">\r\n                <button type=\"submit\" class=\"btn mt-3  btn-success\"  (click) =\"update();\">Save</button>\r\n                <button type=\"submit\" class=\"btn mt-3 ml-4 btn-danger\">  Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/update-issues/update-issues.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateIssuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_services_alert_service__ = __webpack_require__("./src/app/domain/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_profile_repository_service__ = __webpack_require__("./src/app/domain/profile-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateIssuesComponent = /** @class */ (function () {
    function UpdateIssuesComponent(router, profileRepository, alertService) {
        this.router = router;
        this.profileRepository = profileRepository;
        this.alertService = alertService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.title = 'Select all/Deselect all checkbox - Angular 2';
        this.issues = [
            { issue: 'The Economy and Jobs' },
            { issue: 'Healthcare' },
            { issue: 'Federal Deficit and Budget' },
            { issue: 'Immigration' },
            { issue: 'Environment and Global Warming' },
            { issue: 'Abortion' },
        ];
    }
    UpdateIssuesComponent.prototype.ngOnInit = function () {
    };
    // selectAll() {
    //   for (let i = 0; i < this.issues.length; i++) {
    //     this.issues[i].selected = this.selectedAll;
    //   }
    // }
    // unselectAll() {
    //   for (let i = 0; i < this.issues.length; i++) {
    //     if (this.issues[i].selected === true) {
    //     this.issues[i].selected = false;
    //     this.selectedAll = false;
    //     }
    //   }
    // }
    // checkIfAllSelected() {
    //   this.selectedAll = this.issues.every(function(item: any) {
    //       return item.selected === true;
    //     });
    // }
    // checkIfAtLeastOnSelected() {
    //   if (this.selectedAll === true) {
    //       return true;
    //     }
    //     for (let i = 0; i < this.issues.length; i++) {
    //       if (this.issues[i].selected === true) {
    //         return true;
    //       }
    //     }
    //     return false;
    //   }
    UpdateIssuesComponent.prototype.update = function () {
        var _this = this;
        console.log(this.currentUser);
        this.profileRepository.update("updateIssues/" + this.currentUser.username, this.issues).subscribe(function (x) {
            _this.alertService.clear();
            _this.alertService.success('Sucess! Thanks for telling us about the issues that matter to you.');
        });
    };
    UpdateIssuesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update-issues',
            template: __webpack_require__("./src/app/update-issues/update-issues.component.html"),
            styles: [__webpack_require__("./src/app/update-issues/update-issues.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__domain_profile_repository_service__["a" /* ProfileRepository */],
            __WEBPACK_IMPORTED_MODULE_1__domain_services_alert_service__["a" /* AlertService */]])
    ], UpdateIssuesComponent);
    return UpdateIssuesComponent;
}());



/***/ }),

/***/ "./src/app/updateprofile/password-change/password-change.component.css":
/***/ (function(module, exports) {

module.exports = "#updateBtn{\r\n  background-color:lightblue;\r\n  border: black;\r\n}\r\n\r\n#profPic {\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/updateprofile/password-change/password-change.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<form #passwordForm=\"ngForm\" class=\"text-center mb-3\">\r\n  <div class=\"form-row mt-3\">\r\n    <span class=\"col\">\r\n      <input #oldpassword\r\n      class=\"form-control\"\r\n      type=\"password\"\r\n      id=\"old-password\"\r\n      name=\"oldPassword\"\r\n      placeholder=\"Old Password\"\r\n      [(ngModel)]=\"oldPassword\"\r\n      required>\r\n    </span>\r\n  </div>\r\n  <div class=\"form-row mt-3\">\r\n    <span class=\"col\">\r\n      <input #newpassword\r\n      class=\"form-control\"\r\n      type=\"password\"\r\n      id=\"new-password\" name=\"newPassword\" placeholder=\"New Password\"\r\n      [(ngModel)]=\"newPassword\" required>\r\n    </span>\r\n  </div>\r\n  <div class=\"form-row mt-3\">\r\n    <span class=\"col\">\r\n      <input #confirmPassword\r\n      class=\"form-control\"\r\n      type=\"password\"\r\n      id=\"confirm-password\"\r\n      name=\"confirmPassword\"\r\n      placeholder=\"Confirm New Password\"\r\n      [(ngModel)]=\"secondPassword\"\r\n      required>\r\n    </span>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn mt-3\" [disabled]=\"!passwordForm.valid\" (click)=\"update();\" id=\"updateBtn\">Update Password</button>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/updateprofile/password-change/password-change.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordChangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_models_profile__ = __webpack_require__("./src/app/domain/models/profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_services_alert_service__ = __webpack_require__("./src/app/domain/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_profile_repository_service__ = __webpack_require__("./src/app/domain/profile-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasswordChangeComponent = /** @class */ (function () {
    function PasswordChangeComponent(alertService, router, profileRepository) {
        this.alertService = alertService;
        this.router = router;
        this.profileRepository = profileRepository;
        this.password = {};
        this.profile = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    PasswordChangeComponent.prototype.ngOnInit = function () {
    };
    PasswordChangeComponent.prototype.update = function () {
        var _this = this;
        this.password.oldPassword = this.oldPassword;
        this.password.newPassword = this.newPassword;
        if (this.newPassword !== this.secondPassword) {
            this.alertService.clear();
            this.alertService.error('Error new passwords did not match');
            // console.log(this.firstPassword + this.oldPassword + this.secondPassword);
        }
        else {
            console.log(this.password);
            this.profileRepository.update("api/updatePassword/" + this.currentUser.username, this.password).subscribe(function (x) {
                console.log(_this.password.newPassword);
                _this.alertService.clear();
                _this.alertService.success('You have sucessfuly updated your password');
                _this.router.navigateByUrl("/home/profile/" + _this.currentUser.username);
            });
        }
        this.newPassword = '';
        this.oldPassword = '';
        this.secondPassword = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__domain_models_profile__["a" /* Profile */])
    ], PasswordChangeComponent.prototype, "profile", void 0);
    PasswordChangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password-change',
            template: __webpack_require__("./src/app/updateprofile/password-change/password-change.component.html"),
            styles: [__webpack_require__("./src/app/updateprofile/password-change/password-change.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__domain_profile_repository_service__["a" /* ProfileRepository */]])
    ], PasswordChangeComponent);
    return PasswordChangeComponent;
}());



/***/ }),

/***/ "./src/app/updateprofile/updateprofile.component.css":
/***/ (function(module, exports) {

module.exports = "/* .jumbotron {\r\n  background-color: black;\r\n\r\n} */\r\n\r\ninput.ng-invalid.ng-touched {\r\n  border: solid red;\r\n}\r\n\r\n#updateActBtn{\r\n  background-color: lightblue;\r\n}\r\n\r\n#cancelBtn{\r\n  background-color: lightcoral;\r\n}\r\n"

/***/ }),

/***/ "./src/app/updateprofile/updateprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-update\">\r\n\r\n    <div class=\"container mt-5\">\r\n      <form #updateform=\"ngForm\" name=\"updateForm\" class=\"mb-3\">\r\n\r\n        <div class=\"row\">\r\n            <!-- <div class=\"mt-0 mx-auto\">\r\n                <div class=\"card h-0\" id=\"profPic\" style=\"width: 18rem;\">\r\n                  <img class=\"card-img-top\" src=\"./assets/profile/placeholder.png\" alt=\"picture of {{currentUser.firstname}}\">\r\n                  <div class=\"card-body\">\r\n                     <h5 class=\"card-title text-center\">Your Profile Picture</h5>\r\n                  </div>\r\n                  <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\r\n                    <span class=\"btn btn-default btn-file\">\r\n                       <div class=\"text-center\">Current User: {{currentUser.username}}</div>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n          <div class=\"col-12\">\r\n            <div class=\"form-row mt-3\">\r\n              <span class=\"col\">\r\n                  <label for=\"party\">Update First Name</label>\r\n                <input #firstName class=\"form-control\" id=\"first-name\" name=\"firstName\" [(ngModel)]=\"profile.firstname\" placeholder={{currentUser.firstname}}>\r\n              </span>\r\n            </div>\r\n            <div class=\"form-row mt-3\">\r\n              <span class=\"col\">\r\n                  <label for=\"party\">Update Last Name</label>\r\n                <input #lastName class=\"form-control\" id=\"last-name\" name=\"lastName\" [(ngModel)]=\"profile.lastname\" placeholder={{currentUser.lastname}}>\r\n              </span>\r\n\r\n            </div>\r\n            <div class=\"form-row mt-3\">\r\n              <span class=\"col\">\r\n                  <label for=\"party\">Update Email</label>\r\n                <input class=\"form-control\" type=\"text\" name=\"Email\" id=\"Email\" placeholder={{currentUser.email}} [(ngModel)]=\"profile.email\"\r\n                  pattern=\"^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$\" #emailAddress=\"ngModel\">\r\n                <span class=\"help-block\" *ngIf=\"!emailAddress.valid && emailAddress.touched\" ng-disabled=\"submit\">Please enter a valid email adderss!</span>\r\n              </span>\r\n            </div>\r\n            <div class=\"form-row mt-3\">\r\n                <span class=\"col\">\r\n                    <label for=\"party\">Update Graduation Year</label>\r\n                  <input #lastName class=\"form-control\" id=\"gradYear\" name=\"gradYear\" [(ngModel)]=\"profile.gradYear\" placeholder={{currentUser.gradYear}}>\r\n                </span>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-row mt-3\">\r\n                <span class=\"col\">\r\n                    <label for=\"party\">Update Bio</label>\r\n                  <input #lastName class=\"form-control\" id=\"bio\" name=\"bio\" [(ngModel)]=\"profile.bio\" placeholder={{currentUser.bio}}>\r\n                </span>\r\n            </div> -->\r\n\r\n            <label for=\"updateBio\" class=\"mt-3\">Update Bio</label>\r\n            <textarea\r\n            rows=\"4\"\r\n            class=\"form-control mb-2\"\r\n            name=\"updateBio\"\r\n            placeholder=\"Write something about yourself.\"\r\n            [(ngModel)]=\"str\"\r\n            >\r\n            </textarea>\r\n\r\n            <div class=\"form-row mt-3\" id=\"useless\">\r\n              <span class=\"col\">\r\n                <label>Change Declared Track</label>\r\n                <select #track class=\"form-control\" id=\"track\" name=\"track\" [(ngModel)]=\"profile.track\">\r\n                  <option value=\"\" [disabled]=\"true\" [selected]=\"true\"></option>\r\n                  <option *ngFor=\"let track of ['Pre-Med','Information Security','Data-Intensive', 'General']\">{{track}}</option>\r\n                </select>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <!-- <label>for= \"party float-left\"</label> -->\r\n          <button #submit type=\"submit\" class=\"btn mt-3\" id=\"submit\" name=\"submit\" [disabled]=\"!updateform.valid\" (click)=\"update();\" id = \"updateActBtn\">Update Account</button>\r\n          <button type=\"submit\" class=\"btn mt-3 ml-4\" (click)=\"updateform.reset();\" id=\"cancelBtn\"> Cancel</button>\r\n        </div>\r\n      </form>\r\n      <div>\r\n        <div>\r\n          <app-password-change></app-password-change>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div>\r\n    <app-update-issues></app-update-issues>\r\n  </div> -->\r\n"

/***/ }),

/***/ "./src/app/updateprofile/updateprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_models_profile__ = __webpack_require__("./src/app/domain/models/profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_services_alert_service__ = __webpack_require__("./src/app/domain/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_profile_repository_service__ = __webpack_require__("./src/app/domain/profile-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateprofileComponent = /** @class */ (function () {
    function UpdateprofileComponent(alertService, router, profileRepository) {
        this.alertService = alertService;
        this.router = router;
        this.profileRepository = profileRepository;
    }
    UpdateprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(this.currentUser);
        // I'm uncertain that the entire user is stored locally, should be a route.
        this.profileRepository.getAccount(this.currentUser.username).subscribe(function (user) {
            _this.currentUser = user;
            _this.currentUser.track = user.track;
        });
        this.profile = {};
    };
    UpdateprofileComponent.prototype.update = function () {
        var _this = this;
        if (!(this.profile.email)) {
            this.profile.email = this.currentUser.email;
        }
        if (!(this.profile.firstname)) {
            console.log('here');
            this.profile.firstname = this.currentUser.firstname;
        }
        if (!this.profile.lastname) {
            this.profile.lastname = this.currentUser.lastname;
        }
        if (!this.profile.track) {
            this.profile.track = this.currentUser.track;
            console.log(this.str);
        }
        if (this.str) {
            // this.profile.bio = this.currentUser.bio;
            console.log(this.str);
            this.profile.bio = this.str;
        }
        console.log(this.profile);
        this.profileRepository.update("/api/updateProfile/" + this.currentUser.username, this.profile).subscribe(function (x) {
            _this.alertService.clear();
            _this.alertService.success('Your profile has been updated');
            // this.bioForm.reset();
            _this.router.navigateByUrl("/home/profile/" + _this.currentUser.username);
        });
        // console.log(this.profile);
        this.profile = {};
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], UpdateprofileComponent.prototype, "bioForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__domain_models_profile__["a" /* Profile */])
    ], UpdateprofileComponent.prototype, "profile", void 0);
    UpdateprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-updateprofile',
            template: __webpack_require__("./src/app/updateprofile/updateprofile.component.html"),
            styles: [__webpack_require__("./src/app/updateprofile/updateprofile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__domain_services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__domain_profile_repository_service__["a" /* ProfileRepository */]])
    ], UpdateprofileComponent);
    return UpdateprofileComponent;
}());



/***/ }),

/***/ "./src/app/voting-locations/location-details/location-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/voting-locations/location-details/location-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- implimentation based on learnangualr5 custome pipe search -->\r\n<div class=\"container mt-3\" *ngIf=\"location.locationName\">\r\n  <div class=\"jumbotron\">\r\n    <h1 class=\"display-4\">{{ location.locationName }}</h1>\r\n    <div class=\"lead\">\r\n      <div class=\"col-sm-5 col-lg-4 float-right\">\r\n        <img class=\"img-fluid rounded\"\r\n        src=\"assets/location/{{location?.picture}}\"\r\n        alt=\"{{location.locationName}}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"lead col\">\r\n        <strong>Address:</strong>\r\n        <p> {{ location.address }}</p>\r\n        <p> {{ location.zipcode }}</p>\r\n      </div>\r\n      <div class=\"lead col\">\r\n        <strong>Opening Hours:</strong>\r\n        <p>{{location.hours}}</p>\r\n      </div>\r\n    </div>\r\n    <hr class=\"my-4\">\r\n    <div>\r\n      <div class=\"info\">\r\n        <strong>Additional info:</strong>\r\n        <p>{{location.info}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/voting-locations/location-details/location-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_models_votingLocation__ = __webpack_require__("./src/app/domain/models/votingLocation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_votingLocation_repository_service__ = __webpack_require__("./src/app/domain/votingLocation-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationDetailsComponent = /** @class */ (function () {
    function LocationDetailsComponent(activedRoute, router, votingLocationRepostitory) {
        this.activedRoute = activedRoute;
        this.router = router;
        this.votingLocationRepostitory = votingLocationRepostitory;
    }
    LocationDetailsComponent.prototype.trasfer = function () {
        this.router.navigateByUrl('/home/locations');
    };
    LocationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activedRoute.params.subscribe(function (params) {
            _this.location = params;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__domain_models_votingLocation__["a" /* VotingLocation */])
    ], LocationDetailsComponent.prototype, "location", void 0);
    LocationDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-details',
            template: __webpack_require__("./src/app/voting-locations/location-details/location-details.component.html"),
            styles: [__webpack_require__("./src/app/voting-locations/location-details/location-details.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__domain_votingLocation_repository_service__["a" /* VotingLocationRepostitory */]])
    ], LocationDetailsComponent);
    return LocationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/voting-locations/location-list/location-list.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.media:hover {\r\n  background-color: lightblue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/voting-locations/location-list/location-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media\">\r\n  <img class=\"mr-3 rounded align-self-center img-fluid\"\r\n  style=\"width:200px;\"\r\n  src=\"assets/location/{{location?.picture}}\"\r\n  alt=\"{{ 'Photo of ' + location.locationName }}\">\r\n  <div class=\"media-body align-self-center\">\r\n\r\n    <h5 class=\"mr-0\">{{ location.locationName }}</h5>\r\n    <strong>Opening Hours:</strong>\r\n    <p>{{location.hours}}</p>\r\n    <strong>Address:</strong>\r\n    <p> {{ location.address }}</p>\r\n    <p> {{ location.zipcode }}</p>\r\n\r\n    <div class=\"info\" *ngIf=\"location.info\">\r\n      <strong>Additional info:</strong>\r\n      <p>{{location.info}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/voting-locations/location-list/location-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_models_votingLocation__ = __webpack_require__("./src/app/domain/models/votingLocation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationListComponent = /** @class */ (function () {
    function LocationListComponent() {
    }
    LocationListComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__domain_models_votingLocation__["a" /* VotingLocation */])
    ], LocationListComponent.prototype, "location", void 0);
    LocationListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-list',
            template: __webpack_require__("./src/app/voting-locations/location-list/location-list.component.html"),
            styles: [__webpack_require__("./src/app/voting-locations/location-list/location-list.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], LocationListComponent);
    return LocationListComponent;
}());



/***/ }),

/***/ "./src/app/voting-locations/voting-locations.component.css":
/***/ (function(module, exports) {

module.exports = ".list-group-item:hover{\r\n  background-color: lightblue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/voting-locations/voting-locations.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- implimentation based on learnangualr5 custome pipe search -->\r\n<div class=\"location\" *ngIf=\"locations\">\r\n  <div class=\"col\">\r\n    <div class=\"form-label\" *ngIf=\"filter && filter !== 'Current'\">\r\n      <strong>Searching for:</strong>\r\n      {{ filter }}\r\n    </div>\r\n    <input class=\"form-control\" type=\"text\" name=\"locationFilter\" [(ngModel)]=\"filter\" placeholder=\"Enter a Zipcode or a Keyword\">\r\n  </div>\r\n  <div class=\"\" *ngIf=\"locations\">\r\n    <div class=\"row mt-3 justify-content-center\">\r\n      <div class=\"list-group\">\r\n        <a class=\"list-group-item list-group-item-action flex-column align-items-start\"\r\n        *ngFor=\"let location of (locations | searchLocation: filter)\"\r\n        (click)=\"showLocation(location); filter='Current'\"\r\n        [style.backgroundColor]=\"location.highlight ? '#EEE' : '#FFF'\">\r\n        <app-location-list [location]=\"location\"></app-location-list>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-location-details [location]=\"currentLocation\"></app-location-details>\r\n<div class=\"row justify-content-center\">\r\n  <button class=\"btn btn-secondary \"\r\n  *ngIf=\"filter\"\r\n  type=\"button\"\r\n  (click)=\"filter=''; clear()\">Go Back</button>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/voting-locations/voting-locations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotingLocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_votingLocation_repository_service__ = __webpack_require__("./src/app/domain/votingLocation-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VotingLocationsComponent = /** @class */ (function () {
    function VotingLocationsComponent(http, votingLocationRepostitory, router) {
        this.http = http;
        this.votingLocationRepostitory = votingLocationRepostitory;
        this.router = router;
        this.filter = '';
    }
    VotingLocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.votingLocationRepostitory.get().subscribe(function (locations) {
            _this.locations = locations;
        });
    };
    VotingLocationsComponent.prototype.showLocation = function (item) {
        this.filter = item.name;
        item.highlight = !item.highlight;
        this.currentLocation = item;
    };
    VotingLocationsComponent.prototype.clear = function () {
        this.currentLocation = {};
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], VotingLocationsComponent.prototype, "query", void 0);
    VotingLocationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-voting-locations',
            template: __webpack_require__("./src/app/voting-locations/voting-locations.component.html"),
            styles: [__webpack_require__("./src/app/voting-locations/voting-locations.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__domain_votingLocation_repository_service__["a" /* VotingLocationRepostitory */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], VotingLocationsComponent);
    return VotingLocationsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map