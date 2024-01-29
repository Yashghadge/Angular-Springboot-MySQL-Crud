import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/cars/cars.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
id!:number;
car: Car = new Car();

constructor(private carService:CarsService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.carService.getCarById(this.id).subscribe(data =>{
      this.car = data;
     
    }
    )
}

onUpdate(){
  this.carService.updateCarById(this.id,this.car).subscribe(
    data =>{
     this.goToCarList();
    
    }
  )
}
goToCarList(){
  this.router.navigate(['/cars-list']);
 }
}
