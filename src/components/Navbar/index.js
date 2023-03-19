import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light" id="navbar">
      <Link className="navbar-brand" to="/">
        Actor Search
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/results"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Results
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/rate"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Rate
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </NavLink>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
