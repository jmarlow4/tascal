import { Injectable, ViewChild } from '@angular/core';
import { User } from "./user.interface";
import {
  FirebaseAuth, FirebaseAuthState, AuthProviders,
  AngularFire
} from "angularfire2/angularfire2";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  private authState: FirebaseAuthState = null;

  constructor(public auth: FirebaseAuth, private router: Router) {
    auth.subscribe((state: FirebaseAuthState) => {
      console.log('auth event: ', state);
      this.authState = state;
    });
  }

  signupUser(user: User) {

    return this.auth.createUser({email: user.email, password: user.password})
      // I know that invoking the 'then' method in this way is weird but I did it
      // so WebStorm won't give me anymore error warnings
      ['then'](
        (response) => {
          //Login after signing up
          this.auth.login({
            email: user.email,
            password: user.password
          })
          ['then']( () => {
            this.router.navigate(['../app']) ;
          });
        },
        (error) => console.error('Login Error:', error))
      ['catch']((error) => console.error(error));
  }

  loginUser(user: User) {
    return this.auth.login({
      email: user.email,
      password: user.password
    })
    ['then'](
      (response) => {
        this.router.navigate(['/app']);
        this.constructor(this.auth, this.router);
        return response;
      },
      (error) => console.error(error))
    ['catch']((error) => console.error(error));
  }

  logout() {
    return new Promise((resolve, reject) => {
      this.auth.logout()
      this.router.navigate(['/']);
      resolve(true);
    });
  }

}
