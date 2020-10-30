"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Echart4Component = void 0;
var core_1 = require("@angular/core");
var Echart4Component = /** @class */ (function () {
    function Echart4Component() {
    }
    Echart4Component.prototype.ngOnInit = function () {
        this.options = {
            color: ['#4B8CFE', '#35CF9D', '#FFC06B', '#7EB7FC', '#B580EB', '#6E7FE3'],
            backgroundColor: '#141440',
            textStyle: {
                fontSize: 18,
                color: '#fff'
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgb(1,1,2)',
                formatter: '<b>{b}</b><br/>{a0}：{c0}次<br/>{a1}：{c1}次<br/>{a2}：{c2}次'
            },
            legend: {
                data: ['2020年', '2019年', '2018年'],
                textStyle: {
                    color: '#fff',
                    fontSize: '16px'
                }
            },
            grid: {
                // show:true,
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
                // borderColor: '#233A63'
                lineStyle: {
                    color: ['#315070'],
                    width: 1,
                    type: 'solid'
                }
            },
            // toolbox: {
            //     feature: {
            //         saveAsImage: {} //下载按钮
            //     }
            // },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                // splitLine: {
                //   show: true,
                //   lineStyle: {
                //     color: ['#315070'],
                //     width: 1,
                //     type: 'solid'
                //   }
                // },
                data: ['R30', '大学南路小学', '华青云', '塔河云', '平沙一中', '清华附中', '宁波北化'],
                // offset:'100'
                // gridIndex:'2',
                axisLabel: {
                    interval: 0,
                    rotate: 40
                },
                axisLine: {
                    lineStyle: {
                        color: '#233A63',
                        // width:8,//这里是为了突出显示加上的
                        interval: 0,
                        rotate: 40
                    }
                }
            },
            yAxis: {
                name: '次数',
                type: 'value',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#344273'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#233A63'],
                        width: 1,
                        type: 'solid'
                    }
                },
                nameTextStyle: {
                    color: '#344273',
                    fontSize: '16px'
                }
            },
            series: [
                {
                    name: '2020年',
                    type: 'line',
                    // stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '2019年',
                    type: 'line',
                    // stack: '总量',
                    data: [220, 182, 691, 234, 290, 330, 310]
                },
                {
                    name: '2018年',
                    type: 'line',
                    // stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                }
                // {
                //   name: '直接访问',
                //   type: 'line',
                //   // stack: '总量',
                //   data: [320, 332, 301, 1334, 390, 330, 320]
                // },
                // {
                //   name: '搜索引擎',
                //   type: 'line',
                //   // stack: '总量',
                //   data: [820, 932, 301, 934, 1290, 1330, 1320]
                // }
            ]
        };
    };
    Echart4Component = __decorate([
        core_1.Component({
            selector: 'app-echart4',
            templateUrl: './echart4.component.html',
            styleUrls: ['./echart4.component.css']
        })
    ], Echart4Component);
    return Echart4Component;
}());
exports.Echart4Component = Echart4Component;
