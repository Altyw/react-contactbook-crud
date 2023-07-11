import React, { useContext } from "react";
import ContactList from "../components/ContactList";
import contactContext from "../contexts/ContactContext";

const HomePage = () => {
  const result = useContext(contactContext);
  return (
    <div>
      <ContactList />
    </div>
  );
};

export default HomePage;
