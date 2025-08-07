package com.secure.track.common.dtos;

import java.time.LocalDateTime;

// responsible for all api error responses
public record ErrorResponse(
    LocalDateTime timestamp,
    String message,
    String errorCode
) {}