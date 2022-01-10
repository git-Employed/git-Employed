import React from "react";
import Cards from './Cards';

export default function OfferedCard(props) {
  console.log(props.card)
  return (
    <div>
      <h1>Offered</h1>
       {props.card.map((card) => {
        console.log(card)
        return <Cards card={card} />
      })}
    </div>
  )
}