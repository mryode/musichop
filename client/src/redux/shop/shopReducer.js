import { shopsData } from './shopsData';
import { shopActionTypes } from './shopActionTypes';

const initialState = {
  collections: shopsData,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };

    default:
      return state;
  }
};
