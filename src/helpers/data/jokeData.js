import axios from 'axios';

const baseURL = 'https://www.getpostman.com/collections/8a29fff239520ba4c468';

const getJokes = () => new Promise((resolve, reject) => {
  axios.get(baseURL)
    .then((response) => resolve((response.data)))
    .catch((error) => reject(error));
});

export default getJokes;
