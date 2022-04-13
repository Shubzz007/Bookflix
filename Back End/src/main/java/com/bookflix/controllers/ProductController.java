package com.bookflix.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bookflix.dtos.ProductDTO;
import com.bookflix.dtos.Response;
import com.bookflix.dtos.UserDTO;
import com.bookflix.entities.Credentials;
import com.bookflix.services.ProductServiceImpl;

@CrossOrigin
@RestController
public class ProductController {
	
	@Autowired
	private ProductServiceImpl productServiceImpl;
	
	@GetMapping("/products")
	public ResponseEntity<?> listAllProducts() {
		
		List<ProductDTO> products = productServiceImpl.getAllProducts();
		
		if(products == null || products.isEmpty()) {
			
			return Response.error("Products not found");
			}
		return Response.success(products);
	}

}
