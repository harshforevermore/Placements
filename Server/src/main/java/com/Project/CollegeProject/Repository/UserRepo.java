package com.Project.CollegeProject.Repository;

import com.Project.CollegeProject.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, String> {
    User findByRegNo(String regNo);
    User findByCollegeEmail(String collegeEmail);
}
