package com.CRT.College.Project.Model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class StudentEducationalDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "10th Name of School")
    private String matricSchoolName;
    @Column(name = "10th %")
    private float matricPercentage;
    @Column(name = "10th Passing Year")
    private String matricPassingYear;
    @Column(name = "10th Medium")
    private String matricMedium;
    @Column(name = "12th School Name")
    private String intermediateSchoolName;
    @Column(name = "12th %")
    private float intermediatePercentage;
    @Column(name = "12th Passing Year")
    private String intermediatePassingYear;
    @Column(name = "12th Medium")
    private String intermediateMedium;
    @Column(name = "Graduation School Name")
    private String graduationSchoolName;
    @Column(name = "Graduation %")
    private float undergraduatePercentage;
    @Column(name = "Graduation Passing Year")
    private String graduationPassingYear;
    @Column(name = "Graduation Medium")
    private String graduationMedium;

    @OneToOne
    @JsonBackReference
    @JoinColumn(name = "college_email", referencedColumnName = "collegeEmail")
    private StudentPersonalDetails studentPersonalDetails;
}
