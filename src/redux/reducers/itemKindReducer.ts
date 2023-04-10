import { ItemKind } from '../../interfaces/itemKind.enum';
import { SET_ITEM_KIND } from '../actions/itemKinds';
import { Action } from '../interfaces';

const initialState = ItemKind.Kind.Movies;

const itemKindReducer = (state: ItemKind.Kind = initialState, action: Action) => {
  switch (action.type) {
    case SET_ITEM_KIND:
      return action.payload;
    default:
      return state;
  }
};

export default itemKindReducer;
