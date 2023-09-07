// https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY
// or
// { 'x-api-key' : 'YOUR_API_KEY' }
import axios from 'axios';

const { CAT_API_KEY } = process.env;

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = CAT_API_KEY;

// 'https://api.thecatapi.com/v1/images/search?limit=10'
export const getRandomCats = async () => {
  const response = await axios.get(`/images/search?limit=25`);
  return response.data;
};

//'https://api.thecatapi.com/v1/breeds';
export const getBreedsCats = async () => {
  const response = await axios.get(`/breeds`);
  return response.data;
};

// https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}

export const getCatsByBreed = async breed => {
  const response = await axios.get(
    `/images/search?breed_ids=${breed}&limit=15`
  );
  return response.data;
};
