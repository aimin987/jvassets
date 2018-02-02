import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  title = '陈设';
  diplayNum = 7;

  items = Array(10);

  constructor(
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.routeInfo.snapshot.params['id'];
    console.log(id);
  }

}
