const Search = ({
  searchForPerson,
  searchValue,
  handleSearchChange,
  results,
}) => (
  <div>
    <form onSubmit={searchForPerson}>
      Filter shown with &nbsp;
      <input
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Enter Your Search.."
      />
      {/* &nbsp;
      <button type="submit">Search</button> */}
    </form>
  </div>
);

export default Search;
