import axios from "axios";
//import PropTypes from "prop-types";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "f96da6facea2cf5508c6448cdc8977f9";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchMoviesTrending = async (
  mediaType = "all",
  timeWindow = "day"
) => {
  try {
    const { data } = await axios.get(`/trending/${mediaType}/${timeWindow}`);

    return data.results;
  } catch (error) {
    return [];
  }
};

export const fetchMoviesWithQuery = async (
  query,
  page = 1,
  language = "en-US",
  include_adult = false
) => {
  try {
    const { data } = await axios.get(`/search/movie`, {
      params: { language, page, include_adult, query },
    });

    return data.results;
  } catch (error) {
    return [];
  }
};

// export const fetchDetailsMovies = (movie_id) => {
//   return axios
//     .get(`/movie/${movie_id}`)
//     .then((response) => response.data)
//     .catch((error) => console.log(error));
// };

export const fetchDetailsMovies = async (movie_id, language = "en-US") => {
  try {
    const response = await axios.get(`/movie/${movie_id}`, {
      params: { language },
    });
    return response.data;
  } catch (error) {
    return [];
  }
};

export const fetchDetailsCast = async (movie_id, language = "en-US") => {
  try {
    const response = await axios.get(`/movie/${movie_id}/credits`, {
      params: { language },
    });
    return response.data;
  } catch (error) {
    return [];
  }
};

export const fetchReviews = async (movie_id, language = "en-US") => {
  try {
    const response = await axios.get(`/movie/${movie_id}/reviews`, {
      params: { language },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const imgUrl = "https://image.tmdb.org/t/p/w300/";
const imgUrlPreview = "https://image.tmdb.org/t/p/w200/";
const imgPlaceholder = "https://dummyimage.com/300x450/b8abb8/606175.jpg";
const imgPlaceholderPreview =
  "https://dummyimage.com/200x300/b8abb8/606175.jpg";
const imgActor = "https://image.tmdb.org/t/p/w200";
const imgActorPlaceholder = "https://dummyimage.com/200x300/b8abb8/606175.jpg";

export {
  imgUrl,
  imgPlaceholder,
  imgActor,
  imgActorPlaceholder,
  imgUrlPreview,
  imgPlaceholderPreview,
};

//https://api.themoviedb.org/3/movie/550?api_key=f96da6facea2cf5508c6448cdc8977f9

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
//https://image.tmdb.org/t/p/w500/
