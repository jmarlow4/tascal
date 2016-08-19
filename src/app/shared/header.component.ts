import { Component } from '@angular/core';
import { AuthService } from "./auth.service";

@Component({
  moduleId: module.id,
  selector: 'tas-header',
  template: `
    <nav class="nav">
      <div class="nav-left">
        <h3 class="nav-item title">TASCAL</h3>
      </div>
      <div class="nav-right">
        <div class="nav-item">
          <button class="button is-primary">
            <i class="icon-user"></i>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent {

  constructor() {
  }

}
