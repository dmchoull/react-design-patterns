import { useEffect, useState } from "react";
import debounce from "debounce";
import { fetchFromGithub } from "../../shared/fetchFromGithub";

function useGithubData(resource) {
  const [items, setItems] = useState([]);

  const fetchResource = debounce(() => {
    fetchFromGithub(resource).then(items => setItems(items));
  }, 200);

  useEffect(
    () => {
      fetchResource();

      return () => {
        fetchResource.clear();
      };
    },
    [resource]
  );

  return items;
}

export { useGithubData };
