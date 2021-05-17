import React from 'react';

function Card({ src, name }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <h4>{name}</h4>
    </div>
  );
}

export default Card;
