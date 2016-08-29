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

  createSubtask(subtask: SubtaskInterface, parentTaskId: string) {
    return this.subtasks.push(new Subtask(subtask.name, parentTaskId));
  }

  updateSubtask(subtaskData: SubtaskInterface){
    let key = subtaskData.$key;
    delete subtaskData.$key;
    return this.subtasks.update(key, subtaskData);
  }

  deleteSubtask(subtask: SubtaskInterface) {
    return this.subtasks.remove(subtask);
  }

  getTasksSubtasks(taskId: string) {
    return this.af.database.list(this.path, {
      query: {
        orderByChild: 'parentTaskId',
        equalTo: taskId
      }
    })
      // .map(items => items.sort((a, b) => b.createdAt - a.createdAt));
  }

}
