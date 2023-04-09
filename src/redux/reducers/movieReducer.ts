import { SET_MOVIES } from '../actions/itemKinds';

const initialState: any = [];

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

export default movieReducer;
