const initialState = {
  isFetching: false,
  count: 0,
  error: '',
  races: {
    index: '',
    name: '',
    url: '',
  },
};

export const raceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Race_Fetch_Start':
      return {
        ...state,
        isFetching: true,
      };
    case 'Race_Fetch_Success':
      return {
        ...state,
        isFetching: false,
        count: state.count + state.races.length,
        races: {
          ...state.races,
          index: action.index,
          name: action.name,
          url: action.url,
        },
      };
    case 'Race_Fetch_Failure':
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      state;
  }
};
