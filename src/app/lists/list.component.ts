import { Component, OnInit, Input } from '@angular/core';
import { ListInterface } from "./list.model";

@Component({
  moduleId: module.id,
  selector: 'tas-list',
  template: `
    <div class="box">
    {{list.name}}
    </div>
  `,
  styles: [`
    .box {
      border-radius: 0;
      padding: 10px;
    }
  `]
})
export class ListComponent implements OnInit {

  @Input('list') list: ListInterface;

  constructor() { }

  ngOnInit() {
  }

}
