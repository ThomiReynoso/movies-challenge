import { POPULAR_MOVIES } from "../utils/constants";

export async function fetchPopularMovies() {
    try {
      const response = await fetch(POPULAR_MOVIES);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error on fetching data', error);
    }
  }