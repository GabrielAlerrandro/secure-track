package com.secure.track.modules.vehicle.repository;

import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.secure.track.modules.vehicle.dtos.VehicleDto;
import com.secure.track.modules.vehicle.models.Vehicle;
import feign.Param;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle,UUID> {
    @Query("""
       SELECT new com.seuprojeto.dtos.VehicleDto(
           v.plate,
           v.model,
           v.lastLocation,
           v.isBlocked,
           v.status
       )
       FROM Vehicle v
       WHERE v.plate = :plate AND v.isBlocked = false
       """)
    Optional<VehicleDto> findActiveVehicleByPlate(@Param("plate") String plate);

    Optional<Vehicle> findyById(UUID id);

}