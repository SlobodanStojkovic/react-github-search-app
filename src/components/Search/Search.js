import { useState } from "react";
import { searchUsers } from "../../services/searchUsers";
import PropTypes from "prop-types";
import "./Search.scss";

const Search = ({ setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchForUsers = (event) => {
    if (event.key === "Enter") {
      searchUsers(searchQuery).then((result) => {
        setSearchResults(result);
      });
    }
  };

  Search.propTypes = {
    searchQuery: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  };

  return (
    <div className="inputDiv">
      <input
        className="searchInput"
        type="text"
        placeholder="Search profiles..."
        onChange={(event) => setSearchQuery(event.target.value.toLowerCase())}
        onKeyPress={searchForUsers}
      ></input>
    </div>
  );
};

export default Search;
