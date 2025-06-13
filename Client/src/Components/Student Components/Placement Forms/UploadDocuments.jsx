import React from "react";
import FileInput from "../../Form Components/FileInput";

const UploadDocuments = () => {
  return (
    <div className="education-details-container bg-transparent w-full py-4 px-4 flex flex-col gap-2">
      <h1 className="mb-2 text-2xl text-red-500 font-bold">Upload Documents</h1>
      <section className="section-1 flex flex-col gap-4">
        <FileInput
            name="aadhaarCard"
            label="Aadhaar Card"
        />
        <FileInput
            name="marksheet10"
            label="10th Marksheet"
        />
        <FileInput
            name="marksheet12"
            label="12th Marksheet"
        />
      </section>
    </div>
  );
};

export default UploadDocuments;
