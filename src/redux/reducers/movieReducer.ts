import { Movie } from '../../interfaces/movie';
import { SET_MOVIES } from '../actions/itemKinds';
import { Action } from '../interfaces';

const initialState: Movie[] = [];

const movieReducer = (state: Movie[] = initialState, action: Action) => {
  switch (action.type) {
    case SET_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

export default movieReducer;
