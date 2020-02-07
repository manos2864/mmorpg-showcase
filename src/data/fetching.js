export const getTopPVP = setPvPStats => {
  fetch("https://my-json-server.typicode.com/typicode/demo/comments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(json => setPvPStats(json));
};
