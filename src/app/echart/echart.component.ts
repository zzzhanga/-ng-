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



