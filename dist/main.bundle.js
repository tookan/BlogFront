webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/UserProfile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfile; });
var UserProfile = (function () {
    function UserProfile() {
    }
    return UserProfile;
}());

//# sourceMappingURL=UserProfile.js.map

/***/ }),

/***/ "../../../../../src/app/abstract.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AbstractService = (function () {
    function AbstractService() {
    }
    Object.defineProperty(AbstractService.prototype, "apiUrl", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
        },
        enumerable: true,
        configurable: true
    });
    AbstractService.prototype.url = function () {
        return this.apiUrl;
    };
    return AbstractService;
}());
AbstractService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AbstractService);

//# sourceMappingURL=abstract.service.js.map

/***/ }),

/***/ "../../../../../src/app/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loginedUser && loginedUser.status === 'admin'\" class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 col-md-offset-4\">\r\n            <button class=\"btn btn-group\" [routerLink]=\"['users_admin']\">\r\n                USERS\r\n            </button>\r\n            <button class=\"btn btn-group\" [routerLink]=\"['comments_admin']\">\r\n                COMMENTS\r\n            </button>\r\n            <button class=\"btn btn-group\" [routerLink]=\"['notes_admin']\">\r\n                NOTES\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getSubjUser()
            .subscribe(function (user) { return _this.loginedUser = user; });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin.component.html"),
        styleUrls: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__note_component__ = __webpack_require__("../../../../../src/app/note.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_component__ = __webpack_require__("../../../../../src/app/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__("../../../../../src/app/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_form_component__ = __webpack_require__("../../../../../src/app/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__note_create_component__ = __webpack_require__("../../../../../src/app/note-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_component__ = __webpack_require__("../../../../../src/app/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_admin_component__ = __webpack_require__("../../../../../src/app/users-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__comments_admin_component__ = __webpack_require__("../../../../../src/app/comments-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_component__ = __webpack_require__("../../../../../src/app/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notes_admin_component__ = __webpack_require__("../../../../../src/app/notes-admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [{ path: 'note/:id', component: __WEBPACK_IMPORTED_MODULE_2__note_component__["a" /* NoteComponent */] },
    { path: 'all/page/:num', component: __WEBPACK_IMPORTED_MODULE_3__index_component__["a" /* IndexComponent */] },
    { path: '', redirectTo: 'all/page/1', pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_form_component__["a" /* LoginFormComponent */] },
    { path: 'create_article', component: __WEBPACK_IMPORTED_MODULE_6__note_create_component__["a" /* NoteCreateComponent */] },
    { path: 'personal_page/:username/:page', component: __WEBPACK_IMPORTED_MODULE_7__user_component__["a" /* UserComponent */] },
    { path: 'panel', component: __WEBPACK_IMPORTED_MODULE_10__admin_component__["a" /* AdminComponent */], children: [
            { path: 'users_admin', component: __WEBPACK_IMPORTED_MODULE_8__users_admin_component__["a" /* UsersAdminComponent */] },
            { path: 'comments_admin', component: __WEBPACK_IMPORTED_MODULE_9__comments_admin_component__["a" /* CommentsAdminComponent */] },
            { path: 'notes_admin', component: __WEBPACK_IMPORTED_MODULE_11__notes_admin_component__["a" /* NotesAdminComponent */] }
        ] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar [loadFlag]=\"loadFlag\"></app-navbar>\n<router-outlet></router-outlet>\n<!--The content below is only a placeholder and can be replaced.-->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/user.ts");
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
    function AppComponent(cooks, userService) {
        this.cooks = cooks;
        this.userService = userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* user */]();
        this.loadFlag = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.cooks.get('token');
        if (token) {
            this.user.token = token;
            this.userService.loginByCookies(token).toPromise()
                .then(function (response) { return response.json(); })
                .then(function (response) {
                _this.user.username = response.username.toString();
                _this.user.status = response.status.toString();
            })
                .then(function () {
                _this.userService.setSubjUser(_this.user, 'root component');
                _this.loadFlag = true;
            })
                .catch(function (err) { return console.log(err); });
        }
        else {
            this.loadFlag = true;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _b || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_form_component__ = __webpack_require__("../../../../../src/app/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_component__ = __webpack_require__("../../../../../src/app/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notes_service__ = __webpack_require__("../../../../../src/app/notes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__note_component__ = __webpack_require__("../../../../../src/app/note.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_component__ = __webpack_require__("../../../../../src/app/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_component__ = __webpack_require__("../../../../../src/app/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__comments_component__ = __webpack_require__("../../../../../src/app/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__comments_service__ = __webpack_require__("../../../../../src/app/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__note_create_component__ = __webpack_require__("../../../../../src/app/note-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_component__ = __webpack_require__("../../../../../src/app/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__users_admin_component__ = __webpack_require__("../../../../../src/app/users-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__comments_admin_component__ = __webpack_require__("../../../../../src/app/comments-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_component__ = __webpack_require__("../../../../../src/app/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__notes_admin_component__ = __webpack_require__("../../../../../src/app/notes-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__profile_create_component__ = __webpack_require__("../../../../../src/app/profile-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_ckeditor__);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_6__index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_9__note_component__["a" /* NoteComponent */],
            __WEBPACK_IMPORTED_MODULE_10__search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_14__register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__comments_component__["a" /* CommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__note_create_component__["a" /* NoteCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_18__user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__users_admin_component__["a" /* UsersAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_20__comments_admin_component__["a" /* CommentsAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_21__admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_22__notes_admin_component__["a" /* NotesAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_24__profile_create_component__["a" /* ProfileCreateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_25_ng2_ckeditor__["CKEditorModule"],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__notes_service__["a" /* NotesService */], __WEBPACK_IMPORTED_MODULE_12__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_13_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_16__comments_service__["a" /* CommentsService */],
            __WEBPACK_IMPORTED_MODULE_23__search_service__["a" /* SearchService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return comment; });
var comment = (function () {
    function comment() {
    }
    return comment;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "../../../../../src/app/comments-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"col-md-8 col-md-offset-2\">\r\n        <h2>COMMENTS</h2>\r\n        <button class=\"btn btn-group-sm\" (click)=\"newcom()\">+ADD</button>\r\n        <div class=\"row\">\r\n            <label>Search for user's comments</label>\r\n            <input name=\"search\" (keyup)=\"searchTerm.next($event.target.value)\"  type=\"search\" />\r\n            <ul>\r\n                <li (click)=\"this.user.next(result.id)\"  *ngFor=\"let result of results | slice:0:4 \" >\r\n                    {{ result.name }}\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th>id</th>\r\n                <th>note id</th>\r\n                <th>text</th>\r\n                <th>date</th>\r\n            </tr>\r\n            </thead>\r\n            <tr (click)=\"currentCom = comment; editFlag = true\" *ngFor=\"let comment of comments\">\r\n                <td >{{comment.id}}</td>\r\n                <td [routerLink]=\"['/note/',comment.note_id]\">{{comment.note_id}}</td>\r\n                <td>{{comment.body}}</td>\r\n                <td>{{comment.date}}</td>\r\n            </tr>\r\n            <tr *ngIf=\"user && comments == []\"><td><h4>{{user.name}} didn't posted commentaries yet</h4></td><tr>\r\n        </table>\r\n</div>\r\n        <div class=\"row\">\r\n            <button *ngIf=\"this.offset.value > 1 \" (click)=\"this.offset.next(this.offset.value - 1)\"\r\n                    class=\"btn btn btn-sm\">Previous\r\n            </button>\r\n            <button *ngIf=\"this.offset.value < pagesCount && pagesCount > 1\" (click)=\"this.offset.next(this.offset.value + 1)\" class=\"btn btn-primary btn-sm\">Next</button>\r\n        </div>\r\n\r\n<div id=\"comm_edit\" *ngIf=\"editFlag && currentCom\" class=\"row\">\r\n    <div class=\"col-md-6 col-md-offset-3\">\r\n        <h4>Comment with id:{{currentCom.id}} editing</h4>\r\n        <form (ngSubmit)=\"updateComment()\">\r\n            <div  class=\"form-group\">\r\n                <label >Note id</label>\r\n                <input name=\"note_id\" class=\"form-control\" type=\"text\" [(ngModel)]=\"currentCom.note_id\">\r\n            </div>\r\n            <div  class=\"form-group\">\r\n                <label >Text</label>\r\n                <input name=\"body\" class=\"form-control\" type=\"text\" [(ngModel)]=\"currentCom.body\">\r\n            </div>\r\n\r\n            <button class=\"btn btn-success\" (click)=\"editFlag = false\">Cancel</button>\r\n            <button class=\"btn btn-danger\"  type=\"submit\">CHANGE</button>\r\n        </form>\r\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteComment()\">DELETE</button>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"comm_create\" *ngIf=\"createFlag && currentCom\" class=\"row\">\r\n    <div class=\"col-md-6 col-md-offset-3\">\r\n        <h4>Create new comment here</h4>\r\n        <form (ngSubmit)=\"createComment()\">\r\n            <div  class=\"form-group\">\r\n                <label >Note id:</label>\r\n                <input name=\"note_id\" class=\"form-control\" type=\"text\" [(ngModel)]=\"currentCom.note_id\">\r\n            </div>\r\n\r\n            <div  class=\"form-group\">\r\n                <label >User id:</label>\r\n                <input name=\"note_id\" class=\"form-control\" type=\"text\" [(ngModel)]=\"currentCom.user_id\">\r\n            </div>\r\n            <div  class=\"form-group\">\r\n                <label >Text: </label>\r\n                <input name=\"body\" class=\"form-control\" type=\"text\" [(ngModel)]=\"currentCom.body\">\r\n            </div>\r\n            <button class=\"btn btn-success\" (click)=\"createFlag = false\">Cancel</button>\r\n            <button class=\"btn btn-danger\" type=\"submit\">CREATE</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/comments-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment__ = __webpack_require__("../../../../../src/app/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_service__ = __webpack_require__("../../../../../src/app/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentsAdminComponent = (function () {
    function CommentsAdminComponent(comService, userService) {
        this.comService = comService;
        this.userService = userService;
        this.editFlag = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.offset = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](1);
        this.createFlag = false;
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    CommentsAdminComponent.prototype.ngOnInit = function () {
        this.searchForUser();
        this.loadComments();
    };
    CommentsAdminComponent.prototype.searchForUser = function () {
        var _this = this;
        this.userService.searchByUser(this.searchTerm)
            .subscribe(function (results) {
            _this.results = results.json();
        });
    };
    CommentsAdminComponent.prototype.updateComment = function () {
        var _this = this;
        this.editFlag = false;
        this.comService.updateComment(this.currentCom).subscribe(function (resp) {
            console.log(resp);
            _this.offset.next(1);
        });
    };
    CommentsAdminComponent.prototype.loadComments = function () {
        var _this = this;
        this.comService.getCommentsByUser(this.offset, this.user)
            .map(function (comms) { return comms.json(); })
            .subscribe(function (comms) {
            _this.comments = comms.comments;
            _this.pagesCount = comms.count;
        });
    };
    CommentsAdminComponent.prototype.deleteComment = function () {
        var _this = this;
        this.editFlag = false;
        this.comService.deleteComment(this.currentCom).subscribe(function (resp) {
            console.log(resp);
            _this.offset.next(1);
        });
    };
    CommentsAdminComponent.prototype.createComment = function () {
        var _this = this;
        this.comService.sendComment(this.currentCom).subscribe(function (resp) {
            console.log(resp);
            _this.createFlag = false;
        });
    };
    CommentsAdminComponent.prototype.newcom = function () {
        this.createFlag = true;
        this.currentCom = new __WEBPACK_IMPORTED_MODULE_1__comment__["a" /* comment */];
    };
    return CommentsAdminComponent;
}());
CommentsAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-com-adm',
        template: __webpack_require__("../../../../../src/app/comments-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-admin.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__comments_service__["a" /* CommentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _b || Object])
], CommentsAdminComponent);

var _a, _b;
//# sourceMappingURL=comments-admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span{\r\n    display: block;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n:hover span{\r\n    overflow: visible;\r\n}\r\n.com-input{\r\n    height: 120px;\r\n}\r\n.container {\r\n    margin-bottom: 50px ;\r\n}\r\n.com-body {\r\n    overflow-wrap: break-word;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>Comments</h2>\r\n    <div class=\"row com-input\">\r\n        <div class=\"col-md-5\">\r\n            <form *ngIf=\"loginedUser\" class=\"form-horizontal\" (ngSubmit)=\"sendComment()\">\r\n                <div class=\"form-group-lg\">\r\n                    <label for=\"commentBody\">Leave your comment here</label>\r\n                    <input class=\"form-control\" name=\"body\" type=\"text\" id=\"commentBody\" [(ngModel)]=\"comment.body\">\r\n                </div>\r\n                <button class=\"btn btn-primary\" type=\"submit\">Send</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4 comment\" *ngFor=\"let comment of comments\">\r\n            <b><p [routerLink]=\"['/personal_page/',comment.name,1]\">{{comment.name}}</p></b>\r\n            <p>{{comment.date}}</p>\r\n            <div class=\"com-body\">{{comment.body}}</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comments_service__ = __webpack_require__("../../../../../src/app/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment__ = __webpack_require__("../../../../../src/app/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentsComponent = (function () {
    function CommentsComponent(commentsService, userService) {
        this.commentsService = commentsService;
        this.userService = userService;
        this.comment = new __WEBPACK_IMPORTED_MODULE_2__comment__["a" /* comment */]();
        this.comments = [];
    }
    Object.defineProperty(CommentsComponent.prototype, "noteId", {
        set: function (noteId) {
            this.loadComments(noteId);
            this.noteID = noteId;
        },
        enumerable: true,
        configurable: true
    });
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getSubjUser().subscribe(function (user) { return _this.loginedUser = user; });
    };
    CommentsComponent.prototype.loadComments = function (noteId) {
        var _this = this;
        this.commentsService.getComments(noteId)
            .map(function (data) { return data.json(); })
            .subscribe(function (coms) { return _this.comments = coms; });
    };
    CommentsComponent.prototype.sendComment = function () {
        var _this = this;
        this.comment.note_id = this.noteID;
        if (!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isUndefined"])(this.comment.body)) {
            this.commentsService.sendComment(this.comment)
                .map(function (data) { return data.json(); })
                .subscribe(function () {
                _this.loadComments(_this.noteID);
                _this.comment.body = '';
            }, function (err) {
            });
        }
    };
    return CommentsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], CommentsComponent.prototype, "noteId", null);
CommentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comments',
        template: __webpack_require__("../../../../../src/app/comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comments.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__comments_service__["a" /* CommentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object])
], CommentsComponent);

var _a, _b;
//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_combineLatest__ = __webpack_require__("../../../../rxjs/add/operator/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abstract_service__ = __webpack_require__("../../../../../src/app/abstract.service.ts");
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








var CommentsService = (function (_super) {
    __extends(CommentsService, _super);
    function CommentsService(userService, http) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.http = http;
        return _this;
    }
    CommentsService.prototype.getComments = function (noteId) {
        return this.http.get(this.url() + 'comments/getcomments/' + noteId);
    };
    CommentsService.prototype.sendComment = function (comment) {
        this.token = this.userService.token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'comments/sendcomment', comment, { headers: headers });
    };
    CommentsService.prototype.getCommentsByUser = function (offset, userId) {
        var _this = this;
        var combiner = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]();
        userId = userId.filter(function (id) { return id !== '' || null; });
        combiner = userId.combineLatest(offset);
        return combiner.switchMap(function (data) { return _this.http.post(_this.url() + 'comments/user', { 'offset': data[1], 'id': data[0] }); });
    };
    CommentsService.prototype.updateComment = function (comm) {
        this.token = this.userService.token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'comments/update', comm, { headers: headers });
    };
    CommentsService.prototype.deleteComment = function (comm) {
        this.token = this.userService.token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'comments/delete', comm, { headers: headers });
    };
    return CommentsService;
}(__WEBPACK_IMPORTED_MODULE_6__abstract_service__["a" /* AbstractService */]));
CommentsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], CommentsService);

