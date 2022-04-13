package com.bookflix.controllers;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookflix.dtos.Response;
import com.bookflix.dtos.UserDTO;
import com.bookflix.entities.Credentials;
import com.bookflix.entities.User;
import com.bookflix.services.UserServiceImpl;

@RequestMapping("/user")
@CrossOrigin
@RestController
public class UserControllerImpl {

	
	
	@Autowired
	private UserServiceImpl userService;

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Credentials cred) {

		UserDTO userDto = userService.findUserByEmailAndPassword(cred);

		if (userDto == null) {
			System.out.println(userDto);
			return Response.error("user not found");

//			return ResponseEntity.notFound().build();
		}
		return Response.success(userDto);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody User user) {
		return ResponseEntity.ok(userService.saveUser(user));
	}

	@PostMapping("/generate-otp")
	public ResponseEntity<?> generateOtp(@RequestBody Credentials cred) throws MessagingException {
		System.out.println(cred);
		UserDTO user = userService.findUserByEmail(cred.getEmail());
		if (user != null) {
			int otp=userService.generateOtp(cred.getEmail());
			userService.sendOtpMail(cred.getEmail(),otp);
			return Response.success("valid user ");

		} else {
			return Response.error("user not found !!");
		}

	}
	@PutMapping("/validate-otp")
	public ResponseEntity<?> validateOtpAndSavePassword(@RequestBody Credentials cred)
	{
		if(userService.isOtpValid(cred))
		{
			return Response.success("Password updated ");
		}
		else
		{
			return Response.error("Otp is invalid");
		}
	}
}
