import { Injectable } from '@angular/core';
import { User } from "./user.interface";
import { AngularFire } from "angularfire2/angularfire2";

@Injectable()
export class AuthService {

  constructor(private af: AngularFire) {

  }

  signupUser(user: User) {
    return this.af.auth.createUser({email: user.email, password: user.password})
      // I know that invoking the method in this way is weird but I did it
      // so WebStorm won't give me anymore guff
      ['then'](
        (response) => {
          console.log(response);
          let users = this.af.database.list('/usernames');
          users.push({username: user.username, userUid: response['uid']});

        },(error) => console.error(error))
      ['then']((data) => this.af.auth.login({email: user.email, password: user.password}));
  }

  loginUser(user: User) {
    this.af.auth.login({email: user.email, password: user.password})
      ['then']((response) => console.log(response),
            (error) => console.error(error));
  }

  logout() {
    this.af.auth.logout();
    // this.router.navigate(['/signin']);
  }

  getCurrentAuthState() {
    return this.af.auth;
  }

}
