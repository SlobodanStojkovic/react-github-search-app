import { Link } from "react-router-dom";
import "./Main.scss";

export const Main = ({ searchResults }) => {
  return (
    <div className="users">
      {searchResults.map((user) => {
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
  );
};
