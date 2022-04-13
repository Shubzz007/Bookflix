package com.bookflix.entities;

public class Credentials {

	private String email;
	private String password;
	private int otp;
	
	
	public Credentials() {
		// TODO Auto-generated constructor stub
	}

	public Credentials(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getOtp() {
		return otp;
	}

	public void setOtp(int otp) {
		this.otp = otp;
	}

	public Credentials(String password, int otp) {
		super();
		this.password = password;
		this.otp = otp;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Credentials [email=" + email + ", password=" + password + "]";
	}

	public Credentials(String email) {
		super();
		this.email = email;
	}
	
	
	
}
