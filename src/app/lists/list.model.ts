import { FirebaseDatabase } from "angularfire2";

/* List Data Structure
lists: [
  (list:) {
    key: FireBase-generated-UID
    name: text
    active: bool
    ownerUserId: UserUID
    createdAt: number
    sharedWith: {
      userID: UserUID
      writeAccess: bool
    }
  }
]
*/

export interface ListInterface {
  $key?: string;
  name: string;
  ownerUserId: string;
  active: boolean;
  completed: boolean;
  createdAt: number;
  sharedWith: SharedWith[];
}

export interface SharedWith {
  userId?: string;
  // TODO: Implement write access
  // writeAccess: boolean;
}

export class List implements ListInterface {
  name: string;
  ownerUserId: string;
  active: boolean = true;
  completed: boolean = false;
  createdAt: number = new Date().getTime()
  sharedWith: SharedWith[];

  constructor(name: string, ownerUserId: string) {
    this.name = name;
    this.ownerUserId = ownerUserId;
  }
}
