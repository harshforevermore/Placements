import React from "react";

const Button = ({ name, type = "button", onClickFn }) => {
  return (
    <div className="button-container">
      <button
        type={type}
        onClick={onClickFn ? onClickFn : undefined}
        className={`bg-[#ec2323] text-white font-medium rounded-lg px-4 py-2 align-baseline cursor-pointer hover:shadow-[1px_1px_3px_black] active:shadow-none transition-shadow duration-150 ease-linear`}
      >
        {name}
      </button>
    </div>
  );
};
export default Button;
