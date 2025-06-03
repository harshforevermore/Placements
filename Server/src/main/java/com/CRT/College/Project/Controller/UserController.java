package com.CRT.College.Project.Controller;

import com.CRT.College.Project.Model.User;
import com.CRT.College.Project.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/auth/register")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        try{
            ResponseEntity<?> userExistence = userService.userExistence(user.getRegNo(),user.getCollegeEmail());
            if (userExistence.getStatusCode() == HttpStatus.FOUND){
                return new ResponseEntity<>("USER ALREADY REGISTERED",HttpStatus.CONFLICT);
            }
            User registeredUser = userService.register(user);
            if (registeredUser != null){
                return new ResponseEntity<>(HttpStatus.CREATED);
            }else{
                return new ResponseEntity<>("SOMETHING WENT WRONG! WHILE SAVING DATA",HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/auth/login")
    public ResponseEntity<?> loginUser(@RequestBody User user){
        return userService.verify(user);
    }
}
