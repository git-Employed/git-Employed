import React from 'react';
import Cards from './Cards';

export default function OfferedCard(props) {
  // console.log(props.card);
  return (
    <div className="Offered-container">
      <h1 id="offered-title">Offered</h1>
      {props.card.map((card) => {
        {
          /* console.log(card); */
        }
        return <Cards card={card} key={card.card_id} />;
      })}
    </div>
  );
}
