import { FaRegUserCircle } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const SidePanelIcons = ({}) => {
  const {userType} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const adminOptions = [
    {
      name: "Admin",
      iconName: HiOutlineDocumentText,
      iconPath: "/dashboard/admin",
      click: () => {
        navigate("/dashboard");
      },
    },
    {
      name: "Controls",
      iconName: LuSettings,
      iconPath: "/dashboard/adminControls",
      click: () => {
        navigate("/dashboard/adminControls");
      },
    },
  ];
  const studentOptions = [
    {
      name: "Profile",
      iconName: FaRegUserCircle,
      iconPath: "/dashboard/profile",
      click: () => {
        navigate("/dashboard");
      },
    },
    {
      name: "Student Info",
      iconName: BiEdit,
      iconPath: "/dashboard/studentInfo",
      click: () => {
        navigate("/dashboard/studentInfo");
      },
    },
  ];

  return (
    <section className="side-panel-icons-container w-[190px] md:w-[210px] flex flex-col items-center gap-1.5">
      {userType === "student" &&
        studentOptions.map((option) => (
          <section
            onClick={option.click}
            id={option.name}
            title={option.name}
            key={option.name}
            className={`option w-[190px] md:w-[210px] h-14 flex items-center justify-between cursor-pointer hover:bg-[#ff5b5b] transition-all duration-100
                  ${currentPath === option.iconPath && "bg-[#ff5b5b]"} group`}
          >
            <option.iconName
              id={option.name}
              className={`w-[50px] md:w-[60px] text-3xl md:text-4xl
                text-gray-800 font-light transition-all duration-100 group-hover:text-white ${
                  currentPath === option.iconPath && "text-white"
                }`}
            />
            <span
              className={`icon-name w-[140px] md:w-[150px] text-lg font-medium text-nowrap transition-all duration-100 group-hover:text-white ${
                currentPath === option.iconPath && "text-white"
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
            className={`option w-[190px] md:w-[210px] h-14 flex items-center justify-between cursor-pointer hover:bg-[#ff5b5b] transition-all duration-100
                  ${currentPath === option.iconPath && "bg-[#ff5b5b]"} group`}
          >
            <option.iconName
              id={option.name}
              className={`w-[50px] md:w-[60px] text-3xl md:text-4xl
                text-gray-800 font-light transition-all duration-100 group-hover:text-white ${
                  currentPath === option.iconPath && "text-white"
                }`}
            />
            <span
              className={`icon-name w-[140px] md:w-[150px] text-lg font-medium text-nowrap transition-all duration-100 group-hover:text-white ${
                currentPath === option.iconPath && "text-white"
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
