import { combineReducers } from 'redux';
import { Action, ContextState } from '../interfaces';
import itemKindReducer from './itemKindReducer';
import movieReducer from './movieReducer';
import tvShowReducer from './tvShowReducer';

type ContextReducer = (state: ContextState, action: Action) => ContextState;

export default combineReducers<ContextReducer>({
  itemKind: itemKindReducer,
  movies: movieReducer,
  tvShows: tvShowReducer,
});
