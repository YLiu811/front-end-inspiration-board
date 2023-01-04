import PropTypes from "prop-types";
import { useState } from "react";

//import css here.

function Card(props) {
  const cardId = props.cardId;
  const message = props.message;
  const owner = props.owner;

  //to do: wrap this in a function.
  const [likes, setLikes] = useState(props.likes); //set as 0 for testing for now.
  console.log(likes);

  return (
    <div>
      <h1 id="message">{message}</h1>
      <button
        id="add_like_button"
        onClick={() => {
          setLikes(likes + 1);
        }}
      >
        +1
      </button>
      <button id="delete_card_button">Delete</button>
      <p id="like_counter">How many likes?💕</p>
    </div>
  );
}

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string,
  owner: PropTypes.string,
  likes: PropTypes.number,
};
export default Card;
