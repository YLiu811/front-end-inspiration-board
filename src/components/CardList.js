import { useState } from "react";
import Card from "./Card.js";
import PropTypes from "prop-types";

const CardList = (props) => {
  const cardsList = props.cards;
  const deleteCard = props.deleteCard;
  console.log(cardsList);
  // const [cardList, setCardList] = useState(cards); //useState & useEffect in App.js

  const cardComponents = cardsList.map((card) => {
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
  deleteCard: PropTypes.func,
};

export default CardList;
