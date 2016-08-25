import { Injectable } from '@angular/core';
import { User } from "./user.interface";
import { AngularFire, FirebaseAuthState } from "angularfire2/angularfire2";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  public authState: FirebaseAuthState = null;

  constructor(private af: AngularFire, private router: Router) {
    this.af.auth.subscribe( (authState) => {
      console.log(authState);
      this.authState = authState;
    });
  }

  get auth() {
    return this.af.auth;
  }

  signupUser(user: User) {
    return this.af.auth.createUser({email: user.email, password: user.password})
      // I know that invoking the method in this way is weird but I did it
      // so WebStorm won't give me anymore guff
      ['then'](
        (response) => {
          this.loginUser(user);
          // console.log(response)
        },
        (error) => console.error(error))
  }

  loginUser(user: User) {
    return this.af.auth.login({email: user.email, password: user.password})
      ['then'](
        (response) => this.router.navigateByUrl('/app'),
        (error) => console.error(error));
  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/');
  }

}
