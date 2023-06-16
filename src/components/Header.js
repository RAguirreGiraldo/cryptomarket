import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
        <header>
            <div className="header-container">
                <div className="header-title">
                    <h2>CryptoMarket</h2>
                </div>
                <Navigation/>
            </div> 
          </header>
    </header>
  );
}

export default Header;

