"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var heroes_component_1 = require("./heroes/heroes.component");
var forms_1 = require("@angular/forms");
var hero_detail_component_1 = require("./hero-detail/hero-detail.component");
var messages_component_1 = require("./messages/messages.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var http_1 = require("@angular/common/http"); //http请求模块
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var hero_search_component_1 = require("./hero-search/hero-search.component"); //用于存放数据的数据库服务
var ngx_echarts_1 = require("ngx-echarts");
var echart_component_1 = require("./echart/echart.component");
var echart2_component_1 = require("./echart2/echart2.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                heroes_component_1.HeroesComponent,
                hero_detail_component_1.HeroDetailComponent,
                messages_component_1.MessagesComponent,
                dashboard_component_1.DashboardComponent,
                hero_search_component_1.HeroSearchComponent,
                echart_component_1.EchartComponent,
                echart2_component_1.Echart2Component
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { dataEncapsulation: false }),
                ngx_echarts_1.NgxEchartsModule.forRoot({
                    /**
                     * 异步操作，不能直接导入NgxEchartsModule
                     * This will import all modules from echarts.
                     * If you only need custom modules,
                     * please refer to [Custom Build] section.
                     */
                    echarts: function () { return Promise.resolve().then(function () { return require('echarts'); }); }
                }),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
