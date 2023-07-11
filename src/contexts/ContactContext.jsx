import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";

const contactContext = createContext();

export function useContactContext() {
  return useContext(contactContext);
}

const ContactContext = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState(null);

  async function getContacts() {
    const { data } = await axios.get(API);
    setContacts(data);
  }

  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  async function editContact(id, newData) {
    await axios.patch(`${API}/${id}`, newData);
    getContacts();
  }

  async function getOneContact(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setOneContact(data);
  }

  const value = {
    contacts,
    oneContact,
    getContacts,
    addContact,
    getOneContact,
    editContact,
    deleteContact,
  };

  return (
    <contactContext.Provider value={value}>{children}</contactContext.Provider>
  );
};

export default ContactContext;
