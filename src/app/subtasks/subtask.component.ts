import {
  Component, OnInit, Input,
} from '@angular/core';
import { SubtaskInterface } from "./subtask.model";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { SubtasksService } from "./subtasks.service";

@Component({
  moduleId: module.id,
  selector: 'tas-subtask',
  template: `
    <div class="box">
      <div class="box-content">
        <div *ngIf="!isEditing">
          {{subtask.name}}
        </div>
        <form
          [formGroup]="editSubtaskForm" 
          (ngSubmit)="onSubmitEdit()"
          class="box-form"
          [hidden]="!isEditing">

          <input autofocus
            formControlName="name" 
            class="box-edit-input" 
            id="name"
            placeholder="Add a subtask...">
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
export class SubtaskComponent implements OnInit {

  private editSubtaskForm: FormGroup;
  private key: string;
  private isEditing: boolean;
  @Input('subtask') subtask: SubtaskInterface;

  constructor(private fb: FormBuilder, private subtasksService: SubtasksService) {}

  ngOnInit() {
    this.editSubtaskForm = this.fb.group({
      name: [this.subtask.name,
        Validators.compose([
          Validators.required
        ])
      ],
      $key: [this.subtask.$key]
    });
  }

  onEdit(bool: boolean) {
    this.isEditing = bool;
  }

  onSubmitEdit() {
    this.subtasksService.updateSubtask(this.editSubtaskForm.value)
      ['then']( () => this.isEditing = false)
      .catch( (err) => console.error(err) );
    return false;
  }

  onDelete() {
    this.subtasksService.deleteSubtask(this.subtask);
  }

}
