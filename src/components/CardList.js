import { useState } from "react";
import Card from "./Card.js";
import PropTypes from "prop-types";

const CardList = (props) => {
  const cards = props.cards;
  //const deleteCard = props.deleteCard;
  console.log(cards)
  const [cardList, setCardList] = useState(cards);

  const deleteCard = (cardId) => {
    console.log("deleteCard called", cardId);
    const newCardList = [];
    for (const card of cardList) {
      if (card.card_id !== cardId) {
        newCardList.push(card);
      }
    }
    setCardList(newCardList);
  };

  const cardComponents = cardList.map((card) => {
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
