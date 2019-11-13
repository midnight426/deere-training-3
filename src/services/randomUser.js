export const fetchRandomUser = () => {
  return fetch("https://randomuser.me/api?results=10")
    .then(res => res.json())
    .then(({ results }) => results);
};
