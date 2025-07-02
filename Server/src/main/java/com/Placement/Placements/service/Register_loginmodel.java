package com.Placement.Placements.service;

import com.Placement.Placements.model.Student_data;
import com.Placement.Placements.repo.Register_loginrepo;
import com.Placement.Placements.uitllity.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class Register_loginmodel {

    @Autowired
    private Register_loginrepo Repo;


    public ResponseEntity<?> userExistence(String regNo, String Email) {
        Student_data userExist = Repo.findByEmail(Email);
        Student_data dbUser = Repo.findByRegNo(regNo);
        if (userExist == null && dbUser == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(HttpStatus.FOUND);
        }
    }
    public Student_data register(Student_data user) {
        return Repo.save(user);
    }
    public ResponseEntity<?> verify(Student_data user) {
        try{
            String input = user.getRegNo(); // Can be regNo or email
            Student_data dbUser = input.endsWith("@jecrcu.edu.in") ?
                    Repo.findByEmail(input) :
                    Repo.findByRegNo(input);
            if (dbUser == null){
                return new ResponseEntity<>("Invalid Username and Password",HttpStatus.NOT_FOUND);
            }
           else {
                return new ResponseEntity<>(new LoginResponse(dbUser),HttpStatus.OK);
            }
        } catch (Exception e){
            return new ResponseEntity<>("SOMETHING WENT WRONG",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
