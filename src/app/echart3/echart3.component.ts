import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echart3',
  templateUrl: './echart3.component.html',
  styleUrls: ['./echart3.component.css']
})
export class Echart3Component implements OnInit {

  constructor() { }
  options: any
  ngOnInit(): void {
    this.options = {
      color: ['#4B8CFE', '#35CF9D', '#FFC06B', '#7EB7FC', '#B580EB', '#6E7FE3'],
      backgroundColor: '#141440',
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {d}%'
      },
      legend: {
        show: false,
        // orient: 'vertical',
        // left: 10,
        // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
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
            formatter: '{b}{d}%'//lable具体显示的文字
          },
          labelLine: {
            normal: {
              lineStyle: {
                // color: 'rgb(1,1,2)'//不指定颜色
              },
              // smooth: 0.2,//折线弧度
              length: 6,//折线第一段长度
              length2: 20,//折线第一段长度

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
          ],

        }
      ]
    };
  }


}
