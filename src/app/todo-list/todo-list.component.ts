import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public itemsService: ItemsService) { }

  ngOnInit() {
  }

}
