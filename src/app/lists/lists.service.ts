import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { List, ListInterface } from './list.model';
import { AuthService } from "../shared/auth/auth.service";

@Injectable()
export class ListsService {

  displayLists: FirebaseListObservable<ListInterface[]>;
  private submitLists: FirebaseListObservable<ListInterface[]>;
  private userId: string;

  constructor(private af: AngularFire) {

    this.af.auth.subscribe((auth) => {
      this.userId = auth.uid;
    })

    const path = `/lists`;
    const displayOptions = {
      query: {
        orderByChild: 'ownerUserId',
        equalTo: this.userId
      }
    }

    this.displayLists = af.database.list(path, displayOptions);
    this.submitLists = af.database.list(path);

    // this.submitLists.push(new List('dummy task', authService.id));
  }



}
