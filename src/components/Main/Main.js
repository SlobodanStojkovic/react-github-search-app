import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "../Search/Search";
import "./Main.scss";

export const Main = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [warning, setWarning] = useState("");

  return (
    <>
      <Search setSearchResults={setSearchResults} setWarning={setWarning} />

      {searchResults && searchResults.length === 0 ? (
        <div className="noResultsFound">{warning}</div>
      ) : (
        <div className="users">
          {searchResults &&
            searchResults.map((user) => {
              return (
                <Link to={`/${user.login}`} key={user.id}>
                  <div className="singleUser">
                    <img
                      className="singleUserAvatar"
                      src={user.avatar_url}
                      alt="avatar"
                    ></img>
                    <p className="userName">{user.login}</p>
                  </div>
                </Link>
              );
            })}
        </div>
      )}
    </>
  );
};
