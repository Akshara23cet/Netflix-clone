// import axios from "axios";

// const fetchMovies = async (query) => {
//   return [];
// };

// export default fetchMovies;


import axios from "axios";


const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
console.log("API KEY:", API_KEY);

const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_BASE_URL = "/tmdb-images/t/p/w500";

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY, language: "en-US" },
});

export const fetchMoviesByCategory = async (category) => {
  const endpoints = {
    trending: "/trending/movie/week",
    action: "/discover/movie",
    comedy: "/discover/movie",
    horror: "/discover/movie",
    romance: "/discover/movie",
    top_rated: "/movie/top_rated",
    now_playing: "/movie/now_playing",
    upcoming: "/movie/upcoming",
    popular: "/movie/popular",
  };

  const genreIds = { action: 28, comedy: 35, horror: 27, romance: 10749 };
  const params = genreIds[category] ? { with_genres: genreIds[category] } : {};

  const response = await tmdb.get(endpoints[category] || "/trending/movie/week", { params });
  return response.data.results;
};

// TV results use `name`/`first_air_date`; normalize them to `title`/`release_date`
// so the shared cards and modal work without changes.
const normalizeTv = (results) =>
  results.map((item) => ({
    ...item,
    title: item.title || item.name,
    release_date: item.release_date || item.first_air_date,
  }));

export const fetchTvByCategory = async (category) => {
  const endpoints = {
    tv_trending: "/trending/tv/week",
    tv_popular: "/tv/popular",
    tv_top_rated: "/tv/top_rated",
    tv_on_air: "/tv/on_the_air",
    tv_airing_today: "/tv/airing_today",
  };

  const response = await tmdb.get(endpoints[category] || "/trending/tv/week");
  return normalizeTv(response.data.results);
};

export const fetchMoviesByLanguage = async (language) => {
  const response = await tmdb.get("/discover/movie", {
    params: {
      with_original_language: language,
      sort_by: "popularity.desc",
    },
  });
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await tmdb.get("/search/movie", { params: { query } });
  return response.data.results;
};