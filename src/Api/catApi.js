// https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY
// or
// { 'x-api-key' : 'YOUR_API_KEY' }
import axios from 'axios';

const { CAT_API_KEY } = process.env;
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

// axios.defaults.baseURL =
//   'https://api.thecatapi.com/v1/images/search?api_key=${CAT_API_KEY}';

export const getCats = async () => {
  const response = await axios.get(`${BASE_URL}?limit=10`, {
    headers: { 'x-api-key': CAT_API_KEY },
  });
  return response.data;
};
