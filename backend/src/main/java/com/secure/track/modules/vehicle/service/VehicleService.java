package com.secure.track.modules.vehicle.service;

import java.lang.reflect.Field;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import com.secure.track.modules.user.models.User;
import com.secure.track.modules.user.repository.UserRepository;
import com.secure.track.modules.vehicle.dtos.VehicleDto;
import com.secure.track.modules.vehicle.models.Vehicle;
import com.secure.track.modules.vehicle.repository.VehicleRepository;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private UserRepository userRepository;

    public VehicleDto getByPlate(String plate){
        Optional<VehicleDto> vehicle = vehicleRepository.findActiveVehicleByPlate(plate);
        return vehicle
        .orElseThrow(() -> new RuntimeException("Placa de veículo não cadastrado"));
    }

    public Vehicle getVehicleById(UUID Id) {
        Optional<Vehicle> vehicle = vehicleRepository.findById(Id);
        return vehicle
        .orElseThrow(()-> new RuntimeException("Id de veículo não cadastrado"));
    }

    public Vehicle addCar(VehicleDto newVehicle) {

        User user = userRepository.findById(newVehicle.user())
        .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Vehicle vehicle = Vehicle.builder()
            .model(newVehicle.model())
            .plate(newVehicle.plate())
            .isBlocked(newVehicle.isBlocked())
            .status(newVehicle.status())
            .lastLocation(newVehicle.lastLocation())
            .user(user)
            .build();
    
        return vehicleRepository.save(vehicle);
    }


    public Vehicle updateVehicle(UUID id, Map<String, Object> updates) {
        Vehicle vehicle = vehicleRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Id de veículo não cadastrado"));
    
        updates.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(Vehicle.class, key);
            if (field == null) {
                throw new IllegalArgumentException("Campo inválido: " + key);
            }
            field.setAccessible(true);
            ReflectionUtils.setField(field, vehicle, value);
        });
    
        return vehicleRepository.save(vehicle);
    }

    public void deleteVehicle(UUID id) {
        Vehicle vehicle = vehicleRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Id de veículo não cadastrado"));
        vehicleRepository.delete(vehicle);
    }

    
}
