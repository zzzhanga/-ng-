import { Component, OnInit ,Input} from '@angular/core';
import {Hero} from "../hero";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero;//接受父组件传递来的值（selectedHero）
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');//從路由地址URL中獲取ID
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack():void{
    this.location.back()
  }

  // 保存修改的数据，然后在回调中返回上一级
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
