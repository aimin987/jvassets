import { Component, OnInit } from '@angular/core';
import { MenuItem } from './services/navbar.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  currentMenuItem: MenuItem = new MenuItem(0, '', '');
  ngOnInit() {
    // $('#left-sidebar').sidebar({
    //   dimPage: false,
    //   closable: false
    // });
  }


  onChageMenuItem(event: MenuItem) {
    this.currentMenuItem = event;
  }
}