var _a, _b;
//# sourceMappingURL=comments.service.js.map

/***/ }),

/***/ "../../../../../src/app/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\r\n    text-align: center;\r\n}\r\n.container\r\n{\r\n    width: 100%;\r\n    height: 530px;\r\n}\r\n.note {\r\n    position:relative;\r\n    height: 300px;\r\n    margin-top: 5%;\r\n    border-right: solid;\r\n    border-width: 3px;\r\n    border-right-color: #636b6f ;\r\n}\r\n\r\n.buttons{\r\n    position: relative;\r\n}\r\n.row.body {\r\n    font-family: \"Yu Gothic UI Semibold\";\r\n    font-size: large;\r\n}\r\n.space {\r\n    height: 12px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container notes\">\r\n    <div class=\"row\">\r\n    <div *ngFor=\"let note of notes\" class=\"col-md-4 note\" >\r\n       <div class=\"row\" [routerLink]=\"['/note',note.id]\">\r\n        <div class=\"col-md-4\">\r\n            <img src=\"{{note.img || '/assets/img/default-small.png'}} \">\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <div class=\"row title\">\r\n                <h2>{{note.title}}</h2>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-xs-12 space\"></div>\r\n    <div class=\"row buttons\" >\r\n        <div class=\"col-md-12\">\r\n            <button [routerLink]=\"['/all/page',count]\" class=\"btn btn-sm btn-secondary\" *ngFor=\"let count of counts\">{{count}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notes_service__ = __webpack_require__("../../../../../src/app/notes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
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





