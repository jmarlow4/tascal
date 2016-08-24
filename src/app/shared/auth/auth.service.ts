import { Injectable, ViewChild } from '@angular/core';
import { User } from "./user.interface";
import { FirebaseAuth, FirebaseAuthState, AuthProviders } from "angularfire2/angularfire2";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  private authState: FirebaseAuthState = null;

  constructor(private firebaseAuth: FirebaseAuth, private router: Router) {
    this.firebaseAuth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get auth() {
    return this.firebaseAuth;
  }

  get id() {
    return this.authState['uid'];
  }

  signupUser(user: User) {

    return this.firebaseAuth.createUser({email: user.email, password: user.password})

      // I know that invoking the 'then' method in this way is weird but I did it
      // so WebStorm won't give me anymore error warnings
      ['then'](
        (response) => {
          //Login after signing up
          this.firebaseAuth.login({
            email: user.email,
            password: user.password
          })
          ['then']( () => this.router.navigate(['/app']));
        },
        (error) => console.error(error))
  }

  loginUser(user: User) {
    return this.firebaseAuth.login({email: user.email, password: user.password})
      ['then'](
        (response) => {
          this.router.navigate(['/app']);
          return response;
        },
        (error) => console.error(error));
  }

  logout() {
    this.router.navigate(['/']);
    return new Promise((resolve, reject) => {
      this.firebaseAuth.logout()
      resolve(true);
    });
  }

}
