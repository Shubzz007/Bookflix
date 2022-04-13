package com.bookflix.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookflix.dtos.CartDTO;
import com.bookflix.dtos.Response;
import com.bookflix.entities.Cart;
import com.bookflix.services.CartServiceImpl;

@CrossOrigin
@RestController
public class CartController {

	@Autowired
	private CartServiceImpl cartService;

	@PostMapping("/addToCart")
	public ResponseEntity<?> addToCart(@RequestBody CartDTO cartDTO) {

		System.out.println(cartDTO);
		Boolean result = cartService.addToCart(cartDTO);

		if(result == null || result == false) {

			return Response.error("Cart not saved");
		}
		return Response.success(result);
		//return null;
	}
	
	@GetMapping("/getCartByUserId/{customerId}")
	public ResponseEntity<?> getCartByUserId(@PathVariable(name = "customerId") int customerId) {

		List<Cart> result = cartService.getCartByUserId(customerId);
		System.out.println(result);

	
		return Response.success(result);
	}
	
	@PatchMapping("/updateProductCounter")
	public ResponseEntity<?> updateProduct(@RequestBody CartDTO cartDTO) {

		System.out.println(cartDTO);
		Boolean result = cartService.updateProductQuantity(cartDTO);

		if(result == null || result == false) {

			return Response.error("Cart not saved");
		}
		return Response.success(result);
		//return null;
	}
	
	

}
