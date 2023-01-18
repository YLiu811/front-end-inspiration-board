import PropTypes from "prop-types";
import CardList from "./CardList";
import "./Board.css";
// import { useState } from "react";
// import Card from "./Card";

// loop through boards and get card list out, pass to cardList
// returns h2 with title, h4 with owner, a card element for cards

const Board = (props, getCards) => {
  // const [cardList, setCardList] = useState([]);
  const boards = props.boards;
  const cardsList = [];
  const boardComponents = [];
  for (const board of boards) {
    cardsList.push(props.getCards(board.id));
  }
  for (const board of boards) {
    // console.log(board)
    console.log(cardsList);
    boardComponents.push(
      <div>
        <h1>{board.title}</h1>
        <h4>{board.owner}</h4>
        <CardList cards={cardsList} deleteCard={props.deleteCard} />
      </div>
    );
  }
  return <div>{boardComponents}</div>;
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  owner: PropTypes.string,
  cards: PropTypes.array,
  getCards: PropTypes.func,
  deleteCard: PropTypes.func,
};

export default Board;