var IndexComponent = (function () {
    function IndexComponent(notesService, activeRoute) {
        this.notesService = notesService;
        this.activeRoute = activeRoute;
        this.counts = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .switchMap(function (numb) { return _this.notesService.getAllforAll(numb.get('num')); })
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.notes = data.notes;
            var count = +data.pagesCount.original;
            _this.counts = [];
            for (var i = 1; i <= count; i++) {
                _this.counts.push(i);
            }
        });
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notes_service__["a" /* NotesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__notes_service__["a" /* NotesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], IndexComponent);

var _a, _b;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginform, .username{\r\n    float: inherit;\r\n    margin-top:  5pt;\r\n    margin-left: 25%;\r\n}\r\n.logined{\r\n    font-size: 14pt;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row loginform\" *ngIf=\"!loginedUser\" >\r\n    <div class=\"col-sm-10\">\r\n<form (ngSubmit)=\"submitData(loginUsername.value, loginPassword.value)\" #loginForm=\"ngForm\"  class=\"form-inline\" >\r\n    <div class=\"form-group\">\r\n        <input type=\"text\" name=\"username\" placeholder=\"Username\"  #loginUsername>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <input type=\"password\" name=\"password\" placeholder=\"Password\" #loginPassword >\r\n    </div>\r\n    <button class=\"btn btn-primary btn-sm\" type=\"submit\" >Log in</button>\r\n</form>\r\n        </div>\r\n    <div class=\"col\" ><a><button class=\"btn btn-warning\" [routerLink]=\"['register']\">Register</button></a></div>\r\n</div>\r\n<div class=\"row\">\r\n    <div id=\"error\" class=\"alert alert-danger\" *ngIf=\"errorApi\">{{errorApi}}</div>\r\n</div>\r\n\r\n<div class=\"row username\" *ngIf=\"loginedUser\" >\r\n    <div class=\"col-sm-6 logined\">You are logined as {{loginedUser.username}}</div>\r\n    <div class=\"col-sm-5 col-sm-offset-0\" ><a><button class=\"btn btn-danger btn-sm\" (click)=\"logOut()\">Log out</button></a></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = (function () {
    function LoginFormComponent(userService, cooks) {
        this.userService = userService;
        this.cooks = cooks;
        this.loginedUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* user */];
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getSubjUser().subscribe(function (user) {
            _this.loginedUser = user;
        });
    };
    LoginFormComponent.prototype.submitData = function (username, password) {
        var _this = this;
        this.userService.login(username, password)
            .subscribe(function (data) {
            _this.userService.setSubjUser(data.response);
            _this.errorApi = null;
            _this.setcookie(data.response.token);
        }, function (error) { return _this.errorApi = error.json().errorApi; });
    };
    LoginFormComponent.prototype.logOut = function () {
        delete this.loginedUser;
        this.cooks.remove('token');
        this.userService.setSubjUser(this.loginedUser);
    };
    LoginFormComponent.prototype.setcookie = function (token) {
        return this.cooks.put('token', token);
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-form',
        template: __webpack_require__("../../../../../src/app/login-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-form.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _b || Object])
], LoginFormComponent);

var _a, _b;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n        <div class=\"navbar-brand\" >\r\n            SampleBlog\r\n        </div>\r\n        <ul class=\"nav navbar-nav\">\r\n            <li [routerLink]=\"['']\"><a>Main</a></li>\r\n            <li [routerLink]=\"['/personal_page/' + loginedUser.username + '/1']\" *ngIf=\"loginedUser && loadFlag\"><a>My Blog</a></li>\r\n            <li [routerLink]=\"['/create_article']\" *ngIf=\"loginedUser && loadFlag\"><a>Create Article</a></li>\r\n        </ul>\r\n            <div class=\"col-sm-4\"> <app-search></app-search></div>\r\n            <div class=\"col-md-5\" *ngIf=\"loadFlag\"><app-login-form></app-login-form></div>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(userService) {
        this.userService = userService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getSubjUser().subscribe(function (user) { return _this.loginedUser = user; });
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NavbarComponent.prototype, "loadFlag", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/note-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#note-body{\r\n     min-height: 500px;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/note-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loginedUser && !response\" class=\"col-md-4 col-md-offset-4\">\r\n    <form (ngSubmit)=\"sendNote()\" class=\"form-horizontal\">\r\n        <div class=\"form-group\">\r\n            <label for=\"note-title\">Type title here:</label>\r\n            <input id=\"note-title\" class=\"form-control\" type=\"text\" name=\"title\" [(ngModel)]=\" note.title\">\r\n        </div>\r\n        <div>\r\n            <label>And your note here:</label>\r\n            <ckeditor class=\"form-control \" id=\"note-body\" name=\"body\" type=\"text\" [(ngModel)]=\"note.body\"></ckeditor>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"note-img\">Upload Image</label>\r\n            <input (change)=\"setImage($event)\" type=\"file\" class=\"form-control\" id=\"note-img\" accept=\"image/*\">\r\n        </div>\r\n        <div class=\"row errors\">\r\n            <div *ngIf=\"errorFlag\">\r\n                <div *ngFor=\"let err of errorMes\" class=\"col-md-6 alert alert-warning\">\r\n                    {{err}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button class=\"btn btn-success btn-lg\" type=\"submit\">Create!</button>\r\n    </form>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"alert alert-success\" *ngIf=\"response\">{{response}}</div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!loginedUser\">You should be logined</div>"

/***/ }),

