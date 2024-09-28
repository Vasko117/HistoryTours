package com.example.kiko.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "auth_user")
@Setter
@Getter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private Long id;

    private String username;

    private String email;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Reservation> reservations;

    @ManyToMany
    private List<Location> favoriteLocations;

    public User(String username, String email, String password,UserRole role)
    {
        this.username=username;
        this.email=email;
        this.password=password;
        this.role=role;
        reservations=new ArrayList<Reservation>();
        favoriteLocations= new ArrayList<Location>();
    }
}