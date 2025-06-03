package com.CRT.College.Project.Repository;

import com.CRT.College.Project.Model.StudentEducationalDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentEducationalDetailsRepo extends JpaRepository<StudentEducationalDetails,String> {
}
