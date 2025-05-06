import React, {useState} from "react";
import { useFormContext } from "react-hook-form";

const Input = ({
  name,
  label,
  required=true,
  type = "text",
  placeholder = "",
  autocomplete = "off",
  minLength,
  maxLength,
  pattern,
  patternMessage = "Invalid Format",
  validation,
  validationMessage = "Invalid Value",
  inputClasses = "",
  step,
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const [isFocused, setIsFocused] = useState(false);
  function handleChange(e) {
    if(e.target.value !== "") {
      setIsFocused(true);
    }
    if(e.target.value === "" && e.target.onblur) {
      setIsFocused(false);
    }
  }
  
  return (
    <div className={`${name}-container flex flex-col`}>
      <div className="input-container relative flex items-center gap-2">
        {label && (
          <label
            htmlFor={name}
            className={`input-label absolute ${isFocused ? 'left-[.55em] -top-1/3 bg-white px-1' : 'left-[.55em] top-[.5em]'} text-lg font-medium text-nowrap transition-all duration-150 ease-in-out`}
          >
            {label}
          </label>
        )}
        <input
          {...register(name, {
            required : {value: required, message: "This field is required"},
            minLength: minLength
              ? {
                  value: minLength,
                  message: `Must be at least ${minLength} characters`,
                }
              : undefined,
            maxLength: maxLength
              ? {
                  value: maxLength,
                  message: `Must be at most ${maxLength} characters`,
                }
              : undefined,
            pattern: pattern
              ? { value: pattern, message: patternMessage }
              : undefined,
            validate: validation
              ? (value) => validation(value) || validationMessage
              : undefined,
          })}
          onFocus={() => setIsFocused(true)}
          onChange={(e) => handleChange(e)}
          type={type}
          id={`${name}-field`}
          className={`w-full p-2 text-lg border-2 border-gray-600 rounded-md hover:border-b-2 focus:shadow-[0_0_5px_gray] focus:outline-none
          ${inputClasses}
          ${errors[name] ? "border-red-600" : "border-gray-500"}`}
          step={step ? step : undefined}
          // placeholder={placeholder}
          autoComplete={autocomplete}
        />
      </div>
      {errors[name] && (
        <span className="select-none text-sm text-red-600 text-center">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default Input;
