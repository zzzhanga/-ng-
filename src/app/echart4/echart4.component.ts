import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echart4',
  templateUrl: './echart4.component.html',
  styleUrls: ['./echart4.component.css']
})
export class Echart4Component implements OnInit {
  options: any;
  constructor() { }

  ngOnInit(): void {
    this.options = {
      color: ['#4B8CFE', '#35CF9D', '#FFC06B', '#7EB7FC', '#B580EB', '#6E7FE3'],
      backgroundColor: '#141440',
      textStyle: {//字体设置
        fontSize: 18,
        color: '#fff'
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgb(1,1,2)',//鼠标移入时悬浮框的背景色
        formatter:'<b>{b}</b><br/>{a0}：{c0}次<br/>{a1}：{c1}次<br/>{a2}：{c2}次'
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
        bottom: '10%',
        top:'10%',
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
        boundaryGap: true,//坐标轴两边留白
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
        axisLabel: {//设置横坐标说明的偏转角度
          interval: 0,
          rotate: 40
        },
        axisLine: {//坐标轴颜色
          lineStyle: {
            color: '#233A63',
            // width:8,//这里是为了突出显示加上的
            interval: 0,//设置横坐标说明的偏转角度
            rotate: 40
          }
        },
        //   axisLabel: {
        //    
        //  }

      },
      yAxis: {
        name: '次数',
        type: 'value',
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          textStyle: {//坐标说明文字的样式
            color: '#344273'
          }
        },
        splitLine: {//网格样式（颜色，宽度等）
          show: true,
          lineStyle: {
            color: ['#233A63'],
            width: 1,
            type: 'solid'
          }
        },
        nameTextStyle: {//坐标名的样式
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

  }

}
