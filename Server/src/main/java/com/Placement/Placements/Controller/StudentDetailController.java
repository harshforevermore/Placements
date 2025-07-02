package com.Placement.Placements.Controller;


import com.Placement.Placements.model.StudentDocStorage;
import com.Placement.Placements.model.StudentPersonalDetails;
import com.Placement.Placements.model.Student_data;
import com.Placement.Placements.repo.StudentDocStorageRepo;
import com.Placement.Placements.repo.StudentPersonalDetailsRepo;
import com.Placement.Placements.service.Register_loginmodel;
import com.Placement.Placements.service.StudentDetailService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController

public class StudentDetailController {
    @Autowired
    private StudentDetailService studentPersonalDetailService;
    @Autowired
    private Register_loginmodel registerLoginmodel;
    @Autowired
    private StudentDocStorageRepo repository;
    @Autowired
    private StudentPersonalDetailsRepo studentRepo;



    @PostMapping(value ="/studentdetails" ,consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
   // @PostMapping(value ="/studentdetails" )
      //@PutMapping("/studentdetails")
    public ResponseEntity<?> saveStudentDetails(@RequestPart("studentPersonalDetails") String studentPersonalDetailsJson,
                                                     @RequestPart(name = "files", required = false) MultipartFile[] files)
    {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            StudentPersonalDetails studentPersonalDetails = objectMapper.readValue(studentPersonalDetailsJson, StudentPersonalDetails.class);
            ResponseEntity<?> userExistence = registerLoginmodel.userExistence( null,studentPersonalDetails.getEmail());

            if (userExistence.getStatusCode() == HttpStatus.NOT_FOUND) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Invalid User"));
            }
            StudentPersonalDetails saved = studentPersonalDetailService.saveStudentDetails(studentPersonalDetails, files);
            return ResponseEntity.ok(saved);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Failed to save student details: " + e.getMessage()));
        }
    }


    @GetMapping("/getStudentData/{email}")
    public ResponseEntity<?> getStudentData(@PathVariable String email) {
        try {
            StudentPersonalDetails details = studentPersonalDetailService.getStudentDetails(email);
            return ResponseEntity.ok(details);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", e.getMessage()));
        }
    }


}
