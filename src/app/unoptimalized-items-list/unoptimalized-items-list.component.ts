import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-unoptimalized-items-list',
  templateUrl: './unoptimalized-items-list.component.html',
  styleUrls: ['./unoptimalized-items-list.component.scss']
})
export class UnoptimalizedItemsListComponent implements OnInit {

  items: Item[] = [];

  filter: string = '';

  constructor() { }

  get filteredItems(): Item[] {
    return this.items;
  }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
  }

}
