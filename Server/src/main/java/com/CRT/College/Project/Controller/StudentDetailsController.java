package com.CRT.College.Project.Controller;

import com.CRT.College.Project.Model.StudentPersonalDetails;
import com.CRT.College.Project.Service.StudentDetailService;
import com.CRT.College.Project.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
public class StudentDetailsController {
    @Autowired
    private UserService userService;

    @Autowired
    private StudentDetailService studentPersonalDetailService;

    @PutMapping("/saveStudentDetails")
    public ResponseEntity<?> saveStudentDetails(@RequestBody StudentPersonalDetails studentPersonalDetails){
        try {
            ResponseEntity<?> userExistence = userService.userExistence( null,studentPersonalDetails.getCollegeEmail());
            if (userExistence.getStatusCode() == HttpStatus.NOT_FOUND) {
                return new ResponseEntity<>("Invalid User", HttpStatus.NOT_FOUND);
            } else {
                StudentPersonalDetails personalDetails = studentPersonalDetailService.saveStudentDetails(studentPersonalDetails);
                if (personalDetails != null){
                    return new ResponseEntity<>(personalDetails,HttpStatus.OK);
                } else {
                    return new ResponseEntity<>("SOMETHING WENT WRONG! WHILE SAVING DATA",HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getStudentData/{email}")
    public ResponseEntity<?> getStudentData(@PathVariable String email) {
        try {
            StudentPersonalDetails details = studentPersonalDetailService.getStudentDetails(email);
            return ResponseEntity.ok(details);
        } catch (IllegalArgumentException e) {
            // Student not found
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            // Other errors
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", e.getMessage()));
        }
    }
}