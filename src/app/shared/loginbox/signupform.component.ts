import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  Validators, FormGroup, FormBuilder,
  FormControl
} from "@angular/forms";
import { AuthService } from "../auth/auth.service";

@Component({
  moduleId: module.id,
  selector: 'tas-signupform',
  template: `
    <div *ngIf="!working">
    <form [formGroup]="signupForm" (ngSubmit)="onSignUp()">
    
      <label class="label" for="email">Email</label>
      <div class="control has-icon has-icon-right">
        <input
          formControlName="email" 
          class="input" 
          type="email"
          id="email">
        <i 
          class="fa icon-exclamation" 
          *ngIf="!signupForm.find('email').pristine 
          && signupForm.find('email').errors != null 
          && signupForm.find('email').errors['noEmail']">
        </i>
        <span 
          class="help is-danger" 
          *ngIf="!signupForm.find('email').pristine 
          && signupForm.find('email').errors != null 
          && signupForm.find('email').errors['noEmail']">
          Invalid mail address
        </span>
      </div>
      
      <label class="label" for="password">Password</label>
      <div class="control has-icon has-icon-right">
        <input 
          formControlName="password" 
          class="input" 
          type="password" 
          id="password">
      </div>
      
      <label class="label" for="confirm-password">Confirm Password</label>
      <div class="control has-icon has-icon-right">
        <input
          formControlName="confirmPassword" 
          class="input" 
          type="password" 
          id="confirm-password">
        <i 
          class="fa icon-exclamation"
          *ngIf="!signupForm.find('confirmPassword').pristine 
            && signupForm.find('confirmPassword').errors != null 
            && signupForm.find('confirmPassword').errors['passwordsNotMatch']"
        ></i>
        <span 
          class="help is-danger" 
          *ngIf="!signupForm.find('confirmPassword').pristine 
            && signupForm.find('confirmPassword').errors != null 
            && signupForm.find('confirmPassword').errors['passwordsNotMatch']"
        >
          Passwords do not match
        </span>
            
      </div>
      
      <button 
        class="button is-primary is-fullwidth"
        type="submit" 
        [disabled]="!signupForm.valid" >
        <i class="icon-check"></i>
        &nbsp;
        <span>Sign Up</span>
      </button>
    </form>
    </div>
    <div *ngIf="working">
      <div class="loader big-loader"></div>
    </div>
  `
})
export class SignupformComponent implements OnInit{

  signupForm: FormGroup;
  private working: boolean = false;
  @Output() isAuthenticating = new EventEmitter();

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  onSignUp() {
    this.working = true;
    this.isAuthenticating.emit(true);
    this.authService.signupUser(this.signupForm.value)
      .then( (auth) => {
        this.working = false;
        this.isAuthenticating.emit(false);
      })
      .catch( (err) => console.error(err) );
  }

  ngOnInit() {
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
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/)) {
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
