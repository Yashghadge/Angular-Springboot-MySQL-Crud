import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCarComponent } from './add-car/add-car.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

import { UpdateCarComponent } from './components/update-car/update-car.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    AddCarComponent,
    PageNotFoundComponent,
    CarDetailsComponent,
    UpdateCarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
