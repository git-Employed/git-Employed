import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { openModalActionCreator } from "../actions/actions";
import Modal from "./Modal";

export default function Cards(props) {
  const dispatch = useDispatch();
  const cardDetails = useSelector((state) => state);
  console.log("logging modal state in interested card", cardDetails);
  const handleModal = (e) => {
    const cards = {
      items: props.card
    }
    dispatch(openModalActionCreator(cards));
  }
  return (
    <div className='card-container'>
      {/* <h3>{props.cards.company}</h3> */}
      <button onClick={handleModal}>pencil</button>
      <h4>Job Title:</h4><p>{props.card.title}</p>
      <h4>Salary:</h4><p>{props.card.salary}</p>
      <h4>Location:</h4><p>{props.card.location}</p>
      <h4>Work Environment:</h4><p>{props.card.vibe_check}</p>
      {/* <p>{props.card.interview}</p> */}
      {cardDetails.modal.open === true && <Modal card={props.card} show={cardDetails.modal.open}/>}
    </div>
  )
}