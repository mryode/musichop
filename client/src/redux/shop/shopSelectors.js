import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => (collections ? Object.values(collections) : [])
);

export const selectCollection = (collectionId, state) =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionId] : null
  )(state);

export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
