package com.bookflix.dtos;

public class CartDTO {

	int id;
	int customerId;
	String productName;
	int productId;
	int unitQuantity;
	double totalPrice;
	public CartDTO() {
		super();
	}
	public CartDTO(int id, int customerId, String productName, int productId, int unitQuantity, double totalPrice) {
		super();
		this.id = id;
		this.customerId = customerId;
		this.productName = productName;
		this.productId = productId;
		this.unitQuantity = unitQuantity;
		this.totalPrice = totalPrice;
	}
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
