import React from "react";
import { useFormContext } from "react-hook-form";

const FileInput = ({
  name,
  label,
  uploadFileType = "PDF",
  maxUploadSize = "200Kb",
  minUploadSize = "20Kb",
  required = true,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={`${name}-container`}>
      <section className="label-input-section w-full flex gap-2">
        <label
          className="relative text-lg font-medium text-gray-900"
          htmlFor={`${name}-file`}
        >
          {label}:
          {required && <span className="absolute -top-1 -right-0.5 text-sm text-red-500">*</span>}
        </label>
        <input
          {...register(name, {
            required: { value: required, message: "This document is required" },
          })}
          className="text-md text-stone-600 file:mr-2 file:py-1 file:px-2 file:border-1 file:border-slate-700 file file:text-sm file:font-medium file:text-stone-700 file:rounded-md hover:file:cursor-pointer hover:file:bg-gray-100"
          aria-describedby="input_desc"
          id={`${name}-file`}
          accept="application/pdf"
          type="file"
        />
      </section>
      <section className="desc-error-section w-full flex gap-2">
        <p className="inline-block text-sm text-slate-600" id="input_desc">
          {uploadFileType} (MAX: {maxUploadSize}, MIN: {minUploadSize}).
        </p>
        {errors[name] && (
          <span className="select-none text-sm text-red-600">
            {errors[name].message}
          </span>
        )}
      </section>
    </div>
  );
};

export default FileInput;
