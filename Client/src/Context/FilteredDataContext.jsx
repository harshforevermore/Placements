import { useState, useEffect, createContext } from "react";
import { fakeStudents } from "../Data/data";

export const FilterDataContext = createContext();
const FilteredDataProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState(undefined);

  useEffect(() => {
    // getting the user from the local storage(if exists!) on page reload.
    const storedData = JSON.parse(sessionStorage.getItem("filteredData"));
    console.info("Stored user: ", storedData);
    try {
      if (storedData) {
        setFilteredData(storedData);
      }
    } catch (err) {
      console.error("Error while parsing stored user: ", err);
      sessionStorage.removeItem("filteredData");
    }
  }, []);

  function filterDataByConditions(conditions) {
    console.log("filterData Function executed.");
    console.log("filteredData: ", filteredData);
    const data = filterByConditions(conditions);
    setFilteredData(data);
    setToSessionStorage(data);
  }
  const filterByConditions = (conditions) => {
    // if (!conditions || typeof conditions !== "object") return [];
    console.log(conditions);
    return fakeStudents.filter((student) => {
      const courseMatch = student.course === conditions.course;
      const sectionMatch = student.section === conditions.section;

      if (conditions.course && conditions.section) {
        return courseMatch && sectionMatch;
      } else if (conditions.course) {
        return courseMatch;
      } else {
        return false;
      }
    });
  };

  function filterDataByName(name) {
    const data = fakeStudents.filter(
      (student) => student.name.toLowerCase() === name.toLowerCase()
    );
    setFilteredData(data);
    setToSessionStorage(data);
  }
  function filterDataByRegno(regno) {
    const data = fakeStudents.filter(
      (student) => student.regNo.toLowerCase() === regno.toLowerCase()
    );
    setFilteredData(data);
    setToSessionStorage(data);
  }

  function setToSessionStorage(data) {
    sessionStorage.setItem("filteredData", JSON.stringify(data));
  }

  return (
    <FilterDataContext.Provider
      value={{
        filteredData,
        filterDataByConditions,
        filterDataByName,
        filterDataByRegno,
      }}
    >
      {children}
    </FilterDataContext.Provider>
  );
};

export default FilteredDataProvider;
