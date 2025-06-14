import { useState, useEffect, useContext } from "react";
import RegisteredStudentsList from "./RegisteredStudentsComponents/RegisteredStudentsList";
import RegisteredStudentsHead from "./RegisteredStudentsComponents/RegisteredStudentsHead";
import { FilterDataContext } from "../../Context/FilteredDataContext";

const RegisteredStudents = () => {
  const {filteredData, filterDataByConditions} = useContext(FilterDataContext);

  const [filterConditions, setFilterConditions] = useState(undefined);

  const handleFilter = (data) => {
    setFilterConditions(data);
  };
  useEffect(() => {
    //Change filter data state every time condition changes.
    filterConditions !== undefined && filterDataByConditions(filterConditions);
  }, [filterConditions]);

  return (
    <div className="registered-students-container w-full h-full p-3 md:px-20">
      <RegisteredStudentsHead handleFilter={handleFilter} />
      {(filteredData && filteredData.length > 0) ? (
        <div className="registered-students-list w-full h-full">
          <RegisteredStudentsList filteredData={filteredData} />
        </div>
      ) : (
        <div className="show-text h-50 place-content-center">
          <h1 className="text-3xl text-stone-400 text-center">
            Filter To See Data
          </h1>
        </div>
      )}
    </div>
  );
};

export default RegisteredStudents;
