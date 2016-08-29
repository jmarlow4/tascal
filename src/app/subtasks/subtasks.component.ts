import {
  Component, Input, Output, EventEmitter,
  OnChanges, SimpleChange
} from '@angular/core';
import { FirebaseListObservable } from "angularfire2";
import { SubtasksService } from "./subtasks.service";
import { SubtaskInterface } from "./subtask.model";

@Component({
  moduleId: module.id,
  selector: 'tas-subtasks',
  template: `  
    <div class="subtask-container">
  
      <tas-subtaskform
        [taskId]="taskId">
      </tas-subtaskform>
      
      <div *ngIf="!!taskId">
        <tas-subtask 
          *ngFor="let subtask of tasksSubtasks | async"
          [subtask]="subtask">
        </tas-subtask>
      </div>
      
      <div *ngIf="!taskId" class="please-select">
        <p>Please select a task</p>
      </div>
  
    </div>
  `,
  styles: []
})
export class SubtasksComponent implements OnChanges {

  private tasksSubtasks: FirebaseListObservable<SubtaskInterface[]>;
  private path: string;

  // inputs task ID
  @Input('listId') listId: string;

  // inputs task ID
  @Input('taskId') taskId: string;

  constructor(private subtasksService: SubtasksService) {}

  ngOnChanges(changes: {[taskId: string]: SimpleChange
  }) {
    console.log(changes);
    for (let propName in changes) {
      let chng = changes[propName];
      if (propName == 'taskId') {
        this.tasksSubtasks =
          this.subtasksService.getTasksSubtasks(changes['taskId']['currentValue']);
      }
      if (propName == 'listId') {
        this.tasksSubtasks = null;
      }
    }
  }

}
