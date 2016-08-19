import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tas-loginbox',
  template: `
    <div class="panel login-box">
      <div class="panel-tabs">
        <a [ngClass]="{'is-active': !isSigningUp}" (click)="setLoginState(false)">Login</a>
        <a [ngClass]="{'is-active': isSigningUp}" (click)="setLoginState(true)">Sign Up</a>
      </div>
      <div class="panel-block">
        <div class="content">
          <tas-loginform *ngIf="!isSigningUp"></tas-loginform>
          <tas-signupform *ngIf="isSigningUp"></tas-signupform>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-box {
      position: absolute;
      top: 60px;
      right: 8px;
      width: 250px;
      background: white;
    }
    
    .content {
      text-align: left;
    }
  `]
})
export class LoginboxComponent {

  private isSigningUp: boolean = false;

  constructor() { }

  setLoginState(bool: boolean) {
    this.isSigningUp = bool;
  }

}
