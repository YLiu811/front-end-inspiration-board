import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";
import Board from "./components/Board";
import NewBoardForm from "./components/NewBoardForm";

// const CARD_LIST = [
//   {
//     id: 1,
//     message: "I love you",
//     owner: "Megan",
//   },
//   {
//     id: 2,
//     message: "This is Card 2",
//     owner: "Megan",
//   },
// ];
// const test_board = {
//   board_id: 1,
//   title: "Demo",
//   owner: "Sam",
//   cards: CARD_LIST,
// };

function App() {
  const [boardList, setBoardList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    id: null,
    title: null,
    owner: null,
    cards: []
  })
  const URL = "http://127.0.0.1:5000";

  useEffect(() => {
    axios
      .get(URL + "/boards")
      .then((res) => {
        const boardsAPIResCopy = res.data.map((board) => {
          // console.log(getCards(board.board_id))
          return {
            ...board,
          };
        });
        setBoardList(boardsAPIResCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onBoardSelect = (selectedBoard) => {
    axios.get(`${URL}/boards/${selectedBoard.id}/cards`)
    .then((res) => {
      setSelectedBoard({
        ...selectedBoard,
        cards: res.data
      })
      // console.log(selectedBoard)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const addBoard = (newBoardInfo) => {
    console.log(newBoardInfo)
    axios.post(`${URL}/boards`, newBoardInfo)
    .then((res) => {
      console.log(res.data)
      const newBoardList = [...boardList]
      const newBoardJSON={
        ...newBoardInfo,
        
      }
      newBoardList.push(newBoardJSON)
      setBoardList(newBoardList)
    
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }
  
  const addCard = (newCardData) => {
    axios.post(`${URL}/boards/${selectedBoard.id}/cards`, newCardData)
    .then((res) => {
      const newCardList = [...selectedBoard.cards]
      newCardList.push(res.data)
      setSelectedBoard({...selectedBoard, cards:newCardList})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const deleteCard = (deletedCardId) => {
    
    
    axios.delete(`${URL}/cards/${deletedCardId}`)
    .then(() => {
      const newCardList = [];
      for (const card of selectedBoard.cards) {
        if (card.id !== deletedCardId) {
          newCardList.push(card)
        }
      }
      setSelectedBoard({
        ...selectedBoard,
        cards: newCardList
      })
    })
    .catch((err) => {
      console.log(err)
    })

  }
  
  const likeCard = (cardLiked) => {
    for (const card of selectedBoard.cards) {
      if (card.id === cardLiked.id){
        card.likes_count += 1
      }
    }
    axios.patch(`${URL}/cards/${cardLiked.id}/${cardLiked.likes_count}`)
  }

  const [formStatus, setFormStatus] = useState("")
  const toggleForm = () => {
    console.log("trying to hide")
    if (!formStatus) {
      setFormStatus("hidden")
    } else {
      setFormStatus("")
    }
  }

  const [showCards, toggleShowCards] = useState("hidden")
  useEffect(() => {
    if (!selectedBoard.title) {
      toggleShowCards("hidden")
    } else {
      toggleShowCards("")
    }
  }, [selectedBoard])

  console.log("App component is rendering");

  // console.log(test_board);
  return (
    <div>
      <header>
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <section>
          <Board 
          boards={boardList} 
          onBoardSelect={onBoardSelect}/>
          <section>
            <h1>Selected Board</h1>
            <section id="selected-board">
              <h1>{selectedBoard.title} - {selectedBoard.owner}</h1>
            </section>
          </section>
            

          <section className={formStatus}>
            <NewBoardForm 
            addBoardCallBackFunc={addBoard} />
          </section>
          <button type="button" onClick={toggleForm}>Toggle Board Form</button>
          
        </section>
        
        <section className={showCards}>
          <CardList
          cards={selectedBoard.cards} 
          deleteCard={deleteCard}
          likeCard={likeCard}/>
          <NewCardForm addCardCallbackFunc={addCard}/>
        </section>
        {/* <CardList cards={cardList} /> */}
      </main>
    </div>
  );
}

export default App;
