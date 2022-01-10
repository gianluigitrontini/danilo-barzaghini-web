export const langReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LANG':
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
