import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { Subtask, SubtaskInterface } from './subtask.model';
import { AuthService } from "../shared/auth/auth.service";

@Injectable()
export class SubtasksService {

  private subtasks: FirebaseListObservable<SubtaskInterface[]>;

  constructor(af: AngularFire, authService: AuthService) {

    const path = `/subtasks`;
    const options = {
      query: {

      }
    }

    this.subtasks = af.database.list(path, options);
  }

}
