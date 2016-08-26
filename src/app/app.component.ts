import { Component } from '@angular/core';
import { AuthService } from "./shared/auth/auth.service";
import { FirebaseAuthState } from "angularfire2";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <tas-header></tas-header>
  <div class="container">
    <tas-home *ngIf="!authState"></tas-home>
    <tas-user-home *ngIf="!!authState" [authState]="authState"></tas-user-home>
  </div>
  `
})
export class AppComponent {

  private authState: FirebaseAuthState;
  constructor(authService: AuthService) {

    authService.auth.subscribe((state) => {
      this.authState = state;
    });
  }

}
