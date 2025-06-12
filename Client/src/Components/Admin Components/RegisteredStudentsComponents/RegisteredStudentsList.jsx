import React from "react";
import { fakeStudents } from "../../../Data/data";
import { CgDetailsMore } from "react-icons/cg";

const RegisteredStudents = () => {
  
  return (
    <section className="students-list-container w-full md:h-full border-2 rounded-lg">
      <table className="reg-stu-table w-full min-w- h-4 overflow-y-auto border-collapse text-center">
        <thead className="">
          <tr className="column-label-row border-b-2">
            <th className="column-label border-r">Action</th>
            <th className="column-label border-r">Reg. No.</th>
            <th className="column-label border-r">Name</th>
            <th className="column-label border-r">Course</th>
            <th className="column-label">Section</th>
          </tr>
        </thead>
        <tbody className="">
          {fakeStudents.map((student, index) => (
            <tr
              key={index}
              className="column-content-row border-b hover:bg-[#ffc0c0] transition-colors duration-100 ease-in-out"
            >
              <td className="column-content border-r-1 place-items-center">
                <CgDetailsMore className="text-blue-500 text-2xl cursor-pointer" />
              </td>
              <td className="column-content text-md font-medium border-r-1">
                {student.regNo}
              </td>
              <td className="column-content text-md font-medium border-r-1">
                {student.name}
              </td>
              <td className="column-content text-md font-medium border-r-1">
                {student.course}
              </td>
              <td className="column-content text-md font-medium">
                {student.section}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RegisteredStudents;
