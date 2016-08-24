import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { List, ListInterface } from './list.model';
import { AuthService } from "../shared/auth/auth.service";

@Injectable()
export class ListsService {

  private lists: FirebaseListObservable<ListInterface[]>;
  private userId: string;

  constructor(private af: AngularFire, private authService: AuthService) {

    console.log(authService.id);

    const path = `/lists`;
    const options = {
      query: {
        orderByChild: 'ownerUserId',
        toEqual: authService.id
      }
    }

    this.lists = af.database.list(path, options);
  }



}
