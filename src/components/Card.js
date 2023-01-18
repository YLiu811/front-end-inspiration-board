import PropTypes from "prop-types";
import { useState } from "react";
import "./Card.css";

//import css here.

function Card(props) {
  const id = props.id;
  const message = props.message;

  const deleteCard = props.deleteCard;

  //to do: wrap this in a function.
  const [likes, setLikes] = useState(0); //make props.likes later!!

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
      <button
        id="delete_card_button"
        onClick={() => {
          deleteCard(id);
        }}
      >
        Delete
      </button>
      <p id="like_counter">{likes}💕</p>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string,
  likes: PropTypes.number,
  deleteCard: PropTypes.func,
};
export default Card;
