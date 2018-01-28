import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Category } from '../../services/category.service';

declare var $: any;
@Component({
  selector: 'app-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.css']
})
export class AccordionMenuComponent implements OnInit, OnChanges {

  @Input()
  categories: Category[];

  activedCategory: Category;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    if (this.activedCategory) {
      this.activedCategory.actived = false;
      this.activedCategory = null;
    }

    if (this.categories.length > 0) {
      if (this.categories[0].children.length > 0) {
        this.activedCategory = this.categories[0].children[0];
        this.activedCategory.actived = true;
        this.categories[0].actived = true;
      }
    }
  }

  ngOnInit() {
    $('.ui.accordion').accordion({
      'behavior': {
        exclusive: false
      }
    });
  }
  onClickItem(event) {
    if (event === this.activedCategory) {
      return;
    }
    this.activedCategory.actived = false;
    event.actived = true;
    this.activedCategory = event;
  }
}



// export class SecondCategory {
//   constructor(
//     public id: number,
//     public title: string,
//     public path: string) {
//   }
// }
