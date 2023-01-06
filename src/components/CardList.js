import { useState } from "react";
import Card from "./Card.js";
import PropTypes from "prop-types";

const CardList = (props) => {
  const cards = props.cards;
  //const deleteCard = props.deleteCard;

  const [newCardList, setNewCardList] = useState([]);

  const deleteCard = (cardId) => {
    console.log("deleteCard called", cardId);
    for (const card of cards) {
      if (card.card_id !== cardId) {
        newCardList.push(card);
      }
    }
    setNewCardList(newCardList);
  };

  const cardComponents = cards.map((card) => {
    return (
      <Card
        key={card.card_id}
        card_id={card.card_id}
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
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string,
      owner: PropTypes.string,
    })
  ),
};

export default CardList;
