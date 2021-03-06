"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EchartPageComponent = void 0;
var core_1 = require("@angular/core");
var EchartPageComponent = /** @class */ (function () {
    function EchartPageComponent() {
    }
    EchartPageComponent.prototype.ngOnInit = function () {
        this.options = {
            backgroundColor: '#141440',
            color: ['#25CEBA', '#4B8CFE', '#B580EB'],
            textStyle: {
                fontSize: 18,
                color: '#fff'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                backgroundColor: 'rgb(1,1,2)' //鼠标移入时悬浮框的背景色
            },
            legend: {
                data: ['老师', '学生', '家长'],
                icon: 'rect',
                textStyle: {
                    color: '#fff',
                    fontSize: '16px'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['R30', '大学南路小学', '华青云', '塔河云', '平沙一中', '清华附中', '宁波北化'],
                    axisTick: {
                        show: false //不显示轴刻度
                    },
                    // nameRotate:'90',
                    axisLabel: {
                        interval: 0,
                        rotate: 40
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '人数',
                    nameTextStyle: {
                        fontSize: '16px'
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#233A63'],
                            width: 1,
                            type: 'solid'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '老师',
                    type: 'bar',
                    barWidth: '20%',
                    data: [6553, 3382, 3001, 7334, 2390, 5330, 3320]
                },
                {
                    name: '学生',
                    type: 'bar',
                    barWidth: '20%',
                    // stack: '广告',//设置堆叠
                    data: [5215, 1532, 1071, 1374, 6790, 3230, 4210]
                },
                {
                    name: '家长',
                    type: 'bar',
                    barWidth: '20%',
                    // stack: '广告',
                    data: [3444, 6182, 5191, 4234, 7290, 2330, 1310]
                },
            ]
        };
    };
    EchartPageComponent = __decorate([
        core_1.Component({
            selector: 'app-echart-page',
            templateUrl: './echart-page.component.html',
            styleUrls: ['./echart-page.component.css']
        })
    ], EchartPageComponent);
    return EchartPageComponent;
}());
exports.EchartPageComponent = EchartPageComponent;
