package com.Project.CollegeProject.Services;

import com.Project.CollegeProject.Models.StudentDocument;
import com.Project.CollegeProject.Models.StudentPersonalDetails;
import com.Project.CollegeProject.Repository.StudentPersonalDetailsRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

@Service
public class StudentDetailService {
    @Autowired
    private StudentPersonalDetailsRepo studentRepo;

    public StudentPersonalDetails saveStudentWithDocuments(StudentPersonalDetails studentDetails, MultipartFile[] files) throws Exception {
        if (studentDetails.getStudentDocument() == null) {
            studentDetails.setStudentDocument(new ArrayList<>());
        }



        if (studentRepo.existsById(studentDetails.getCollegeEmail())){
            throw new IllegalArgumentException("Student Details with this email already exists");
        }

        if (studentRepo.existsByContactNoAndCollegeEmailNot(studentDetails.getContactNo(), studentDetails.getCollegeEmail())) {
            throw new IllegalArgumentException("Contact number already in use");
        }
        if (studentRepo.existsByPersonalEmailAndCollegeEmailNot(studentDetails.getPersonalEmail(), studentDetails.getCollegeEmail())) {
            throw new IllegalArgumentException("Email already in use");
        }
        if (studentRepo.existsByAadharNumberAndCollegeEmailNot(studentDetails.getAadharNumber(), studentDetails.getCollegeEmail())) {
            throw new IllegalArgumentException("Aadhar number already in use");
        }
        if (studentRepo.existsByPanNumberAndCollegeEmailNot(studentDetails.getPanNumber(), studentDetails.getCollegeEmail())) {
            throw new IllegalArgumentException("PAN number already in use");
        }

        for (MultipartFile file : files) {
            StudentDocument document = new StudentDocument();
            document.setFilename(file.getOriginalFilename());
            document.setFileType(file.getContentType());
            document.setData(file.getBytes());
            document.setStudentPersonalDetails(studentDetails);
            studentDetails.getStudentDocument().add(document);
        }

        if (studentDetails.getEducationalDetails() != null) {
            studentDetails.getEducationalDetails().setStudentPersonalDetails(studentDetails);
        }
        return studentRepo.save(studentDetails);
    }

    public StudentPersonalDetails getStudentDetails(String email) {
        return studentRepo.findById(email).orElseThrow(() -> new IllegalArgumentException("Student not found"));
    }
}
