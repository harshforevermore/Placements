package com.Placement.Placements.repo;

import com.Placement.Placements.model.StudentPersonalDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentPersonalDetailsRepo extends JpaRepository<StudentPersonalDetails,String> {
   // StudentPersonalDetailsRepo findByemail(String email);

//    boolean existsByContactNoAndCollegeEmailNot(String contactNo, String collegeEmail);
//    boolean existsByPersonalEmailAndCollegeEmailNot(String personalEmail, String collegeEmail);
//    boolean existsByPanNumberAndCollegeEmailNot(String panNumber, String collegeEmail);
//    boolean existsByAadharNumberAndCollegeEmailNot(String aadharNumber, String collegeEmail);

}
