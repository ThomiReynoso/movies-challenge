const API_KEY = 'b66cb063a2a90c7626312034cd9d42b2';
export const BASE_URL = "https://api.themoviedb.org/3/";
export const POPULAR_MOVIES = BASE_URL + `movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const POPULAR_TV_SHOWS = BASE_URL + `tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';