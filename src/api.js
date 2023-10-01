import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1af137eef8f116a60d13f93df04b300d';

export const getTrendFilmsOnDay = async signal => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    { signal: signal }
  );
  return data;
};

export const searchMovies = async (name, signal) => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${name}`,
    { signal: signal }
  );
  return data;
};

export const getReviews = async (id, signal) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`,
    { signal: signal }
  );
  return data;
};

export const getMovieDetails = async (id, signal) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
    { signal: signal }
  );
  return data;
};

export const getCastInfo = async (id, signal) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
    { signal: signal }
  );
  return data;
};
