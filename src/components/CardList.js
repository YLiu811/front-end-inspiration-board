import Card from  './Card.js';
import PropTypes from 'prop-types';



const CardList = (props) => {
  const cards = props.cards;
  const cardComponents = cards.map((card) => {
    return (
      <Card
        key={card.card_id}
        cardId={card.card_id}
        message={card.message}
        owner={card.owner}
      />
    );
  });

  return <div className="cardList">{cardComponents}</div>;
}

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