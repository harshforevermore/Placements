package com.Project.CollegeProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(exclude = {
		org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class
})
public class CollegeProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(CollegeProjectApplication.class, args);
	}

}