/***/ "../../../../../src/app/note-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notes_service__ = __webpack_require__("../../../../../src/app/notes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__note__ = __webpack_require__("../../../../../src/app/note.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoteCreateComponent = (function () {
    function NoteCreateComponent(notesService, userService) {
        this.notesService = notesService;
        this.userService = userService;
        this.errorFlag = false;
        this.note = new __WEBPACK_IMPORTED_MODULE_3__note__["a" /* Note */];
        this.errorMes = [];
    }
    NoteCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getSubjUser().subscribe(function (user) { return _this.loginedUser = user; });
    };
    NoteCreateComponent.prototype.sendNote = function () {
        var _this = this;
        this.notesService.noteCreate(this.note, this.imag)
            .subscribe(function (response) { return _this.response = response.text(); }, function (err) {
            _this.errorFlag = true;
            _this.errorMes = [];
            var errors = err.json();
            for (var errMes in errors) {
                _this.errorMes.push(errors[errMes]);
            }
        });
    };
    NoteCreateComponent.prototype.setImage = function (event) {
        this.imag = event.target.files[0];
        if (this.imag.size >= 2000000) {
            this.errorFlag = true;
            this.errorMes.push('Picture size is to big. Choose picture with size less then 5mb');
        }
    };
    return NoteCreateComponent;
}());
NoteCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-note-create',
        template: __webpack_require__("../../../../../src/app/note-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/note-create.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notes_service__["a" /* NotesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__notes_service__["a" /* NotesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], NoteCreateComponent);

var _a, _b;
//# sourceMappingURL=note-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/note.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#title-edit{\r\n    height: 20pt;\r\n    width: 50%;\r\n    margin-top: 10px;\r\n}\r\n#body-edit{\r\n    height: 120pt;\r\n    width: 50%;\r\n    margin-top: 5px;\r\n}\r\n.editing,.note{\r\n    text-align: center;\r\n}\r\n#img-edit{\r\n    display: none;\r\n}\r\n.note-body{\r\n    text-align: justify;\r\n    font-size: 18px;\r\n    font-family: \"Malgun Gothic \";\r\n    min-height: 250px;\r\n}\r\nh1{\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n#note-username{\r\n    margin-left: 30px;\r\n    font-family: Avenir;\r\n    font-style: italic;\r\n    font-weight: 300;\r\n    font-size: medium;\r\n}\r\n.head {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/note.component.html":
/***/ (function(module, exports) {

module.exports = "<!--standart mode-->\r\n<div *ngIf=\"updateResponseFlag\" class=\"container note\" [ngSwitch]=\"editFlag\">\r\n    <div *ngSwitchCase=\"false\">\r\n\r\n        <img  src=\"{{note.img || '/assets/img/default.png'}}\" width=\"100%\" height=\"353\">\r\n        <div  class=\"col-xs-12 head\">\r\n            <h1 >{{note.title}} </h1> <p id=\"note-username\">Created by {{note.username}} at {{note.date}}</p>\r\n        </div>\r\n        <div [innerHtml]=\"note.body\"  class=\"col-md-12 note-body\"></div>\r\n        <div *ngIf=\"loginedUser && loginedUser.username == note.username\">\r\n            <button class=\"btn btn-warning\" (click)=\"editFlag=true\">Edit</button>\r\n        </div>\r\n    </div>\r\n    <!-- editing mode-->\r\n    <div class=\"container editing\" *ngSwitchCase=\"true\">\r\n        <div class=\"img-reload\">\r\n            <label for=\"img-edit\">\r\n        <img src=\"{{note.img || '/assets/img/default.png'}}\" width=\"100%\" height=\"350\">\r\n                <h4>Click on photo to upload new </h4>\r\n            </label>\r\n            <input (change)=\"setImage($event)\"  id=\"img-edit\" type=\"file\" />\r\n        </div>\r\n        <div class=\"row title\">\r\n            <input [(ngModel)]=\"note.title\" id=\"title-edit\" placeholder=\"title\">\r\n        </div>\r\n        <div class=\"row\">\r\n             <ckeditor  [(ngModel)]=\"note.body\" id=\"body-edit\"></ckeditor>\r\n        </div>\r\n        <div *ngIf=\"loginedUser && loginedUser.username == note.username\">\r\n            <div class=\"btn-group\">\r\n            <button class=\"btn btn-success\" (click)=\"sendUpdated()\">Save</button>\r\n                <button class=\"btn btn-primary\" type=\"reset\" (click)=\"editFlag = false\">Close</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4 alert alert-danger\" *ngFor=\"let error of err\" >{{error}}</div>\r\n</div>\r\n\r\n\r\n<app-comments *ngIf=\"loadFlag\" [noteId]=\"note.id\"></app-comments>"

/***/ }),

/***/ "../../../../../src/app/note.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_service__ = __webpack_require__("../../../../../src/app/notes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__note__ = __webpack_require__("../../../../../src/app/note.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NoteComponent = (function () {
    function NoteComponent(route, noteService, userService) {
        this.route = route;
        this.noteService = noteService;
        this.userService = userService;
        this.note = new __WEBPACK_IMPORTED_MODULE_3__note__["a" /* Note */];
        this.loginedUser = new __WEBPACK_IMPORTED_MODULE_5__user__["a" /* user */];
        this.loadFlag = false;
        this.editFlag = false;
        this.updateResponseFlag = true;
    }
    NoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.switchMap(function (data) { return _this.noteService.getOneNote(+data.get('id')); })
            .map(function (response) { return response.json(); })
            .subscribe(function (response) {
            _this.note = response;
            _this.loadFlag = true;
        });
        this.userService.getSubjUser().subscribe(function (user) {
            _this.loginedUser = user;
            if (!_this.loginedUser) {
                _this.editFlag = false;
            }
        });
    };
    NoteComponent.prototype.setImage = function (event) {
        this.imag = event.target.files[0];
    };
    NoteComponent.prototype.sendUpdated = function () {
        var _this = this;
        this.note.img = '';
        this.noteService.noteUpdate(this.note, this.imag)
            .subscribe(function (note) {
            _this.err = [];
            _this.editFlag = false;
            _this.note = note.json();
            _this.updateResponseFlag = true;
        }, function (errs) {
            _this.err = [];
            var errors = errs.json();
            for (var key in errors) {
                _this.err.push(errors[key]);
            }
        });
    };
    return NoteComponent;
}());
NoteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-note',
        template: __webpack_require__("../../../../../src/app/note.component.html"),
        styles: [__webpack_require__("../../../../../src/app/note.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__notes_service__["a" /* NotesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__notes_service__["a" /* NotesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _c || Object])
], NoteComponent);

var _a, _b, _c;
//# sourceMappingURL=note.component.js.map

/***/ }),

/***/ "../../../../../src/app/note.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Note; });
var Note = (function () {
    function Note() {
    }
    return Note;
}());

//# sourceMappingURL=note.js.map

/***/ }),

