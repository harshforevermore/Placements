package com.Project.CollegeProject.Controllers;

import com.Project.CollegeProject.Models.StudentPersonalDetails;
import com.Project.CollegeProject.Services.StudentDetailService;
import com.Project.CollegeProject.Services.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
public class StudentDetailsController {
    private final StudentDetailService studentPersonalDetailService;
    private final UserService userService;
    public StudentDetailsController(StudentDetailService studentPersonalDetailService, UserService userService) {
        this.studentPersonalDetailService = studentPersonalDetailService;
        this.userService = userService;
    }

    @PostMapping(value = "/saveStudentWithDocument", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> saveStudentWithDocument(
            @RequestPart("student") String studentJson,
            @RequestPart("files") MultipartFile[] files) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            StudentPersonalDetails studentDetails = mapper.readValue(studentJson, StudentPersonalDetails.class);

            ResponseEntity<?> userExistence = userService.userExistence(null,studentDetails.getCollegeEmail());
            if (userExistence.getStatusCode() == HttpStatus.NOT_FOUND) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("error", "Invalid User"));
            }
            StudentPersonalDetails saved = studentPersonalDetailService.saveStudentWithDocuments(studentDetails, files);
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