import { useEffect, useState } from "react";
import { fetchRepos } from "../../services/fetchRepos";
import { useParams } from "react-router-dom";
import { getDate } from "../../services/getDate";
import "./SingleUser.scss";

export const SingleUser = () => {
  const [repoResults, setRepoResults] = useState([]);
  const user = useParams();

  const openInNew = (single) => {
    localStorage.setItem("storedSingleRepo", JSON.stringify(single));
  };

  useEffect(() => {
    fetchRepos(user.user).then((result) => {
      setRepoResults(result);
    });
  }, [user]);

  return (
    repoResults.length > 0 && (
      <div className="reposDiv">
        {repoResults.map((singleRepo) => {
          return (
            <div className="singleUserDiv" key={singleRepo.id}>
              <h1 className="repoName">{singleRepo.name}</h1>
              <p className="repoDescription">
                <span className="boldSpan">Description:</span>{" "}
                {singleRepo.description}
              </p>
              <p className="createdAt">
                <span className="boldSpan">Date created: </span>
                {getDate(singleRepo.created_at)}
              </p>
              <div className="center">
                <button
                  className="openRepositoryButton"
                  onClick={() => {
                    openInNew(singleRepo);
                    window.open(`/${user.user}/${singleRepo.id}`);
                  }}
                >
                  Open in new tab
                </button>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};
