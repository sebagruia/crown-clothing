import { createSelector } from "reselect";

const selectShop = (state) => state.shopReducer;

export const selectCollections = createSelector([selectShop], (shopReducer) =>
  shopReducer.collections ? shopReducer.collections : {}
);

export const selectCollection = (routeNameOfCollection) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[routeNameOfCollection] : null
  );

export const selectLoadingSpinner = createSelector(
  [selectShop],
  (shopReducer) => shopReducer.loadingSpinner 
);

