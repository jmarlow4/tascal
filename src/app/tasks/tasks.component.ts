import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tas-tasks',
  template: `
  <div>
    {{listId}}
  </div>
  `,
  styles: []
})
export class TasksComponent implements OnInit {

  // inputs list ID
  @Input('listId') listId: string;

  // outputs task ID
  @Output() taskId = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
