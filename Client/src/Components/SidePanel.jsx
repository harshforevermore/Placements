import React, { useState } from "react";
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import SidePanelIcons from "./SidePanelIcons";

const SidePanel = () => {
  const [expanded, setExpanded] = useState(false);
  const [hover, setHover] = useState(false);
  
  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      tabIndex={0}
      onBlur={() => setExpanded(false)}
      className="side-panel-container fixed top-16 left-0 z-30 min-h-full bg-white shadow-[0_0_3px_gray]"
    >
      <div className={`expand-collapse-container py-1 border-b-1 border-gray-500 opacity-0 transition-all duration-300 ease-in-out ${hover && 'opacity-100'}`}>
        {hover && expanded == false && (
          <GoSidebarExpand
            onClick={() => setExpanded(true)}
            className="w-8 h-8 rotate-180 text-gray-800 place-self-end cursor-pointer"
          />
        )}
        {hover && expanded == true && (
          <GoSidebarCollapse
            onClick={() => setExpanded(false)}
            className="w-8 h-8 rotate-180 text-gray-800 place-self-end cursor-pointer"
          />
        )}
      </div>
      <div
        className={`icons-container h-full ${expanded ? "w-[190px] md:w-[210px]" : "w-[50px] md:w-[60px] overflow-hidden"}
          pt-1 mt-0 ${hover && 'mt-2'} transition-all duration-100 ease-out`} //${!expanded && "w-10 md:w-12 xl:w-14"} ${expanded && "w-40"}
      >
        <SidePanelIcons />
      </div>
    </div>
  );
};

export default SidePanel;
