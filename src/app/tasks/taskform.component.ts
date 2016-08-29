import { Component, OnInit, Input } from '@angular/core';
import {
  Validators, FormGroup, FormBuilder,
  FormControl
} from "@angular/forms";

import { TasksService } from "./tasks.service";

@Component({
  moduleId: module.id,
  selector: 'tas-taskform',
  template: `
    <div class="box">
      <h2 class="title">Tasks</h2>
      <form [formGroup]="createTaskForm" (ngSubmit)="onCreateTask()">
        <div class="control has-addons">
          <input 
            formControlName="name" 
            class="input is-fullwidth" 
            id="name"
            placeholder="Add a task...">
          <button 
            class="button is-primary"
            type="submit" 
            [disabled]="!createTaskForm.valid || !listId" >
            <i class="icon-plus"></i>
          </button>
        </div>
      </form>
    </div>
  `,
  styles: []
})
export class TaskformComponent implements OnInit {

  private createTaskForm: FormGroup;
  @Input('listId') listId: string;

  constructor(private fb: FormBuilder, private taskService: TasksService) { }

  ngOnInit() {
    this.createTaskForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      parentListId: [this.listId]
    });
  }

  onCreateTask(){
    console.log(this.listId);
    this.taskService.createTask(this.createTaskForm.value, this.listId);
  }

}
