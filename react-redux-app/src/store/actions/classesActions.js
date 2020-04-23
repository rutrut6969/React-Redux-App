import axios from 'axios';

export const Classes_Fetch_Status_Failure = 'Spells_Fetch_Status_Failure';

export const fetchClasses = () => {
  return (dispatch) => {
    dispatch({ type: 'Classes_Fetching_Start' });
    axios
      .get('http://www.dnd5eapi.co/api/classes')
      .then((res) => {
        dispatch({ type: 'Race_Disable' });
        dispatch({ type: 'Spell_Disable' });

        dispatch({
          type: 'Classes_Fetch_Success',
          payload: res.data.results,
        });
      })
      .catch((err) => console.error(err));
  };
};
