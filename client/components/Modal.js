import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Modal(props) {
  // const dispatch = useDispatch();
  // const cardDetails = useSelector((state) => state);
  // const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
    {/* <h3>{props.cards.company}</h3> */}
    <h4>Job Title:</h4><p>{props.card.title}</p>
    <h4>Salary:</h4><p>{props.card.salary}</p>
    <h4>Location:</h4><p>{props.card.location}</p>
    <h4>Work Environment:</h4><p>{props.card.vibe_check}</p>
    {/* <p>{props.card.interview}</p> */}
    </div>
  </div>
  )
}