import {
  Component, OnInit, Input,
} from '@angular/core';
import { TaskInterface } from "./task.model";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { TasksService } from "./tasks.service";

@Component({
  moduleId: module.id,
  selector: 'tas-task',
  template: `
    <div class="box">
      <div class="box-content">
        <div *ngIf="!isEditing">
          {{task.name}}
        </div>
        <form
          [formGroup]="editTaskForm" 
          (ngSubmit)="onSubmitEdit()"
          class="box-form"
          [hidden]="!isEditing">

          <input autofocus
            formControlName="name" 
            class="box-edit-input" 
            id="name"
            placeholder="Add a task...">
          <button 
            class="button is-small is-success"
            type="submit">
            <i class="icon-check"></i>
          </button>
        </form>
      </div>
      
      <div class="box-actions">
        <button *ngIf="!isEditing" (click)="onEdit(true)"
          class="button is-small is-success is-outlined"
          ><i class="icon-pencil"></i></button>
        <button *ngIf="isEditing" (click)="onEdit(false)"
          class="button is-small is-warning is-outlined"
          ><i class="icon-close"></i></button>
        <button (click)="onDelete()"
          class="button is-small is-danger is-outlined"
          ><i class="icon-trash"></i></button>
      </div>
      
    </div>
  `,
  styles: []
})
export class TaskComponent implements OnInit {

  private editTaskForm: FormGroup;
  private key: string;
  private isEditing: boolean;
  @Input('task') task: TaskInterface;

  constructor(private fb: FormBuilder, private tasksService: TasksService) {}

  ngOnInit() {
    this.editTaskForm = this.fb.group({
      name: [this.task.name,
        Validators.compose([
          Validators.required
        ])
      ],
      $key: [this.task.$key]
    });
  }

  onEdit(bool: boolean) {
    this.isEditing = bool;
  }

  onSubmitEdit() {
    this.tasksService.updateTask(this.editTaskForm.value)
      ['then']( () => this.isEditing = false)
      .catch( (err) => console.error(err) );
    return false;
  }

  onDelete() {
    this.tasksService.deleteTask(this.task);
  }

}
