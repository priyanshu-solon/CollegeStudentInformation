import React, { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    roll: '', name: '', stream: '', performance: '', profile: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ roll: '', name: '', stream: '', performance: '', profile: '' });
  };

  return (
    <>
      <h2 className="mx-4 mt-4">Add Student</h2>
      <form className="d-flex justify-content-center align-items-center" onSubmit={handleSubmit}>
        <div className="w-100 mx-4">
          {['roll', 'name', 'stream', 'performance', 'profile'].map((field) => (
            <div key={field}>
              <label className="form-label">
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                className="form-control"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <input className="btn btn-primary my-2" type="submit" value="Add Student" />
        </div>
      </form>
    </>
  );
};

export default AddStudentForm;
