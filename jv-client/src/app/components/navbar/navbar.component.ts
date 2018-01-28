import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items = [
    new MenuItem('home', '首页', true, 'home'),
    // new MenuItem('assets', '资源库', false, 'database'),
    new MenuItem('helper', '帮助', false, 'help circle')
  ];

  constructor() { }
  logoUrl = 'assets/logo.png';
  title = 'VR资源库';


  ngOnInit() {
    // $('.ui.menu a.item').on('click', function() {
    //   $(this).addClass('active').siblings().removeClass('active');
    // });
  }

  onClickMenuItem(event) {
    this.items.forEach((val, idx, array) => {
      val.isActived = false;
      event.isActived = true;
    });
  }
}

// 菜单
export class MenuItem {
  constructor(
    public path: string,
    public title: string,
    public isActived: boolean,
    public icon: string = null
  ) {
  }

}
