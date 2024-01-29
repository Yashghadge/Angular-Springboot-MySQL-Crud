import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';

const routes: Routes = [
  {path:'',redirectTo:'cars-list',pathMatch:'full'},
  {path:'cars/add-car',component:AddCarComponent},
  {path:"cars-list",component:CarsListComponent},
  {path:"update-car/:id",component:UpdateCarComponent},
  {path:'car-details/:id',component:CarDetailsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
