package com.Placement.Placements.uitllity;

import com.Placement.Placements.model.Student_data;
import lombok.Data;

@Data
public class LoginResponse {

    private String fullname;
    private String regNo;
    private String course;
    private String email;

    public LoginResponse(Student_data user){
        this.course = user.getCourse();
        this.email = user.getEmail();
        this.fullname =user.getName();
        this.regNo = user.getRegNo();
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "fullName='" + fullname + '\'' +
                ", regNo='" + regNo + '\'' +
                ", course='" + course + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
