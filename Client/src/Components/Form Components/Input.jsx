import { useFormContext } from "react-hook-form";

const Input = ({
  name,
  label,
  // labelFixed = true,
  required=true,
  disabled=false,
  value="",
  type = "text",
  // placeholder = "",
  autocomplete = "off",
  minLength,
  maxLength,
  pattern,
  patternMessage = "Invalid Format",
  validation,
  validationMessage = "Invalid Value",
  inputClasses = "",
  containerClasses = "",
  step,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${name}-container flex flex-col ${containerClasses}`}>
      <div className="input-container relative flex items-center"
      // onFocus={() => setLabelUp(true)}
      // onBlur={() => {inputData ? setLabelUp(true) : setLabelUp(false)}}
      >
        {label && (
          <label
            htmlFor={`${name}-field`}
            className={`input-label absolute left-[.55em] bg-white top-1 px-[.1em] cursor-text text-md text-gray-700 font-medium text-nowrap shadow-[0_0_3px_2px_#fff] transition-all duration-150 ease-in-out`}
          >
            {label}
            {required && <span className="absolute -top-1.5 -right-1 text-sm text-red-500">*</span>}
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
          type={type}
          id={`${name}-field`}
          value={value}
          className={`min-w-[100%] mt-4 p-2 text-lg border-2 border-gray-600 rounded-md hover:border-b-2 focus:shadow-[0_0_5px_gray] focus:outline-none
          ${inputClasses}
          ${errors[name] ? "border-red-600" : "border-gray-500"}`}
          step={step ? step : undefined}
          // placeholder={placeholder}
          autoComplete={autocomplete}
          disabled={disabled}
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
