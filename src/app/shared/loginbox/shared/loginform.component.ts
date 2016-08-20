import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../auth.service";

@Component({
  moduleId: module.id,
  selector: 'tas-loginform',
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onLogin()">
    
      <label class="label">Email</label>
      <p class="control has-icon has-icon-right">
        <input formControlName="email" class="input" type="email">
      </p>
      
      <label class="label">Password</label>
      <p class="control has-icon has-icon-right">
        <input formControlName="password" class="input" type="password">
      </p>
      
      <button 
        class="button is-primary is-fullwidth"
        type="submit" 
        [disabled]="!loginForm.valid" >
        <i class="icon-key"></i>
        &nbsp;
        <span>Login</span>
      </button>
    </form>
  `,
  styles: []
})
export class LoginformComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit():any {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    this.authService.loginUser(this.loginForm.value);
  }

}
