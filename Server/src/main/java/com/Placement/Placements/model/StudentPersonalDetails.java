package com.Placement.Placements.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Table(name ="studentPersonalDetails")
public class StudentPersonalDetails {
    @Id
    private String email;
    private String studentName;
    private String fatherName;
    private String motherName;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date dob;
    private String gender;
    private String birthplace;
    @Column(unique = true)
    private String phoneNo;
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
    @ToString.Exclude
    @JsonManagedReference
    private StudentEducationDetails educationalDetails;

    @OneToMany(mappedBy = "studentPersonalDetails", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<StudentDocStorage> studentDocStorage = new ArrayList<>();

}
