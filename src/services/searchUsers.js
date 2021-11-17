export const searchUsers = (userName) => {
  return fetch("https://api.github.com/search/users?q=" + userName)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("There was an error");
      }
    })
    .then((json) => json.items)
    .catch((error) => {
      console.log(error);
    });
};
