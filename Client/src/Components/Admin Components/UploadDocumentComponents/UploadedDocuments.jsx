import React from "react";

const UploadedDocuments = ({ uploadedDocuments }) => {
  return (
    <div className="uploaded-docuemnts-container w-full flex flex-wrap gap-4">
      {uploadedDocuments.map((document, index) => {
        return (
          <section key={index} className="uploaded-documents-container cursor-pointer flex-1 min-w-[340px] max-w-[50%] p-6 border-1 border-stone-300 rounded-lg shadow-md">
            <p className="doc-title block text-[1.4em] font-medium">{document.documentName}</p>
            <p className={`doc-status block text-base text-gray-600 font-medium`}>Status: <span className={`text-gray-800 font-medium ${document.status === "Active" ? 'text-green-500' : 'text-red-500'}`}>{document.status}</span></p>
            <p className="doc-type block text-base text-gray-600 font-medium">Type Allowed: <span className="text-gray-800 font-medium">{document.documentType}</span></p>
            <p className="doc-last-date block text-base text-gray-600 font-medium">Last Date: <span className="text-gray-800 font-medium">{document.lastDate}</span></p>
            <p className="closing-time block text-base text-gray-600 font-medium">Closing Time: <span className="text-gray-800 font-medium">{document.time}</span></p>
          </section>
        );
      })}
    </div>
  );
};

export default UploadedDocuments;
