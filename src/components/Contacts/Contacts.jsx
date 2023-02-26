import React from "react";

export default function Contacts({ contacts, handleDelete }) {
  return contacts.map((contact) => {
    return (
      <p key={contact.id}>
        {contact.name}: {contact.number}
        <button
          type="button"
          onClick={() => {
            handleDelete(contact.id);
          }}
        >
          Delete
        </button>
      </p>
    );
  });
}
