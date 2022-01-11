import React from "react";
import Cards from './Cards';

export default function InterestedCard(props) {
  return (
    <div className="Interested-container">
      <h1>Interested</h1>
      {props.card.map((card) => {
        return <Cards card={card} />
      })}
    </div>
  )
}