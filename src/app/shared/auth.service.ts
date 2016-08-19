import { Injectable } from '@angular/core';
import { User } from "./user.interface";
import { FirebaseAuth } from "angularfire2/angularfire2";

@Injectable()
export class AuthService {

  constructor(private firebaseAuth: FirebaseAuth) {

  }

  signupUser(user: User) {
    this.firebaseAuth.createUser({email: user.email, password: user.password})
      .then((response) => console.log(response),
            (error) => console.error(error));
  }

}
