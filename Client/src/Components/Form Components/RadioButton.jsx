import React from "react";
import { useFormContext } from "react-hook-form";

const RadioButton = ({ name = "", title = "", options = [] }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={`${name}-container flex items-center gap-4`}>
      <h2 className="text-lg font-medium">{title}:</h2>
      {options.map((option) => (
        <label
          key={option}
          className="cursor-pointer flex items-center space-x-1"
          htmlFor={`${name}-${option}`}
        >
          <input
            type="radio"
            className="hidden peer"
            id={`${name}-${option}`}
            value={option}
            {...register(name, { 
              required: "This field is required",
              onChange: () => trigger(name)
            })}
          />
          <div className="w-5 h-5 border-2 border-gray-500 rounded-full peer-checked:border-4 peer-checked:border-red-500 transition ease-linear"></div>
          <span>{option}</span>
        </label>
      ))}
      {errors[name] && (
        <span className="select-none text-sm text-red-600 text-center">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default RadioButton;
