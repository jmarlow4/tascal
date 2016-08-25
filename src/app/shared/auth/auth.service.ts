import { Injectable } from '@angular/core';
import { User } from "./user.interface";
import { AngularFire, FirebaseAuthState } from "angularfire2/angularfire2";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  private authState: FirebaseAuthState = null;

  constructor(private af: AngularFire, private router: Router) {
    this.af.auth.subscribe( (authState) => {
      console.log('service.authState:', authState);
      this.authState = authState;
    });
  }
  get auth() {
    return this.af.auth;
  }
  get state() {
    return this.authState;
  }
  signupUser(user: User) {
    return this.af.auth.createUser({email: user.email, password: user.password})
      // I know that invoking the method in this way is weird but I did it
      // so WebStorm won't give me anymore guff
      ['then'](
        (response) => {
          this.loginUser(user)
            // .then( (auth) => this.router.navigate(['/app']));
          // console.log(response)
        },
        (error) => console.error(error))
  }

  loginUser(user: User) {
    return this.af.auth.login({email: user.email, password: user.password})
      ['then'](
        (response) => response,
        (error) => console.error(error));
  }

  logout() {
    return new Promise((resolve, reject) => {
      this.af.auth.logout();
      resolve(true);
    });
  }

}
