import { shopsData } from './shopsData';

const initialState = {
  collections: shopsData,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
