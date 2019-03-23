import {Component, Input, OnInit} from '@angular/core';
import {Item, ItemsService} from '../items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item: Item = {
    description: '',
    selected: false,
  };

  constructor(public itemsService: ItemsService) { }

  ngOnInit() {
  }

  addItem() {
    this.itemsService.addItem(this.item);
    this.item.description = '';
  }

}
