import "./App.css";
import CardList from "./components/CardList";
import Board from "./components/Board";
import {useState} from 'react'
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
const test_board = {
    board_id: 1,
    title: "Demo",
    owner: "Sam",
    cards: CARD_LIST
}

function App() {
  console.log("App component is rendering");
  
  console.log(test_board)
  return (
    <div>
      <header></header>
      <main>
        <h1>Inspiration Board</h1>
        <Board id={test_board.board_id} title={test_board.title} owner={test_board.owner} cards={test_board.cards} />
        {/* <CardList cards={CARD_LIST} /> */}
      </main>
    </div>
  );
}

export default App;
