import { Component, OnInit, Input } from '@angular/core';
import { FirebaseAuthState } from "angularfire2";

@Component({
  moduleId: module.id,
  selector: 'tas-user-home',
  template: `
    <div class="columns is-mobile">
    
      <tas-lists 
        class="column"
        [userId]="authState.uid"
        (listId)="setListId($event)">
      </tas-lists>
      
      <tas-tasks 
        class="column"
        [listId]="listId"
        (taskId)="setTaskId($event)">
      </tas-tasks>
      <tas-subtasks 
        class="column"
        [taskId]="taskId">
      </tas-subtasks>
    </div>
  `,
  styleUrls: []
})
export class UserHomeComponent implements OnInit {

  // input auth state
  @Input('authState') authState: FirebaseAuthState;

  private listId: string;
  private taskId: string;

  constructor() { }

  ngOnInit() {
  }

  setListId(listId: string) {
    this.listId = listId;
  }

  setTaskId(taskId: string) {
    this.taskId = taskId;
  }

}
