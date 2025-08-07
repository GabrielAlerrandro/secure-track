package com.secure.track.common.dtos;

import java.time.Instant;
import java.util.List;
import lombok.Builder;
import lombok.Getter;

// responsible for all api responses
@Getter
@Builder
public class APIResponse<T> {
    private final Instant timestamp;
    private final T data;
    private final List<String> errors;
}