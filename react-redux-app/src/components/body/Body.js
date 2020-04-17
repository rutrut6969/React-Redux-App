import React from 'react';
import { connect } from 'react-redux';
import SpellsCard from './bodyComps/spellsCard';
import './body.css';

function Body(props) {
  return (
    <>
      <div className='Body'>
        {props.spell
          ? props.spellsResults.map((item) => (
              <SpellsCard key={item.index} spell={item} />
            ))
          : null}
        {console.log(props.spellsResults)}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    spell: state.spells.spell,
    spellsResults: state.spells.results,
    raceResults: state.races.results,
    classResults: state.classes.results,
  };
};

export default connect(mapStateToProps, {})(Body);
