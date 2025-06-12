import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import NewDocument from "./UploadDocumentComponents/NewDocument";
import UploadedDocuments from "./UploadDocumentComponents/UploadedDocuments";

const UploadDocuments = () => {
  const selection = [
    {
      id: 1,
      name: "New Document",
      icon: FaPlus,
    },
  ];
  const [selected, setSelected] = useState(false);
  const [uploadedDocuments, setUploadedDocuments] = useState([]);

  function appendNewDocument(data) {
    setSelected(false);
    setUploadedDocuments([data, ...uploadedDocuments]);
  }

  return (
    <div className="upload-documents-container relative w-full h-11/12 p-3 md:px-20">
      <div className="select-container text-center">
        {selection.map((select) => {
          return (
            <section
              key={select.id}
              className={`select cursor-pointer w-40 h-30 py-2 px-4 rounded-lg shadow-[0_0_3px_gray] place-content-center place-items-center hover:shadow-[0_0_5px_gray]`}
              onClick={() => setSelected(!selected)}
            >
              <FaPlus id={`${select.name}-icon`} className="w-10 h-10" />
              <span className={`name text-nowrap`}>{select.name}</span>
            </section>
          );
        })}
      </div>
      <NewDocument
        selected={selected}
        setSelected={setSelected}
        appendNewDocument={appendNewDocument}
      />
      <hr className="my-10 text-stone-300" />
      <div className="content-container">
        {uploadedDocuments.length > 0 ? (
          <div className="uploaded-documents-parent">
            <h1 className="heading text-2xl font-medium mb-4">Previous Documents</h1>
            <UploadedDocuments uploadedDocuments={uploadedDocuments} />
          </div>
        ) : (
          <section className="no-uploaded-documents text-center">
            <span className="text-3xl text-stone-400">
              Uploaded Documents Appear Here
            </span>
          </section>
        )}
      </div>
    </div>
  );
};

export default UploadDocuments;
