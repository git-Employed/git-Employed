import React from "react";
import CardContainer from "./CardContainer";
import Form from "./Form";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    navigate('/form');
  }
  return (
    <div id= 'homepage-container'>
      <button onClick={handleNavigate}><Link to="/form">+</Link></button>
      <CardContainer />
    </div>
  )
}