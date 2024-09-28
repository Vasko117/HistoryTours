package com.example.kiko.service.impl;

import com.example.kiko.exception.ReservationNotFoundException;
import com.example.kiko.exception.TourNotFoundException;
import com.example.kiko.exception.UserNotFoundException;
import com.example.kiko.models.Reservation;
import com.example.kiko.models.Tour;
import com.example.kiko.models.User;
import com.example.kiko.models.dto.ReservationDto;
import com.example.kiko.repo.ReservationRepo;
import com.example.kiko.repo.TourRepo;
import com.example.kiko.repo.UserRepo;
import com.example.kiko.service.ReservationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor
public class ReservationServiceImpl implements ReservationService {
    private final ReservationRepo reservationRepo;
    private final UserRepo userRepo;
    private final TourRepo tourRepo;
    @Override
    public Reservation findById(Long id) {
        return reservationRepo.findById(id).orElseThrow(ReservationNotFoundException::new);
    }

    @Override
    public List<Reservation> getAllReservations(Long id) {
        User user =userRepo.findById(id).orElseThrow(UserNotFoundException::new);
        return user.getReservations();
    }

    @Override
    public Reservation createReservation(Long userId, Long tourId, LocalDate reservationDate) {
        User user =userRepo.findById(userId).orElseThrow(UserNotFoundException::new);
        Tour tour= tourRepo.findById(tourId).orElseThrow(TourNotFoundException::new);
        Reservation reservation=new Reservation(user,tour,reservationDate);
        user.getReservations().add(reservation);
        userRepo.save(user);
        return reservation;
    }
}
