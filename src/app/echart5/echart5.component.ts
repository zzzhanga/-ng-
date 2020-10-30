import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echart5',
  templateUrl: './echart5.component.html',
  styleUrls: ['./echart5.component.css']
})
export class Echart5Component implements OnInit {
  options: any;
  constructor() { }

  ngOnInit(): void {
    this.options = {
      backgroundColor: '#141440',
      color: ['#4B8CFE'],
      textStyle: {//字体设置
        fontSize: 18,
        color: '#fff'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgb(1,1,2)',//鼠标移入时悬浮框的背景色
        formatter: ' <b>{b}({c})</b><br/>{a1}：{c1}<br/>{a2}：{c2}<br/>{a3}：{c3}<br/>{a4}：{c4}<br/>{a5}：{c5}<br/>{a6}：{c6}<br/>{a7}：{c7}<br/>{a8}：{c8}'
      },
      // legend: {
      //     data: ['老师', '学生', '家长'],
      //     icon: 'rect',
      //     textStyle:{
      //       color:'#fff',
      //       fontSize:'16px'
      //     }
      // },
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
            show: false//不显示轴刻度
          },
          // nameRotate:'90',
          axisLabel: {//设置横坐标说明的偏转角度
            interval: 0,
            rotate: 40
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '资源数',
          nameTextStyle: {
            fontSize: '16px'
          },
          splitLine: {//网格样式（颜色，宽度等）
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
          name: '总数',//后面所有项的总和
          type: 'bar',
          barWidth: '50%',//本项的宽度
          data: [6553, 3382, 3001, 7334, 2390, 5330, 3320]
        },
        {
          name: '试卷',
          type: 'bar',
          data: [5215, 1532, 1071, 1374, 6790, 3230, 4210]
        },
        {
          name: '题库',
          type: 'bar',
          
          data: [3444, 6182, 5191, 4234, 7290, 2330, 1310]
        },
        {
          name: '课件',
          type: 'bar',
       
          data: [3444, 6182, 5191, 4234, 7290, 2330, 1310]
        }, {
          name: '素材',
          type: 'bar',
         
          data: [3444, 6182, 5191, 4234, 7290, 2330, 1310]
        }, {
          name: '教案',
          type: 'bar',
        
          data: [3444, 6182, 5191, 4234, 7290, 2330, 1310]
        }, {
          name: '学案',
          type: 'bar',
         
          data: [3444, 6182, 5191, 4234, 7290, 2330, 1310]
        }, {
          name: '素材',
          type: 'bar',
         
          data: [3444, 6182, 5191, 4234, 7290, 2330, 1310]
        },{
          name: '其他',
          type: 'bar',
      
          data: [3444, 6182, 5191, 4234, 7290, 2330, 1310]
      }

      ]

    };
  }

}
