// WebConfig.java

package com.inventory.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Unga API routes "/api/" la start aana, idha apdiye vidunga
            .allowedOrigins("https://inventory-management-system-kf7y.vercel.app") // Unga Vercel Frontend URL
            .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS") // Allow panra methods
            .allowedHeaders("*")
            .allowCredentials(true);
    }
}