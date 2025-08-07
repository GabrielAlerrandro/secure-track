package com.secure.track.modules.vehicle.models;

import org.hibernate.annotations.UuidGenerator;
import org.springframework.data.annotation.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.UUID;

    @Entity
    @Data
    @Table(name = "vehicles")
    public class Vehicle {

        @Id
        @GeneratedValue
        @UuidGenerator
        private UUID id;

        @NotBlank(message = "Model must not be blank")
        @Size(max = 100, message = "Model must be at most 100 characters")
        private String model;

        @NotBlank(message = "Plate must not be blank")
        @Pattern(regexp = "^[A-Z0-9-]{1,10}$", message = "Invalid plate format")
        @Column(unique = true)
        private String plate;

        @Enumerated(EnumType.STRING)
        @NotNull(message = "Status is required")
        private VehicleStatus status;

        @NotBlank(message = "Last location must not be blank")
        @Size(max = 255)
        private String lastLocation;

        @NotNull(message = "isBlocked must not be null")
        private Boolean isBlocked;
    }