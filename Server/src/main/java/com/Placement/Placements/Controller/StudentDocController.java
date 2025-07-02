//package com.Placement.Placements.Controller;
//
//import com.Placement.Placements.model.StudentDocStorage;
//import com.Placement.Placements.model.StudentPersonalDetails;
//import com.Placement.Placements.repo.StudentDocStorageRepo;
//import com.Placement.Placements.repo.StudentPersonalDetailsRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//
//
//@RestController
////@RequestMapping("/documents")
//public class StudentDocController {
//
//        @Autowired
//        private StudentDocStorageRepo repository;
//        @Autowired
//        private StudentPersonalDetailsRepo studentRepo;
//
//        @PostMapping("/upload")
//        public ResponseEntity<String> uploadPdf(
//                @RequestPart(name = "photo", required = false) MultipartFile photo,
//                @RequestPart(name = "aadharPdf", required = false) MultipartFile aadharPdf,
//                @RequestPart(name = "panCardPdf", required = false) MultipartFile panCardPdf,
//                @RequestPart(name = "tenthMarksheet", required = false) MultipartFile tenthMarksheet,
//                @RequestPart(name = "twelfthMarksheet", required = false) MultipartFile twelfthMarksheet,
//                @RequestPart(name = "ugMarksheet", required = false) MultipartFile ugMarksheet,
//                @RequestPart(name = "file", required = false) MultipartFile file,String email) {
//            try {
//                StudentDocStorage doc = new StudentDocStorage();
//                StudentPersonalDetails student = studentRepo.findById(email).orElseThrow();
//
//                //StudentDocStorage doc = docStorageRepo.findById(1L).orElseThrow();
//               // String email = doc.getStudentPersonalDetails().getEmail(); // auto-fetched!
//                if (photo != null) doc.setPhoto(photo.getBytes());
//                if (aadharPdf != null) doc.setAadharPdf(aadharPdf.getBytes());
//                if (panCardPdf != null) doc.setPancardPdf(panCardPdf.getBytes());
//                if (tenthMarksheet != null) doc.setTenthMarksheet(tenthMarksheet.getBytes());
//                if (twelfthMarksheet != null) doc.setTwelfthMarksheet(twelfthMarksheet.getBytes());
//                if (ugMarksheet != null) doc.setUgMarksheet(ugMarksheet.getBytes());
//                if (file != null) doc.setFileName(file.getOriginalFilename());
//                if (file != null) doc.setData(file.getBytes());
//                doc.setStudentPersonalDetails(student);
//                repository.save(doc);
//                //studentPersonalDetailService.saveStudentDoc(doc);
//                return ResponseEntity.ok("File uploaded successfully " );
//            } catch (Exception e) {
//                return ResponseEntity.status(500).body("Error uploading file: " + e.getMessage());
//            }
//
//
//          }
//
//
//
//}
