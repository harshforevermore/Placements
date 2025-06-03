package com.CRT.College.Project.Service;

import com.CRT.College.Project.Model.User;
import com.CRT.College.Project.Repository.UserRepo;
import com.CRT.College.Project.utility.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(12);

    public ResponseEntity<?> userExistence(String regNo,String email) {
        Optional<User> userExist = userRepo.findById(email);
        User dbUser = userRepo.findByRegNo(regNo);
        if (userExist.isEmpty() && dbUser == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(HttpStatus.FOUND);
        }
    }

    public User register(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        if (user.getRole() == null){
            user.setRole("student");
        }
        return userRepo.save(user);
    }

    public ResponseEntity<?> verify(User user) {
        try{
            String input = user.getRegNo(); // Can be regNo or email
            User dbUser = input.endsWith("@jecrcu.edu.in") ?
                    userRepo.findByCollegeEmail(input) :
                    userRepo.findByRegNo(input);
            if (dbUser == null){
                return new ResponseEntity<>("Invalid Username and Password",HttpStatus.NOT_FOUND);
            }
            if (passwordEncoder.matches(user.getPassword(), dbUser.getPassword())){
                return new ResponseEntity<>(new LoginResponse(dbUser),HttpStatus.OK);
            }
            return new ResponseEntity<>("Invalid Username and Password",HttpStatus.BAD_REQUEST);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
