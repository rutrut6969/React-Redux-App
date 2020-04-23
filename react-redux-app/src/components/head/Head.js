import React, { useState } from 'react';
import './head.css';
import { connect } from 'react-redux';
import { fetchSpells } from '../../store/actions/spellsActions';
import { fetchRace } from '../../store/actions/raceActions';
import { fetchClasses } from '../../store/actions/classesActions';
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
        <button className='spell btn' name='spell' onClick={props.fetchSpells}>
          Spells
        </button>
        <button className='class btn' onClick={props.fetchClasses}>
          Classes
        </button>
        <button className='race btn' name='race' onClick={props.fetchRace}>
          Races
        </button>
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
    spell: state.spells.spell,
    race: state.races.race,
    class: state.classes.class,
    isSpellFetching: state.spells.isFetching,
    isClassFetching: state.classes.isFetching,
    isRaceFetching: state.races.isFetching,
  };
};

export default connect(mapStateToProps, {
  fetchSpells,
  fetchRace,
  fetchClasses,
})(Head);
