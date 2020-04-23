import axios from 'axios';

export const Spells_Fetch_Status_Failure = 'Spells_Fetch_Status_Failure';

export const fetchSpells = () => {
  return (dispatch) => {
    dispatch({ type: 'Fetch_Spells_Start' });
    axios
      .get('http://www.dnd5eapi.co/api/spells')
      .then((res) => {
        dispatch({ type: 'Race_Disable' });
        dispatch({ type: 'Class_Disable' });

        dispatch({
          type: 'Spells_Fetching_Status_Success',
          payload: res.data.results,
        });
      })
      .catch((err) => console.error(err));
  };
};
