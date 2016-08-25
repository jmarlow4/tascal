import { Component, OnInit } from '@angular/core';
import { ListsService } from "./lists.service";
import { ListInterface } from "./list.model";
import { FirebaseListObservable } from "angularfire2";

@Component({
  moduleId: module.id,
  selector: 'tas-lists',
  templateUrl: 'lists.component.html',
  styleUrls: ['lists.component.css']
})
export class ListsComponent implements OnInit {

  private displayLists;

  constructor(private listsService: ListsService) {

    this.displayLists = this.listsService.displayLists;

  }

  ngOnInit() {
  }

}
