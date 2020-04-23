import axios from 'axios';

export const fetchRace = () => {
  return (dispatch) => {
    dispatch({ type: 'Race_Fetch_Start' });
    axios
      .get('http://www.dnd5eapi.co/api/races')
      .then((res) => {
        dispatch({ type: 'Class_Disable' });
        dispatch({ type: 'Spell_Disable' });

        dispatch({ type: 'Race_Fetch_Success', payload: res.data.results });
      })
      .catch((err) => console.error(err));
  };
};
