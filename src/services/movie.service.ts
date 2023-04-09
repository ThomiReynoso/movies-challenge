import { API_KEY, MOVIE_DETAIL, POPULAR_MOVIES, POPULAR_TV_SHOWS, TV_SHOW_DETAIL } from "../utils/constants";

export async function fetchPopularMovies() {
    try {
      const response = await fetch(POPULAR_MOVIES);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error on fetching popular movies', error);
    }
}

export async function fetchPopularTvShows() {
    try {
      const response = await fetch(POPULAR_TV_SHOWS);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error on fetching popular tv shows', error);
    }
}

export async function fetchTvShow(id: number) {
    try {
      const response = await fetch(`${TV_SHOW_DETAIL}${id}?api_key=${API_KEY}&append_to_response=similar,credits`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error on fetching tv show', error);
    }
}

export async function fetchMovie(id: number) {
    try {
      const response = await fetch(`${MOVIE_DETAIL}${id}?api_key=${API_KEY}&append_to_response=similar,credits`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error on fetching tv show', error);
    }
}