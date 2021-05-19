import React from 'react';
import Card from './Card';

function Main({ cardsArray, handleClick, checkResults }) {
  return (
    <div className="cards-container">
      {cardsArray.map((card) => {
        const { id, src, name } = card;
        return (
          <Card
            checkResults={checkResults}
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
