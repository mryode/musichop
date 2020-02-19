const initialState = {
  currentUser: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};
