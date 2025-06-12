import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const FilterStudents = ({ visible, setVisible }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  function handleSetFilter() {
    console.log({course: selectedCourse, section: selectedSection});
  }
  return (
    <section
      className={`filter-students-container ${
        visible ? "block" : "hidden"
      } z-50 absolute -top-1 right-7 md:right-8 w-[20em] p-4 pt-2 rounded-lg bg-[#fafafa] shadow-[0_0_10px_0_gray] md:shadow-[0_0_5px_0_gray]`}
    >
      <section className="heading-and-close relative">
        <h2 className="filter-heading text-xl text-slate-700 font-medium">
          Filter
        </h2>
        <IoClose
          className="absolute top-0 -right-2 text-xl cursor-pointer text-slate-600"
          onClick={() => setVisible(false)}
        />
      </section>
      <section className="filter-course flex justify-between my-2">
        <label
          htmlFor="selectCourse"
          className="select-course-label text-lg text-slate-600 font-medium"
        >
          Select Course:{" "}
        </label>
        <select
          name="selectCourse"
          id="selectCourse"
          defaultValue={"Course"}
          onChange={(e) => setSelectedCourse(e.target.value !== "Course" ? e.target.value : null)}
          className="cursor-pointer w-40 rounded-sm outline-none block text-md text-slate-700 border-1 border-black focus:ring-0 focus:border-black peer"
        >
          <option value="Course" className="text-sm">
            Course
          </option>
          <option value="MCA" className="text-sm">
            MCA
          </option>
          <option value="BCA" className="text-sm">
            BCA
          </option>
        </select>
      </section>
      <section className="filter-section flex justify-between">
        <label
          htmlFor="selectSection"
          className="select-course-label text-lg text-slate-600 font-medium"
        >
          Select Section:{" "}
        </label>
        <select
          name="selectSection"
          id="selectSection"
          defaultValue={"Section"}
          disabled={selectedCourse === null}
          onChange={(e) => setSelectedSection(e.target.value !== "Section" ? e.target.value : null)}
          className="cursor-pointer w-40 rounded-sm outline-none block text-md text-slate-700 border-1 border-black focus:ring-0 focus:border-black peer"
        >
          <option value="Section" className="text-sm">
            Section
          </option>
          <option value="A" className="text-sm">
            A
          </option>
          <option value="B" className="text-sm">
            B
          </option>
          <option value="C" className="text-sm">
            C
          </option>
          <option value="D" className="text-sm">
            D
          </option>
          <option value="E" className="text-sm">
            E
          </option>
        </select>
      </section>
      <section className="save-button place-self-end mt-2">
        <button
          type="button"
          onClick={handleSetFilter}
          className="bg-[#ff0000] text-white font-medium text-lg px-2 rounded-md cursor-pointer hover:shadow-[1px_1px_3px_gray] focus:shadow-[1px_1px_3px_gray] active:bg-[#ff0000] active:shadow-none transition-all duration-150 ease-in"
        >
          Set
        </button>
      </section>
    </section>
  );
};

export default FilterStudents;
