import React, { useEffect } from "react";
import { useContactContext } from "../contexts/ContactContext";
import ContactItem from "./ContactItem";
import { ListGroup } from "react-bootstrap";

const ContactList = () => {
  const { contacts, getContacts } = useContactContext();

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-4">Contact List</h1>
      <ListGroup className="d-flex justify-content-evenly flex-row flex-wrap row-gap-5 mt-5">
        {contacts.map((item) => (
          <ContactItem key={item.id} item={item} />
        ))}
      </ListGroup>
    </div>
  );
};

export default ContactList;
