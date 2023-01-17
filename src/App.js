import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";

const CARD_LIST = [
  {
    card_id: 1,
    message: "I love you",
    owner: "Megan",
  },
  {
    card_id: 2,
    message: "I love you",
    owner: "Megan",
  },
];

function App() {
  const [cardsList, setCardsList] = useState([]);

  const URL = "http://localhost:5000/";

  const addCard = (newCardInfo) => {
    //connecting to axios
    axios
      .post(URL + "/boards/1/cards", newCardInfo) //make this post to a specific board, not just board 1.
      .then((response) => {
        const newCards = [...cardsList];
        const newCardJSON = {
          ...newCardInfo,
          id: response.data.id,
        };
        newCards.push(newCardJSON);
        setCardsList(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <header></header>
      <main>
        <h1>Inspiration Board</h1>
        <CardList cards={CARD_LIST} />
        <NewCardForm message="testing" addCardCallbackFunc={addCard} />
      </main>
    </div>
  );
}

export default App;
