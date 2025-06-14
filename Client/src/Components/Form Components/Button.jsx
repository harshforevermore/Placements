import React from "react";

const Button = ({ name, type = "button", icon: Icon, onClickFn, bgColor, textColor }) => {
  return (
    <div className="button-container inline-block">
      <button
        type={type}
        onClick={onClickFn ? onClickFn : undefined}
        className={`flex items-center gap-1 ${bgColor ? bgColor : 'bg-[#ec2323]'} ${textColor ? textColor : 'text-white'} font-medium rounded-lg px-4 py-2 align-baseline cursor-pointer hover:shadow-[1px_1px_3px_black] active:shadow-none transition-shadow duration-150 ease-linear`}
      >
        {Icon && <Icon className=" text-2xl" />}
        <span className="text-base font-medium">{name}</span>
      </button>
    </div>
  );
};
export default Button;
