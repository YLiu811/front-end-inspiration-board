// import { useState } from "react";
import Card from "./Card.js";
import PropTypes from "prop-types";
import NewCardForm from "./NewCardForm.js";
import "./CardList.css"

const CardList = (props) => {
  const cards = props.cards;
  const deleteCard = props.deleteCard;
  const addCard = props.addCard;
  // const fetchAllCards = props.fetchAllCards;
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

  return (
      <div className="card-list">
        <div className="card-align">
          {cardComponents}
        </div>
        {/* <NewCardForm message="testing" addCardCallbackFunc={addCard} /> */}
      </div>

  );
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
  addCard: PropTypes.func.isRequired,
};

export default CardList;
