import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']
})
export class ProperyCardCompoment
{
  @Input() property : any
}
