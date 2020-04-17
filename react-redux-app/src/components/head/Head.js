import React, { useState } from 'react';
import './head.css';
import { connect } from 'react-redux';
import { fetchSpells } from '../../store/actions/spellsActions';
import Loader from 'react-loader-spinner';
function Head(props) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <div className='Head'>
      <div className='buttons'>
        <button className='spell btn' onClick={props.fetchSpells}>
          Spells
        </button>
        <button className='class btn'>Classes</button>
        <button className='race btn'>Races</button>
      </div>
      <div className='searchBar'>
        <input
          type='text'
          className='searchInput'
          value={search}
          placeholder='Search'
          onChange={handleChange}
        />
        <button className='searchbtn'>Search</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isSpellFetching: state.spells.isFetching,
    isClassFetching: state.classes.isFetching,
    isRaceFetching: state.races.isFetching,
  };
};

export default connect(mapStateToProps, { fetchSpells })(Head);
