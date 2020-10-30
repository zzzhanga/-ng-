"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var heroes_component_1 = require("./heroes/heroes.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var hero_detail_component_1 = require("./hero-detail/hero-detail.component");
var echart_component_1 = require("./echart/echart.component");
var echart2_component_1 = require("./echart2/echart2.component");
var echart3_component_1 = require("./echart3/echart3.component");
var echart4_component_1 = require("./echart4/echart4.component");
var echart5_component_1 = require("./echart5/echart5.component");
var echart_page_component_1 = require("./echart-page/echart-page.component");
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'echart', component: echart_component_1.EchartComponent },
    { path: 'echart2', component: echart2_component_1.Echart2Component },
    { path: 'echart3', component: echart3_component_1.Echart3Component },
    { path: 'echart4', component: echart4_component_1.Echart4Component },
    { path: 'echart5', component: echart5_component_1.Echart5Component },
    { path: 'echartPage', component: echart_page_component_1.EchartPageComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
