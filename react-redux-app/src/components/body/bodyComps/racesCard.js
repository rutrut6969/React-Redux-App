import React from 'react';

function RacesCard(props) {
  return (
    <>
      <div className='card'>
        <h4>{props.race.name}</h4>
      </div>
    </>
  );
}

export default RacesCard;
