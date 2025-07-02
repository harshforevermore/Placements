package com.Placement.Placements.Controller;

import com.Placement.Placements.model.Student_data;
import com.Placement.Placements.service.Register_loginmodel;
import com.Placement.Placements.uitllity.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
public class Registration_LoginController {
    @Autowired
    private Register_loginmodel registerLoginmodel;

    @PostMapping("/studentregister")
    public ResponseEntity<?> register(@RequestBody Student_data user) {
        try {
            ResponseEntity<?> userExistence = registerLoginmodel.userExistence(user.getRegNo(), user.getEmail());
            if (userExistence.getStatusCode() == HttpStatus.FOUND) {
                return new ResponseEntity<>("USER ALREADY REGISTERED", HttpStatus.CONFLICT);
            }
            Student_data registeredUser = registerLoginmodel.register(user);
            if (registeredUser != null) {
                return new ResponseEntity<>(HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("SOMETHING WENT WRONG! WHILE SAVING DATA", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("studentlogin")
    public ResponseEntity<?> loginUser(@RequestBody Student_data user){
        return registerLoginmodel.verify(user);
    }
}
