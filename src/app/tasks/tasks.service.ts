import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { Task, TaskInterface } from './task.model';

@Injectable()
export class TasksService {

  private tasks: FirebaseListObservable<TaskInterface[]>;
  private path: string;

  constructor(private af: AngularFire) {
    this.path = `/tasks`;
    this.tasks = this.af.database.list(this.path);
  }

  createTask(task: TaskInterface, parentListId: string) {
    return this.tasks.push(new Task(task.name, parentListId));
  }

  updateTask(taskData: TaskInterface){
    let key = taskData.$key;
    delete taskData.$key;
    return this.tasks.update(key, taskData);
  }

  deleteTask(task: TaskInterface) {
    return this.tasks.remove(task);
  }

  getListsTasks(listId: string) {
    return this.af.database.list(this.path, {
      query: {
        orderByChild: 'parentListId',
        equalTo: listId
      }
    })
      // .map(items => items.sort((a, b) => b.createdAt - a.createdAt));
  }
}
