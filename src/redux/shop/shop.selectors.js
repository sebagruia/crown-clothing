import { createSelector } from "reselect";


const selectShop = (state) => state.shopReducer;

export const selectCollections = createSelector(
  [selectShop],
  (shopReducer) => shopReducer.collections
);

export const selectCollection = (routeNameOfCollection) =>
  createSelector([selectCollections], (collections) =>
    collections[routeNameOfCollection]
  );
