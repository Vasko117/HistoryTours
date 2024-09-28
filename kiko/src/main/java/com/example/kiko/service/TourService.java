package com.example.kiko.service;

import com.example.kiko.models.Location;
import com.example.kiko.models.Tour;

import java.time.LocalDate;
import java.util.List;

public interface TourService {
    public Tour createTour(String tourName, LocalDate from, LocalDate to, String description, Long locationId, Long id, String imageurl);
    public List<Tour> getAllTours();
    public Tour getTourById(Long id);
}
