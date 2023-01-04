import PropTypes from "prop-types";

//import css here.

function Card(props) {
  const cardId = props.cardId;
  const message = props.message;
  const owner = props.owner;

  return (
    <div>
      <h1 id="message">{message}</h1>
      <button id="add_like_button">+1</button>
      <button id="delete_card_button">Delete</button>
      <p id="like_counter">How many likes?💕</p>
    </div>
  );
}

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string,
  owner: PropTypes.string,
};
export default Card;
