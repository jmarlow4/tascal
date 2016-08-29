import {
  Component, Input, Output, EventEmitter,
  OnChanges, SimpleChange
} from '@angular/core';
import { FirebaseListObservable } from "angularfire2";
import { TasksService } from "./tasks.service";
import { TaskInterface } from "./task.model";

@Component({
  moduleId: module.id,
  selector: 'tas-tasks',
  template: `  
    <div class="task-container">
  
      <tas-taskform
        [listId]="listId">
      </tas-taskform>
      
      <div *ngIf="!!listId">
        <tas-task 
          *ngFor="let task of listsTasks | async"
          [ngClass]="{'selected-box' : selectedTask === task.$key}"
          [task]="task"
          (click)="emitTaskId(task.$key)">
        </tas-task>
      </div>
      
      <div *ngIf="!listId" class="please-select">
        <p>Please select a list</p>
      </div>
  
    </div>
  `,
  styles: []
})
export class TasksComponent implements OnChanges {

  private listsTasks: FirebaseListObservable<TaskInterface[]>;
  private path: string;
  private selectedTask: string;
  // inputs list ID
  @Input('listId') listId: string;

  // outputs task ID
  @Output() taskId = new EventEmitter();

  constructor(private tasksService: TasksService) {}

  ngOnChanges(changes: {[listId: string]: SimpleChange}) {
    console.log(changes['listId']['currentValue']);
    this.listsTasks = this.tasksService.getListsTasks(changes['listId']['currentValue']);
  }

  emitTaskId(taskId: string) {
    this.selectedTask = taskId;
    this.taskId.emit(taskId)
  }

}
