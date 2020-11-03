"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Echart3Component = void 0;
var core_1 = require("@angular/core");
var Echart3Component = /** @class */ (function () {
    function Echart3Component() {
    }
    Echart3Component.prototype.ngOnInit = function () {
        this.options = {
            color: ['#4B8CFE', '#35CF9D', '#FFC06B', '#7EB7FC', '#B580EB', '#6E7FE3'],
            backgroundColor: '#141440',
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {d}%'
            },
            legend: {
                show: false
            },
            series: [
                {
                    name: '场域活跃对象分布',
                    type: 'pie',
                    radius: ['20%', '30%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}{d}%' //lable具体显示的文字
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                            // color: 'rgb(1,1,2)'//不指定颜色
                            },
                            // smooth: 0.2,//折线弧度
                            length: 6,
                            length2: 20
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold',
                            position: 'outside'
                        }
                    },
                    // labelLine: {
                    // show: true
                    // },
                    data: [
                        { value: 8, name: 'R30' },
                        { value: 6, name: '大学南路小学' },
                        { value: 6, name: '华南云' },
                        { value: 6, name: '平沙一中' },
                        { value: 6, name: '清华附中' },
                        { value: 6, name: '宁波北化' },
                        { value: 6, name: '安教云1' },
                        { value: 6, name: '安教云2' },
                        { value: 6, name: '安教云3' },
                        { value: 6, name: '安教云4' },
                        { value: 38, name: '塔河云' },
                    ]
                }
            ]
        };
    };
    Echart3Component = __decorate([
        core_1.Component({
            selector: 'app-echart3',
            templateUrl: './echart3.component.html',
            styleUrls: ['./echart3.component.css']
        })
    ], Echart3Component);
    return Echart3Component;
}());
exports.Echart3Component = Echart3Component;
