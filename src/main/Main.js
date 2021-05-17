import React from 'react';
import Card from './Card';

function Main({ cardsArray }) {
  return (
    <div className="cards-container">
      {cardsArray.map((card) => {
        const { id, src, name } = card;
        return <Card key={id} src={src} name={name} />;
      })}
    </div>
  );
}

export default Main;
