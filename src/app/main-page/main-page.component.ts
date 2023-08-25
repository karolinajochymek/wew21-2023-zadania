import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  title: string = 'Witamy na szkoleniu';
  firstPermission: boolean = false; // rozwiązanie 5.1 + rozwiązanie 5.2
  secondPermission: boolean = false; // rozwiązanie 5.2

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(): void {
    this.title += '!';
  }
}
