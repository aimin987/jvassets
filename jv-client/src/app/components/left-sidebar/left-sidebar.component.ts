import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  tabCategories: Category[];
  categories: Category[];
  activeTab: Category;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getModelCategories();
    this.tabCategories = this.categoryService.getTabCategories();

    this.activeTab = this.tabCategories[0];
    this.activeTab.actived = true;
  }

  onClickTabMenu(tab) {
    if (tab === this.activeTab) {
      return;
    }
    this.activeTab.actived = false;
    tab.actived = true;
    this.activeTab = tab;

    if (tab.id === 1) {
      this.categories = this.categoryService.getModelCategories();
    } else if ( tab.id === 2) {
      this.categories = this.categoryService.getMaterialCategories();
    }
  }
}
