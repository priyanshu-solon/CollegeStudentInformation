import React from 'react';

const StudentTable = ({ students }) => (
  <>
    <h2 className="mx-4">Student Information</h2>
    <div className="row mx-4 fw-bold">
      <div className="col">Roll Number</div>
      <div className="col">Name</div>
      <div className="col">Stream</div>
      <div className="col">Performance</div>
      <div className="col">Profile</div>
    </div>
    {students.map((s, idx) => (
      <div className="row mx-4" key={idx}>
        <div className="col">{s.roll}</div>
        <div className="col">{s.name}</div>
        <div className="col">{s.stream}</div>
        <div className="col">{s.performance}</div>
        <div className="col">{s.profile}</div>
      </div>
    ))}
  </>
);

export default StudentTable;
