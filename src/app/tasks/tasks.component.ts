import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tas-tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css']
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
