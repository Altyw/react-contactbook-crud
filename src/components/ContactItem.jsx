import React from "react";
import { useContactContext } from "../contexts/ContactContext";
import { useNavigate } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const ContactItem = ({ item }) => {
  const { deleteContact } = useContactContext();
  const navigate = useNavigate();
  return (
    <ListGroup.Item>
      {item.name}
      <br />
      {item.surname}
      <br />
      {item.phone}
      <br />
      <br />
      <button
        className="btn btn-danger mx-2"
        onClick={() => deleteContact(item.id)}
      >
        Delete
      </button>
      <button
        onClick={() => navigate(`/edit/${item.id}`)}
        className="btn btn-dark"
      >
        Edit
      </button>
    </ListGroup.Item>
  );
};

export default ContactItem;
