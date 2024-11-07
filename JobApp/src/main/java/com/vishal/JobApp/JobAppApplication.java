package com.vishal.JobApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class JobAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobAppApplication.class, args);

	}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/login").allowedOrigins("*");
				registry.addMapping("/**")  // Applies to all endpoints
						.allowedOriginPatterns("http://localhost:5173/")  // Allows requests from any origin
						.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Allows these HTTP methods
						.allowedHeaders("*")  // Allows all headers
						.allowCredentials(true);  // If using cookies/auth tokens
			}
		};
	}


}
