package com.example.kiko.service;

import com.example.kiko.models.Reservation;
import com.example.kiko.models.Tour;
import com.example.kiko.models.User;

import java.time.LocalDate;
import java.util.List;

public interface ReservationService {
    public Reservation findById(Long id);
    public List<Reservation> getAllReservations(Long id);
    public Reservation createReservation(Long userId, Long tourId, LocalDate reservationDate);
}
