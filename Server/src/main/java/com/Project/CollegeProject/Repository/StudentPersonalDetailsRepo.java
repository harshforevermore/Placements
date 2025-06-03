package com.Project.CollegeProject.Repository;


import com.Project.CollegeProject.Models.StudentPersonalDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentPersonalDetailsRepo extends JpaRepository<StudentPersonalDetails, String> {
    boolean existsByContactNoAndCollegeEmailNot(String contactNo, String collegeEmail);
    boolean existsByPersonalEmailAndCollegeEmailNot(String personalEmail, String collegeEmail);
    boolean existsByPanNumberAndCollegeEmailNot(String panNumber, String collegeEmail);
    boolean existsByAadharNumberAndCollegeEmailNot(String aadharNumber, String collegeEmail);
}
