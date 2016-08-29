import {
  Component, OnInit, Input, Output, EventEmitter,
} from '@angular/core';
import { ListInterface } from "./list.model";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { ListsService } from "./lists.service";

@Component({
  moduleId: module.id,
  selector: 'tas-list',
  template: `
    <div class="box">
      <div class="box-content">
        <div *ngIf="!isEditing">
          {{list.name}}
        </div>
        <form
          [formGroup]="editListForm" 
          (ngSubmit)="onSubmitEdit()"
          class="box-form"
          [hidden]="!isEditing">

          <input autofocus
            formControlName="name" 
            class="box-edit-input" 
            id="name"
            placeholder="Add a list...">
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
export class ListComponent implements OnInit {

  private editListForm: FormGroup;
  private key: string;
  private isEditing: boolean;
  @Input('list') list: ListInterface;
  @Output() unsetList = new EventEmitter();

  constructor(private fb: FormBuilder, private listsService: ListsService) {}

  ngOnInit() {
    this.editListForm = this.fb.group({
      name: [this.list.name,
        Validators.compose([
          Validators.required
        ])
      ],
      $key: [this.list.$key]
    });
  }

  onEdit(bool: boolean) {
    this.isEditing = bool;
  }

  onSubmitEdit() {
    this.listsService.updateList(this.editListForm.value)
      ['then']( () => this.isEditing = false)
      .catch( (err) => console.error(err) );
    return false;
  }

  onDelete() {
    this.unsetList.emit(true);
    this.listsService.deleteList(this.list);
  }

}
