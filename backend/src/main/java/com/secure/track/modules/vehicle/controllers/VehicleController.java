package com.secure.track.modules.vehicle.controllers;

import java.time.Instant;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.secure.track.common.dtos.APIResponse;
import com.secure.track.modules.vehicle.dtos.VehicleDto;
import com.secure.track.modules.vehicle.models.Vehicle;
import com.secure.track.modules.vehicle.service.VehicleService;

@RestController
@RequestMapping("/vehicle")
public class VehicleController {

        @Autowired
        private VehicleService service;

        @GetMapping("/{plate}")
        public ResponseEntity<APIResponse<VehicleDto>> getCarByPlate(@PathVariable("plate") String plate ) {

                VehicleDto vehicle = service.getByPlate(plate);

                APIResponse<VehicleDto> response = APIResponse.<VehicleDto>builder()
                        .data(vehicle)
                        .timestamp(Instant.now())
                        .sucess(true)
                        .build();

                return ResponseEntity.ok(response);
        }

        @GetMapping("/{id}")
        public ResponseEntity<APIResponse<Vehicle>> getCarByid(@PathVariable("id") UUID id) {

                Vehicle vehicle = service.getVehicleById(id);

                APIResponse<Vehicle> response = APIResponse.<Vehicle>builder()
                        .data(vehicle)
                        .timestamp(Instant.now())
                        .sucess(true)
                        .build();

                return ResponseEntity.ok(response);
        }
        
        @PostMapping("/")
        public ResponseEntity<APIResponse<Vehicle>> addCar(@RequestBody VehicleDto newVehicleDto) {
                Vehicle vehicle = service.addCar(newVehicleDto);

                APIResponse<Vehicle> response = APIResponse.<Vehicle>builder()
                        .data(vehicle)
                        .timestamp(Instant.now())
                        .sucess(true)
                        .build();

                return ResponseEntity.ok(response);
        }

        @PutMapping("/{id}")
        public ResponseEntity<APIResponse<Vehicle>> updateCarByPlate(@PathVariable("id") UUID id, @RequestBody Map<String, Object> updates) {

                Vehicle vehicle = service.updateVehicle(id, updates);

                APIResponse<Vehicle> response = APIResponse.<Vehicle>builder()
                        .data(vehicle)
                        .timestamp(Instant.now())
                        .sucess(true)
                        .build();

                return ResponseEntity.ok(response);
        }


        @DeleteMapping
        public ResponseEntity<APIResponse<VehicleDto>> deleteCarByPlate() {
                return null;    
        }
}
