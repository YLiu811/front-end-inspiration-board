// import { useState } from "react";
import Card from "./Card.js";
import PropTypes from "prop-types";

const CardList = (props) => {
  const cards = props.cards;
  const deleteCard = props.deleteCard;
  const fetchAllCards = props.fetchAllCards;
  console.log(cards);

  const cardComponents = cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        owner={card.owner}
        deleteCard={deleteCard}
      />
    );
  });

  return <div className="cardList">{cardComponents}</div>;
};

CardList.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string,
      owner: PropTypes.string,
    })
  ),
  deleteCard: PropTypes.func.isRequired,
  fetchAllCards: PropTypes.func.isRequired,
};

export default CardList;
