import React from "react";
import Modal from "./Modal";

const SingleEmail = ({ singleEmail, hideEmail }) => {
  return (
    <Modal>
      <h3>Your Email from: {singleEmail.sender}</h3>
      <p>
        <strong>Message:</strong> <br></br> {singleEmail.title}
      </p>
      <button
        className="button"
        style={{ verticalAlign: "middle" }}
        onClick={hideEmail}
      >
        Close email
      </button>
    </Modal>
  );
};

export default SingleEmail;
