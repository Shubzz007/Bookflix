package com.bookflix.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.bookflix.entities.User;

public interface UserDao extends JpaRepository<User, Integer> {

	User findById(int id);
	User findByEmail(String email);
	
	@Modifying
	@Query("update User u set u.otp = ?1 where u.email = ?2")
	void setOtpByEmail(int otp, String email);
	
	@Query("select otp from User where email = ?1")
	int getOtp(String email);
	
}
