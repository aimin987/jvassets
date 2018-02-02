import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

  leftItems = [
    new MenuItem(1, 'home', '首页', 'home'),
    new MenuItem(5, 'helper', '帮助', 'help circle')
  ];

  rightItems = [
    new MenuItem(6, 'login', '登陆', 'unlock'),
    new MenuItem(7, 'signup', '注册', 'write')
  ];

  constructor() { }

  getLeftMenu() {
    return this.leftItems;
  }

  getRightMenu() {
    return this.rightItems;
  }

}

// 菜单
export class MenuItem {
  constructor(
    public id: number,
    public path: string,
    public title: string,
    public icon: string = null
  ) {
  }
}
