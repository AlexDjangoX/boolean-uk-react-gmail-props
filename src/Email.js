import React from "react";

const Email = ({ email, toggleRead, toggleStar, showEmail }) => {
  return (
    <li className={`email ${email.read ? "read" : "unread"}`}>
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={email.read}
          onChange={() => toggleRead(email)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={email.starred}
          onChange={() => toggleStar(email)}
        />
      </div>
      <div className="sender">{email.sender}</div>
      <div className="title">{email.title}</div>
      <button
        className="button"
        style={{ verticalAlign: "middle" }}
        onClick={() => showEmail(email)}
      >
        <span>Read your email</span>
      </button>
    </li>
  );
};

export default Email;
