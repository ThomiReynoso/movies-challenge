import { ItemKind } from '../../interfaces/itemKind.enum';
import { SET_ITEM_KIND } from '../actions/itemKinds';

const initialState = ItemKind.Kind.Movies;

const itemKindReducer = (state: ItemKind.Kind = initialState, action: any) => {
  switch (action.type) {
    case SET_ITEM_KIND:
      return action.payload;
    default:
      return state;
  }
};

export default itemKindReducer;
