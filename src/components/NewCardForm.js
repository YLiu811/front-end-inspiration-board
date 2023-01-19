//import css here
import PropTypes from "prop-types";

import { useState } from "react";

const INITIAL_FORM_DATA = {
  message: "Enter your message here",
};

const NewCardForm = (props) => {
  const [cardFormData, setCardFormData] = useState(INITIAL_FORM_DATA);
  const boardId = props.boardId
  const handleChange = (e) => {
    let datafield = e.target.value;
    const newCardFormData = {
      ...cardFormData,
      [e.target.name]: datafield,
    };
    setCardFormData(newCardFormData);
  };

  const handleNewCardSubmit = (e) => {
    e.preventDefault();
    props.addCardCallbackFunc(cardFormData);
  };
  return (
    <form onSubmit={handleNewCardSubmit}>
      <label htmlFor="message">Message</label>
      <input
        type="text"
        id="message"
        name="message"
        value={cardFormData.message}
        onChange={handleChange}
      />
      <input type="submit" value="Add Card" />
    </form>
  );
};
NewCardForm.propTypes = {
  addCardCallbackFunc: PropTypes.func.isRequired,
};
export default NewCardForm;
