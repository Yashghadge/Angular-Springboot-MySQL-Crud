package com.role.car.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.role.car.models.Car;

public interface CarRepository extends JpaRepository<Car, Integer> {

}
