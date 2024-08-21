import React from "react";
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);

  //useEffect function
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);
  console.log("Contacts", contacts);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">ContactList</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Select a Contact:</td>
          <td>Email:</td>
          <td>Phone:</td>
        </tr>
        {contacts &&
          contacts.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                setSelectedContactId={setSelectedContactId}
              />
            );
          })}
      </tbody>
    </table>
  );
}
