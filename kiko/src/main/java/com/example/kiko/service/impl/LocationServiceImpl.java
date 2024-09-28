package com.example.kiko.service.impl;

import com.example.kiko.exception.LocationNotFoundException;
import com.example.kiko.exception.UserNotFoundException;
import com.example.kiko.models.Location;
import com.example.kiko.models.User;
import com.example.kiko.repo.LocationRepo;
import com.example.kiko.repo.UserRepo;
import com.example.kiko.service.LocationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class LocationServiceImpl implements LocationService {
    private final UserRepo userRepo;
    private final LocationRepo locationRepo;
    @Override
    public Location findbyId(Long id) {
        return locationRepo.findById(id).orElseThrow(LocationNotFoundException::new);
    }

    @Override
    public List<Location> getAllLocations() {
        return locationRepo.findAll();
    }

    @Override
    public List<Location> getAllForUserLocations(Long userId) {
        User user=userRepo.findById(userId).orElseThrow(UserNotFoundException::new);
        List<Location> allLocations=locationRepo.findAll();
        List<Location> unlikedLocations=new ArrayList<>();
        for(Location location : allLocations){
            if(user.getFavoriteLocations().contains(location)){
                unlikedLocations.add(location);
            }
        }
        return unlikedLocations;
    }

    @Override
    public boolean toggleFavoriteLocation(Long userId,Long locationId) {
        User user = userRepo.findById(userId).orElseThrow( UserNotFoundException::new);
        Location location = locationRepo.findById(locationId).orElseThrow(LocationNotFoundException::new);

        if (user.getFavoriteLocations().contains(location)) {
            user.getFavoriteLocations().remove(location);
        } else {
            user.getFavoriteLocations().add(location);
        }

        userRepo.save(user);
        return user.getFavoriteLocations().contains(location);
    }


}
