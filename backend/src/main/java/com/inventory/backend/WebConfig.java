package com.inventory.backend; // <-- INGA UNGA APP-ODA MUKKIYA PACKAGE NAME PODUNGA

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // Ella API endpoints-kum allow panradhuku: "/**"
                registry.addMapping("/**")
                        
                        // <--- INDHA URL-AI UNGA VERCEL FRONTEND URL-AAGA MAATRUNGAL!
                        .allowedOrigins("https://inventory-management-system-qqvk.vercel.app/") 
                        
                        // Enna HTTP methods (GET, POST, etc.) allow pannanum
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        
                        // Ella headers-um, cookies/authentication information-um allow panradhuku
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}