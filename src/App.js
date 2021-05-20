import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './main/Main';
import cards from './CardsArray';
import shuffle from 'lodash/shuffle';
import Loader from './main/Loader';

function App() {
  const [cardsArray, setCardsArray] = useState();
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [doubleClicked, setDoubleClicked] = useState(false);

  useEffect(() => {
    setCardsArray(cards);
  }, []);

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
      setDoubleClicked(true);

      setTimeout(() => {
        setDoubleClicked(false);
      }, 800);
    }
  };

  return (
    <div className="container">
      <Header currentScore={currentScore} bestScore={bestScore} />
      {cardsArray && !doubleClicked ? (
        <Main
          checkResults={checkResults}
          handleClick={handleClick}
          cardsArray={cardsArray}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
