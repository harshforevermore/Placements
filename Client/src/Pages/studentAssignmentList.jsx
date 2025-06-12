import React, { useEffect, useState } from "react";
import StudentUpload from "./StudentUpload";

const StudentAssignmentList = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("assignments")) || [];
    setAssignments(data);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Assignments</h2>
      {assignments.map((item) => (
        <div key={item.id} className="border p-4 mb-4 rounded shadow">
          <p><strong>Title:</strong> {item.title}</p>
          <p><strong>Last Date:</strong> {item.lastDate}</p>
          <p><strong>Type:</strong> {item.type}</p>
          <p><strong>File:</strong> {item.fileName}</p>
          <StudentUpload assignmentId={item.id} />
        </div>
      ))}
    </div>
  );
};

export default StudentAssignmentList;