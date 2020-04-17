const initialState = {
  spell: false,
  isFetching: false,
  error: '',
  count: 0,
  results: {},
};

export const spellsReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'Fetch_Spells_Start':
      return {
        ...state,
        isFetching: true,
      };
    case 'Spells_Fetching_Status_Success':
      return {
        ...state,
        spell: true,
        isFetching: false,
        count: state.count + state.results.length,
        results: action.payload,
      };
    case 'Spells_Fetch_Status_Failure':
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
