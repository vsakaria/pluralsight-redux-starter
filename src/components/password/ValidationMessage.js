import React from "react";
import PropTypes from "prop-types";

const ValidationMessages = ({ messages }) => {
  const messagesList = messages.map(messageData => {
    return (
      <li>
        <span className="tick" />
        {messageData.message}
      </li>
    );
  });

  return (
    <section>
      <ul>{messagesList}</ul>
    </section>
  );
};

ValidationMessages.propTypes = {
  messages: PropTypes.array.isRequired
};

export default ValidationMessages;
