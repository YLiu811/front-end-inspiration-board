import PropTypes from "prop-types";
import CardList from "./CardList";
import { useState } from "react";
import Card from "./Card";

// loop through boards and get card list out, pass to cardList
// returns h2 with title, h4 with owner, a card element for cards

const Board = (props) => {
    const board_id = props.id;
    const title = props.title;
    const owner = props.owner;
    const cards = props.cards;
    console.log(props.cards)
    return (
        <div>
            <h1 id="title">{title}</h1>
            <h4>{owner}</h4>
            <CardList cards={cards} />
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