import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tas-home',
  template: `
    <div class="content">
      Welcome! Please sign in.
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
