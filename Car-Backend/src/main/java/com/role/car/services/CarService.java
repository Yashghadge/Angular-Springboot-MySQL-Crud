package com.role.car.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.role.car.models.Car;
import com.role.car.repositories.CarRepository;
import com.role.car.response.wrappers.CarResponseWrapper;

@Service
public class CarService {
 
	@Autowired
	CarRepository carRepository;
	
	CarResponseWrapper crw = new CarResponseWrapper();
	
	public List<Car> getCars() {
		return carRepository.findAll();
	}
	
	public Car create(Car car) {
	return	carRepository.save(car);
	}
	
	public Car GetCarById(int id) {
	return carRepository.findById(id).orElseThrow(
			()->{
			  throw new ResponseStatusException(HttpStatus.NOT_FOUND,id+" not found");
			});
	}
	
	public ResponseEntity<?> UpdateCar(int id,Car car) {
	Car  carID= carRepository.findById(id).orElseThrow(
					()->{
					  throw new ResponseStatusException(HttpStatus.NOT_FOUND,id+" not found");
					});
	    car.setId(id);
	    Car updateCar= carRepository.save(car);
	    crw.setMessage("Car Updated");
	    crw.setData(updateCar);
	    return new ResponseEntity<>(crw,HttpStatus.OK);
	    
	}
	
	public String DeleteCar(int id) {
		carRepository.deleteById(id);
		return "Deleted Successfully with "+id;
	}
}
