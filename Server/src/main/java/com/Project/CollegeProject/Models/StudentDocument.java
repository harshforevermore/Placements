package com.Project.CollegeProject.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class StudentDocument {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String filename;
    private String fileType;
    @Lob
    private byte[] data;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "college_email", referencedColumnName = "collegeEmail")
    private StudentPersonalDetails studentPersonalDetails;
}
