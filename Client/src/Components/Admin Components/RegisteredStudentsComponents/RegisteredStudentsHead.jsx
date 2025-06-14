import { useState, useContext } from "react";
import FilterStudents from "./FilterStudents";
import { FiFilter } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useNotification } from "../../../Context/NotificationContext";
import { FilterDataContext } from "../../../Context/FilteredDataContext";

const RegisteredStudentsHead = ({ handleFilter }) => {
  const {filterDataByName, filterDataByRegno} = useContext(FilterDataContext);
  const { showNotification } = useNotification();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  const handleSearch = () => {
    if(!searchTerm) {
      showNotification("Search field cannot be empty!", "error")
      return;
    };
    const check = checkPattern();
    if(check === "regno") {
      filterDataByRegno(searchTerm);
      return;
    }
    if(check === "name") {
      filterDataByName(searchTerm);
      return;
    }
  };

  const checkPattern = () => {
    const namePattern = /^[A-Za-z ]+$/;
    const regNoPattern = /^[0-9]{2}[a-zA-Z]{4}\d{4}$/;
    if(namePattern.test(searchTerm)) {
      return "name";
    }
    else if(regNoPattern.test(searchTerm)) {
      return "regno";
    }
    return "";
  };

  return (
    <div className="container place-items-end place-content-center mb-3">
      <div className="search-filter-container relative flex items-center gap-2 md:gap-4">
        <div className="search relative inline-block">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="search-field w-[12em] h-9 pl-1 pr-6 text-[1em] outline-none border-1 border-slate-300 rounded-lg md:h-10 md:pl-2 md:pr-8 md:text-[1.1em] hover:border-slate-700 focus:w-[18em] focus:border-slate-700 focus:shadow-[0_0_3px_gray] transition-all duration-150 ease-in-out"
            placeholder="Search Name/Reg No."
          />
          <button
            type="button"
            onClick={handleSearch}
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
          <FilterStudents
            visible={isFilterVisible}
            setVisible={setIsFilterVisible}
            handleFilter={handleFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisteredStudentsHead;
