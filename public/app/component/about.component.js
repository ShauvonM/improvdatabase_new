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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var AboutComponent = (function () {
    function AboutComponent(_app, router) {
        this._app = _app;
        this.router = router;
        this.scrollpos = 0;
        this.showToolbarScrollPosition = window.innerHeight * 0.14;
        this.title = "About";
        this._tools = [];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.onScroll = function ($event) {
        this.scrollpos = $event.target.scrollTop;
    };
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: ".page.about",
            templateUrl: "../template/about.component.html"
        }), 
        __metadata('design:paramtypes', [app_component_1.AppComponent, router_1.Router])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=about.component.js.map
