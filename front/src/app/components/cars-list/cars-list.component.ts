import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Subject } from 'rxjs';

import { Car } from 'src/app/models/cars/cars.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
  
})
export class CarsListComponent implements OnInit {
  

  cars?:Car[];

  





constructor(private carService:CarsService,
  private router:Router){}


// private  retrieveCars(){

//     console.log(data);
    
//   },
//   error:(e)=>console.error(`Error ${e}`),
// });
// }
ngOnInit(): void {

  
   this.getCars();
     
  
    
  }
private getCars(){
  this.carService.getCars().subscribe(
    (data:any)=>{
      this.cars = data;
    
  });
}


carDetails(id: number){
 this.router.navigate(['car-details',id]);
}

deleteCar(id:number){
this.carService.deleteCarById(id).subscribe(
  (data:any) =>{
    console.log(data);
    
    this.getCars=data;
    this.router.navigate(['/cars-list']);
  }
)
}

// goToCarList(){
//   // this.router.navigate(['/cars-list']);
//   window.location.reload();
//  }

updateCarById(id:number){
 this.router.navigate(['update-car',id]);
}




}
