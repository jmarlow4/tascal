import { NgModule } from  '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule, } from "@angular/forms";
import { HttpModule } from "@angular/http";

import {
  AngularFireModule, AuthMethods, AuthProviders
} from "angularfire2/angularfire2";

import { AuthService } from "./shared/auth/auth.service";
import { AppComponent } from './app.component';
import { HeaderComponent } from "./shared/header/header.component";
import { LoginformComponent } from "./shared/loginbox/loginform.component";
import { SignupformComponent } from "./shared/loginbox/signupform.component";
import { HomeComponent } from "./shared/home.component";
import { UserHomeComponent } from "./user-home/user-home.component";
import { ListsService } from "./lists/lists.service";
import { TasksService } from "./tasks/tasks.service";
import { SubtasksService } from "./subtasks/subtasks.service";
import { ListsComponent } from "./lists/lists.component";
import { TasksComponent } from "./tasks/tasks.component";
import { SubtasksComponent } from "./subtasks/subtasks.component";
import { ListComponent } from "./lists/list.component";
import { TaskComponent } from "./tasks/task.component";
import { SubtaskComponent } from "./subtasks/subtask.component";
import { SubtaskformComponent } from "./subtasks/subtaskform.component";
import { TaskformComponent } from "./tasks/taskform.component";
import { ListformComponent } from "./lists/listform.component";

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
    ListsComponent,
    TasksComponent,
    SubtasksComponent,
    ListComponent,
    TaskComponent,
    SubtaskComponent,
    ListformComponent,
    TaskformComponent,
    SubtaskformComponent,
  ],

  // - Finished Modules like Router/Http/Forms or Third Party Modules
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],

  // - Services
  providers: [
    AuthService,
    ListsService,
    TasksService,
    SubtasksService
  ],

  // - The target component
  bootstrap: [AppComponent]
})

export class AppModule {}
