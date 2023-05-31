import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaCog, FaMicrophone } from 'react-icons/fa';

const NavBar = () => {
  const links = [
    {
      to: '/',
      label: <FaArrowLeft />,
    },
    {
      to: '/',
      label: <h1 className="text-[1.5rem] leading-tight">Rick & Morty DB </h1>,
    },
  ];

  return (
    <nav>
      <div className="flex items-center gap-2">
        {links.map((link) => (
          <NavLink key={link.to} className="links" to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="flex gap-4">
        <FaCog />
        <FaMicrophone />
      </div>
    </nav>
  );
};

export default NavBar;