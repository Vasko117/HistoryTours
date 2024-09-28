package com.example.kiko.web;


import com.example.kiko.models.Location;
import com.example.kiko.models.Tour;
import com.example.kiko.service.LocationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/locations")
@CrossOrigin("http://localhost:3000")
public class LocationControllerRest {
    private final LocationService locationService;

    @GetMapping
    public ResponseEntity<List<Location>> getAllLocations(){
        return ResponseEntity.ok(locationService.getAllLocations());
    }

    @GetMapping("/all-locations/{userId}")
    public ResponseEntity<List<Location>> getAllForUserLocations(@PathVariable Long userId){
        return ResponseEntity.ok(locationService.getAllForUserLocations(userId));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Location> getLocationById(@PathVariable Long id){
        return ResponseEntity.ok(locationService.findbyId(id));
    }
    @GetMapping("/tours/{id}")
    public ResponseEntity<List<Tour>> getToursforLocationId(@PathVariable Long id){
        return ResponseEntity.ok(locationService.findbyId(id).getTours());
    }
    @PostMapping("/toggle-favorite/{userId}/{locationId}")
    public ResponseEntity<Boolean> toggleFavoriteLocation(@PathVariable Long userId, @PathVariable Long locationId) {
        boolean isFavorite =locationService.toggleFavoriteLocation(userId, locationId);
        return ResponseEntity.ok(isFavorite);  // Return the new favorite status
    }

}
