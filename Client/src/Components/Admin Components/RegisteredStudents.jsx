import React from "react";
import { fakeStudents } from "../../Data/data";

const RegisteredStudents = () => {
  return (
    <section className="students-list-container w-1/2 h-full border-2 rounded-lg">
      <section className="column-label-container flex text-center border-b-2">
        <span className="column-label flex-1 border-r-1">Sr. No.</span>
        <span className="column-label flex-3 border-r-1">Name</span>
        <span className="column-label flex-1 border-r-1">Course</span>
        <span className="column-label flex-1">Section</span>
      </section>
      {fakeStudents.map((student, index) => (
        <section key={index} className="student flex cursor-pointer hover:bg-[#ff5b5b] text-center border-b-2">
          <span className="column-label flex-1 text-lg font-medium border-r-1">{student.id}</span>
          <span className="column-label flex-3 text-lg font-medium border-r-1">{student.name}</span>
          <span className="column-label flex-1 text-lg font-medium border-r-1">{student.course}</span>
          <span className="column-label flex-1 text-lg font-medium">{student.section}</span>
        </section>
      ))}
    </section>
  );
};

export default RegisteredStudents;
