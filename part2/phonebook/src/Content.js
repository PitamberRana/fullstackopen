import Person from "./Person";
const Content = ({ persons, searchResult }) => {
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
            <Person key={idx} person={person} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default Content;
