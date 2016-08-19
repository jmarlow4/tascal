import { NgModule } from  '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AngularFireModule } from "angularfire2/angularfire2";

import { AuthService } from "./shared/auth.service";
import { AppComponent } from './app.component'
import { OtherComponent } from "./other/other.component";
import { HeaderComponent } from "./shared/header.component";

const firebaseConfig = {
  apiKey: "AIzaSyANpyCsabDlJiuVNeo3eV-cqKszbUxTmYo",
  authDomain: "tascal-db9ee.firebaseapp.com",
  databaseURL: "https://tascal-db9ee.firebaseio.com",
  storageBucket: "tascal-db9ee.appspot.com",
}

@NgModule({
  // - Components, directives, pipes
  declarations: [AppComponent, OtherComponent, HeaderComponent],

  // - Finished Modules like Router/Http/Forms or Third Party Modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],

  // - Services
  providers: [AuthService],

  // - The target component
  bootstrap: [AppComponent],
})

export class AppModule {}
