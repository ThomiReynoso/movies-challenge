import { ItemKind } from '../../interfaces/itemKind.enum';
import { Movie } from '../../interfaces/movie';
import { TVShow } from '../../interfaces/TvShow';
import { SET_ITEM_KIND, SET_MOVIES, SET_TV_SHOWS } from './itemKinds';

export const setItemKind = (itemKind: ItemKind.Kind) => ({
  type: SET_ITEM_KIND,
  payload: itemKind,
});

export const setMovies = (movies: Movie[]) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setTVShows = (tvShows: TVShow[]) => ({
  type: SET_TV_SHOWS,
  payload: tvShows,
});
