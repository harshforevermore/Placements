import React, { useEffect, useState } from "react";
import AdminUpload from "./AdminUpload";

const AdminDashboard = () => {
  const [assignments, setAssignments] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("assignments")) || [];
    const subs = JSON.parse(localStorage.getItem("submissions")) || [];
    setAssignments(data);
    setSubmissions(subs);
  }, []);

  return (
    <div className="p-6">
      <AdminUpload setAssignments={setAssignments} />
      <h2 className="text-xl font-bold mt-6 mb-2">Submissions</h2>
      {assignments.map((a) => (
        <div key={a.id} className="mb-4">
          <p className="font-bold">{a.title}</p>
          <ul className="list-disc ml-6">
            {submissions
              .filter((s) => s.assignmentId === a.id)
              .map((s) => (
                <li key={s.id}>{s.fileName}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
