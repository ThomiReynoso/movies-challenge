import { setTVShows } from "../redux/actions/Index";
import tvShowReducer from "../redux/reducers/tvShowReducer";

const mockTVShows: any[] = [
  { id: 1, name: 'TV Show 1' },
  { id: 2, name: 'TV Show 2' },
];

describe('tvShowReducer', () => {
  it('should return the initial state', () => {
    expect(tvShowReducer(undefined, { type: '', payload: null })).toEqual([]);
  });

  it('should handle SET_TV_SHOWS', () => {
    expect(tvShowReducer(undefined, setTVShows(mockTVShows))).toEqual(mockTVShows);
  });
});
