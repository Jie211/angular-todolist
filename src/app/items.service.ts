import { Injectable } from '@angular/core';

export interface Item {
  description: string;
  selected: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: Item[] = [];

  constructor() { }

  addItem(item: Item) {
    const copy = Object.assign({}, item);
    this.items.push(copy);
  }
}
