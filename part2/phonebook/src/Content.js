import Person from "./Person";
const Content = ({ persons, searchResult, setPersons }) => {
  return (
    <div>
      {searchResult.length >= 1 ? (
        <ul>
          {searchResult.map((person, idx) => (
            <Person key={idx} person={person} />
          ))}
        </ul>
      ) : (
        <ul>
          {persons.map((person, idx) => (
            <Person
              key={idx}
              person={person}
              setPersons={setPersons}
              persons={persons}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default Content;
