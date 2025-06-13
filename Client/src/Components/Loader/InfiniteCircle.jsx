import React from "react";

const InfiniteCircle = ({ scale }) => {
  return (
    // <div className={`infinite-circle-container inline-block ${scale && `scale-${scale}`} border`}>
    <span
      className={`circle w-10 h-10 border-5 border-red-500 border-l-red-200 rounded-full ${
        scale && `scale-${scale}`
      } animate-spin`}
    ></span>
    // </div>
  );
};

export default InfiniteCircle;