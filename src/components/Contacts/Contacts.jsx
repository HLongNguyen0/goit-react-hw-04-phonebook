import React from "react";
import { nanoid } from "nanoid";

export default function Contacts({ contacts, handleDelete }) {
  return contacts.map((contact, index) => {
    const id = nanoid();
    return (
      <p key={id}>
        {contact.name}: {contact.number}
        <button
          type="button"
          onClick={() => {
            handleDelete(index);
          }}
        >
          Delete
        </button>
      </p>
    );
  });
}
