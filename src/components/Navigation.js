import { NavLink } from 'react-router-dom';
import React from 'react';

function Navigation() {
  return (
      <nav>
      <ul>
        <li>
          <NavLink to ="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to = "/cryptoinfo">
            Cryptoinfo
          </NavLink>
        </li> 
        <li>
          <NavLink to = "/about">
            About Us
          </NavLink>
        </li>
      </ul>
      </nav>
  );
}

export default Navigation;