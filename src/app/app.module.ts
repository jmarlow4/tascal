import { NgModule } from  '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule, } from "@angular/forms";
import { HttpModule } from "@angular/http";

import {
  AngularFireModule, AuthMethods, AuthProviders
} from "angularfire2/angularfire2";

import { AuthService } from "./shared/auth.service";
import { AppComponent } from './app.component';
import { HeaderComponent } from "./shared/header.component";
import { LoginboxComponent } from "./shared/loginbox/loginbox.component";
import { LoginformComponent } from "./shared/loginbox/shared/loginform.component";
import { SignupformComponent } from "./shared/loginbox/shared/signupform.component";

const firebaseConfig = {
  apiKey: "AIzaSyANpyCsabDlJiuVNeo3eV-cqKszbUxTmYo",
  authDomain: "tascal-db9ee.firebaseapp.com",
  databaseURL: "https://tascal-db9ee.firebaseio.com",
  storageBucket: "tascal-db9ee.appspot.com",
}

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
  remember: 'default'
};

@NgModule({
  // - Components, directives, pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginboxComponent,
    LoginformComponent,
    SignupformComponent
  ],

  // - Finished Modules like Router/Http/Forms or Third Party Modules
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),

  ],

  // - Services
  providers: [AuthService],

  // - The target component
  bootstrap: [AppComponent],
})

export class AppModule {}
