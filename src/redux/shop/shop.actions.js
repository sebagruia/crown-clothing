export const SET_SHOP_COLLECTIONS = "SET_SHOP_COLLECTIONS";

export const setShopCollections = (object) => {
  return {
    type: SET_SHOP_COLLECTIONS,
    payload: object,
  };
};
