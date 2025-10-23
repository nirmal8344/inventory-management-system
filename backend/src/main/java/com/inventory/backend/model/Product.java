package com.inventory.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String sku;
    private String category;
    private String supplier;
    private Double costPrice;
    private Double salePrice;
    private Integer quantity;
    private String status;
    private String lastUpdated;
}