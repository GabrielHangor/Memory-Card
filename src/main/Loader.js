import React from 'react';
import { ReactComponent as ReactLogo } from './spinner.svg';

function Loader() {
  return (
    <div className="loader-container">
      <ReactLogo />
      <h1>You have lost! Try again.</h1>
    </div>
  );
}

export default Loader;
