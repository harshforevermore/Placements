import React, { useState } from "react";
import RegisteredStudents from "../Components/Admin Components/RegisteredStudents";
import FilterStudents from "../Components/Admin Components/FilterStudents";
import { FiFilter } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

const AdminMain = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  function setFilter() {
    
  }
  return (
    <div className="admin-page-container w-full min-h-full rounded-lg bg-white shadow-[0_0_5px_gray]">
      <div className="headin-container px-3 rounded-t-lg bg-[#ff5b5b]">
        <h1 className="main-heading text-3xl text-white font-medium">Admin</h1>
      </div>
      <div className="wrapper">
        <div className="admin-body-container w-full h-11/12 p-3 md:px-20 mt-3">
          <h2 className="mb-3 text-2xl font-medium text-center text-nowrap">
            Registered Students
          </h2>
          <div className="container place-items-end my-3 place-content-center">
            <div className="search-filter-container relative flex items-center gap-2 md:gap-4">
              <div className="search relative inline-block">
                <input
                  type="text"
                  className="search-field w-[12em] h-9 pl-1 pr-6 text-[1em] outline-none border-1 border-slate-300 rounded-lg md:h-10 md:pl-2 md:pr-8 md:text-[1.1em] hover:border-slate-700 focus:border-slate-700 focus:shadow-[0_0_3px_gray] transition-all duration-150 ease-in-out"
                  placeholder="Search Name/Reg No."
                />
                <button
                  type="button"
                  className="absolute top-2 right-1.5 cursor-pointer md:top-2.5 md:right-2"
                >
                  <IoSearch
                    className="text-[1.20em] text-slate-600 md:text-[1.35em]"
                    title="Tap to Search"
                  />
                </button>
              </div>
              <div className="filter relative inline-block">
                <FiFilter
                  className="text-2xl text-slate-600 cursor-pointer md:text-3xl"
                  title="Filter"
                  onClick={() => setIsFilterVisible(!isFilterVisible)}
                />
                <FilterStudents visible={isFilterVisible} setVisible={setIsFilterVisible} />
              </div>
            </div>
          </div>
          <div className="registered-students-container w-full h-full">
            <RegisteredStudents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
