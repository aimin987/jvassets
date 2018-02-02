import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  leftItems: MenuItem[];
  rightItems: MenuItem[];
  selectedItem: MenuItem;

  constructor(
    private router: Router,
    private navbarService: NavbarService
  ) { }

  // tslint:disable-next-line:no-output-rename
  @Output('CurrentMenuItem')
  changeNavMenuItem: EventEmitter<MenuItem> = new EventEmitter();

  ngOnInit() {
    this.leftItems = this.navbarService.getLeftMenu();
    this.rightItems = this.navbarService.getRightMenu();

    this.selectedItem = this.leftItems[0];
    this.changeNavMenuItem.emit(this.selectedItem);
  }

  onClickMenuItem(item: MenuItem) {
    // if (item === this.selectedItem) {
    //   return;
    // }
    this.selectedItem = item;
    this.router.navigate(['/' + this.selectedItem.path]);

    this.changeNavMenuItem.emit(this.selectedItem);
  }
}

