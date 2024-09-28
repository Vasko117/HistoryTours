package com.example.kiko.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Setter
@Getter
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="tour_id")
    private Long id;

    private String tourName;

    @Column(name = "start_date")
    private LocalDate from;

    @Column(name = "imageurl")
    private String imageurl;

    private Long userId;

    @Column(name = "end_date")
    private LocalDate to;

    private String description;


    @OneToMany(mappedBy = "tour", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("tour")
    private List<Reservation> reservations;

    @ManyToOne
    @JoinColumn(name = "location_id")
    @JsonBackReference
    private Location location;
    public Tour(String tourName,LocalDate from, LocalDate to, String description,Location location,Long id,String imageurl)
    {
        this.tourName=tourName;
        this.imageurl=imageurl;
        this.from=from;
        this.to=to;
        this.userId=id;
        this.description=description;
        this.location=location;
        reservations= new ArrayList<>();
    }
}
