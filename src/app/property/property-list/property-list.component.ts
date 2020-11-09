import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {


  properties: any; // properties json was hardcoded here before

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('data/properties.json').subscribe(
      data=>{
        this.properties = data;
      data=>console.log(data);
      }
    );
  }

}
