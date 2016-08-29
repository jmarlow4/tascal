import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";

import { List, ListInterface } from './list.model';

@Injectable()
export class ListsService {

  private lists: FirebaseListObservable<ListInterface[]>;
  private path: string;

  constructor(private af: AngularFire) {
    this.path = `/lists`;
    this.lists = this.af.database.list(this.path);
  }

  createList(list: ListInterface) {
    return this.lists.push(new List(list.name, list.ownerUserId));
  }

  updateList(listData: ListInterface){
    let key = listData.$key;
    delete listData.$key;
    return this.lists.update(key, listData);
  }

  deleteList(list: ListInterface) {
    return this.lists.remove(list);
  }


  getUserLists(uid: string) {
    return this.af.database.list(this.path, {
      query: {
        orderByChild: 'ownerUserId',
        equalTo: uid
      }
    });
      // .map(items => items.sort((a, b) => b.createdAt - a.createdAt));
  }
}
