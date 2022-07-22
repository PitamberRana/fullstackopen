import { useState, useEffect } from "react";
import Content from "./Content";
import Personform from "./PersonForm";
import Search from "./Search";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((obj) => {
      setPersons(obj.data);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    let nameSearch = persons.some(
      (x) => x.name.toLowerCase() === newName.toLowerCase()
    );
    if (!nameSearch) {
      const newDetails = {
        name: newName,
        number: newNumber,
      };
      setPersons([...persons, newDetails]);
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const nameChange = (e) => {
    setNewName(e.target.value);
  };
  const numberChange = (e) => {
    setNewNumber(e.target.value);
  };
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);

    let searchResult = persons.filter((person) =>
      person.name.includes(e.target.value)
    );
    // console.log(searchResult.length);
    // console.log(searchResult);

    setResults(searchResult);
  };

  // const searchForPerson = (e) => {
  //   e.preventDefault();
  //   const searchValue = e.target.value;
  //   if (searchValue === "" || searchValue === " ") {
  //     return;
  //   } else {
  //     const filteredResult = persons.filter((person) =>
  //       person.name.includes(searchValue)
  //     );
  //     setResults(filteredResult);
  //   }
  // };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
        results={results}
      />
      <h2> Add New</h2>
      <Personform
        onSubmit={addName}
        newName={newName}
        handleNameChange={nameChange}
        newNumber={newNumber}
        handleNumberChange={numberChange}
      />
      <h2>Numbers</h2>
      <Content persons={persons} searchResult={results} />
    </div>
  );
};

export default App;
