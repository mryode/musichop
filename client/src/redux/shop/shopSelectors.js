import { createSelector } from 'reselect';

export const selectShopsData = state => state.shop;

export const selectCollections = createSelector(
  [selectShopsData],
  shop => shop.collections
);
