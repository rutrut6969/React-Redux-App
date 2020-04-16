const initialState = {
  isFetching: false,
  count: 0,
  error: '',
  classes: {
    index: '',
    name: '',
    url: '',
  },
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
        isFetching: false,
        count: state.count + state.classes.length,
        classes: {
          index: action.index,
          name: action.name,
          url: action.url,
        },
      };
    case 'Classes_Fetch_Failure':
      return {
        ...state,
        error: action.error,
      };
    default:
      state;
  }
};
