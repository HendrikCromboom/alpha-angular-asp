import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProperyCardCompoment } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProperyCardCompoment,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
