"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EchartComponent = void 0;
var core_1 = require("@angular/core");
var EchartComponent = /** @class */ (function () {
    function EchartComponent() {
    }
    EchartComponent.prototype.ngOnInit = function () {
        this.options = {
            backgroundColor: '#141440',
            // color: ['#4B8CFE', '#35CF9D', '#FFC06B', '#7EB7FC', '#B580EB', '#6E7FE3'],
            title: {
                // text: '世界人口总量',
                // subtext: '数据来自网络',
                show: false //不显示标题
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                // data: ['2011年', '2012年'],
                show: false //不显示图例
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '-10%',
                top: '0%',
                containLabel: true,
                show: false //不显示网格
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                show: false
            },
            yAxis: {
                type: 'category',
                // show:false,
                // nameLocation : 'start',
                data: ['小程序', 'H5', 'PC端', 'IOS手机端', '安卓手机端', 'web端'],
                axisLine: {
                    show: false //不显示y轴的轴线
                },
                axisTick: {
                    show: false //不显示y轴刻度
                },
                //  alignWithLabel:true,
                //  interval : 'auto'
                // inside:true //刻度朝内\
                axisLabel: {
                    // interval:0,
                    show: true
                }
            },
            // y:{
            //   right:'80%'
            // },
            textStyle: {
                fontSize: 18,
                color: '#fff'
            },
            series: [
                {
                    // name: '2011年',
                    type: 'bar',
                    data: [8, 12, 10, 15, 18, 25],
                    barWidth: '35%',
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = ['#6E7FE3', '#B580EB', '#7EB7FC', '#FFC06B', '#35CF9D', '#4B8CFE'];
                                return colorList[params.dataIndex];
                            },
                            label: {
                                formatter: "{c}",
                                show: true,
                                position: "right",
                                textStyle: {
                                    fontWeight: "bolder",
                                    fontSize: "12",
                                    color: "#fff"
                                }
                            }
                        }
                    }
                },
            ]
        };
    };
    EchartComponent = __decorate([
        core_1.Component({
            selector: 'app-echart',
            templateUrl: './echart.component.html',
            styleUrls: ['./echart.component.css']
        })
    ], EchartComponent);
    return EchartComponent;
}());
exports.EchartComponent = EchartComponent;
