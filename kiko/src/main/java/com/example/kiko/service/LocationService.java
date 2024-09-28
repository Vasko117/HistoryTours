package com.example.kiko.service;

import com.example.kiko.models.Location;

import java.util.List;

public interface LocationService {
    public Location findbyId(Long id);
    public List<Location> getAllLocations();
    public List<Location> getAllForUserLocations(Long userId);
    public boolean toggleFavoriteLocation(Long userId,Long locationId);
}
