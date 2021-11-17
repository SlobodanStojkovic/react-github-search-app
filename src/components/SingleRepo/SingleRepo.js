import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDate } from "../../services/getDate";
import "./SingleRepo.scss";

export const SingleRepo = () => {
  const [singleRepository, setSingleRepository] = useState(
    JSON.parse(localStorage.getItem("storedSingleRepo"))
  );

  const id = useParams();
  console.log(id);

  useEffect(() => {
    setSingleRepository(JSON.parse(localStorage.getItem("storedSingleRepo")));
  }, []);

  console.log(singleRepository);

  return (
    <div className="singleRepoDiv">
      <h1 className="repositoryName">{singleRepository.name}</h1>
      <p className="repositoryDescription">
        <span className="boldSpan">Description:</span>{" "}
        {singleRepository.description}
      </p>
      <p className="repositoryCreatedAt">
        <span className="boldSpan">Date created: </span>
        {getDate(singleRepository.created_at)}
      </p>
      <p>
        <span className="boldSpan">Stargazers count:</span>{" "}
        {singleRepository.stargazers_count}
      </p>
      <p>
        <span className="boldSpan">Watchers count:</span>{" "}
        {singleRepository.watchers_count}
      </p>
      <p>
        <span className="boldSpan">Forks count:</span>{" "}
        {singleRepository.forks_count}
      </p>
    </div>
  );
};
