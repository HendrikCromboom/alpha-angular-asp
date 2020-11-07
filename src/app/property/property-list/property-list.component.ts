import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {


  properties: Array<any> =
  [
    {

    "Id": 1,
    "Name": "Small Cottage",
    "Type": "House",
    "Price": 12000

  },
  {

    "Id": 2,
    "Name": "Large Cottage",
    "Type": "House",
    "Price": 24000

  },
  {

    "Id": 3,
    "Name": "Villa Cottage",
    "Type": "House",
    "Price": 500000

  },
  {

    "Id": 4,
    "Name": "Castle",
    "Type": "House",
    "Price": 1000000

  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
