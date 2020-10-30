import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { EchartComponent } from './echart/echart.component';
import { Echart2Component } from './echart2/echart2.component';
import { Echart3Component } from './echart3/echart3.component';
import { Echart4Component } from './echart4/echart4.component';
import { Echart5Component } from './echart5/echart5.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'echart', component: EchartComponent },
  { path: 'echart2', component: Echart2Component },
  { path: 'echart3', component: Echart3Component },
  { path: 'echart4', component: Echart4Component },
  { path: 'echart5', component: Echart5Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
