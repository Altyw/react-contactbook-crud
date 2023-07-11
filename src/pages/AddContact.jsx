import React, { useState } from "react";
import { useContactContext } from "../contexts/ContactContext";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const AddContact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { addContact } = useContactContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !surname.trim() || !phone.trim()) {
      return;
    }

    const newContact = {
      name,
      surname,
      phone,
      completed: false,
    };
    addContact(newContact);

    navigate("/");
  }

  return (
    <div>
      <h1 className="text-center mt-4">Add Contact</h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Control
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <Form.Control
          onChange={(e) => {
            setSurname(e.target.value);
          }}
          type="text"
        />
        <Form.Control
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="number"
        />
        <Button
          className="mx-auto d-block mt-2 px-5"
          variant="dark"
          type="submit"
        >
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddContact;
