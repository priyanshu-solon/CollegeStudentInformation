import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/aboutus' },
    { label: 'Admission', path: '/admission' },
    { label: 'Faculty', path: '/faculty' },
    { label: 'Administration', path: '/administration' },
    { label: 'Syllabus', path: '/syllabus' },
    { label: 'Department', path: '/department' },
    { label: 'Services', path: '/services' },
    { label: 'Placements', path: '/placements' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
    { label: 'Login', path: '/login' }
  ];

  return (
    <nav className="navbar navbar-expand bg-primary">
      <div className="container-fluid justify-content-center">
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav gap-2">
            {navItems.map((item, idx) => (
              <li key={idx} className="nav-item">
                <Link className="nav-link text-white" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
