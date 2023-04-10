import { ItemKind } from "../interfaces/itemKind.enum";
import { setItemKind } from "../redux/actions/Index";
import itemKindReducer from "../redux/reducers/itemKindReducer";


describe('itemKindReducer', () => {
  it('should return the initial state', () => {
    expect(itemKindReducer(undefined, { type: '', payload: null })).toEqual(ItemKind.Kind.Movies);
  });

  it('should handle SET_ITEM_KIND', () => {
    const payload = ItemKind.Kind.TvShows;
    expect(itemKindReducer(undefined, setItemKind(payload))).toEqual(payload);
  });
});