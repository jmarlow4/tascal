import { FirebaseDatabase } from "angularfire2";

/* Task Data Structure
tasks: [
  (listId:) [
    (task:) {
      key: FireBase-generated-UID
      name: text
      active: bool
      completed: bool
      createdAt: number
    }
  ]
]
*/

export interface TaskInterface {
  $key?: string;
  name: string;
  parentListId: string;
  active: boolean;
  completed: boolean;
  createdAt: number;
}

export class Task implements TaskInterface {
  name: string;
  parentListId: string;
  active: boolean = true;
  completed: boolean = false;
  createdAt: number = FirebaseDatabase['ServerValue']['TIMESTAMP'];

  constructor(name: string, parentListId: string) {
    this.name = name;
    this.parentListId = parentListId;
  }
}
