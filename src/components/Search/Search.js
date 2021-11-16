import { useState } from "react";
import { useEffect } from "react";
import { searchUsers } from "../../services/searchUsers";
import "./Search.scss";

const Search = ({ setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchForUsers = (event) => {
    if (event.key === "Enter") {
      searchUsers(searchQuery).then((result) => {
        setSearchResults(result);
        console.log(result);
      });
    }
  };

  useEffect(() => {
    searchForUsers(searchQuery);
    /*     const filterProfiles = profiles.filter((profile) => {
      return profile.name.toLowerCase().includes(searchQuery);
    });
    setFilteredProfiles(filterProfiles); */
  }, []);

  return (
    <input
      className="searchInput"
      type="text"
      placeholder="Seach profiles..."
      onChange={(event) => setSearchQuery(event.target.value.toLowerCase())}
      onKeyPress={searchForUsers}
    ></input>
  );
};

export default Search;
