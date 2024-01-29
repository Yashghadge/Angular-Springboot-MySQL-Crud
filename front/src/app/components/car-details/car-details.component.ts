import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/cars/cars.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent  implements OnInit{

  

id:number=0;
car?:Car;
  constructor(private route:ActivatedRoute,private carService:CarsService){}
  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.carService.getCarById(this.id).subscribe(
        data => {
          this.car = new Car();
          console.log("Data received");
          this.car=data;
        }
      );
  }
  
}
