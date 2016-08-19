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
          <button class="button is-primary" (click)="showLoginBox()">
            <i [ngClass]="{'icon-user' : !loginBoxShown, 'icon-close' : loginBoxShown}"></i>
          </button>
        </div>
        <tas-loginbox *ngIf="loginBoxShown"></tas-loginbox>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent {

  private loginBoxShown: boolean = false;

  constructor() {
  }

  showLoginBox() {
    this.loginBoxShown = !this.loginBoxShown;
  }

}
