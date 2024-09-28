package com.example.kiko.service.impl;

import com.example.kiko.exception.LocationNotFoundException;
import com.example.kiko.exception.TourNotFoundException;
import com.example.kiko.models.Location;
import com.example.kiko.models.Tour;
import com.example.kiko.repo.LocationRepo;
import com.example.kiko.repo.TourRepo;
import com.example.kiko.service.TourService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor
public class TourServiceImpl implements TourService {
    private final TourRepo tourRepo;
    private final LocationRepo locationRepo;

    @Override
    public Tour createTour(String tourName, LocalDate from, LocalDate to, String description, Long locationId, Long id, String imageurl) {
        Location location=locationRepo.findById(locationId).orElseThrow(LocationNotFoundException::new);
        Tour tour=new Tour(tourName,from,to,description,location,id,imageurl);
        location.getTours().add(tour);
        return tourRepo.save(tour);
    }

    @Override
    public List<Tour> getAllTours() {
        return tourRepo.findAll();
    }

    @Override
    public Tour getTourById(Long id) {
        return tourRepo.findById(id).orElseThrow(TourNotFoundException::new);
    }
}
