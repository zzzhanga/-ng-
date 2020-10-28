import { Injectable } from '@angular/core';
import { Hero } from './hero';
// import {HEROES} from './mock-heroes'; //使用模拟数据
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service'//引入消息提示服务
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) {
    // MessageService 注入到HeroService的构造函数
  }
  private heroesUrl = 'api/heroes';//定义基础路由

  private log(message: string) {//封装一个提示方法，在请求错误的时候调用
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {//封装请求错误回调方法
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // getHeroes():Hero[]{//返回一个Hero数据类型的数组
  //   return HEROES;
  // }
  // getHeroes():Observable<Hero[]>{//使用rxjs获取Observable泛型类型数据
  //   this.messageService.add('获取英雄成功！')
  //   return of(HEROES);
  // }


  getHeroes(): Observable<Hero[]> {//使用http请求获取数据
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))//错误捕获
    );
  }


  // getHero(id: number): Observable<Hero> {//根據id返回對應英雄
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }


  getHero(id: number): Observable<Hero> {//根据id请求英雄数据 
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {//更新数据
    // put()方法，第一个参数是url，第二个是传参（提交的修改值），第三个是请求头
    // 英雄 Web API 期待在保存时的请求中有一个特殊的头。 这个头是在 HeroService 的 httpOptions 常量中定义的。
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  // 新增英雄  post()方法 无需从传递id，期望服务器为他分配一个新的id  
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  

  // 删除英雄

  /** DELETE: delete the hero from the server */
deleteHero(hero: Hero | number): Observable<Hero> {
  const id = typeof hero === 'number' ? hero : hero.id;
  const url = `${this.heroesUrl}/${id}`;

  return this.http.delete<Hero>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}

// 根据英雄名字搜索
/* GET heroes whose name contains search term */
searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found heroes matching "${term}"`) :
       this.log(`no heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
}

}
