import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { Subtask, SubtaskInterface } from './subtask.model';

@Injectable()
export class SubtasksService {

  private subtasks: FirebaseListObservable<SubtaskInterface[]>;
  private path: string;

  constructor(private af: AngularFire) {
    this.path = `/subtasks`;
    this.subtasks = this.af.database.list(this.path);
  }

  createSubtask(name: string, taskId: string) {
    this.subtasks.push(new Subtask(name, taskId));
  }

  updateSubtask(key: string, subtaskData: SubtaskInterface){
    this.subtasks.update(key, subtaskData);
  }

  getUserSubtasks(taskId: string) {
    return this.af.database.list(this.path, {
      query: {
        orderByChild: 'parentTaskId',
        equalTo: taskId
      }
    })
      .map(items => items.sort((a, b) => b.createdAt - a.createdAt));
  }

}
