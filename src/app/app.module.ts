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
import { LoginformComponent } from "./shared/loginbox/loginform.component";
import { SignupformComponent } from "./shared/loginbox/signupform.component";
import { Routing } from "./app.routes";
import { HomeComponent } from "./shared/home.component";
import { UserHomeComponent } from "./user-home/user-home.component";
import { AuthGuard } from "./shared/auth.guard";
import { UnauthGuard } from "./shared/unauth.guard";

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
    LoginformComponent,
    SignupformComponent,
    HomeComponent,
    UserHomeComponent,
  ],

  // - Finished Modules like Router/Http/Forms or Third Party Modules
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    Routing
  ],

  // - Services
  providers: [AuthService, AuthGuard, UnauthGuard],

  // - The target component
  bootstrap: [AppComponent],
})

export class AppModule {}
