package com.example.kiko.repo;

import com.example.kiko.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    public User findByUsernameAndPassword(String username,String password);
}
