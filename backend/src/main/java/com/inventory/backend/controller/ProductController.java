package com.inventory.backend.controller;

import com.inventory.backend.model.Product;
import com.inventory.backend.repository.ProductRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Optional<Product> product = productRepository.findById(id);
        return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        return productRepository.findById(id).map(product -> {
            product.setName(productDetails.getName());
            product.setSku(productDetails.getSku());
            product.setCategory(productDetails.getCategory());
            product.setSupplier(productDetails.getSupplier());
            product.setCostPrice(productDetails.getCostPrice());
            product.setSalePrice(productDetails.getSalePrice());
            product.setQuantity(productDetails.getQuantity());
            product.setStatus(productDetails.getStatus());
            product.setLastUpdated(productDetails.getLastUpdated());
            Product updatedProduct = productRepository.save(product);
            return ResponseEntity.ok(updatedProduct);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        if (!productRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        productRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // THIS IS THE NEW FUNCTION FOR EXPORTING
    @GetMapping("/export")
    public void exportProductsToCSV(HttpServletResponse response) throws IOException {
        response.setContentType("text/csv");
        response.setHeader("Content-Disposition", "attachment; file=products.csv");

        List<Product> products = productRepository.findAll();
        try (PrintWriter writer = response.getWriter()) {
            // Write CSV Header
            writer.println("ID,Name,SKU,Category,Supplier,Cost Price,Sale Price,Quantity,Status,Last Updated");

            // Write Data Rows
            for (Product product : products) {
                writer.printf("%d,\"%s\",\"%s\",\"%s\",\"%s\",%.2f,%.2f,%d,\"%s\",\"%s\"\n",
                        product.getId(),
                        product.getName(),
                        product.getSku(),
                        product.getCategory(),
                        product.getSupplier(),
                        product.getCostPrice(),
                        product.getSalePrice(),
                        product.getQuantity(),
                        product.getStatus(),
                        product.getLastUpdated());
            }
        }
    }
}