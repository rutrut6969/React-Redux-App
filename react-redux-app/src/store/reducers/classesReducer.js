const initialState = {
    isFetching: false,
    count: 0,
    error: '',
    classes: {
        index: '',
        name: '',
        url: '',
    }
}

export const classesReducer = (state = initialState, action){
switch(action.type) {
    case: "Classes_Fetching_Start":
    return {
        ...state,
        isFetching: true,
    }
}
}