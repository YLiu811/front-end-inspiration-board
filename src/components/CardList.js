
import Card from "./Card.js";
import PropTypes from "prop-types";

const CardList = (props) => {
  const cards = props.cards
  const deleteCard = props.deleteCard
  const likeCard = props.likeCard
  // console.log(props.cards)
  const cardsList = cards.map((card) => {
    return (
      <div key={card.id}>
        <Card message={card.message} id={card.id} deleteCard={deleteCard} likeCard={likeCard}/>
      </div>
    )
  })
  return <div>
    {cardsList}
  </div>
};

CardList.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string,
      // owner: PropTypes.string,
    })
  ),
  deleteCard: PropTypes.func.isRequired,
  likeCard: PropTypes.func,
};

export default CardList;
