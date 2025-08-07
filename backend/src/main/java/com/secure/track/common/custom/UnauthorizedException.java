package com.secure.track.common.custom;

// basic custom exception class for example
public class UnauthorizedException extends RuntimeException {
    public UnauthorizedException(String message) {
        super(message);
    }
}