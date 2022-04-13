package com.bookflix.dtos;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class ProductDTO {

	private int id; 
	private String product_type;
	private String name;
	private String description;
	private Date create_date;
	private String image;
	private double price;
	private double discount;
	private double qty;
	public ProductDTO() {
		super();
	}
	public ProductDTO(int id, String product_type, String name, String description, Date create_date, String image,
			double price, double discount, double qty) {
		super();
		this.id = id;
		this.product_type = product_type;
		this.name = name;
		this.description = description;
		this.create_date = create_date;
		this.image = image;
		this.price = price;
		this.discount = discount;
		this.qty = qty;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProduct_type() {
		return product_type;
	}
	public void setProduct_type(String product_type) {
		this.product_type = product_type;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getCreate_date() {
		return create_date;
	}
	public void setCreate_date(Date create_date) {
		this.create_date = create_date;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getDiscount() {
		return discount;
	}
	public void setDiscount(double discount) {
		this.discount = discount;
	}
	public double getQty() {
		return qty;
	}
	public void setQty(double qty) {
		this.qty = qty;
	}
	
	
}
