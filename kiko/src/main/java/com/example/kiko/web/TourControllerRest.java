package com.example.kiko.web;

import com.example.kiko.models.Location;
import com.example.kiko.models.Tour;
import com.example.kiko.models.dto.TourDto;
import com.example.kiko.service.TourService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/tours")
@CrossOrigin("http://localhost:3000")
public class TourControllerRest {
    private final TourService tourService;

    @GetMapping
    public ResponseEntity<List<Tour>> getAllTours(){
        return ResponseEntity.ok(tourService.getAllTours());
    }

    @PostMapping("/create")
    public ResponseEntity<Tour> createTour(@RequestBody TourDto tourDto){
        Tour tour=tourService.createTour(tourDto.tourName,tourDto.from,tourDto.to,tourDto.description,tourDto.locationId,tourDto.userId,tourDto.imageurl);
        return ResponseEntity.ok(tour);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Tour> getTourById(@PathVariable Long id){
        return ResponseEntity.ok(tourService.getTourById(id));
    }
}
