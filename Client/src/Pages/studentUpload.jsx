import React, { useState } from "react";

const StudentUpload = ({ assignmentId }) => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file) return alert("Please select a file");
    const submission = {
      id: Date.now(),
      assignmentId,
      fileName: file.name,
    };
    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    const updated = [...submissions, submission];
    localStorage.setItem("submissions", JSON.stringify(updated));
    alert("Submission uploaded!");
  };

  return (
    <div className="mt-2">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="bg-green-500 text-white px-3 py-1 rounded ml-2">Submit</button>
    </div>
  );
};

export default StudentUpload;
