package com.bookflix.services;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookflix.daos.CartDao;
import com.bookflix.daos.ProductDao;
import com.bookflix.dtos.CartDTO;
import com.bookflix.entities.Cart;
import com.bookflix.entities.Product;

@Transactional
@Service
public class CartServiceImpl {

	@Autowired
	private CartDao cartDao;
	
	@Autowired
	private ProductDao productDao;

	@Autowired
	private ModelMapper modelMapper;

	public boolean addToCart(CartDTO cartDTO) 
	{
		Cart cartProduct =cartDao.getCartByProductIdAndCustomerId(cartDTO.getProductId(),cartDTO.getCustomerId());
		
		if(cartProduct==null) {
			Cart cart = modelMapper.map(cartDTO, Cart.class);
			Object result = cartDao.save(cart);
			
			return result == null ? false : true;
		}else
		{
			int quantity = cartProduct.getUnitQuantity();
			quantity=quantity+cartDTO.getUnitQuantity();
			cartProduct.setUnitQuantity(quantity);
			cartProduct.setTotalPrice(cartProduct.getTotalPrice() + cartDTO.getTotalPrice());
			cartDao.save(cartProduct);
			return true;
			}
		
		
		
	}

	public List<Cart> getCartByUserId(int customerId) {
		List<Cart> cartList = cartDao.getByCustomerId(customerId);
		return cartList;
	}

	public Boolean updateProductQuantity(CartDTO cartDTO) {
		Cart cartProduct =cartDao.getCartByProductIdAndCustomerId(cartDTO.getProductId(),cartDTO.getCustomerId());
		Cart cart = modelMapper.map(cartDTO, Cart.class);
		
		Product product=productDao.getById(cart.getProductId());
		
		int discountedPrice=(int)(product.getPrice()-((product.getPrice()*product.getDiscount())/100));
		cartProduct.setUnitQuantity(cart.getUnitQuantity());
		if(cartProduct.getUnitQuantity()==0) {
			cartDao.deleteById(cartProduct.getId());
		}else {
		cartProduct.setTotalPrice(cart.getUnitQuantity()*discountedPrice);
		cartDao.save(cartProduct);
		}

		return true;
	}

}
