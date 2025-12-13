import FileInput from "../../Form Components/FileInput";
import { useFieldArray, useFormContext } from "react-hook-form";
// import { useEffect } from "react";

const UploadDocuments = ({ setAadharCard, setMarksheet10, setMarksheet12 }) => {
  const { control, register, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "extraDocuments",
  });

  return (
    <div className="education-details-container bg-transparent w-full py-4 px-4 flex flex-col gap-4">
      <h1 className="text-2xl text-red-500 font-bold">Upload Documents</h1>

      {/* ✅ Fixed Inputs */}
      <FileInput
        name="aadharCard"
        label="Aadhaar Card"
        setValue={setValue}
      />
      <FileInput
        name="marksheet10"
        label="10th Marksheet"
        setValue={setValue}
      />
      <FileInput
        name="marksheet12"
        label="12th Marksheet"
        setValue={setValue}
      />

      {/* ➕ Dynamic Inputs */}
      <div className="extra-documents flex flex-col gap-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-center">
            <input
              {...register(`extraDocuments[${index}].label`, { required: true })}
              placeholder="Document Name"
              className="border px-2 py-1 w-1/3"
            />
            <FileInput
              name={`extraDocuments[${index}].file`}
              label=""
              required={true}
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-600"
            >
              🗑️
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            append({ label: "", file: null })
          }
          className="text-green-600 font-medium mt-2"
        >
          ➕ Add Document
        </button>
      </div>
    </div>
  );
};

export default UploadDocuments;
