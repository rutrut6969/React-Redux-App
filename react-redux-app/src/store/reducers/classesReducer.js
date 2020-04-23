const initialState = {
  class: false,
  isFetching: false,
  count: 0,
  error: '',
  results: {},
};

export const classesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Classes_Fetching_Start':
      return {
        ...state,
        isFetching: true,
      };
    case 'Classes_Fetch_Success':
      return {
        ...state,
        class: true,
        isFetching: false,
        count: state.count + state.results.length,
        results: action.payload,
      };
    case 'Classes_Fetch_Failure':
      return {
        ...state,
        error: action.error,
      };
    case 'Class_Disable':
      return {
        ...state,
        class: false,
      };
    default:
      return state;
  }
};
