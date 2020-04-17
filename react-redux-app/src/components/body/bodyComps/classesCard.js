import React from 'react';

export default function ClassCard(props) {
  return (
    <>
      <div className='card'>
        <h4>{props.class.name}</h4>
      </div>
    </>
  );
}
