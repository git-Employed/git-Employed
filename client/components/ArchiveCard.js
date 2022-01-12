import React from 'react';
import Cards from './Cards';

export default function ArchiveCard(props) {
  console.log(props.card);
  return (
    <div className="Archive-container">
      <h1>Archived</h1>
      {props.card.map((card) => {
        return <Cards card={card} key={card.card_id} />;
      })}
    </div>
  );
}
