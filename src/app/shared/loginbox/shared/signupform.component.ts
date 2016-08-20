import { Component, OnInit } from '@angular/core';
import {
  Validators, FormGroup, FormBuilder,
  FormControl
} from "@angular/forms";
import { AuthService } from "../../auth.service";

@Component({
  moduleId: module.id,
  selector: 'tas-signupform',
  template: `
    <form [formGroup]="signupForm" (ngSubmit)="onSignUp()">
    
      <label class="label" for="email">Email</label>
      <p class="control has-icon has-icon-right">
        <input #email
          formControlName="email" 
          class="input" 
          type="email" 
          id="email">
        <i 
          class="fa fa-warning" 
          *ngIf="!email.pristine && email.errors != null && email.errors['noEmail']">
        </i>
        <span 
          class="help is-danger" 
          *ngIf="!email.pristine && email.errors != null && email.errors['noEmail']">
          Invalid mail address
        </span>
      </p>
      
      <label class="label" for="password">Password</label>
      <p class="control has-icon has-icon-right">
        <input 
          formControlName="password" 
          class="input" 
          type="password" 
          id="password">
      </p>
      
      <label class="label" for="confirm-password">Confirm Password</label>
      <p class="control has-icon has-icon-right">
        <input #confirmPassword
          formControlName="confirmPassword" 
          class="input" 
          type="password" 
          id="confirm-password">
        <i 
          class="fa fa-warning"
          *ngIf="!confirmPassword.pristine 
            && confirmPassword.errors != null 
            && confirmPassword.errors['passwordsNotMatch']"
        ></i>
        <span 
          class="help is-danger" 
          *ngIf="!confirmPassword.pristine 
            && confirmPassword.errors != null 
            && confirmPassword.errors['passwordsNotMatch']"
        >
          Passwords do not match
        </span>
            
      </p>
      
      <button 
        class="button is-primary is-fullwidth"
        type="submit" 
        [disabled]="!signupForm.valid" >
        <i class="icon-check"></i>
        &nbsp;
        <span>Sign Up</span>
      </button>
    </form>
  `,
  styles: []
})
export class SignupformComponent implements OnInit{

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  onSignUp() {
    this.authService.signupUser(this.signupForm.value);
  }

  ngOnInit(): any {
    this.signupForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([
        Validators.required,
        this.isEqualPassword.bind(this)
      ])],
    });
  }

  isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return {noEmail: true};
    }
  }

  isEqualPassword(control: FormControl): {[s: string]: boolean} {
    if (!this.signupForm) {
      return {passwordsNotMatch: true};

    }
    if (control.value !== this.signupForm.controls['password'].value) {
      return {passwordsNotMatch: true};
    }
  }

}
