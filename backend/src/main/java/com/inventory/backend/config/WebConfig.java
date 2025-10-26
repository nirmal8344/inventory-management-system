package com.inventory.backend.config; 

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Ella API paths kum allow pannu
                .allowedOrigins("*") // Endha frontend URL la irundhum allow pannu
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Indha methods ah laam allow pannu
                .allowedHeaders("*");
    }
}