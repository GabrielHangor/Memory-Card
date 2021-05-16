import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './main/Main';
import Footer from './Footer';
import cards from './CardsArray';

function App() {
  const [cardsArray, setCardsAttay] = useState();

  useEffect(() => {
    setCardsAttay(cards);
  }, []);

  console.log(cardsArray)

  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
