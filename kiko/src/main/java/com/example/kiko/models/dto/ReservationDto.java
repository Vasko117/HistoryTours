package com.example.kiko.models.dto;

import lombok.AllArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
public class ReservationDto {
    public Long userId;
    public Long tourId;
    public LocalDate reservationDate;
}
