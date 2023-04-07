export const API_KEY = 'b66cb063a2a90c7626312034cd9d42b2'; // EXTRAER A UN .ENV O .SETTINGS
export const BASE_URL = "https://api.themoviedb.org/3/";
export const POPULAR_MOVIES = BASE_URL + `movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const POPULAR_TV_SHOWS = BASE_URL + `tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const MOVIE_DETAIL = BASE_URL + `movie/`;
export const TV_SHOW_DETAIL = BASE_URL + `tv/`;
export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
export const NO_IMG_URL = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';