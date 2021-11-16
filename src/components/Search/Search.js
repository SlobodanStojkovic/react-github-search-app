import { useState } from "react";
import { useEffect } from "react";
import "./Search.scss";

const Search = ({ setFilteredProfiles, profiles }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    /*     const filterProfiles = profiles.filter((profile) => {
      return profile.name.toLowerCase().includes(searchQuery);
    });
    setFilteredProfiles(filterProfiles); */
  }, [searchQuery]);

  return (
    <input
      className="searchInput"
      type="text"
      placeholder="Seach profiles..."
      onChange={(event) => setSearchQuery(event.target.value.toLowerCase())}
    ></input>
  );
};

export default Search;
