package com.Project.CollegeProject.Services;

import com.Project.CollegeProject.Models.StudentPersonalDetails;
import com.Project.CollegeProject.Repository.StudentEducationalDetailsRepo;
import com.Project.CollegeProject.Repository.StudentPersonalDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class StudentDetailService {
    @Autowired
    private StudentPersonalDetailsRepo studentRepo;
    @Autowired
    private StudentEducationalDetailsRepo studentEducationalDetailsRepo;

    public StudentPersonalDetails saveStudentDetails(StudentPersonalDetails studentPersonalDetails) {
        if (studentRepo.existsByContactNoAndCollegeEmailNot(studentPersonalDetails.getContactNo(), studentPersonalDetails.getCollegeEmail())) {
            throw new IllegalArgumentException("Contact number already in use");
        }
        if (studentRepo.existsByPersonalEmailAndCollegeEmailNot(studentPersonalDetails.getPersonalEmail(), studentPersonalDetails.getCollegeEmail())) {
            throw new IllegalArgumentException("Email already in use");
        }
        if (studentRepo.existsByAadharNumberAndCollegeEmailNot(studentPersonalDetails.getAadharNumber(), studentPersonalDetails.getCollegeEmail())) {
            throw new IllegalArgumentException("Aadhar number already in use");
        }
        if (studentRepo.existsByPanNumberAndCollegeEmailNot(studentPersonalDetails.getPanNumber(), studentPersonalDetails.getCollegeEmail())) {
            throw new IllegalArgumentException("PAN number already in use");
        }
        // ✅ SET THE BACK-REFERENCE MANUALLY
        if (studentPersonalDetails.getEducationalDetails() != null) {
            studentPersonalDetails.getEducationalDetails().setStudentPersonalDetails(studentPersonalDetails);
        }
        return studentRepo.save(studentPersonalDetails);
    }

    public StudentPersonalDetails getStudentDetails(String email) {
        return studentRepo.findById(email).orElseThrow(() -> new IllegalArgumentException("Student not found"));
    }
}
