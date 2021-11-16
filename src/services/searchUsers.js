export const searchUsers = (userName) => {
  return fetch("https://api.github.com/search/users?q=" + userName)
    .then((res) => res.json())
    .then((json) => json.items);
};
