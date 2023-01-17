import PropTypes from "prop-types";
import CardList from "./CardList";
import { useState } from "react";
import Card from "./Card";

// loop through boards and get card list out, pass to cardList
// returns h2 with title, h4 with owner, a card element for cards

const Board = (props) => {
    const boards = props.boards
    const boardComponents = []
    for (const board of boards) {
        boardComponents.push(
            <div>
                <h1>{board.title}</h1>
                <h4>{board.owner}</h4>
                {/* <CardList cards={board.cards}/> */}
            </div>
        )
    }
    return (
        <div>
            {boardComponents}
        </div>
    );
};

Board.propTypes = {
    board_id: PropTypes.number.isRequired,
    title: PropTypes.string,
    owner: PropTypes.string,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
          card_id: PropTypes.number.isRequired,
          message: PropTypes.string,
          owner: PropTypes.string,
        })
    ),
};

export default Board;