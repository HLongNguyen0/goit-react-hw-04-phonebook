import React from "react";
import { nanoid } from "nanoid";

export default function FilteredContacts({ contacts, filter, handleDelete }) {
  return contacts.map((contact, index) => {
    const id = nanoid();
    return (
      contact.name.toLowerCase().includes(filter) && (
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
      )
    );
  });
}
