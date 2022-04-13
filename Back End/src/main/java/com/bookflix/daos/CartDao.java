package com.bookflix.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookflix.entities.Cart;

public interface CartDao extends JpaRepository<Cart, Integer> {

	List<Cart> getByCustomerId(int customerId);
	Cart getCartByProductIdAndCustomerId(int productId,int customerId);

}
