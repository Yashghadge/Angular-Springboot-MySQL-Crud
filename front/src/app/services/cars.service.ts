import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/cars/cars.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  
  private baseUrl="http://localhost:8080/api/cars";

  constructor( private http:HttpClient) {
  
   }

    getCars():Observable<Car[]>{
    return this.http.get<Car[]>(this.baseUrl);
   }

  addCar(car:Car):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,car);
  }

  getCarById(id:number):Observable<Object>{
   return this.http.get<Car[]>(`${this.baseUrl}/${id}`)
  }

  deleteCarById(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateCarById(id:number,car:Car):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,car);
  }
}
