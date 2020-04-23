import React from 'react';

function SpellsCard(props) {
  return (
    <>
      <div className='card'>
        <h4>{props.spell.name}</h4>
      </div>
    </>
  );
}

export default SpellsCard;
