package com.role.car.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.role.car.models.Car;
import com.role.car.services.CarService;

import jakarta.websocket.server.PathParam;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/cars")
public class CarController {
  
	@Autowired
	CarService carService;
	
	@GetMapping("")
	public List<Car> name() {
		return carService.getCars();
	}
	@PostMapping("")
	public Car name(@RequestBody Car car) {
	return	carService.create(car);
	}
	
	@GetMapping("/{id}")
	public Car GetCarById(@PathVariable int id) {
		return carService.GetCarById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> UpdateCar(@PathVariable int id,@RequestBody Car car){
	  return carService.UpdateCar(id, car);	
	}
	
	@DeleteMapping("/{id}")
	public String DeleteCar(@PathVariable int id) {
		return carService.DeleteCar(id);
	}
}
