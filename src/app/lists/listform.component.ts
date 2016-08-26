import { Component, OnInit, Input } from '@angular/core';
import {
  Validators, FormGroup, FormBuilder,
  FormControl
} from "@angular/forms";

import { ListsService } from "./lists.service";

@Component({
  moduleId: module.id,
  selector: 'tas-listform',
  template: `
    <div class="box">
      <h2 class="title">Lists</h2>
      <form [formGroup]="createListForm" (ngSubmit)="onCreateList()">
        <div class="control has-addons">
          <input 
            formControlName="name" 
            class="input is-fullwidth" 
            id="name"
            placeholder="Add a list...">
          <button 
            class="button is-primary"
            type="submit" 
            [disabled]="!createListForm.valid" >
            <i class="icon-plus"></i>
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .box {
      border-radius: 0;
      padding: 10px;
    }
    form .control.has-addons .is-fullwidth {
      width: 100%;
    }
    .title {
      margin-bottom: 10px;
      text-align: center;
    }
  `]
})
export class ListformComponent implements OnInit {

  private createListForm: FormGroup;
  @Input('userId') uid: string;

  constructor(private fb: FormBuilder, private listService: ListsService) { }

  ngOnInit() {
    this.createListForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      ownerUserId: [this.uid]
    });
  }

  onCreateList(){
    this.listService.createList(this.createListForm.value);
  }

}
