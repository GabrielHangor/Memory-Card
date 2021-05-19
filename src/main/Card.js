import React from 'react';
import { useState } from 'react';

function Card({ src, name, handleClick, checkResults }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      onClick={() => {
        handleClick();
        setIsClicked(true);
        checkResults(isClicked);
      }}
      className="card"
    >
      <img src={src} alt="" />
      <h4>{name}</h4>
    </div>
  );
}

export default Card;
