import { useEffect, useState } from "react";
import { fetchRepos } from "../../services/fetchRepos";
import { useParams } from "react-router-dom";
import "./SingleUser.scss";

export const SingleUser = ({}) => {
  const [repoResults, setRepoResults] = useState([]);
  const user = useParams();

  const openInNew = () => {
    return window.open({}, "_blank");
  };

  useEffect(() => {
    fetchRepos(user.user).then((result) => {
      setRepoResults(result);
    });
  }, []);

  return ( repoResults.length > 0 &&
    <div className="reposDiv">
      {repoResults.map((singleRepo) => {
        <div className="singleUserDiv">
          <h1 className="repoName">{singleRepo.name}</h1>
          <p className="repoDescription">
            Description: {singleRepo.description}
          </p>
          <p className="createdAt">Date created: {singleRepo.created_at}</p>
          <button onClick={openInNew}>Open in new tab</button>
        </div>;
      })}
    </div>
  );
};
