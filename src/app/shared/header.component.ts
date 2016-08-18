import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tas-header',
  template: `
    <p>
      header Works!
    </p>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
