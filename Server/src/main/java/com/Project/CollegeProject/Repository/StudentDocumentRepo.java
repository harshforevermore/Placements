package com.Project.CollegeProject.Repository;

import com.Project.CollegeProject.Models.StudentDocument;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentDocumentRepo extends JpaRepository<StudentDocument, Long> {
    // This interface will automatically inherit methods for CRUD operations
    // No additional methods are needed unless specific queries are required
}
