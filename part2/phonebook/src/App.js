import { useState, useEffect } from "react";
import Content from "./Content";
import Personform from "./PersonForm";
import Search from "./Search";
import axios from "axios";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [msg, setMsg] = useState(null);
  const [classStatus, setClassStatus] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((obj) => {
      setPersons(obj.data);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();

    let personDetail = persons.filter(
      (x) => x.name.toLowerCase() === newName.toLowerCase()
    );
    let nameSearch = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (!nameSearch) {
      const newDetails = {
        name: newName,
        number: newNumber,
      };
      axios.post("http://localhost:3001/persons", newDetails).then((obj) => {
        console.log(obj.data);
      });
      setPersons([...persons, newDetails]);
      setMsg(`Added : ${newName} to the phonebook`);
      setClassStatus("notify");
      setTimeout(() => setMsg(null), 20000);
      setNewName("");
      setNewNumber("");
    } else {
      const personToUpdate = personDetail[0];
      const numberToUpdate = { ...personToUpdate, number: newNumber };
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number to the new one?`
        )
      ) {
        console.log(personToUpdate);
        console.log(numberToUpdate);
        // console.log(personDetail);
        axios
          .put(
            `http://localhost:3001/persons/${personToUpdate.id}`,
            numberToUpdate
          )
          .then((obj) => {
            console.log("updated", obj.data);
            setPersons(
              persons.map((x) => (x.id !== personToUpdate.id ? x : obj.data))
            );
            setMsg(` New Number updated to the phonebook for ${newName} `);
            setClassStatus("notify");
            setTimeout(() => setMsg(null), 10000);
            setNewName("");
            setNewNumber("");
          });
      }
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
      <Notification msg={msg} classStatus={classStatus} />
      <h2> Add New</h2>
      <Personform
        onSubmit={addName}
        newName={newName}
        handleNameChange={nameChange}
        newNumber={newNumber}
        handleNumberChange={numberChange}
      />
      <h2>Numbers</h2>
      <Content
        persons={persons}
        searchResult={results}
        setPersons={setPersons}
        setClassStatus={setClassStatus}
        setMsg={setMsg}
      />
    </div>
  );
};

export default App;
