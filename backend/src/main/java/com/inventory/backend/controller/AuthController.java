package com.inventory.backend.controller;

import com.inventory.backend.payload.request.LoginRequest;
import com.inventory.backend.payload.response.MessageResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {
        "https://inventory-management-system-qwr8.vercel.app",
        "http://localhost:5173"
}, allowCredentials = "true")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<MessageResponse> authenticateUser(@RequestBody LoginRequest loginRequest) {

        // Dummy authentication for testing
        if ("kumarrnk712@gmail.com".equalsIgnoreCase(loginRequest.getEmail()) &&
            "password123".equals(loginRequest.getPassword())) {

            return ResponseEntity.ok(new MessageResponse("User authenticated successfully!"));
        } else {
            return ResponseEntity.status(401).body(new MessageResponse("Error: Invalid credentials!"));
        }
    }
}
