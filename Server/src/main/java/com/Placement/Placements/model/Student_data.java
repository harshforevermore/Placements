package com.Placement.Placements.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "student_data")
@NoArgsConstructor
@AllArgsConstructor
public class Student_data {
    @Column(unique = true)
    private String regNo;
    @Id
    private String email;
    private String name;
    private String course;
    private String password;
    private String role;
//    @Column(name = "placement_registered", nullable = false)
//    private boolean isPlacementRegistered = false;

}
