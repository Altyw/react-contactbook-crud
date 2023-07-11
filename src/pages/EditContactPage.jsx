import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContactContext } from "../contexts/ContactContext";
import { Form, Button } from "react-bootstrap";

const EditContactPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOneContact, editContact, oneContact } = useContactContext();

  useEffect(() => {
    getOneContact(id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setSurname(oneContact.surname);
      setPhone(oneContact.phone);
    }
  }, [oneContact]);

  function handleChange(e) {
    setName(e.target.value);
    setSurname(e.target.value);
    setPhone(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !surname.trim() || !phone.trim()) {
      return;
    }

    const newData = {
      name,
      surname,
      phone,
    };

    editContact(id, newData);

    navigate("/");
  }

  return (
    <div>
      <h1 className="text-center mt-4">Add Todo</h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Control onChange={handleChange} value={name} type="text" />
        <Form.Control onChange={handleChange} value={surname} type="text" />
        <Form.Control onChange={handleChange} value={phone} type="text" />
        <Button
          className="mx-auto d-block mt-2 px-5"
          variant="dark"
          type="submit"
        >
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditContactPage;
