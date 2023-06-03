import React from 'react';
// import { NavLink } from 'react-router-dom';
import { FaCog, FaMicrophone } from 'react-icons/fa';
import './home.css';

const NavBar = () => (
  <nav>
    <div className="link">
      <div className="flex">
        <h2>Star Wars Characters</h2>
      </div>
      <div className="mic">
        <FaCog />
        <FaMicrophone />
      </div>

    </div>

  </nav>
);

export default NavBar;
