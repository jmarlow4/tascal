import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth/auth.service";

@Component({
  moduleId: module.id,
  selector: 'tas-loginform',
  template: `

    <div *ngIf="!isLoggingIn">
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
    </div>
    <div *ngIf="isLoggingIn">
      <div class="loader big-loader"></div>
    </div>
  `,
  styles: []
})
export class LoginformComponent implements OnInit{

  private loginForm: FormGroup;
  private isLoggingIn: boolean = false;
  @Output() loggedIn = new EventEmitter();

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit():any {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    this.isLoggingIn = true;
    this.authService.loginUser(this.loginForm.value)
      .then( (auth) =>  {
        this.isLoggingIn = false;
        this.loggedIn.emit(auth);
      })
      .catch( (err) => console.error(err) );
  }

}
