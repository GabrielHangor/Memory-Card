import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './main/Main';
import cards from './CardsArray';
import shuffle from 'lodash/shuffle';

function App() {
  const [cardsArray, setCardsAttay] = useState();

  useEffect(() => {
    setCardsAttay(cards);
  }, []);

  // const setIsClicked = (id) => {
  //   setCardsAttay(
  //     cardsArray.map((card) =>
  //       card.id === id ? { ...card, clicked: true } : card
  //     )
  //   );
  // };

  const handleClick = (id) => {
    const shuffledArray = shuffle(cardsArray);
    setCardsAttay(shuffledArray);
  };

  return (
    <div className="container">
      <Header />
      {cardsArray && <Main handleClick={handleClick} cardsArray={cardsArray} />}
    </div>
  );
}

export default App;
