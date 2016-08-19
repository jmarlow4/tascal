import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../auth.service";

@Component({
  moduleId: module.id,
  selector: 'tas-loginform',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onLogin()">
    
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
      
      <button 
        class="button is-primary is-fullwidth"
        type="submit" 
        [disabled]="!myForm.valid" >
        <i class="icon-key"></i>
        &nbsp;
        <span>Login</span>
      </button>
    </form>
  `,
  styles: []
})
export class LoginformComponent implements OnInit{

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit():any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {

  }

}
