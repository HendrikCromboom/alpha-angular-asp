import { HousingService } from 'src/app/services/housing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {


  properties: any; // properties json was hardcoded here before

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
   this.housingService.getAllProperties().subscribe(
     data=>{
       this.properties=data;
       console.log(data);
     }, error=>
     console.log(error)
   )
  }

}
