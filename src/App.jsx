import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Admission from './pages/Admission/Admission';
import Faculty from './pages/Faculty/Faculty';
import Administration from './pages/Administration/Administration';
import Syllabus from './pages/Syllabus/Syllabus';
import Department from './pages/Department/Department';
import Services from './pages/Services/Services';
import Placements from './pages/Placements/Placements';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';

import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';

const App = () => {
  const [students, setStudents] = useState([
    { roll: '1', name: 'John Doe', stream: 'CSE', performance: '85', profile: 'GitHub: johndoe' },
    { roll: '2', name: 'John Wick', stream: 'Mechanical', performance: '75', profile: 'GitHub: johnwick' }
  ]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <Router>
      <Header />
      <Navbar />
      <div className="container my-5">
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-light shadow rounded p-4">
                <StudentTable students={students} />
                <hr className="my-4" />
                <AddStudentForm onAdd={addStudent} />
              </div>
            }
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/department" element={<Department />} />
          <Route path="/services" element={<Services />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
