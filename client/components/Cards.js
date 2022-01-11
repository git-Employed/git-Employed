import React from 'react';

export default function Cards(props) {
  return (
    <div className='card-container'>
      <h3>{props.card.title}</h3>
    </div>
  )
}