export const fetchRepos = (userName) => {
  return fetch(
    "https://api.github.com/users/" + userName + "/repos?page=1&per_page=100"
  )
    .then((res) => res.json())
    .then((json) => json);
};
