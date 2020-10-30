
1.此项目为本人练手使用
2.此项目为angular官网案例，本人学习时所写
3.此项目后续有与echatrs相关代码，为本人后续练手所写
4.此项目麻雀虽小五脏俱全，有关angular组件传值，路由导航，服务注入等都有涉猎，非常适合初学者（如果还有学人angular的话）
5.echart在angular中使用，必须引入ngx-echarts依赖，此依赖依赖于echarts依赖



项目启动：
首先下载依赖
npm i
或者 yarn (推荐)
启动：
npm start
或者：ng serve --open

特别说明：
在app.module.ts中导入ngx-echarts依赖之后，在@NgModule中导入 一定要异步！！！
以下是npm官方文档代码：
import { NgxEchartsModule } from 'ngx-echarts';
 
@NgModule({
 imports: [
   NgxEchartsModule.forRoot({
     /**
      * This will import all modules from echarts.
      * If you only need custom modules,
      * please refer to [Custom Build] section.
      */
     echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
   }),
 ],
})


