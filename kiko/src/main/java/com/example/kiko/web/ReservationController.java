package com.example.kiko.web;

import com.example.kiko.models.Reservation;
import com.example.kiko.models.Tour;
import com.example.kiko.models.dto.ReservationDto;
import com.example.kiko.models.dto.TourDto;
import com.example.kiko.service.ReservationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/reservations")
@CrossOrigin("http://localhost:3000")
public class ReservationController {
    private final ReservationService reservationService;
    @GetMapping("/by-user/{userId}")
    public ResponseEntity<List<Reservation>> getAllReservations(@PathVariable Long userId){
        return ResponseEntity.ok(reservationService.getAllReservations(userId));
    }

    @PostMapping("/create")
    public ResponseEntity<Reservation> createReservation(@RequestBody ReservationDto reservationDto){
        return ResponseEntity.ok(reservationService.createReservation(reservationDto.userId,reservationDto.tourId,reservationDto.reservationDate));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable Long id) {
        return ResponseEntity.ok(reservationService.findById(id));
    }
}
