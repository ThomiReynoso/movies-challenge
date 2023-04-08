import { combineReducers } from 'redux';
import itemKindReducer from './itemKindReducer';
import movieReducer from './movieReducer';
import tvShowReducer from './tvShowReducer';

export default combineReducers({
  itemKind: itemKindReducer,
  movies: movieReducer,
  tvShows: tvShowReducer,
});
