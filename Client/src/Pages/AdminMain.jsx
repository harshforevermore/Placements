import React from "react";
import RegisteredStudents from "../Components/Admin Components/RegisteredStudents";
import FilterStudents from "../Components/Admin Components/FilterStudents";
// import AdminOptions from "../Components/Admin Components/AdminOptions";

const AdminMain = () => {
  return (
    <div className="admin-page-container w-full h-full bg-white shadow-[0_0_5px_gray] rounded-lg">
      <div className="headin-container px-3 rounded-t-lg bg-[#ff5b5b]">
        <h1 className="main-heading text-3xl text-white font-medium">Admin</h1>
      </div>
      <div className="admin-body-container w-full h-11/12 flex flex-col gap-2 p-3 mt-3">
      {/* <AdminOptions /> */}
        <h2 className="text-2xl font-medium">Registered Students</h2>
        <div className="registered-students-container w-full h-full flex gap-2">
          <RegisteredStudents />
          <FilterStudents />
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
