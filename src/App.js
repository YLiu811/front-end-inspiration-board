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
  
  
  const[boardList, setBoardList] = useState([])
  const [cardList, setCardList] = useState([])
  const URL = 'http://127.0.0.1:5000'

  useEffect(() => {
    axios.get(URL + "/boards")
    .then((res) => {
      
      const boardsAPIResCopy = res.data.map((board) => {
        // console.log(getCards(board.board_id))
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

  const getCards = (boardId) => {
    axios.get(`${URL}/boards/${boardId}/cards`)
    .then((res) => {
      // console.log(res.data);
      const cardsCopy = res.data.map((card) => {
        return {
          ...card
        }
      })
      console.log(cardsCopy)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  

  const addBoard = (newBoardInfo) => {
    axios.post(URL + "boards", newBoardInfo)
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
        <Board boards={boardList} getCards={getCards}/>
        {/* <CardList cards={CARD_LIST} /> */}
        <NewBoardForm addBoardCallBackFunc={addBoard}/>
      </main>
    </div>
  );
}

export default App;
