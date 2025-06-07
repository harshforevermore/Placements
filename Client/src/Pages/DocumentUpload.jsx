import React, { useState } from 'react';

function DocumentUpload() {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setFileURL(url);
    }
  };

  return (
    <div className="border-2 border-red-500 rounded-xl p-6 mt-6 bg-white shadow-md">
      <h2 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
        📄 Document Upload
      </h2>

      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
        className="w-full border border-red-500 rounded-md px-4 py-2 text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-red-100 file:text-red-700 hover:file:bg-red-200"
      />

      {file && (
        <div className="mt-4">
          <p className="text-gray-800 text-sm mb-2">
            <strong>Selected File:</strong> {file.name}
          </p>

          <a
            href={fileURL}
            download={file.name}
            className="inline-block bg-red-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition"
          >
            ⬇️ Save to Local
          </a>
        </div>
      )}
    </div>
  );
}

export default DocumentUpload;
