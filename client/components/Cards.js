import e from 'express';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModalActionCreator } from '../actions/actions';
import Modal from './Modal';

export default function Cards(props) {
  const dispatch = useDispatch();
  const cardDetails = useSelector((state) => state);
  console.log('logging modal state in interested card', cardDetails);
  const handleModal = (e) => {
    const cards = {
      items: props.card,
    };
    dispatch(openModalActionCreator(cards));
  };
  

  return (
    <div className="card-container">
      {/* <div>
        <h3>{props.cards.company}</h3>
        <button onClick={handleEdit}>P</button>
      </div> */}
      <div>
        <h4>Salary:</h4>
        {/* <SalarySection editMode={edit} salary={props.card.salary} /> */}
      </div>
      <div>
        <h4>Location:</h4>
        <p>{props.card.location}</p>
        <button onClick={() => {}}>P</button>
      </div>
      <div>
        <h4>Work Environment:</h4>
        <p>{props.card.vibe_check}</p>
        <button onClick={handleEdit}>P</button>
      </div>
      {/* <p>{props.card.interview}</p> */}
      {/* {cardDetails.modal.open === true && (
        <Modal card={props.card} show={cardDetails.modal.open} />
      )} */}
    </div>
  );
}
