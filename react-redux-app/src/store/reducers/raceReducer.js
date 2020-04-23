const initialState = {
  race: false,
  isFetching: false,
  count: 0,
  error: '',
  results: {},
};

export const raceReducer = (state = initialState, action) => {
  console.log('Inside Race Reducer', state.results);
  switch (action.type) {
    case 'Race_Fetch_Start':
      return {
        ...state,
        isFetching: true,
      };
    case 'Race_Fetch_Success':
      return {
        ...state,
        race: true,
        isFetching: false,
        count: state.count + state.results.length,
        results: action.payload,
      };
    case 'Race_Fetch_Failure':
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case 'Race_Disable':
      return {
        ...state,
        race: false,
      };
    default:
      return state;
  }
};
