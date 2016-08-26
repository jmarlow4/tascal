import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";

import { List, ListInterface } from './list.model';
import { AuthService } from "../shared/auth/auth.service";

@Injectable()
export class ListsService {

  private displayLists: FirebaseListObservable<ListInterface[]>;
  private submitLists: FirebaseListObservable<ListInterface[]>;
  // private userId = new Subject();
  private userId: string;
  private path: string;

  constructor(private af: AngularFire) {
    this.path = `/lists`;
    this.submitLists = this.af.database.list(this.path);
  }

  createList(name: string, uid: string) {
    this.af.database.list(this.path).push(new List(name, uid));
  }

  getUserLists(uid: string) {
    return this.af.database.list(this.path, {
      query: {
        orderByChild: 'ownerUserId',
        equalTo: uid
      }
    });
  }


    // this.submitLists.push(new List('dummy task', authService.id));




}
