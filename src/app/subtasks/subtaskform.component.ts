import { Component, OnInit, Input } from '@angular/core';
import {
  Validators, FormGroup, FormBuilder,
  FormControl
} from "@angular/forms";

import { SubtasksService } from "./subtasks.service";

@Component({
  moduleId: module.id,
  selector: 'tas-subtaskform',
  template: `
    <div class="box">
      <h2 class="title">Subasks</h2>
      <form [formGroup]="createSubtaskForm" (ngSubmit)="onCreateSubtask()">
        <div class="control has-addons">
          <input 
            formControlName="name" 
            class="input is-fullwidth" 
            id="name"
            placeholder="Add a subtask...">
          <button 
            class="button is-primary"
            type="submit" 
            [disabled]="!createSubtaskForm.valid || !taskId" >
            <i class="icon-plus"></i>
          </button>
        </div>
      </form>
    </div>
  `,
  styles: []
})
export class SubtaskformComponent implements OnInit {

  private createSubtaskForm: FormGroup;
  @Input('taskId') taskId: string;

  constructor(private fb: FormBuilder, private subtaskService: SubtasksService) { }

  ngOnInit() {
    this.createSubtaskForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      parentTaskId: [this.taskId]
    });
  }

  onCreateSubtask(){
    console.log(this.taskId);
    this.subtaskService.createSubtask(this.createSubtaskForm.value, this.taskId);
  }

}
