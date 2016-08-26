import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListsService } from "./lists.service";
import { ListInterface } from "./list.model";
import { FirebaseListObservable, AngularFire, FirebaseAuthState } from "angularfire2";
import { AuthService } from "../shared/auth/auth.service";

@Component({
  moduleId: module.id,
  selector: 'tas-lists',
  template: `
    <div class="list-container">
      
      <tas-listform 
        [userId]="uid"
        class="">
      </tas-listform>
      
      <tas-list 
        *ngFor="let list of userLists | async"
        [list]="list"
        (click)="emitListId(list.$key)">
      </tas-list>
      
    </div>
  `,
  styles: []
})
export class ListsComponent implements OnInit {

  private userLists: FirebaseListObservable<ListInterface[]>;
  private auth: FirebaseAuthState;
  private path: string;

  // inputs user ID
  @Input('userId') uid: string;

  // outputs list ID
  @Output() listId = new EventEmitter();

  constructor(private listsService: ListsService) {}

  ngOnInit() {
    this.userLists = this.listsService.getUserLists(this.uid);
  }

  emitListId(listId: string) {
    this.listId.emit(listId)
  }

}
