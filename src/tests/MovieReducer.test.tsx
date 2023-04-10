import { Movie } from "../interfaces/movie";
import { setMovies } from "../redux/actions/Index";
import movieReducer from "../redux/reducers/movieReducer";

const mockMovies: any[] = [
  { id: 1, title: 'Movie 1' },
  { id: 2, title: 'Movie 2' },
];

describe('movieReducer', () => {
  it('should return the initial state', () => {
    expect(movieReducer(undefined, { type: '', payload: null })).toEqual([]);
  });

  it('should handle SET_MOVIES', () => {
    expect(movieReducer(undefined, setMovies(mockMovies))).toEqual(mockMovies);
  });
});
