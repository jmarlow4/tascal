import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { Task, TaskInterface } from './task.model';
import { AuthService } from "../shared/auth/auth.service";

@Injectable()
export class TasksService {

  private tasks: FirebaseListObservable<TaskInterface[]>;

  constructor(af: AngularFire, authService: AuthService) {

    const path = `/tasks`;
    const options = {
      query: {

      }
    }

    this.tasks = af.database.list(path, options);
  }

}
