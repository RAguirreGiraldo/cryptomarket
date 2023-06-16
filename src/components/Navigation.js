import { NavLink, Link } from 'react-router-dom';
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
        <li>
          <Link className='button btn-add' to="/cryptomarket/currency/new">
            New Currency
          </Link>
        </li>
      </ul>
      </nav>
  );
}

export default Navigation;