import { useEffect, useRef, useState } from "react";
import { Filter } from "./App.styled";
import Contacts from "./components/Contacts/Contacts";
import FilteredContacts from "./components/FilteredContacts/FilteredContacts";
import Phonebook from "./components/Phonebook/Phonebook";
import Section from "./components/Section/Section";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setConctacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  const skipMount = useRef(true);

  useEffect(() => {
    const data = localStorage.getItem("contacts");
    if (data) {
      setConctacts(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (!skipMount.current) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
    skipMount.current = false;
  }, [contacts]);

  const handleInput = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      case "filter":
        setFilter(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();
    if (contacts.find((contact) => contact.name === e.target.name.value)) {
      return alert(e.target.name.value + " is already in contacts");
    }
    setConctacts((contacts) => [
      ...contacts,
      { id: id, name: name, number: number },
    ]);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleDelete = (index) => {
    setConctacts((contacts) =>
      contacts.filter((contact) => index !== contact.id)
    );
  };

  return (
    <>
      <Section title="Phonebook">
        <Phonebook
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          name={name}
          number={number}
        />
      </Section>
      <Section title="Contacts">
        <>
          <Filter name="filter" value={filter} onChange={handleInput} />
          {filter === "" ? (
            <Contacts contacts={contacts} handleDelete={handleDelete} />
          ) : (
            <FilteredContacts
              contacts={contacts}
              filter={filter}
              handleDelete={handleDelete}
            />
          )}
        </>
      </Section>
    </>
  );
}

export default App;
