package com.inventory.backend.controller;


import com.inventory.backend.payload.request.LoginRequest;
import com.inventory.backend.payload.response.MessageResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
       
        if ("kumarrnk712@gmail.com".equals(loginRequest.getEmail()) && "password123".equals(loginRequest.getPassword())) {
            
            
            return ResponseEntity.ok(new MessageResponse("User authenticated successfully!"));
        } else {
            
            return ResponseEntity.status(401).body(new MessageResponse("Error: Invalid credentials!"));
        }
    }
}