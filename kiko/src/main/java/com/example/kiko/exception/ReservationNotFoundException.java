package com.example.kiko.exception;

import com.example.kiko.models.Reservation;
import jakarta.persistence.EntityNotFoundException;

public class ReservationNotFoundException extends EntityNotFoundException {
    public ReservationNotFoundException(){
       super("Reservation not found");
    }
}
