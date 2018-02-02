import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
  }

  ngOnInit() {
    $('.ui.accordion').accordion({
      'exclusive': true,
      'collapsible': false
    });
  }

  onClickTitle(category) {
    this.activedCategory = null;
    this.router.navigate(['/models/' + category.path]);
  }

  onClickItem(event) {
    if (event === this.activedCategory) {
      return;
    }
    this.activedCategory = event;

    this.router.navigate(['/' + event.path]);
  }
}
