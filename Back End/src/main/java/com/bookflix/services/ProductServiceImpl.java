package com.bookflix.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookflix.daos.ProductDao;
import com.bookflix.dtos.ProductDTO;
import com.bookflix.dtos.UserDTO;
import com.bookflix.entities.Product;

@Service
@Transactional
public class ProductServiceImpl {
	
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private ModelMapper modelMapper;

	public List<ProductDTO> getAllProducts() 
	{
		List<ProductDTO> productDtoList = new ArrayList<>();
		ProductDTO productDTO = new ProductDTO();
		List<Product> list = productDao.findAll();
		
		for(Product p : list) {
			productDTO = modelMapper.map(p, ProductDTO.class);
			productDtoList.add(productDTO);
		}
		return productDtoList;
	}
}
