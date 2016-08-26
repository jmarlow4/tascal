import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tas-subtasks',
  templateUrl: 'subtasks.component.html',
  styleUrls: ['subtasks.component.css']
})
export class SubtasksComponent implements OnInit {

  // inputs task ID
  @Input('taskId') taskId: string;

  constructor() { }

  ngOnInit() {
  }

}
