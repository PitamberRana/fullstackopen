const Personform = ({
  onSubmit,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Name </td>
            <td>
              <input
                value={newName}
                onChange={handleNameChange}
                placeholder="Enter Name Here.."
              />
            </td>
          </tr>
          <tr>
            <td>Number </td>
            <td>
              <input
                value={newNumber}
                onChange={handleNumberChange}
                type="Number"
                placeholder="Enter Number Here.."
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default Personform;
