import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs/operators';


@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.css']
})
export class EchartComponent implements OnInit {
  options: any
  constructor() { }

  ngOnInit(): void {

    //   this.options = {
    //     tooltip: {
    //         trigger: 'axis',
    //         axisPointer: {            // 坐标轴指示器，坐标轴触发有效
    //             type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //         }
    //     },
    //     legend: {
    //         data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
    //     },
    //     grid: {
    //         left: '3%',
    //         right: '4%',
    //         bottom: '3%',
    //         containLabel: true
    //     },
    //     xAxis: [
    //         {
    //             type: 'category',
    //             data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    //         }
    //     ],
    //     yAxis: [
    //         {
    //             type: 'value'
    //         }
    //     ],
    //     series: [
    //         {
    //             name: '直接访问',
    //             type: 'bar',
    //             data: [320, 332, 301, 334, 390, 330, 320]
    //         },
    //         {
    //             name: '邮件营销',
    //             type: 'bar',
    //             stack: '广告',
    //             data: [120, 132, 101, 134, 90, 230, 210]
    //         },
    //         {
    //             name: '联盟广告',
    //             type: 'bar',
    //             stack: '广告',
    //             data: [220, 182, 191, 234, 290, 330, 310]
    //         },
    //         {
    //             name: '视频广告',
    //             type: 'bar',
    //             stack: '广告',
    //             data: [150, 232, 201, 154, 190, 330, 410]
    //         },
    //         {
    //             name: '搜索引擎',
    //             type: 'bar',
    //             data: [862, 1018, 964, 1026, 1679, 1600, 1570],
    //             markLine: {
    //                 lineStyle: {
    //                     type: 'dashed'
    //                 },
    //                 data: [
    //                     [{type: 'min'}, {type: 'max'}]
    //                 ]
    //             }
    //         },
    //         {
    //             name: '百度',
    //             type: 'bar',
    //             barWidth: 5,
    //             stack: '搜索引擎',
    //             data: [620, 732, 701, 734, 1090, 1130, 1120]
    //         },
    //         {
    //             name: '谷歌',
    //             type: 'bar',
    //             stack: '搜索引擎',
    //             data: [120, 132, 101, 134, 290, 230, 220]
    //         },
    //         {
    //             name: '必应',
    //             type: 'bar',
    //             stack: '搜索引擎',
    //             data: [60, 72, 71, 74, 190, 130, 110]
    //         },
    //         {
    //             name: '其他',
    //             type: 'bar',
    //             stack: '搜索引擎',
    //             data: [62, 82, 91, 84, 109, 110, 120]
    //         }
    //     ]
    // };


    this.options = {
      backgroundColor: '#141440',
      // color: ['#4B8CFE', '#35CF9D', '#FFC06B', '#7EB7FC', '#B580EB', '#6E7FE3'],
      title: {
        // text: '世界人口总量',
        // subtext: '数据来自网络',
        show: false//不显示标题
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        // data: ['2011年', '2012年'],
        show: false//不显示图例

      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '-10%',
        top:'0%',
        containLabel: true,
        show: false//不显示网格
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
          show: false//不显示y轴刻度
        },
        //  alignWithLabel:true,
        //  interval : 'auto'
        // inside:true //刻度朝内\
        axisLabel:{
          // interval:0,
        show:true,//是否显示轴下的说明
        }

      },
      // y:{
      //   right:'80%'
      // },
      textStyle: {//字体设置
        fontSize: 18,
        color: '#fff'
      },
      series: [
        {
          // name: '2011年',
          type: 'bar',
          data: [8, 12, 10, 15, 18,25 ],
          barWidth:'35%',//每一项的宽度
          itemStyle: {
            normal: {
              color: function (params) {                        // 给出颜色组      
                var colorList = ['#6E7FE3', '#B580EB', '#7EB7FC', '#FFC06B', '#35CF9D','#4B8CFE'];
                return colorList[params.dataIndex]
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
              },
            }
          },
          // itemGap: 70,//图例之间的间距

        },
        // {
        //     name: '2012年',
        //     type: 'bar',
        //     data: [19325, 23438, 31000, 121594, 134141, 681807]
        // }

      ]
    };


  }



}



