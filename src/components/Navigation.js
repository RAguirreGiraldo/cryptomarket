import { NavLink, Link } from 'react-router-dom';
import React from 'react';

function Navigation() {
  return (
    <>
      <div class="header-nav-link">
          <nav class="menu-nav">
              <ul>
                  <li>
                    <NavLink to="/cryptomarket">
                        Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to = "https://www.coingecko.com/">
                        Cryptoinfo
                    </NavLink>                  
                  </li>
                  <Link className='button btn-add' to="/cryptomarket/currency/new">
                    New Currency
                  </Link>
              </ul>
          </nav>
      </div>    
    </>
  );
}

export default Navigation;