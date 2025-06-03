package com.CRT.College.Project.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import lombok.Data;

import java.sql.Date;

@Data
@Entity
public class StudentPersonalDetails {
    @Id
    private String collegeEmail;
    private String studentName;
    private String fatherName;
    private String motherName;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    @NotNull(message = "Date of birth is required")
    @Past(message = "Date of birth must be in the past")
    private Date dob;
    private String gender;
    private String birthPlace; 
    @Column(unique = true)
    private String contactNo;
    @Column(unique = true)
    private String personalEmail;
    private String fatherContactNo;
    private String alternateContactNo;
    @Column(unique = true)
    private String aadharNumber;
    @Column(unique = true)
    private String panNumber;
    private String presentAddress;
    private String aadharAddress;
    private String city;

    @OneToOne(mappedBy = "studentPersonalDetails", cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JsonManagedReference
    private StudentEducationalDetails educationalDetails;
}