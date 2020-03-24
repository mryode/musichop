import { createSelector } from 'reselect';

export const selectDirectory = state => state.directory;

export const selectorSections = state =>
  createSelector([selectDirectory], directory => directory.sections);
