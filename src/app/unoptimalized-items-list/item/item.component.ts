import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { generateRandomNumber, generateRandomNumbersArray } from 'src/app/utils/pseudo-random-generator';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = {};
  upperIndexes: number[] = [];

  constructor() { }

  ngOnInit(): void {
    //this.upperIndexes = generateRandomNumbersArray(0, 4, generateRandomNumber(1, 5)); // rozwiązanie 3*
  }

}
