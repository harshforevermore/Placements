import React from "react";

const ProgressBar = ({ step }) => {
  return (
    <div className="wrapper flex justify-center">
      <div className="progress-bar-container px-6 py-4 md:px-8 md:py-6 flex items-center justify-center gap-2 md:gap-3 rounded-lg shadow-[0_0_5px_gray] bg-red-500">
        <div className="first-part relative flex items-center">
          <section
            className={`dot absolute -left-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-6 border-white ${
              step >= 0 ? "bg-red-500" : "bg-white"
            } transition-colors duration-200 ease-linear`}
          ></section>
          <section
            className={`bar w-40 sm:w-52 h-2 border-1 border-white ${
              step >= 1 ? "bg-red-500" : "bg-white"
            } rounded-lg transition-colors duration-200 ease-linear`}
          ></section>
        </div>
        <div className="second-part relative flex items-center">
          <section
            className={`dot absolute -left-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-6 border-white ${
              step >= 1 ? "bg-red-500" : "bg-white"
            } transition-colors duration-200 ease-linear`}
          ></section>
          <section
            className={`bar w-40 sm:w-52 h-2 border-1 border-white ${
              step >= 2 ? "bg-red-500" : "bg-white"
            } rounded-lg transition-colors duration-200 ease-linear`}
          ></section>
        </div>
        <div className="third-part relative flex items-center">
          <section
            className={`dot absolute -left-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-6 border-white ${
              step >= 2 ? "bg-red-500" : "bg-white"
            } transition-colors duration-200 ease-linear`}
          ></section>
          <section
            className={`bar w-40 sm:w-52 h-2 border-1 border-white ${
              step >= 3 ? "bg-red-500" : "bg-white"
            } rounded-lg transition-colors duration-200 ease-linear`}
          ></section>
        </div>
        <div className="third-part relative flex items-center">
          <section
            className={`dot absolute -left-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-6 border-white ${
              step >= 3 ? "bg-red-500" : "bg-white"
            } transition-colors duration-200 ease-linear`}
          ></section>
          {/* <section
            className={`bar w-52 h-2 ${
              step >= 3 ? "bg-red-500" : "bg-white"
            } rounded-lg transition-colors duration-150 ease-linear`}
          ></section> */}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
