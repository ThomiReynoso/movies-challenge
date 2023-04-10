import { TVShow } from '../../interfaces/TvShow';
import { SET_TV_SHOWS } from '../actions/itemKinds';
import { Action } from '../interfaces';

const initialState: TVShow[] = [];

const tvShowReducer = (state: TVShow[] = initialState, action: Action) => {
  switch (action.type) {
    case SET_TV_SHOWS:
      return action.payload;
    default:
      return state;
  }
};

export default tvShowReducer;
