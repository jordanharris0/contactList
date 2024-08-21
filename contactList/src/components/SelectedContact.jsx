import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        console.log(result);

        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);
  console.log(contact);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan="5">ContactList</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Username</td>
            <td>Website</td>
          </tr>
          <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.username}</td>
            <td>{contact.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
