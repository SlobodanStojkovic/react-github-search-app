import { useState } from "react";
import { searchUsers } from "../../services/searchUsers";
import PropTypes from "prop-types";
import "./Search.scss";

const Search = ({ setSearchResults, setWarning }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchForUsers = (event) => {
    if (event.key === "Enter") {
      if (searchQuery === "") {
        setWarning("Type something in Search field.");
      } else {
        searchUsers(searchQuery).then((result) => {
          setSearchResults(result);
          setWarning("There were no results found.");
        });
      }
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
