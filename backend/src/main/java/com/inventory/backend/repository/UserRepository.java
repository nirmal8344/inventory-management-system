package com.inventory.backend.repository;

import com.inventory.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // This method finds a user by their email address.
    Optional<User> findByEmail(String email);
}