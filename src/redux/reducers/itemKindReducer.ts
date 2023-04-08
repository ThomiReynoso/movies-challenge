import { SET_ITEM_KIND } from '../actions/itemKinds';

const initialState = 'movies';

const itemKindReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ITEM_KIND:
      return action.payload;
    default:
      return state;
  }
};

export default itemKindReducer;
