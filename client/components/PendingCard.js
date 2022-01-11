import React from "react";
import Cards from './Cards';

export default function PendingCard(props) {
  console.log(props.card)
  return (
    <div className="Pending-container">
      <h1>Pending</h1>
      {props.card.map((card) => {
        return <Cards card={card} />
      })}
    </div>
  )
}