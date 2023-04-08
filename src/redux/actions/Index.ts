import { SET_ITEM_KIND, SET_MOVIES, SET_TV_SHOWS } from './itemKinds';

export const setItemKind = (itemKind: any) => ({
  type: SET_ITEM_KIND,
  payload: itemKind,
});

export const setMovies = (movies: any) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setTVShows = (tvShows: any) => ({
  type: SET_TV_SHOWS,
  payload: tvShows,
});
