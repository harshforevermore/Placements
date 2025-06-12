import React, { useState, useContext, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import { AuthContext } from "../Context/AuthContext";
import { FiUpload } from "react-icons/fi";

const SidePanelIcons = ({ displayScreen }) => {
  const getIcon = JSON.parse(sessionStorage.getItem("sidePanelTab"));
  const { userType } = useContext(AuthContext);
  const [selected, setSelected] = useState(
    getIcon || (userType === "student" ? { id: "Profile" } : { id: "Admin" })
  );
  useEffect(() => {
    //Display content according to the selected icon.
    displayScreen(selected.id);
    //Set selected icon to local storage every time the state changes.
    console.log("Selected: ", selected);
    sessionStorage.setItem("sidePanelTab", JSON.stringify(selected));
  }, [selected]);
  const adminOptions = [
    {
      name: "Admin",
      iconName: HiOutlineDocumentText,
      click: (e) => setSelectedIcon(e.currentTarget.id),
    },
    {
      name: "Controls",
      iconName: LuSettings,
      click: (e) => setSelectedIcon(e.currentTarget.id),
    },
    {
      name: "Document",
      iconName: HiOutlineDocumentText,
      click: (e) => setSelectedIcon(e.currentTarget.id),
    },
  ];
  const studentOptions = [
    {
      name: "Profile",
      iconName: FaRegUserCircle,
      click: (e) => setSelectedIcon(e.currentTarget.id),
    },
    {
      name: "Student Info",
      iconName: BiEdit,
      click: (e) => setSelectedIcon(e.currentTarget.id),
    },
    {
      name: "Document Upload",
      iconName: FiUpload,
      click: (e) => setSelectedIcon(e.currentTarget.id),
    },
  ];

  function setSelectedIcon(iconId) {
    console.log(iconId);
    setSelected({ id: iconId });
  }

  return (
    <section className="side-panel-icons-container w-[210px] flex flex-col items-center gap-1.5">
      {userType === "student" &&
        studentOptions.map((option) => (
          <section
            onClick={option.click}
            id={option.name}
            title={option.name}
            key={option.name}
            className={`option w-[210px] h-14 flex items-center justify-between cursor-pointer hover:bg-[#ff5b5b]
                  ${selected.id === option.name && "bg-[#ff5b5b]"} group`}
          >
            <option.iconName
              id={option.name}
              className={`w-[60px] text-4xl
                text-gray-800 font-light transition-all duration-100 group-hover:text-white ${
                selected.id === option.name && "text-white"
              }`}
            />
              <span
                className={`icon-name w-[150px] text-lg font-medium text-nowrap transition-all duration-100 group-hover:text-white ${
                  selected.id === option.name && "text-white"
                }`}
              >
                {option.name}
              </span>
          </section>
        ))}
      {userType === "admin" &&
        adminOptions.map((option) => (
          <section
            onClick={option.click}
            id={option.name}
            title={option.name}
            key={option.name}
            className={`option w-full h-14 flex items-center justify-between cursor-pointer hover:bg-[#ff5b5b]
                  ${selected.id === option.name && "bg-[#ff5b5b]"} group`}
          >
            <option.iconName
              id={option.name}
              className={`w-[60px] text-4xl
                text-gray-800 font-light transition-all duration-100 group-hover:text-white ${
                selected.id === option.name && "text-white"
              }`}
            />
              <span
                className={`icon-name w-[190px] text-lg font-medium text-nowrap transition-all duration-100 group-hover:text-white ${
                  selected.id === option.name && "text-white"
                }`}
              >
                {option.name}
              </span>
          </section>
        ))}
    </section>
  );
};

export default SidePanelIcons;
