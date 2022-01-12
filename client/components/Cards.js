import React, { useEffect, useState } from 'react';
import SalarySection from './cardSections/SalarySection.js';
import TitleSection from './cardSections/TitleSection.js';
import CompanySection from './cardSections/CompanySection.js';
import VibeCheckSection from './cardSections/VibeCheckSection.js';
import LocationSection from './cardSections/LocationSection.js';
import InterviewSection from './cardSections/InterviewSection.js';

import { useDispatch, useSelector } from 'react-redux';

export default function Cards(props) {
  // const dispatch = useDispatch();
  // const cardDetails = useSelector((state) => state);
  // console.log("logging modal state in interested card", cardDetails);
  // const handleModal = (e) => {
  //   const cards = {
  //     items: props.card
  //   }
  //   dispatch(openModalActionCreator(cards));
  // }

  return (
    <div className="card-container">
      <CompanySection company={props.card.company} />
      <h4>Job Title:</h4>
      <TitleSection title={props.card.title} />
      <h4>Salary:</h4>
      <SalarySection salary={props.card.salary} />
      <h4>Location:</h4>
      <LocationSection location={props.card.location} />
      <h4>Work Environment:</h4>
      <VibeCheckSection vibeCheck={props.card.vibe_check} />
      <h4>Interview Notes:</h4>
      <InterviewSection interview={props.card.interview} />
    </div>
  );
}
