import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
<<<<<<< HEAD
import NewCardForm from "./components/NewCardForm";

=======
import Board from "./components/Board";
import {useState} from 'react'
>>>>>>> board-component-branch
const CARD_LIST = [
  {
    card_id: 1,
    message: "I love you",
    owner: "Megan",
  },
  {
    card_id: 2,
    message: "This is Card 2",
    owner: "Megan",
  },
];
const test_board = {
    board_id: 1,
    title: "Demo",
    owner: "Sam",
    cards: CARD_LIST
}

function App() {
<<<<<<< HEAD
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

=======
  console.log("App component is rendering");
  
  console.log(test_board)
>>>>>>> board-component-branch
  return (
    <div>
      <header></header>
      <main>
        <h1>Inspiration Board</h1>
<<<<<<< HEAD
        <CardList cards={CARD_LIST} />
        <NewCardForm message="testing" addCardCallbackFunc={addCard} />
=======
        <Board id={test_board.board_id} title={test_board.title} owner={test_board.owner} cards={test_board.cards} />
        {/* <CardList cards={CARD_LIST} /> */}
>>>>>>> board-component-branch
      </main>
    </div>
  );
}

export default App;
