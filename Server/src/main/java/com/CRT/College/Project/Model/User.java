package com.CRT.College.Project.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
public class User {
    @Id
    @Email(message = "Email should be valid")
    private String collegeEmail;
    @Column(unique = true)
    private String regNo;
    @NotBlank(message = "Student Name is mandatory")
    private String fullName;
    private String password;
    private String course;
    private String role;
    @Column(nullable = false)
    private boolean isPlacementRegistered = false;
}
