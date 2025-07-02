package com.Placement.Placements.repo;

import com.Placement.Placements.model.Student_data;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Register_loginrepo extends JpaRepository<Student_data,String> {
    Student_data findByRegNo(String RegNo);
    Student_data findByEmail(String email);
}
