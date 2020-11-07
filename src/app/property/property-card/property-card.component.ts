import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']
})
export class ProperyCardCompoment
{
  Property: any =
  {
    "Id": 1,
    "Name": "Small Cottage",
    "Type": "House",
    "Price": 12000
  }
}
