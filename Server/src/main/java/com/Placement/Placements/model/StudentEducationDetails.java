package com.Placement.Placements.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name ="studentEducationDetails")
public class StudentEducationDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "10th Name of School")
    private String secondaryschoolname;
    @Column(name = "10th Percentage")
    private float secondarypercentage;
    @Column(name = "10th Passing Year")
    private String secondarypassingyear;
    @Column(name = "12th School Name")
    private String intermediateschoolname;
    @Column(name = "12th Percentage")
    private float intermediatepercentage;
    @Column(name = "12th Passing Year")
    private String intermediatemedium;
    @Column(name = "UG College Name")
    private String ugcollegename;
    @Column(name = "UG College Percentage")
    private float undergraduatepercentage;
    @Column(name = "UG College Passing Year")
    private String graduationPassingYear;
    @Column(name = "UG University Name")
    private String uguniversityname;
    @Column(name = "Course Name")
    private String course;
    @Column(name = "Section Name")
    private String section;


    @OneToOne
    @JsonBackReference
    @ToString.Exclude
    @JoinColumn(name = "email", referencedColumnName = "email" )
    private StudentPersonalDetails studentPersonalDetails;
}

