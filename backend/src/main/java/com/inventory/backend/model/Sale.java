package com.inventory.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;
    
    // To keep it simple, we will store the list of products as plain text (String).
    private String products; 

    private Double totalAmount;
    private String paymentStatus;
    private String date;
}