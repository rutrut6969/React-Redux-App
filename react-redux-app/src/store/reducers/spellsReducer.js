const initialState = {
    isFetching: false,
    error: '',
    count: 0,
    spells: {
        index: '',
        name: '',
        url: '',
    }
}

export const spellsReducer = (state = initialState, action){
switch(action.type){
    case 'Fetch_Spells_Start':
        return {
            ...state,
            isFetching: true
        }
    case 'Spells_Fetching_Status_Success':
        return {
            ...state,
            isFetching: false,
            count: state.count + state.spells.length,
            spells: {
                ...state.spells,
                index: action.index,
                name: action.name,
                url: action.url
            }
        }
    case "Spells_Fetch_Status_Failure":
        return{
            ...state,
            isFetching: false,
            error: action.error
        }
    default: state

}

}