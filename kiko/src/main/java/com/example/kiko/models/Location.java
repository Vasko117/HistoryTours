package com.example.kiko.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Setter
@Getter
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imageurl;

    private String name;

    private String description;

    @OneToMany(mappedBy = "location", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Tour> tours = new ArrayList<>();

    private String period;


    public Location(String name, String description,String imageurl,String period)
    {
        this.imageurl=imageurl;
        this.name=name;
        this.description=description;
        this.period=period;
        tours= new ArrayList<>();
    }
}
