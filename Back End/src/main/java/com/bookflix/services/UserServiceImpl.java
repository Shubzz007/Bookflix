package com.bookflix.services;

import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bookflix.daos.UserDao;
import com.bookflix.dtos.UserDTO;
import com.bookflix.entities.Credentials;
import com.bookflix.entities.User;

@Transactional
@Service
public class UserServiceImpl {

	@Autowired
	private JavaMailSender javaMailSender;
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder encoder;

	@Autowired
	private ModelMapper modelMapper;

	public UserDTO findUserById(int userId) {
		UserDTO userDto = new UserDTO();
		User user = userDao.findById(userId);

		userDto = modelMapper.map(user, UserDTO.class);

		return userDto;
	}

	public UserDTO findUserByEmail(String email) {

		User user = userDao.findByEmail(email);
		if (user != null) {
			UserDTO userDto = new UserDTO();
			userDto = modelMapper.map(user, UserDTO.class);
			return userDto;
		} else
			return null;

	}

	public UserDTO findUserByEmailAndPassword(Credentials cred) {

		UserDTO userDto = new UserDTO();
		User dbUser = userDao.findByEmail(cred.getEmail());

		if (dbUser != null && encoder.matches(cred.getPassword(), dbUser.getPassword())) {

			return modelMapper.map(dbUser, UserDTO.class);

		}
		return null;
	}

	public UserDTO saveUser(User user) {

		user.setPassword(encoder.encode(user.getPassword()));
		user = userDao.save(user);
		System.out.println(user);
		return modelMapper.map(user, UserDTO.class);

	}

	public int generateOtp(String email) {
		Random random = new Random();
		int otp = 100000 + random.nextInt(900000);
		userDao.setOtpByEmail(otp, email);
		return otp;

	}

	public boolean isOtpValid(Credentials cred) {
		User user= userDao.findByEmail(cred.getEmail());
		if (user.getOtp() == cred.getOtp())
		{
			user.setPassword(encoder.encode(cred.getPassword()));
			user = userDao.save(user);
			return true;
		}
		else
		{
			return false;
		}
	}

	public void sendOtpMail(String email,int otp) throws MessagingException {
		
		MimeMessage msg = javaMailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(msg,true);
		helper.setTo(email);
		helper.setSubject("Your Otp is valid for 5 minutes");
		helper.setText("OTP : "+otp);
		javaMailSender.send(msg);
		
		
	}

}
