import { createSelector } from 'reselect';

export const selectShopsData = state => state.shop;

export const selectCollections = createSelector(
  [selectShopsData],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.values(collections)
);

export const selectCollection = (collectionId, state) =>
  createSelector(
    [selectCollections],
    collections => collections[collectionId]
  )(state);
