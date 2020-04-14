import { shopActionTypes } from './shopActionTypes';

const updateCollections = collectionsMap => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

const shopActions = {
  updateCollections,
};

export default shopActions;
