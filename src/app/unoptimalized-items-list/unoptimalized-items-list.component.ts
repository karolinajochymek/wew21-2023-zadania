import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-unoptimalized-items-list',
  //templateUrl: './unoptimalized-items-list.component-1-1.html',// rozwiązanie 1.1
  //templateUrl: './unoptimalized-items-list.component-1-2.html',// rozwiązanie +1.2
  //templateUrl: './unoptimalized-items-list.component-1-3.html',// rozwiązanie +1.3
  templateUrl: './unoptimalized-items-list.component-1-5.html',// rozwiązanie +1.5
  //templateUrl: './unoptimalized-items-list.component.html',
  styleUrls: ['./unoptimalized-items-list.component.scss']
})
export class UnoptimalizedItemsListComponent implements OnInit {

  //items: Item[] = [];
    items: Item[] =[
    {
        no: 1,
        name: "One",
        quantity: 2,
        price: 25.34,
        percentage: 0.75,
        createDate: "2022-12-01",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Vincent_van_Gogh%E2%80%99s_famous_painting%2C_digitally_enhanced_by_rawpixel-com_18.jpg"},
    {
        no: 2,
        name: "Two",
        quantity: 4,
        price: 26,
        percentage: 0.5,
        createDate: "2022-12-01",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Landscape_from_Saint-R%C3%A9my_by_Vincent_Van_Gogh%2C_1889_-_Ny_Carlsberg_Glyptotek_-_Copenhagen_-_DSC09457.JPG"},
    {
        no: 3,
        name: "Three",
        quantity: 6,
        price: 5.1,
        percentage: 0.255,
        createDate: "2022-12-01",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Claude_Monet_052.jpg/1656px-Claude_Monet_052.jpg"}
]  // rozwiązanie +1.2

  filter: string = '';

  constructor() { }

  get filteredItems(): Item[] {
    //return this.items;
    return this.items.filter(x => x.name?.toLocaleLowerCase()?.includes(this.filter.toLocaleLowerCase())); // rozwiązanie +1.5
  }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
  }

}
