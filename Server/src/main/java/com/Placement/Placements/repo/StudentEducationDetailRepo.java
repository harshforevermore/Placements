package com.Placement.Placements.repo;


import com.Placement.Placements.model.StudentEducationDetails;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StudentEducationDetailRepo extends JpaRepository<StudentEducationDetails,String> {
}