/***/ "../../../../../src/app/notes-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-8 col-md-offset-2\">\r\n        <h2>NOTES</h2>\r\n        <button class=\"btn btn-group-sm\" (click)=\"newno()\">+ADD</button>\r\n        <div class=\"row\">\r\n            <label>Search for user's notes (type n: to search in notes )</label>\r\n            <input name=\"search\" (keyup)=\"searchTerm.next($event.target.value)\"  type=\"search\" />\r\n            <ul>\r\n                <li (click)=\"currentUser.next(result)\"  *ngFor=\"let result of resultsUsers | slice:0:4 \" >\r\n                   user: {{ result.name }} with id: {{result.id}}\r\n                </li>\r\n                <li (click)=\"this.notes = [];this.notes.push(result)\"  *ngFor=\"let result of resultsNotes | slice:0:4 \" >\r\n                   note with title: {{ result.title }} and id: {{result.id}}\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th>id</th>\r\n                <th>Username</th>\r\n                <th>title</th>\r\n                <th>date</th>\r\n            </tr>\r\n            </thead>\r\n            <tr (click)=\"currentNote = note; editFlag = true\" *ngFor=\"let note of notes \">\r\n                <td >{{note.id}}</td>\r\n                <td>{{note.username}}</td>\r\n                <td>{{note.title}}</td>\r\n                <td>{{note.date}}</td>\r\n            </tr>\r\n        </table>\r\n        <p *ngIf=\"notes.length < 1\">There are no results</p>\r\n        <div class=\"row\">\r\n            <button *ngIf=\"this.offset.value > 1\" (click)=\"this.offset.next(this.offset.value - 1)\"\r\n                    class=\"btn btn btn-sm\">Previous\r\n            </button>\r\n            <button *ngIf=\"this.offset.value < pagesCount\" (click)=\"this.offset.next(this.offset.value + 1)\" class=\"btn btn-primary btn-sm\">Next</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--edit mode -->\r\n<div class=\"row editing\" *ngIf=\"editFlag\">\r\n    <div class=\"col-xs-12 img-reload\">\r\n        <label for=\"img-edit\">\r\n            <img src=\"{{currentNote.img || '/assets/img/default.png'}}\" width=\"100%\" height=\"350\">\r\n            <h4>Click on photo to upload new </h4>\r\n        </label>\r\n        <input (change)=\"setImage($event)\"  id=\"img-edit\" type=\"file\" />\r\n    </div>\r\n    <div class=\"row title\">\r\n        <input [(ngModel)]=\"currentNote.title\" id=\"title-edit\">\r\n    </div>\r\n    <div class=\"row body\">\r\n         <ckeditor [(ngModel)]=\"currentNote.body\" id=\"body-edit\"></ckeditor>\r\n    </div>\r\n    <div class=\"alert-danger\" *ngFor=\"let error of errs\" > {{error}}</div>\r\n    <div class=\"row\">\r\n        <button class=\"btn btn-success\" (click)=\"sendUpdated()\">Save</button>\r\n        <button class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\r\n        <button class=\"btn btn-primary\" (click)=\"editFlag = false\">Close</button>\r\n    </div>\r\n</div>\r\n<!-- create mode -->\r\n<div class=\"row creating\" *ngIf=\"createFlag\">\r\n    <div class=\"form-group\">\r\n        <input (change)=\"setImage($event)\"  id=\"img-create\" type=\"file\" />\r\n    </div>\r\n    <div class=\"form-group title\">\r\n        <input [(ngModel)]=\"currentNote.title\" id=\"title-create\" placeholder=\"Title\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Article body:</label>\r\n         <ckeditor [(ngModel)]=\"currentNote.body\" id=\"body-create\"> </ckeditor>\r\n    </div>\r\n    <div class=\"row\">\r\n        <label>Input user id: </label>\r\n        <input type=\"text\" id=\"user_id\" [(ngModel)]=\"currentNote.user_id\">\r\n    </div>\r\n    <div class=\"alert-danger\" *ngFor=\"let error of errs\" > {{error}}</div>\r\n    <div class=\"row\">\r\n        <button class=\"btn btn-success\" (click)=\"createNote()\">Save</button>\r\n        <button class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\r\n        <button class=\"btn btn-primary\" (click)=\"createFlag = false\">Close</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/notes-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notes_service__ = __webpack_require__("../../../../../src/app/notes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__note__ = __webpack_require__("../../../../../src/app/note.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_partition__ = __webpack_require__("../../../../rxjs/add/operator/partition.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_partition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_partition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var NotesAdminComponent = (function () {
    function NotesAdminComponent(notesService, userService, searchService, route) {
        this.notesService = notesService;
        this.userService = userService;
        this.searchService = searchService;
        this.route = route;
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.editFlag = false;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.notes = [];
        this.offset = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](1);
        this.createFlag = false;
    }
    NotesAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForUser();
        this.loadNotes();
        this.route.queryParams
            .subscribe(function (user) { return _this.currentUser.next(user); });
    };
    NotesAdminComponent.prototype.searchForUser = function () {
        var _this = this;
        var termSwitch = this.searchTerm.partition(function (term) { return term.indexOf('n: ') === 0; });
        var notesResults = termSwitch[0]
            .filter(function (term) { return term.length > 4; })
            .map(function (term) { return term.replace('n: ', ''); });
        var usersResults = termSwitch[1];
        this.userService.searchByUser(usersResults)
            .subscribe(function (results) {
            _this.resultsUsers = results.json();
        });
        /*this.searchService.search(notesResults)
            .map(data => data.json())
            .subscribe(results => {
                this.notes = results.notes;
                this.pagesCount = results.count;
            });*/
        notesResults.distinctUntilChanged()
            .debounceTime(300)
            .do(function () { return _this.offset.next(1); })
            .combineLatest(this.offset)
            .switchMap(function (data) { return _this.searchService.searchAdmin(data); })
            .map(function (results) { return results.json(); })
            .subscribe(function (data) {
            _this.notes = data.notes;
            _this.pagesCount = data.count;
        });
    };
    NotesAdminComponent.prototype.loadNotes = function () {
        var _this = this;
        this.currentUser
            .filter(function (user) { return Object(__WEBPACK_IMPORTED_MODULE_11_util__["isUndefined"])(user.name) === false; })
            .combineLatest(this.offset)
            .switchMap(function (data) { return _this.notesService.getAllByUser(data[0]['name'], data[1]); })
            .map(function (data) { return data.json(); })
            .subscribe(function (notes) {
            _this.notes = notes.notes;
            _this.pagesCount = notes.pagesCount;
        });
    };
    NotesAdminComponent.prototype.setImage = function (event) {
        this.imag = event.target.files[0];
    };
    NotesAdminComponent.prototype.sendUpdated = function () {
        var _this = this;
        this.notesService
            .noteUpdate(this.currentNote, this.imag)
            .subscribe(function () {
            _this.editFlag = false;
            _this.offset.next(_this.offset.value);
        }, function (err) {
            _this.errs = [];
            var errors = err.json();
            for (var err_1 in errors) {
                _this.errs.push(errors[err_1]);
            }
        });
    };
    NotesAdminComponent.prototype.createNote = function () {
        var _this = this;
        this.notesService.noteCreate(this.currentNote, this.imag).subscribe(function (forlog) { return _this.createFlag = false; }, function (err) {
            _this.errs = [];
            var errors = err.json();
            for (var err_2 in errors) {
                _this.errs.push(errors[err_2]);
            }
        });
    };
    NotesAdminComponent.prototype.delete = function () {
        var _this = this;
        this.editFlag = false;
        this.notesService.noteDelete(this.currentNote.id).subscribe(function () { return _this.ngOnInit(); }, function (err) {
            _this.errs = [];
            var errors = err.json();
            for (var err_3 in errors) {
                _this.errs.push(errors[err_3]);
            }
        });
    };
    NotesAdminComponent.prototype.newno = function () {
        this.createFlag = true;
        this.currentNote = new __WEBPACK_IMPORTED_MODULE_5__note__["a" /* Note */];
    };
    return NotesAdminComponent;
}());
NotesAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notes-admin',
        template: __webpack_require__("../../../../../src/app/notes-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__notes_service__["a" /* NotesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__notes_service__["a" /* NotesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__search_service__["a" /* SearchService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], NotesAdminComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=notes-admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/notes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_service__ = __webpack_require__("../../../../../src/app/abstract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_util__);
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






var NotesService = (function (_super) {
    __extends(NotesService, _super);
    function NotesService(userService, http) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.http = http;
        return _this;
    }
    NotesService.prototype.getAllforAll = function (page) {
        return this.http.get(this.url() + 'notes/getallbyall/' + page);
    };
    NotesService.prototype.getAllByUser = function (username, page) {
        if (page === void 0) { page = 1; }
        return this.http.get(this.url() + 'notes/user/' + username + '/' + page);
    };
    NotesService.prototype.getOneNote = function (id) {
        return this.http.get(this.url() + 'notes/getonenote/' + id);
    };
    NotesService.prototype.getPagesCount = function () {
        return this.http.get(this.url() + 'notes/getpagescount');
    };
    NotesService.prototype.noteCreate = function (note, imag) {
        this.token = this.userService.token;
        var formData = new FormData();
        formData.append('photo', imag);
        for (var key in note) {
            formData.append(key, note[key]);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'notes/notecreate', formData, { headers: headers });
    };
    NotesService.prototype.noteUpdate = function (note, imag) {
        var _this = this;
        this.token = this.userService.token;
        this.userService.getSubjUser().subscribe(function (user) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_5_util__["isUndefined"])(user.token)) {
                _this.token = user.token;
            }
            else
                _this.token = '';
        });
        var formData = new FormData();
        formData.append('photo', imag);
        for (var key in note) {
            formData.append(key, note[key]);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'notes/noteupdate', formData, { headers: headers });
    };
    NotesService.prototype.noteDelete = function (id) {
        this.token = this.userService.token;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'notes/notedelete', { 'id': id }, { headers: headers });
    };
    return NotesService;
}(__WEBPACK_IMPORTED_MODULE_3__abstract_service__["a" /* AbstractService */]));
NotesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], NotesService);

