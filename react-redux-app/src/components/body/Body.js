import React from 'react';
import { connect } from 'react-redux';
import SpellsCard from './bodyComps/spellsCard';
import RaceCard from './bodyComps/racesCard';
import ClassCard from './bodyComps/classesCard';
import Loader from 'react-loader-spinner';
import './body.css';

function Body(props) {
  return (
    <>
      <div className='Body'>
        {props.spell & !props.race & !props.class
          ? props.spellsResults.map((item) => (
              <SpellsCard key={item.index} spell={item} />
            ))
          : null}
        {props.race & !props.spell & !props.class
          ? props.raceResults.map((item) => (
              <RaceCard key={item.index} race={item} />
            ))
          : null}
        {props.class & !props.race & !props.spell
          ? props.classResults.map((item) => (
              <ClassCard key={item.index} class={item} />
            ))
          : null}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    class: state.classes.class,
    race: state.races.race,
    spell: state.spells.spell,
    spellsResults: state.spells.results,
    raceResults: state.races.results,
    classResults: state.classes.results,
  };
};

export default connect(mapStateToProps, {})(Body);
