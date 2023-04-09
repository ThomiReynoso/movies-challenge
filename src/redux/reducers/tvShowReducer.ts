import { SET_TV_SHOWS } from '../actions/itemKinds';

const initialState: any = [];

const tvShowReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TV_SHOWS:
      return action.payload;
    default:
      return state;
  }
};

export default tvShowReducer;
