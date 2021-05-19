import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './main/Main';
import cards from './CardsArray';
import shuffle from 'lodash/shuffle';

function App() {
  const [cardsArray, setCardsArray] = useState();
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    setCardsArray(cards);
  }, []);

  // const setIsClicked = (id) => {
  //   setCardsArray(
  //     cardsArray.map((card) =>
  //       card.id === id ? { ...card, clicked: true } : card
  //     )
  //   );
  // };

  const handleClick = () => {
    const shuffledArray = shuffle(cardsArray);
    setCardsArray(shuffledArray);
  };

  const checkResults = (isClicked) => {
    if (!isClicked) {
      setCurrentScore(currentScore + 1);
    } else if (isClicked) {
      setBestScore(currentScore);
      setCurrentScore(0);
    }
  };

  return (
    <div className="container">
      <Header currentScore={currentScore} bestScore={bestScore} />
      {cardsArray && (
        <Main
          checkResults={checkResults}
          handleClick={handleClick}
          cardsArray={cardsArray}
        />
      )}
    </div>
  );
}

export default App;
