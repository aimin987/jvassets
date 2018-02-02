import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products = Array(30);
  constructor() { }


  @Input()
  title: string;
  @Input()
  displayNum: number;

  ngOnInit() {

    this.products = this.products.slice(0, this.displayNum);
  }

}
