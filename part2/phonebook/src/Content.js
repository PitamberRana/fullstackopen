import Person from "./Person";
const Content = ({
  persons,
  searchResult,
  setPersons,
  classStatus,
  setClassStatus,
  msg,
  setMsg,
}) => {
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
              setClassStatus={setClassStatus}
              setMsg={setMsg}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default Content;
