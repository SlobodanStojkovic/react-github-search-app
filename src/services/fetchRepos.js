export const fetchRepos = (userName) => {
  return fetch(
    "https://api.github.com/users/" + userName + "/repos?page=1&per_page=100"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("There was an error");
      }
    })
    .then((json) => json)
    .catch((error) => {
      console.log(error);
    });
};
