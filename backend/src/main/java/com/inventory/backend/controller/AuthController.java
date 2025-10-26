package com.inventory.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Miga Mukkiyamaana Maatrangal inga dhaan

@RestController
@RequestMapping("/api/auth") // <-- Indha path dhaan unga frontend thedudhu
public class AuthController {

    // Dummy Login Logic (Example ku mattum)
    // Neenga unmaiyaana user details ah database la irundhu eduthu check pannanum
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        // Idhu oru simple example.
        // Unmaiyaana project la, neenga database la user irukangala nu thedanum.
        if ("kumarrnk712@gmail.com".equals(loginRequest.getEmail()) && "password123".equals(loginRequest.getPassword())) {
            // Login successful aana, oru success message anupalam
            return ResponseEntity.ok(new MessageResponse("User authenticated successfully!"));
        } else {
            // Thappaana details na, error anupalam
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Invalid credentials!"));
        }
    }

    // Puthusa User ah register panra logic (thevai na use pannikalam)
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        // Inga neenga user ah database la save panra code ah ezhudhanum
        System.out.println("Registering user: " + registerRequest.getEmail());
        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}

// === Data Transfer Objects (DTOs) ===
// Frontend la irundhu vara JSON data va vaanguradhuku indha classes thevai

class LoginRequest {
    private String email;
    private String password;

    // Getters and Setters
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}

class RegisterRequest {
    private String email;
    private String password;
    private String username;

    // Getters and Setters
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}

class MessageResponse {
    private String message;

    public MessageResponse(String message) {
        this.message = message;
    }

    // Getter and Setter
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}