const ApiKey =
  'live_I1Xd2CVVRDS84kJF0BnkanCuc3oSV9PZY5wf6OJWfjd2e9Y9ej6aSkgrl5dsZhLV';

export function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${ApiKey}`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      return resp.json();
    }
  );
}
