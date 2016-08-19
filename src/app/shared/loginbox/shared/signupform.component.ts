import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tas-signupform',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSignUp()">
    
      <label class="label">Email</label>
      <p class="control has-icon has-icon-right">
        <input formControlName="email" class="input" type="email">
        <!--<i class="fa fa-warning"></i>-->
        <!--<span class="help is-danger">This email is invalid</span>-->
      </p>
      
      <label class="label">Password</label>
      <p class="control has-icon has-icon-right">
        <input formControlName="password" class="input" type="password">
        <!--<i class="fa fa-warning"></i>-->
        <!--<span class="help is-danger">This email is invalid</span>-->
      </p>
      
      <label class="label">Password</label>
      <p class="control has-icon has-icon-right">
        <input formControlName="password" class="input" type="password">
        <!--<i class="fa fa-warning"></i>-->
        <!--<span class="help is-danger">This email is invalid</span>-->
      </p>
      
      <button 
        class="button is-primary is-fullwidth"
        type="submit" 
        [disabled]="!myForm.valid" >
        <i class="icon-check"></i>
        &nbsp;
        <span>Sign Up</span>
      </button>
    </form>
  `,
  styles: []
})
export class SignupformComponent {

  constructor() { }

  onSIgnUp() {

  }

}
