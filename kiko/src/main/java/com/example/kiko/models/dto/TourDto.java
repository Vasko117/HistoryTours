package com.example.kiko.models.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
public class TourDto {
    public String tourName;

    public LocalDate from;

    public String imageurl;

    public Long userId;

    public LocalDate to;

    public String description;

    public Long locationId;
}
