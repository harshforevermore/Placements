import React, { useState } from "react";

const UploadDocumentsStudent = () => {
  const [toUpload, setToUpload] = useState(undefined);
  return (
    <div className="upload-documents-container w-full p-3 md:px-20 mt-5 flex flex-wrap gap-4">
      {toUpload ? (
        toUpload.map((document, index) => {
          return (
            <section
              key={index}
              className="uploaded-documents-container cursor-pointer flex-1 min-w-[340px] max-w-[50%] p-6 border-1 border-stone-300 rounded-lg shadow-md"
            >
              <p className="doc-title block text-[1.4em] font-medium">
                {document.documentName}
              </p>
              <p
                className={`doc-status block text-base text-gray-600 font-medium`}
              >
                Status:{" "}
                <span
                  className={`text-gray-800 font-medium ${
                    document.status === "Active"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {document.status}
                </span>
              </p>
              <p className="doc-type block text-base text-gray-600 font-medium">
                Type Allowed:{" "}
                <span className="text-gray-800 font-medium">
                  {document.documentType}
                </span>
              </p>
              <p className="doc-last-date block text-base text-gray-600 font-medium">
                Last Date:{" "}
                <span className="text-gray-800 font-medium">
                  {document.lastDate}
                </span>
              </p>
              <p className="closing-time block text-base text-gray-600 font-medium">
                Closing Time:{" "}
                <span className="text-gray-800 font-medium">
                  {document.time}
                </span>
              </p>
            </section>
          );
        })
      ) : (
        <section className="already-uploaded mt-10 mx-auto">
            <span className="text-3xl text-stone-400">No Documents To Upload</span>
        </section>
      )}
    </div>
  );
};

export default UploadDocumentsStudent;
