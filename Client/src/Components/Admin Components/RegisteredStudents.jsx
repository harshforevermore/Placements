import React, { useState } from "react";
import RegisteredStudentsList from "./RegisteredStudentsComponents/RegisteredStudentsList";
import RegisteredStudentsHead from "./RegisteredStudentsComponents/RegisteredStudentsHead";

const RegisteredStudents = () => {
  const [filtered, setFiltered] = useState(false);
  return (
    <div className="registered-students-container w-full h-11/12 p-3 md:px-20">
      <RegisteredStudentsHead />
      {
        filtered ? 
      <div className="registered-students-list w-full h-full">
        <RegisteredStudentsList />
      </div>
      : <div className="show-text h-50 place-content-center">
        <h1 className="text-3xl text-stone-400 text-center">Filter To See Data</h1>
      </div>
      }
    </div>
  );
};

export default RegisteredStudents;
