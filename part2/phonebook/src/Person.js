import axios from "axios";
import noteService from "./services/refact";
const Person = ({ person, setPersons, persons, setClassStatus, setMsg }) => {
  const deleteFunc = (id) => {
    // console.log(`clicked from ${person.number}`);
    if (window.confirm(`Delete ${person.name} ?`)) {
      // axios
      //   .delete(`http://localhost:3001/persons/${person.id}`)
      noteService.remove(person.id).then((data) => console.log("new", data));

      const mapped = persons.filter((x) => person.id !== x.id);
      // console.log(mapped);

      setMsg(` Deleted : ${person.name} from the phonebook`);
      setTimeout(() => setMsg(null), 2000);
      setClassStatus(`delete`);
      setPersons(mapped);
      // alert(`Deleted ${person.name} sucessfully !!`);
    }
  };
  return (
    <li>
      {person.name} - {person.number}{" "}
      <button onClick={deleteFunc}> Delete </button>
    </li>
  );
};
export default Person;
