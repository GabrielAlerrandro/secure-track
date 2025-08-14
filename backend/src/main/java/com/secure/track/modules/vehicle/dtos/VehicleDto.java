package com.secure.track.modules.vehicle.dtos;

import java.util.UUID;
import com.secure.track.modules.vehicle.models.VehicleStatus;

import lombok.Builder;

@Builder
public record VehicleDto(
    String model,
    String plate,
    VehicleStatus status,
    String lastLocation,
    Boolean isBlocked,
    UUID user
) {}
