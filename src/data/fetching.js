export const getTopPVP = setPvPStats => {
  fetch("https://api-v3.igdb.com/games/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "user-key": "no-key-here"
    }
  })
    .then(response => response.json())
    .then(json => setPvPStats(json));
};
