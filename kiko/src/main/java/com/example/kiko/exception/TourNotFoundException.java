package com.example.kiko.exception;

import jakarta.persistence.EntityNotFoundException;

public class TourNotFoundException extends EntityNotFoundException {
    public TourNotFoundException(){
        super("Tour not found");
    }
}
