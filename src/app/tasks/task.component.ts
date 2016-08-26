import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tas-task',
  template: `
    <p>
      task Works!
    </p>
  `,
  styles: []
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
