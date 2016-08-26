import { FirebaseDatabase } from "angularfire2";

/* Subtask Data Structure
-- URL: https://tascal-db9ee.firebaseio.com/subtasks/(taskId)/

 subtasks: [
  (taskId:) [
    (subtask:) {
      key: FireBase-generated-UID
      name: text
      parentTaskID: UserUID
      active: bool
      completed: bool
      whoCompleted: UserUID
      createdAt: number
    }
  ]
]
*/

export interface SubtaskInterface {
  $key?: string;
  name: string;
  parentTaskId: string;
  active: boolean;
  completed: boolean;
  whoCompleted: string;
  createdAt: number;
}

export class Subtask implements SubtaskInterface {
  name: string;
  parentTaskId: string;
  active: boolean = true;
  completed: boolean = false;
  whoCompleted: string = null;
  createdAt: number = new Date().getTime();

  constructor(name: string, parentTaskId: string) {
    this.name = name;
    this.parentTaskId = parentTaskId;
  }
}
