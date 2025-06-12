import React, { useState } from "react";

const AdminUpload = ({ setAssignments }) => {
  const [assignment, setAssignment] = useState({
    title: "",
    lastDate: "",
    type: "",
    file: null,
  });

  const handleChange = (e) => {
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setAssignment({ ...assignment, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAssignment = {
      ...assignment,
      id: Date.now(),
      fileName: assignment.file.name,
    };
    const existing = JSON.parse(localStorage.getItem("assignments")) || [];
    const updated = [...existing, newAssignment];
    localStorage.setItem("assignments", JSON.stringify(updated));
    setAssignments(updated);
    alert("Assignment uploaded successfully!");
    setAssignment({ title: "", lastDate: "", type: "", file: null });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Upload Assignment</h2>
      <input name="title" placeholder="Title" value={assignment.title} onChange={handleChange} className="block mb-2 p-2 border rounded" />
      <input type="date" name="lastDate" value={assignment.lastDate} onChange={handleChange} className="block mb-2 p-2 border rounded" />
      <input name="type" placeholder="File Type" value={assignment.type} onChange={handleChange} className="block mb-2 p-2 border rounded" />
      <input type="file" onChange={handleFile} className="block mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">Upload</button>
    </form>
  );
};

export default AdminUpload;
