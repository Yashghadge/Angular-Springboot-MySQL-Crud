import { Component, OnInit } from '@angular/core';
import { Car } from '../models/cars/cars.model';
import { CarsService } from '../services/cars.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
car:Car=new Car();

carForm?:FormGroup;
constructor(private carService:CarsService,
  private router:Router ,private formbuilder:FormBuilder){}

ngOnInit(): void {
  this.carForm = this.formbuilder.group({
    name:['',[Validators.required]],
    model:['',[Validators.required]],
    price:['',[Validators.required]],
  })
}
  addCar(){
   console.log(this.car);
   this.carService.addCar(this.car).subscribe
   (data => {
    alert("Car added successfully");
    console.log(data);
    this.goToCarList();

   },
  
   );
  }

  goToCarList(){
   this.router.navigate(['/cars-list']);
  }

  onSubmit(){
    console.log(this.car);
    this.addCar();
  }

  
}
