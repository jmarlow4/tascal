import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tas-subtasks',
  template: `
  <div>
    {{taskId}}
  </div>
  `,
  styles: []
})
export class SubtasksComponent implements OnInit {

  // inputs task ID
  @Input('taskId') taskId: string;

  constructor() { }

  ngOnInit() {
  }

}
