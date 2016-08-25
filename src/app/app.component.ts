import { Component } from '@angular/core';
import { AuthService } from "./shared/auth/auth.service";
import { AngularFire } from "angularfire2";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <tas-header></tas-header>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {

  // private isAuthenticated: boolean;

  constructor() {
    //
    // authService.auth.subscribe((state) => {
    //   this.isAuthenticated = state !== null;
    //   console.log(this.isAuthenticated);
    // });
  }

}
