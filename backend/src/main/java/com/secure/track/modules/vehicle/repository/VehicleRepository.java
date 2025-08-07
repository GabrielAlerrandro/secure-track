package com.secure.track.modules.vehicle.repository;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.secure.track.modules.vehicle.models.Vehicle;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle,UUID> {
    
}