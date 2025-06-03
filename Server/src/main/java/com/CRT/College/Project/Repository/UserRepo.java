package com.CRT.College.Project.Repository;

import com.CRT.College.Project.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, String> {
    User findByRegNo(String regNo);
    User findByCollegeEmail(String collegeEmail);
}
