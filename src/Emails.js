import React, { useState } from "react";
import initialEmails from "./data/emails";
import Email from "./Email";
import Header from "./Header";
import Navigation from "./Navigation";
import SingleEmail from "./SingleEmail";

const getReadEmails = (emails) => emails.filter((email) => !email.read);
const getStarredEmails = (emails) => emails.filter((email) => email.starred);

const Emails = () => {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [emailVisible, setEmailVisible] = useState(false);
  const [singleEmail, setSingleEmail] = useState(null);

  const showEmail = (email) => {
    setSingleEmail(email);
    setEmailVisible(true);
  };

  const hideEmail = () => {
    setEmailVisible(false);
  };

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  const toggleStar = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  return (
    <div className="app">
      <Header />
      <Navigation
        currentTab={currentTab}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        setCurrentTab={setCurrentTab}
        setHideRead={setHideRead}
      />

      <main className="emails">
        {emailVisible && (
          <SingleEmail hideEmail={hideEmail} singleEmail={singleEmail} />
        )}
        <ul>
          {filteredEmails.map((email, index) => (
            <Email
              key={index}
              email={email}
              toggleRead={toggleRead}
              toggleStar={toggleStar}
              showEmail={showEmail}
            ></Email>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Emails;
