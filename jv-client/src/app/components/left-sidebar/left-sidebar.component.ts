import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Category, CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
import { MenuItem } from '../../services/navbar.service';


@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit, OnChanges {
  categories: Category[];
  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) { }

  @Input()
  currentMenuItem: MenuItem;

  ngOnChanges(changes: SimpleChanges) {
    this.categories = this.categoryService.getCategories(this.currentMenuItem.id);
  }

  ngOnInit() {
    // this.categories = this.categoryService.getCategories(this.currentMenuItem.id);
  }

  onClickTabMenu(tab) {
  }
}
