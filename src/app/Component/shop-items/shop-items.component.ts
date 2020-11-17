import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.css'],
})
export class ShopItemsComponent implements OnInit {
  item: Item = {};
  items: Item[] = [];
  constructor() {}

  ngOnInit(): void {
    this.item.title = 'Shoes';
    this.item.price = 20;
    this.item.description = 'Test Desc';

    this.items = [
      { title: 'Shoes', price: 20, description: 'xyz', isDiscount: false },
      { title: 'Shirts', price: 20, description: 'xyz', isDiscount: true },
      { title: 'Shorts', price: 20, description: 'xyz', isDiscount: true },
    ];
  }
}
