import "./App.css";
import CardList from "./components/CardList";
import Board from "./components/Board";
import {useState} from 'react'
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm";
import { useEffect } from "react";

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
  const[boardList, setBoardList] = useState([])
  const URL = 'http://127.0.0.1:5000/boards'

  useEffect(() => {
    axios.get(URL)
    .then((res) => {
      const boardsAPIResCopy = res.data.map((board) => {
        return {
          ...board
        }
      })
      setBoardList(boardsAPIResCopy);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  

  const addBoard = (newBoardInfo) => {
    axios.post(URL, newBoardInfo)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <header></header>
      <main>
        <h1>Inspiration Board</h1>
        <Board boards={boardList} />
        {/* <CardList cards={CARD_LIST} /> */}
        <NewBoardForm addBoardCallBackFunc={addBoard}/>
      </main>
    </div>
  );
}

export default App;
