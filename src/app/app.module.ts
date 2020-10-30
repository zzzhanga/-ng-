import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from  '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';//http请求模块
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';//用于存放数据的数据库服务
import {NgxEchartsModule} from 'ngx-echarts';
import { EchartComponent } from './echart/echart.component';
import { Echart2Component } from './echart2/echart2.component';
import { Echart3Component } from './echart3/echart3.component';
import { Echart4Component } from './echart4/echart4.component';
import { Echart5Component } from './echart5/echart5.component'
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    EchartComponent,
    Echart2Component,
    Echart3Component,
    Echart4Component,
    Echart5Component

  ],
  imports: [//这里存放所需的外部模块
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgxEchartsModule.forRoot({
      /**  
       * 异步操作，不能直接导入NgxEchartsModule
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
