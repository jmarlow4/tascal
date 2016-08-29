import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from "angularfire2";
import { ListsService } from "./lists.service";
import { ListInterface } from "./list.model";

@Component({
  moduleId: module.id,
  selector: 'tas-lists',
  template: `
    <div class="list-container">
      
      <tas-listform 
        [userId]="uid">
      </tas-listform>
      
      <tas-list 
        *ngFor="let list of userLists | async"
        [ngClass]="{'selected-box' : selectedList === list.$key}"
        [list]="list"
        (unsetList)="emitListId(null)"
        (click)="emitListId(list.$key)">
      </tas-list>
      
    </div>
  `,
  styles: []
})
export class ListsComponent implements OnInit {

  private userLists: FirebaseListObservable<ListInterface[]>;
  private path: string;
  private selectedList: string;

  // inputs user ID
  @Input('userId') uid: string;

  // outputs list ID
  @Output() listId = new EventEmitter();

  constructor(private listsService: ListsService) {}

  ngOnInit() {
    this.userLists = this.listsService.getUserLists(this.uid);
  }

  emitListId(listId: string) {
    this.selectedList = listId;
    this.listId.emit(listId)
  }

}
