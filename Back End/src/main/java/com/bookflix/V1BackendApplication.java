package com.bookflix;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class V1BackendApplication {

	

	public static void main(String[] args) {
		SpringApplication.run(V1BackendApplication.class, args);
		
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
	
	

	
	
}
