import React from "react";
import { TbFileUpload } from "react-icons/tb";
import { PiUserListBold } from "react-icons/pi";
import { LuCircleCheckBig } from "react-icons/lu";
import { IoSchool } from "react-icons/io5";

const ProgressBar = ({ step }) => {
  return (
    <div className="wrapper place-items-center">
      <div className="progress-bar-container flex gap-2">
        <div className="personal-details relative place-items-center bg-transparent">
            <PiUserListBold
              className={`icon relative z-10 text-[2.5em] md:text-[3em] text-green-700 p-1 bg-white border-3 rounded-full transition-colors duration-150 ease-in-out`}
              aria-describedby="icon_desc"
            />
          <p className="desc text-sm text-stone-500 text-nowrap" id="icon_desc">
            Personal Details
          </p>
          <section className={`bar absolute top-1/4 -right-20 w-35 h-[.45em] md:h-2 rounded-md ${step >= 1 ? "bg-green-700" : "border border-stone-300 bg-stone-50"} transition-colors duration-150 ease-in-out`}></section>
        </div>
        <div className="Education-details relative place-items-center bg-transparent">
          <IoSchool
            className={`icon relative z-10 text-[2.5em] p-1 bg-white border-3 rounded-full ${step >= 1 ? "text-green-700" : "text-red-500"} md:text-[3em] transition-colors duration-150 ease-in-out`}
            aria-describedby="icon_desc"
          />
          <p className="desc text-sm text-stone-500 text-nowrap" id="icon_desc">
            Education Details
          </p>
          <section className={`bar absolute top-1/4 -right-20 w-35 h-[.45em] md:h-2 rounded-md ${step >= 2 ? "bg-green-700" : "border border-stone-300 bg-stone-50"} transition-colors duration-150 ease-in-out`}></section>
        </div>
        <div className="Upload-Documents relative place-items-center bg-transparent">
          <TbFileUpload
            className={`icon relative z-10 text-[2.5em] p-1 bg-white border-3 rounded-full ${step >= 2 ? "text-green-700" : "text-red-500"} md:text-[3em] transition-colors duration-150 ease-in-out`}
            aria-describedby="icon_desc"
          />
          <p className="desc text-sm text-stone-500 text-nowrap" id="icon_desc">
            Upload Documents
          </p>
          <section className={`bar absolute top-1/4 -right-20 w-35 h-[.45em] md:h-2 rounded-md ${step >= 3 ? "bg-green-700" : "border border-stone-300 bg-stone-50"} transition-colors duration-150 ease-in-out`}></section>
        </div>
        <div className="Final-Check relative place-items-center bg-transparent">
          <LuCircleCheckBig
            className={`icon text-[2.5em] p-1 bg-white border-3 rounded-full ${step >= 3 ? "text-green-700" : "text-red-500"} md:text-[3em] transition-colors duration-150 ease-in-out`}
            aria-describedby="icon_desc"
          />
          <p className="desc text-sm text-stone-500 text-nowrap" id="icon_desc">
            Final Verification
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
