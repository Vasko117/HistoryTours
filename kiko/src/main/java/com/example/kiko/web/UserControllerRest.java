package com.example.kiko.web;

import com.example.kiko.models.User;
import com.example.kiko.models.dto.UserDto;
import com.example.kiko.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/users")
@CrossOrigin("http://localhost:3000")
public class UserControllerRest {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<User> logIn(@RequestBody UserDto userDto){
        return ResponseEntity.ok(userService.loginUser(userDto.getUsername(),userDto.getPassword()));
    }
}
