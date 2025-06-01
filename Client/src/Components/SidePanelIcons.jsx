import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";

const SidePanelIcons = ({ displayScreen, expanded, userType }) => {
  const [selected, setSelected] = useState(
    userType === "student" ? { id: "Profile" } : { id: "Admin" }
  );
  useEffect(() => {
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
  ];
  const studentOptions = [
    {
      name: "Profile",
      iconName: FaRegUserCircle,
      click: (e) => setSelectedIcon(e.currentTarget.id),
    },
    {
      name: "User Details",
      iconName: BiEdit,
      click: (e) => setSelectedIcon(e.currentTarget.id),
    },
  ];

  function setSelectedIcon(iconId) {
    console.log(iconId);
    setSelected({ id: iconId });
    displayScreen(iconId);
  }

  return (
    <section className="side-panel-icons-container flex flex-col items-center gap-1.5">
      {userType === "student" &&
        studentOptions.map((option) => (
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
              className={`${!expanded && "w-full h-full text-4xl sm:p-2"} ${
                expanded && "w-[40px] h-[40px] ml-1"
              } text-gray-800 font-light transition-all duration-200 group-hover:text-white ${
                selected.id === option.name && "text-white"
              }`}
            />
            {expanded && (
              <span
                className={`icon-name mr-2 text-lg font-medium transition-all duration-200 group-hover:text-white ${
                  selected.id === option.name && "text-white"
                }`}
              >
                {option.name}
              </span>
            )}
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
              className={`${!expanded && "w-full h-full text-4xl sm:p-2"} ${
                expanded && "w-[40px] h-[40px] ml-1"
              } text-gray-800 font-light transition-all duration-200 group-hover:text-white ${
                selected.id === option.name && "text-white"
              }`}
            />
            {expanded && (
              <span
                className={`icon-name mr-2 text-lg font-medium transition-all duration-200 group-hover:text-white ${
                  selected.id === option.name && "text-white"
                }`}
              >
                {option.name}
              </span>
            )}
          </section>
        ))}
    </section>
  );
};

export default SidePanelIcons;
