package com.Placement.Placements.service;


import com.Placement.Placements.model.StudentDocStorage;
import com.Placement.Placements.model.StudentPersonalDetails;
import com.Placement.Placements.repo.StudentDocStorageRepo;
import com.Placement.Placements.repo.StudentPersonalDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class StudentDetailService {

    @Autowired
    private StudentPersonalDetailsRepo studentRepo;
    @Autowired
    private StudentDocStorageRepo storageRepo;
    @Autowired
    private StudentDocStorageRepo repository;


    public StudentPersonalDetails saveStudentDetails(StudentPersonalDetails studentPersonalDetails, MultipartFile[] files)throws Exception {

        if (studentRepo.existsById(studentPersonalDetails.getEmail())) {
           throw new IllegalArgumentException("student Details with this email already exists");
        }


//        if (studentRepo.existsByPhoneNoAndEmailNot(studentDetails.getContactNo(), studentDetails.getCollegeEmail())) {
//            throw new IllegalArgumentException("Contact number already in use");
//        }
//        if (studentRepo.existsByPersonalEmailAndCollegeEmailNot(studentDetails.getPersonalEmail(), studentDetails.getCollegeEmail())) {
//            throw new IllegalArgumentException("Email already in use");
//        }
//        if (studentRepo.existsByAadharNumberAndCollegeEmailNot(studentDetails.getAadharNumber(), studentDetails.getCollegeEmail())) {
//            throw new IllegalArgumentException("Aadhar number already in use");
//        }
//        if (studentRepo.existsByPanNumberAndCollegeEmailNot(studentDetails.getPanNumber(), studentDetails.getCollegeEmail())) {
//            throw new IllegalArgumentException("PAN number already in use");
//        }

        for (MultipartFile file : files) {
            StudentDocStorage document = new StudentDocStorage();
            document.setFilename(file.getOriginalFilename());
            document.setFileType(file.getContentType());
            document.setData(file.getBytes());
            document.setStudentPersonalDetails(studentPersonalDetails);
            studentPersonalDetails.getStudentDocStorage().add(document);
        }

        if (studentPersonalDetails.getEducationalDetails() != null) {
            studentPersonalDetails.getEducationalDetails().setStudentPersonalDetails(studentPersonalDetails);
        }
        return studentRepo.save(studentPersonalDetails);

    }


//    public String saveStudentDocFiles(  String email, MultipartFile photo, MultipartFile aadharPdf,
//                                      MultipartFile panCardPdf, MultipartFile tenthMarksheet,
//                                      MultipartFile twelfthMarksheet, MultipartFile ugMarksheet,
//                                      MultipartFile file) {
//        try {
//            StudentPersonalDetails student = studentRepo.findById(email)
//                    .orElseThrow(() -> new IllegalArgumentException("Student not found with email: " + email));
//
//            StudentDocStorage doc = new StudentDocStorage();
//            if (photo != null) doc.setPhoto(photo.getBytes());
//            if (aadharPdf != null) doc.setAadharPdf(aadharPdf.getBytes());
//            if (panCardPdf != null) doc.setPancardPdf(panCardPdf.getBytes());
//            if (tenthMarksheet != null) doc.setTenthMarksheet(tenthMarksheet.getBytes());
//            if (twelfthMarksheet != null) doc.setTwelfthMarksheet(twelfthMarksheet.getBytes());
//            if (ugMarksheet != null) doc.setUgMarksheet(ugMarksheet.getBytes());
//            if (file != null) {
//                doc.setFileName(file.getOriginalFilename());
//                doc.setData(file.getBytes());
//            }
//
//            doc.setStudentPersonalDetails(student);
//
//            // Save the document
//           storageRepo.save(doc);
//
//            return "File uploaded successfully";
//        } catch (Exception e) {
//            return "Error uploading file: " + e.getMessage();
//        }
//    }


    public StudentPersonalDetails getStudentDetails(String email) {
        return studentRepo.findById(email).orElseThrow(() -> new IllegalArgumentException("Student not found"));
    }
}