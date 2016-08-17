import { NgModule } from  '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component'
import { OtherComponent } from "./other/other.component";

@NgModule({
  // - Components, directives, pipes
  declarations: [AppComponent, OtherComponent],

  // - Finished Modules like Router/Http/Forms or Third Party Modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],

  // - Services
  providers: [],

  // - The target component
  bootstrap: [AppComponent],
})

export class AppModule {}
