// import { useFormContext } from "react-hook-form";

// const FileInput = ({
//   name,
//   label,
//   uploadFileType = "PDF",
//   maxUploadSize = "200Kb",
//   minUploadSize = "20Kb",
//   required = true,
//   setValue,
// }) => {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext();

//   return (
//     <div className={`${name}-container w-full`}>
//       <section className="label-input-section w-full flex gap-2 items-center">
//         {label && (
//           <label
//             htmlFor={`${name}-file`}
//             className="text-lg font-medium text-gray-900"
//           >
//             {label}:{required && <span className="text-red-500">*</span>}
//           </label>
//         )}
//         <input
//           {...register(name, {
//             required: { value: required, message: "Required" },
//             validate: {
//               size: (files) =>
//                 !files[0] ||
//                 files[0].size <= 200 * 1024 ||
//                 "Max file size is 200KB",
//             },
//           })}
//           id={`${name}-file`}
//           accept="application/pdf"
//           type="file"
//           className="file:mr-2 file:py-1 file:px-2 file:border file:rounded-md file:text-sm text-stone-600"
//           onChange={(e) => {
//             const file = e.target.files[0];
//             setValue(name, file); // force RHF to treat it as a File object, not FileList
//           }}
//         />
//       </section>
//       <section className="desc-error-section w-full flex gap-2">
//         <p className="inline-block text-sm text-slate-600" id="input_desc">
//           {uploadFileType} (MAX: {maxUploadSize}, MIN: {minUploadSize}).
//         </p>
//         {errors[name] && (
//           <span className="select-none text-sm text-red-600">
//             {errors[name].message}
//           </span>
//         )}
//       </section>
//     </div>
//   );
// };

// export default FileInput;
import { useFormContext, Controller } from "react-hook-form";

const FileInput = ({
  name,
  label,
  uploadFileType = "PDF",
  maxUploadSize = "200Kb",
  minUploadSize = "20Kb",
  required = true,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${name}-container w-full`}>
      <section className="label-input-section w-full flex gap-2 items-center">
        {label && (
          <label
            htmlFor={`${name}-file`}
            className="text-lg font-medium text-gray-900"
          >
            {label}:{required && <span className="text-red-500">*</span>}
          </label>
        )}

        <Controller
          name={name}
          control={control}
          rules={{
            required: required ? "This document is required" : false,
            validate: {
              size: (file) =>
                !file || file.size <= 200 * 1024 || "Max file size is 200KB",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <input
              id={`${name}-file`}
              accept="application/pdf"
              type="file"
              className="file:mr-2 file:py-1 file:px-2 file:border file:rounded-md file:text-sm text-stone-600"
              onChange={(e) => {
                const file = e.target.files[0];
                onChange(file); // sets File object directly
              }}
            />
          )}
        />
      </section>

      <section className="desc-error-section w-full flex gap-2">
        <p className="inline-block text-sm text-slate-600">
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
