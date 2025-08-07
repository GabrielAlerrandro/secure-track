package com.secure.track.modules.tracker.models;

import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class GpsData {
    private UUID id;
    // will be the base model of data coming from the GPS
}

