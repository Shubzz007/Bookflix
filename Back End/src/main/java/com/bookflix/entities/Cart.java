package com.bookflix.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cart")
public class Cart {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	int id;
	@Column(name="customerid")
	int customerId;
	@Column(name="productname")
	String productName;
	@Column(name="productid")
	int productId;
	@Column(name="unitquantity")
	int unitQuantity;
	@Column(name="totalprice")
	double totalPrice;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	
	public int getCustomerId() {
		return customerId;
	}
	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public int getUnitQuantity() {
		return unitQuantity;
	}
	public void setUnitQuantity(int unitQuantity) {
		this.unitQuantity = unitQuantity;
	}
	public double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	
}
