package com.Project.CollegeProject.Utility;

import com.Project.CollegeProject.Models.User;
import lombok.Data;
@Data
public class LoginResponse {
    private String fullname;
    private String regNo;
    private String course;
    private String role;
    private String email;
    private String token;
    private boolean isPlacementRegistered;

    public LoginResponse(User user){
        this.course = user.getCourse();
        this.email = user.getCollegeEmail();
        this.fullname =user.getFullName();
        this.role = user.getRole();
        this.regNo = user.getRegNo();
        this.isPlacementRegistered = (user.isPlacementRegistered());
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "fullName='" + fullname + '\'' +
                ", regNo='" + regNo + '\'' +
                ", course='" + course + '\'' +
                ", role='" + role + '\'' +
                ", email='" + email + '\'' +
                ", token='" + token + '\'' +
                ", isPlacementRegistered='" + isPlacementRegistered + '\'' +
                '}';
    }
}
