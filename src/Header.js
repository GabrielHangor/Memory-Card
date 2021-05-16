import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="header-text">
        <h1>Bleach Memory Game</h1>
        <h3>
          Get points by clicking on an image but don't click on any more than
          once!
        </h3>
      </div>
      <div className="header-values">
        <h2>Current Score: 0</h2>
        <h2>Best Score: 0</h2>
      </div>
    </div>
  );
}

export default Header;
