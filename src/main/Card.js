import React from 'react';
import { useState } from 'react';

function Card({ src, name, handleClick, id }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      onClick={() => {
        handleClick(id);
        setIsClicked(true);
      }}
      className="card"
    >
      <img src={src} alt="" />
      <h4>{name}</h4>
    </div>
  );
}

export default Card;
