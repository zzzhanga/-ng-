import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import {HEROES} from '../mock-heroes'; 使用service后无需再引入模拟数据
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = { //hero為Hero類型
    id: 1,
    name: 'Windstorm'
  }
  // heroes=HEROES;//未使用service服务时使用。 直接将模拟数据赋值给heros变量
  heroes: Hero[];//不赋值，只声明heros的数据类型
  constructor(private heroService: HeroService, private messageService: MessageService, public router: Router) {
    // 1、声明了一个私有类型heroService
    // 2、把它标记为一个HeroService的注入点


  }

  ngOnInit(): void {
    // 在组件初始化时调用获取数据的方法
    this.getHeroes();
  }

  // getHeroes(): Hero[] {//由于使用的是模拟数据 所以可以使用同步方法赋值数据
  //   return this.heroes = this.heroService.getHeroes();
  //   // 调用heroService里面的getHeroes()方法，获取到数据，然后将数据赋值给heroes变量

  // }
  getHeroes(): void {//异步获取数据
    this.heroService.getHeroes()
      .subscribe(hero => this.heroes = hero)
    // 在subscribe（订阅）函数中使用回调函数进行赋值

  }

  selectedHero: Hero;//定义已选中的英雄
  onSelect(hero: Hero): void {
    this.selectedHero = hero;//将点击的hero赋值给已选中的hero
    console.log(this.selectedHero);
    console.log(hero === this.selectedHero);
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);//消息提示
    this.router.navigate([`/detail/${hero.id}`], {
      queryParams: {
        id: hero.id
      }
    })
    // 編程式導航，點擊之後跳轉到對應英雄的詳情頁
  }

  // 新增英雄
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
      // 传参name，返回name和对应的id，将这个新的对象添加到原来的heroes数组中，展示出来
  }

  // 删除英雄
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);//先在视图上删除数据
    this.heroService.deleteHero(hero).subscribe();//然后发请求，在数据库中删除数据
  }

}
