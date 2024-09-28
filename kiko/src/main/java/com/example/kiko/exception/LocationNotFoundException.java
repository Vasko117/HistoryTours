package com.example.kiko.exception;

import jakarta.persistence.EntityNotFoundException;

public class LocationNotFoundException extends EntityNotFoundException {
    public LocationNotFoundException(){
        super("Location not found");
    }
}