var _a, _b;
//# sourceMappingURL=notes.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileCreateComponent = (function () {
    function ProfileCreateComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProfileCreateComponent.prototype.sendData = function () {
        var _this = this;
        this.userService.updateProfile(this.profile, this.avatar).subscribe(function () { return _this.close.emit(true); });
    };
    ProfileCreateComponent.prototype.setAvatar = function (event) {
        this.avatar = event.target.files[0];
    };
    return ProfileCreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProfileCreateComponent.prototype, "profile", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ProfileCreateComponent.prototype, "close", void 0);
ProfileCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'profile-edit',
        template: __webpack_require__("../../../../../src/app/user-profile.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ProfileCreateComponent);

var _a, _b;
//# sourceMappingURL=profile-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".err{\r\n    color: red;\r\n    font-family: \"Yu Gothic UI Semibold\";\r\n}\r\ntextarea{\r\n    height: 20pt;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-md-4 col-md-offset-4\" *ngIf=\"!responseFlag\">\r\n<form (ngSubmit)=\"register()\">\r\n    <div class=\"form-group\">\r\n        <label for=\"username\">Username:</label>\r\n        <input type=\"text\" required class=\"form-control\" id=\"username\" name=\"name\" [(ngModel)]=\" user.name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"email\">Email address:</label>\r\n\r\n        <input type=\"email\" class=\"form-control\" id=\"email\"  name=\"email\" [(ngModel)]=\" user.email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password:</label>\r\n\r\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"pasword\"   [(ngModel)]=\" user.password\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"repeat_pass\">Repeat password:</label>\r\n\r\n        <input type=\"password\" class=\"form-control\" id=\"repeat_pass\"  name=\"pass_repeat\" [(ngModel)]=\" user.pass_repeat\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"last_name\">Type your last name:</label>\r\n        <input id=\"last_name\" class=\"form-control\" type=\"text\"  name=\"last_name\" [(ngModel)]=\" user.last_name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"name\">Type your name first name:</label>\r\n        <input id=\"name\" class=\"form-control\" type=\"text\" name=\"first_name\"  [(ngModel)]=\" user.first_name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"middle_name\">Type your middle name:</label>\r\n        <input id=\"middle_name\" class=\"form-control\" type=\"text\" name=\"middle_name\"  [(ngModel)]=\" user.middle_name\">\r\n    </div>g\r\n    <div class=\"form-group\">\r\n        <label for=\"about\">Describe yourself:</label>\r\n        <textarea id=\"about\" class=\"form-control\" type=\"text\" name=\"about\"  [(ngModel)]=\" user.about\"></textarea>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"avatar\"> Upload your avatar</label>\r\n        <input type=\"file\" class=\"form-control\" id=\"avatar\"  (change)=\"setImage($event)\">\r\n    </div>\r\n    <div class=\"row errors\">\r\n    <div>\r\n        <div *ngFor=\"let err of responErr\" class=\"col-md-6 alert alert-warning\">\r\n            {{err}}\r\n        </div>\r\n    </div>\r\n</div>\r\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n</form>\r\n</div>\r\n<div class=\"col-md-8 col-md-offset-2 alert alert-success\" *ngIf=\"responseFlag\">REGISTERED!</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__("../../../../../src/app/register.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(userServ) {
        this.userServ = userServ;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__register__["a" /* UserReg */]();
        this.responErr = [];
        this.responseFlag = false;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.setImage = function (event) {
        this.img = event.target.files[0];
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userServ.register(this.user, this.img)
            .map(function (response) { return response; })
            .subscribe(function () { return _this.responseFlag = true; }, function (error) {
            _this.responErr = [];
            var errors = error.json();
            for (var err in errors) {
                _this.responErr.push(errors[err]);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], RegisterComponent);

var _a;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/register.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserReg; });
var UserReg = (function () {
    function UserReg() {
    }
    return UserReg;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ "../../../../../src/app/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n    float: inherit;\r\n    margin-top:  6pt;\r\n    margin-left: 25%;\r\n    z-index: 2;\r\n}\r\nul{\r\n    position: absolute;\r\n    z-index: 4;\r\n    margin-left: 20%;\r\n   border: 1pt;\r\n    border-color: black;\r\n    width: 120px;\r\n}\r\nli{\r\n    list-style-type: none;\r\n\r\n}\r\n.search-links{\r\n    background-color: #f9f9f9;\r\n    text-align: center;\r\n    font-size: medium;\r\n    border: solid;\r\n    border-width: 1px;\r\nwidth: 120px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<input (keyup)=\"searchTerm.next($event.target.value) \" placeholder=\"Search by articles\">\r\n<ul *ngIf=\"results\">\r\n    <li (click)=\"results = []\" class=\"search-links\" *ngFor=\"let result of results \" [routerLink]=\"['/note',result.id]\">\r\n           {{ result.title}}\r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeoutWith__ = __webpack_require__("../../../../rxjs/add/operator/timeoutWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeoutWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeoutWith__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.search(this.searchTerm)
            .map(function (response) { return response.json(); })
            .subscribe(function (results) {
            _this.results = results.notes;
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abstract_service__ = __webpack_require__("../../../../../src/app/abstract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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








var SearchService = (function (_super) {
    __extends(SearchService, _super);
    function SearchService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    SearchService.prototype.search = function (str) {
        var _this = this;
        return str.debounceTime(500)
            .distinctUntilChanged()
            .filter(function (term) { return term !== ''; })
            .switchMap(function (term) { return _this.request(term); });
    };
    SearchService.prototype.request = function (str) {
        return this.http.get(this.url() + 'notes/searchservice/' + str + '/1');
    };
    SearchService.prototype.searchAdmin = function (data) {
        return this.http.get(this.url() + 'notes/searchservice/' + data[0] + '/' + data[1]);
    };
    return SearchService;
}(__WEBPACK_IMPORTED_MODULE_6__abstract_service__["a" /* AbstractService */]));
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/user-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#user-edit, #comm_edit, #notes, .editing, .creating{\r\n    box-shadow: 0 5px 10px rgba(0,0,0,0.7);\r\n    min-height: 500px;\r\n    text-align: center;\r\n    position: absolute;\r\n    left: 30%;\r\n    top: 20%;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: #7DA0B1;\r\n    z-index: 4;\r\n    min-width: 600px;\r\n    background-color: #f9f9f9;\r\n}\r\n\r\n#user-edit > .col-md-6 {\r\n    vertical-align: middle;\r\n}\r\ntd {\r\n    max-width: 200px;\r\n    overflow-wrap: break-word;\r\n}\r\n#notes {\r\n    min-width: 70%;\r\n}\r\n\r\n#title-edit{\r\n    height: 20pt;\r\n    width: 50%;\r\n    margin-top: 10px;\r\n}\r\n#body-edit{\r\n    height: 120pt;\r\n    width: 50%;\r\n    margin-top: 5px;\r\n}\r\n.editing,.note{\r\n    text-align: center;\r\n}\r\n#img-edit{\r\n    display: none;\r\n}\r\n.editing{\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"col-md-5\">\r\n        <label for=\"avatar\">Upload your profile picture: </label>\r\n        <input (change)=\"setAvatar($event)\" id=\"avatar\" name=\"avatar\" type=\"file\">\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <form class=\"form-horizontal\" (ngSubmit)=\"sendData()\">\r\n            <div class=\"form-group\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"last_name\">Type your last name:</label>\r\n                    <input [(ngModel)]=\"profile.last_name\" id=\"last_name\" name=\"last_name\" class=\"form-control\" type=\"text\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"first_name\">Type your name:</label>\r\n                    <input [(ngModel)]=\"profile.first_name\" id=\"first_name\"  name=\"first_name\" class=\"form-control\" type=\"text\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"middle_name\">Type your middle name:</label>\r\n                    <input [(ngModel)]=\"profile.middle_name\" id=\"middle_name\" name=\"middle_name\" class=\"form-control\" type=\"text\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"about\">Describe yourself:</label>\r\n                    <textarea [(ngModel)]=\"profile.about\" id=\"about\" name=\"about\" class=\"form-control\" type=\"text\"></textarea>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\">Your contact email:</label>\r\n                    <input [(ngModel)]=\"profile.email\" id=\"email\" name=\"email\" class=\"form-control\" type=\"text\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-success\" type=\"submit\">UPDATE</button>\r\n                    <button class=\"btn btn-toolbar\" type=\"button\" (click)=\"close.emit(true)\">X</button>\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".delete-btn {\r\n    position: relative;\r\n    margin-bottom: 0px;\r\n    float: right;\r\n}\r\n#deleteAcception, #profile-edit{\r\n    min-height: 70px;\r\n    text-align: center;\r\n    position: fixed;\r\n    left: 30%;\r\n    top:50%;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: #7DA0B1;\r\n    z-index: 4;\r\nbackground-color: #f9f9f9;\r\n}\r\n#deleteAcception{\r\n    min-width: 600px;\r\n}\r\n#profile-edit{\r\n    min-width: 750px;\r\n}\r\nh2{\r\n    text-align: center;\r\n}\r\n.container\r\n{\r\n    width: 100%;\r\n    height: 530px;\r\n}\r\n.note {\r\n    background-color: #f2fff2;\r\n    position:relative;\r\n    height: 300px;\r\n    margin-top: 5%;\r\n    border-right: solid;\r\n    border-width: 3px;\r\n    border-right-color: #636b6f ;\r\n}\r\n:hover.note{\r\n    background-color: #f9f9f9;\r\n}\r\n.space{\r\n    height: 10px;\r\n}\r\n.buttons{\r\n    position: relative;\r\n    margin-top: 60px;\r\n}\r\n.row.body {\r\n    font-family: \"Yu Gothic UI Semibold\";\r\n    font-size: large;\r\n}\r\n.name{\r\n    font-size: 16pt;\r\n    font-family: \"Cambria Math\";\r\n}\r\n.user-info{\r\n    margin-bottom: 5px;\r\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\r\n    height: 30%;\r\n}\r\n.about{\r\n    overflow-wrap: break-word;\r\n    font-size: 14pt;\r\n    font-family: \"Malgun Gothic \";\r\n}\r\n.img-user{\r\n    vertical-align: middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- user info -->\r\n<div *ngIf=\"userProfile\"  class=\"container user-info\">\r\n    <h4>{{username}}</h4>\r\n    <div class=\"row \">\r\n        <div class=\"col-md-4 img-user\">\r\n            <img src=\"{{ userProfile.avatar || '/assets/img/default-user.png'}}\" height=\"250px\" width=\"250px\">\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <p class=\"name\" >{{userProfile.last_name}}</p>\r\n            <p class=\"name\">{{userProfile.first_name}}</p>\r\n            <p class=\"name\">{{userProfile.middle_name}}</p>\r\n            <div class=\"col-md-10 col-md-offset-1 about\">\r\n                {{ userProfile.about}}\r\n            </div>\r\n        </div>\r\n        <button *ngIf=\"username && loginedUser && username === loginedUser.username\"  class=\"btn btn-info\" (click)=\"editFlag = true\">edit profile</button>\r\n    </div>\r\n</div>\r\n<!--if notes[] empty-->\r\n<h1 *ngIf=\"!notes\">There are no notes here</h1>\r\n<!--notes output -->\r\n<div *ngIf=\"notes\" class=\"container notes\">\r\n    <div class=\"row \">\r\n        <div *ngFor=\"let note of notes\" class=\"col-md-4 note\">\r\n            <div class=\"row\" [routerLink]=\"['/note',note.id]\">\r\n                <div class=\"col-md-4\">\r\n                    <img src=\"{{note.img || '/assets/img/default-small.png'}}\">\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"row title\">\r\n                        <h2>{{note.title}}</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button *ngIf=\" loginedUser && loginedUser.username == note.username  \"\r\n                    class=\"btn btn-danger delete-btn\"\r\n                    (click)=\"deletePreventFlag = true; currentTitle = note.title; currentId = note.id\">x\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row buttons\">\r\n        <div class=\"col-md-12\">\r\n            <button class=\"btn btn-sm btn-secondary\" *ngFor=\"let count of counts\"\r\n                    [routerLink]=\"['/personal_page/',username,count]\">{{count}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- window that asking before deleting-->\r\n<div id=\"deleteAcception\" class=\"row\" *ngIf=\"deletePreventFlag\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10 col-md-offset-1\">\r\n            <p> Are you sure want to delete '{{currentTitle}}' note?</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 col-md-offset-2\">\r\n            <button (click)=\"deleteNote();deletePreventFlag=false\" class=\"btn btn-success\">Yep!</button>\r\n        </div>\r\n        <div class=\"col-md-2 col-md-offset-4\">\r\n            <button (click)=\"deletePreventFlag = false\" class=\"btn btn-warning\">Nope</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div [hidden]=\"!editFlag\" class=\"row\" id=\"profile-edit\">\r\n<profile-edit [profile]=\"userProfile\" (close)=\"editFlag = $event.value\"></profile-edit>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_service__ = __webpack_require__("../../../../../src/app/notes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__UserProfile__ = __webpack_require__("../../../../../src/app/UserProfile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = (function () {
    function UserComponent(userService, notesService, link) {
        this.userService = userService;
        this.notesService = notesService;
        this.link = link;
        this.loginedUser = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* user */];
        this.userProfile = new __WEBPACK_IMPORTED_MODULE_5__UserProfile__["a" /* UserProfile */];
        this.username = '';
        this.counts = [];
        this.deletePreventFlag = false;
        this.editFlag = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getSubjUser().subscribe(function (user) {
            _this.loginedUser = user;
        });
        this.link.paramMap.switchMap(function (data) { return _this.notesService
            .getAllByUser(_this.username = data.get('username'), +data.get('page')); })
            .map(function (data) { return data.json(); })
            .subscribe(function (data) {
            _this.notes = data.notes;
            _this.userProfile = data.profile;
            var count = +data.pagesCount;
            _this.counts = [];
            for (var i = 1; i <= count; i++) {
                _this.counts.push(i);
            }
        });
    };
    UserComponent.prototype.deleteNote = function () {
        var _this = this;
        this.notesService.noteDelete(this.currentId).subscribe(function () { return _this.ngOnInit(); });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__notes_service__["a" /* NotesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__notes_service__["a" /* NotesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__abstract_service__ = __webpack_require__("../../../../../src/app/abstract.service.ts");
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









var UserService = UserService_1 = (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    UserService.prototype.ngOnInit = function () {
        var _this = this;
        this.getSubjUser().subscribe(function (user) { return _this.token = user.token; });
    };
    UserService.prototype.updateUser = function (user, avatar) {
        var formData = new FormData();
        for (var key in user) {
            formData.append(key, user[key]);
        }
        formData.append('avatar', avatar);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'users/update', formData, { headers: headers });
    };
    UserService.prototype.updateProfile = function (profile, avatar) {
        var formData = new FormData();
        for (var key in profile) {
            (profile[key] === null) ? profile[key] = '' : profile[key] = profile[key];
            formData.append(key, profile[key]);
        }
        formData.append('avatar', avatar);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'users/updateProfile', formData, { headers: headers });
    };
    UserService.prototype.deleteUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'users/delete', { 'id': id }, { headers: headers });
    };
    UserService.prototype.getAllUsers = function (offset) {
        var _this = this;
        return this.getSubjUser()
            .filter(function (user) { return user !== UserService_1.user; })
            .pluck('token')
            .map(function (token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            headers.append('Authorization', 'Bearer ' + token);
            return headers;
        })
            .switchMap(function (headers) { return offset
            .switchMap(function (value) { return _this.http.post(_this.url() + 'users/getAll', { 'pNum': value }, { headers: headers }); }); });
    };
    UserService.prototype.login = function (login, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url() + 'users/login', { 'name': login, 'password': password }, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    UserService.prototype.register = function (user, img) {
        var formData = new FormData();
        formData.append('avatar', img);
        for (var key in user) {
            formData.append(key, user[key]);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        return this.http.post(this.url() + 'users/register', formData, { headers: headers });
    };
    UserService.prototype.loginByCookies = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.post(this.url() + 'users/cookieslogin', {}, { headers: headers });
    };
    UserService.prototype.setSubjUser = function (user, emmit) {
        if (emmit === void 0) { emmit = 'noone'; }
        if (user !== UserService_1.user) {
            this.token = user.token;
        }
        UserService_1.subjUser.next(user);
    };
    UserService.prototype.getSubjUser = function () {
        return UserService_1.subjUser;
    };
    UserService.prototype.searchByUser = function (searchTerm) {
        var _this = this;
        return searchTerm
            .filter(function (term) { return term.length > 2; })
            .distinctUntilChanged()
            .debounceTime(400)
            .switchMap(function (term) { return _this.search(term); });
    };
    UserService.prototype.search = function (term) {
        return this.http.get(this.url() + 'users/search/' + term);
    };
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_7__abstract_service__["a" /* AbstractService */]));
UserService.subjUser = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](UserService_1.user);
UserService = UserService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var UserService_1, _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return user; });
var user = (function () {
    function user() {
    }
    return user;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/users-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loginedUser\" class=\"row\">\r\n    <div class=\"col-md-8 col-md-offset-2\">\r\n        <h2>USERS</h2>\r\n        <button class=\"btn btn-group-sm\" (click)=\"createFlag = true; currentUser = {}\">+ADD</button>\r\n    </div>\r\n        <div class=\"row\">\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th (click)=\"sortFunc('id')\">id</th>\r\n                <th (click)=\"sortFunc('name')\">user name</th>\r\n                <th>status</th>\r\n                <th>about</th>\r\n                <th>avatar</th>\r\n                <th>Articles</th>\r\n            </tr>\r\n            </thead>\r\n            <tr *ngFor=\"let user of users\">\r\n                <td (click)=\"current.user = user; changeFlag = true\">{{user.id}}</td>\r\n                <td (click)=\"editFlag = true; currentUser=user\">{{user.name}}</td>\r\n                <td>{{user.status}}</td>\r\n                <td>{{user.about}}</td>\r\n                <td><img width=\"100\" height=\"100\" src=\"{{user.avatar || '/assets/img/default-user.png'}} \"></td>\r\n                <td (click)=\"notesFlag = true\" [routerLink]=\"['/panel/notes_admin/']\" [queryParams]=\"user\">{{user.name}}'s articles</td>\r\n            </tr>\r\n        </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <button *ngIf=\"this.offset.value > 1\" (click)=\"this.offset.next(this.offset.value - 1)\"\r\n                    class=\"btn btn btn-sm\">Previous\r\n            </button>\r\n            <button (click)=\"this.offset.next(this.offset.value + 1)\" class=\"btn btn-primary btn-sm\">Next</button>\r\n        </div>\r\n    </div>\r\n<!-- modal window -->\r\n<div id=\"user-edit\" *ngIf=\"editFlag && currentUser || createFlag && currentUser\" class=\"row\">\r\n    <div class=\"col-md-6 col-md-offset-3\">\r\n        <h4>{{currentUser.name}}</h4>\r\n        <div class=\"col-md-10 col-md-offset-1\">\r\n            <div class=\"form-group\">\r\n                <label>Username</label>\r\n                <input name=\"name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"currentUser.name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input name=\"email\" class=\"form-control\" type=\"text\" [(ngModel)]=\"currentUser.email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Status</label>\r\n                <input name=\"status\" class=\"form-control\" type=\"text\" [(ngModel)]=\"currentUser.status\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>About</label>\r\n                <input name=\"about\" class=\"form-control\" type=\"text\" [(ngModel)]=\"currentUser.about\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Password</label>\r\n                <input name=\"password\" class=\"form-control\" type=\"text\" [(ngModel)]=\"currentUser.password\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Real first name</label>\r\n                <input name=\"first_name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"currentUser.first_name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Real middle name</label>\r\n                <input name=\"middle_name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"currentUser.middle_name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Real last name</label>\r\n                <input name=\"last_name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"currentUser.last_name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Avatar</label>\r\n                <input name=\"avatar\" class=\"form-control\" type=\"file\" (change)=\"setAvatar($event)\">\r\n            </div>\r\n            <div class=\"col-sm-5 alert-danger\" *ngFor=\"let err of errs \">{{err}}</div>\r\n            <button class=\"btn btn-success\" (click)=\"editFlag = false; currentUser = {}; avatar = null; createFlag = false \">Cancel</button>\r\n            <div class=\"btn-group-sm\" *ngIf=\"editFlag\">\r\n                <button  class=\"btn btn-danger\" (click)=\"updateUser()\">CHANGE</button>\r\n                <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteUser()\">DELETE</button>\r\n            </div>\r\n            <button *ngIf=\"createFlag\" class=\"btn btn-warning\" (click)=\"createUser()\">CREATE</button>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/users-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersAdminComponent = (function () {
    function UsersAdminComponent(userService) {
        this.userService = userService;
        this.offset = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](1);
        this.notesFlag = false;
        this.editFlag = false;
        this.createFlag = false;
        this.sortKey = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('id');
    }
    UsersAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.currentUser);
        this.userService.getAllUsers(this.offset)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (users) {
            _this.users = users;
        });
        this.userService.getSubjUser()
            .subscribe(function (usernamus) { return _this.loginedUser = usernamus; });
    };
    UsersAdminComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.currentUser, this.avatar).subscribe(function () {
            _this.editFlag = false;
            _this.ngOnInit();
        }, function (err) {
            _this.errs = [];
            var errors = err.json();
            for (var err_1 in errors) {
                _this.errs.push(errors[err_1]);
            }
        });
    };
    UsersAdminComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService
            .deleteUser(this.currentUser.id)
            .subscribe(function () {
            _this.editFlag = false;
            _this.ngOnInit();
        }, function (error) { return console.log(error); });
    };
    UsersAdminComponent.prototype.sortFunc = function (key) {
        function sorting(f, s) {
            if (f[key] > s[key])
                return 1;
            if (f[key] < s[key])
                return -1;
            return 0;
        }
        this.users.sort(sorting);
    };
    UsersAdminComponent.prototype.createUser = function () {
        this.currentUser.pass_repeat = this.currentUser.password;
        this.userService.register(this.currentUser, this.avatar).subscribe(function (forlog) { return console.log(forlog); });
    };
    UsersAdminComponent.prototype.setAvatar = function (event) {
        this.avatar = event.target.files[0];
    };
    return UsersAdminComponent;
}());
UsersAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users-admin',
        template: __webpack_require__("../../../../../src/app/users-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-admin.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], UsersAdminComponent);

var _a;
//# sourceMappingURL=users-admin.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'http://learningblog.itcraftlab.com/api/'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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