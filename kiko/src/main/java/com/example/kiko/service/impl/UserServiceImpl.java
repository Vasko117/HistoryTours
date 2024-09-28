package com.example.kiko.service.impl;

import com.example.kiko.models.User;
import com.example.kiko.repo.UserRepo;
import com.example.kiko.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepo userRepo;

    public UserServiceImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public User loginUser(String username, String password) {
        return userRepo.findByUsernameAndPassword(username,password);
    }
}
