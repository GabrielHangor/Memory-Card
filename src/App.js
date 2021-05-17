import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './main/Main';
import cards from './CardsArray';

function App() {
  const [cardsArray, setCardsAttay] = useState();

  useEffect(() => {
    setCardsAttay(cards);
  }, []);

  return (
    <div className="container">
      <Header />
      {cardsArray && <Main cardsArray={cardsArray} />}
    </div>
  );
}

export default App;
