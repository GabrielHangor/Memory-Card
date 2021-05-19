import React from 'react';
import { ReactComponent as ReactLogo } from './spinner.svg';

function Loader() {
  return (
    <div className="loader-container">
      <ReactLogo />
    </div>
  );
}

export default Loader;
