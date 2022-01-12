import React from "react";
import CardContainer from "./CardContainer";
// import Form from "./Form";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    navigate('/form');
  }
  const colors = [
    '#1fe4f5', '#3fbafe',
    '#fbc1cc', '#fa99b2',
    '#76b2fe', '#b69efe',
    '#60efbc', '#58d5c9',
    '#f588d8', '#c0a3e5',
  ];
  return (
    <div id='homepage-container'>
      <button onClick={handleNavigate}><Link to="/form">+</Link></button>
      <CardContainer />
    </div>
  )
}