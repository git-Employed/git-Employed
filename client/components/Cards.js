import React from 'react';
import SalarySection from './cardSections/SalarySection.js';
import TitleSection from './cardSections/TitleSection.js';
import CompanySection from './cardSections/CompanySection.js';
import VibeCheckSection from './cardSections/VibeCheckSection.js';
import LocationSection from './cardSections/LocationSection.js';
import InterviewSection from './cardSections/InterviewSection.js';
import StatusSection from './cardSections/StatusSection.js';

export default function Cards(props) {
  const colors = [
    'radial-gradient(#1fe4f5, #3fbafe)',
    'radial-gradient(#fbc1cc, #fa99b2)',
    'radial-gradient(#76b2fe, #b69efe)',
    'radial-gradient(#60efbc, #58d5c9)',
    'radial-gradient(#f588d8, #c0a3e5)',
  ];
  return (
    <div
      className="card-container"
      style={{ background: colors[Math.floor(Math.random() * 5)] }}
    >
      {/* <section className="card-headerTitle"> */}
      <CompanySection company={props.card.company} />
      <TitleSection title={props.card.title} />
      {/* </section> */}
      {/* <h4>Salary:</h4> */}
      <SalarySection salary={props.card.salary} />
      {/* <h4>Location:</h4> */}
      <LocationSection location={props.card.location} />
      {/* <h4>Work Environment:</h4> */}
      <VibeCheckSection vibeCheck={props.card.vibe_check} />
      {/* <h4>Interview Notes:</h4> */}
      <InterviewSection interview={props.card.interview} />
      <StatusSection status={props.card.status} />
    </div>
  );
}
