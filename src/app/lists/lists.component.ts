import { Component, OnInit } from '@angular/core';
import { ListsService } from "./lists.service";

@Component({
  moduleId: module.id,
  selector: 'tas-lists',
  templateUrl: 'lists.component.html',
  styleUrls: ['lists.component.css']
})
export class ListsComponent implements OnInit {

  constructor(listsService: ListsService) { }

  ngOnInit() {
  }

}
