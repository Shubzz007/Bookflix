package com.bookflix.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookflix.entities.Product;

public interface ProductDao extends JpaRepository<Product, Integer> {

}
