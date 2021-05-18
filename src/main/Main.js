import React from 'react';
import Card from './Card';

function Main({ cardsArray, handleClick }) {
  return (
    <div className="cards-container">
      {cardsArray.map((card) => {
        const { id, src, name } = card;
        return (
          <Card
            id={id}
            handleClick={handleClick}
            key={id}
            src={src}
            name={name}
          />
        );
      })}
    </div>
  );
}

export default Main;
