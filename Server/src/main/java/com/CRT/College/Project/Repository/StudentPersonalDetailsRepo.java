package com.CRT.College.Project.Repository;

import com.CRT.College.Project.Model.StudentPersonalDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentPersonalDetailsRepo extends JpaRepository<StudentPersonalDetails, String> {
    boolean existsByContactNoAndCollegeEmailNot(String contactNo, String collegeEmail);
    boolean existsByPersonalEmailAndCollegeEmailNot(String personalEmail, String collegeEmail);
    boolean existsByPanNumberAndCollegeEmailNot(String panNumber, String collegeEmail);
    boolean existsByAadharNumberAndCollegeEmailNot(String aadharNumber, String collegeEmail);
}

