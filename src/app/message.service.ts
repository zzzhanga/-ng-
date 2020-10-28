import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [];//定义message为一个字符串类型的数组
  add(message: string) {
    this.messages.push(message)
    // 添加message数组
  }
  clear(){
    this.messages=[]
    // 清空message数组
  }
}
