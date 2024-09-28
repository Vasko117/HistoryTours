package com.example.kiko.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "tour_id")
    @JsonIgnoreProperties("reservations")
    private Tour tour;

    private LocalDate reservationDate;

    private String status;

    public Reservation(User user, Tour tour, LocalDate reservationDate)
    {
        this.user=user;
        this.tour=tour;
        this.reservationDate=reservationDate;
        this.status="UPCOMING";
    }
}
