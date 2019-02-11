function fetchFromGithub(resource) {
  return fetch(`https://api.github.com/${resource}`).then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      return [];
    }
  });
}

export { fetchFromGithub };
