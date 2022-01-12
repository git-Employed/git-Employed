import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { enterCompanyActionCreator, enterTitleActionCreator, enterSalaryActionCreator, enterEnvironmentActionCreator, enterLocationActionCreator, enterStatusActionCreator, enterInterviewActionCreator, submitFormActionCreator } from "../actions/actions";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const card= useSelector((state) => state.cards);

  const handleSubmit = () => {
    const cardState = {
      company: card.company,
      title: card.title,
      salary: card.salary,
      location: card.location,
      vibe_check: card.vibe_check,
      interview: card.interview,
      status: card.status
    }
    dispatch(submitFormActionCreator(cardState))
    navigate('/homepage');
  }
  const colors = [
    'radial-gradient(#1fe4f5, #3fbafe)',
    'radial-gradient(#fbc1cc, #fa99b2)',
    'radial-gradient(#76b2fe, #b69efe)',
    'radial-gradient(#60efbc, #58d5c9)',
    'radial-gradient(#f588d8, #c0a3e5)',
  ];
  return (
    <div id="form-container" style={{background: colors[Math.floor(Math.random() * 5)]}}>
      <label for="category">Choose a category:</label>
      <select name="category" id="category" className={'form-items'} onChange={(e) =>
        dispatch(enterStatusActionCreator(e.target.value))}>
        <option value="Choose a status...">Choose a status...</option>
        <option value="Interested">Interested</option>
        <option value="Pending">Pending</option>
        <option value="Offered">Offered</option>
        <option value="Archive">Archive</option>
      </select><br></br>
      <label>Company:</label><input type='text' onChange={(e) =>
        dispatch(enterCompanyActionCreator(e.target.value))}></input><br></br>
      <label>Job Title:</label><input type='text' onChange={(e) =>
        dispatch(enterTitleActionCreator(e.target.value))}></input><br></br>
      <label>Salary:</label><input type='text' onChange={(e) =>
        dispatch(enterSalaryActionCreator(e.target.value))}></input><br></br>
      <label>Location:</label><input type='text' onChange={(e) =>
        dispatch(enterLocationActionCreator(e.target.value))}></input><br></br>
      <label>Work Environment:</label><input type='text' onChange={(e) =>
        dispatch(enterEnvironmentActionCreator(e.target.value))}></input><br></br>
      <label>Interview Notes:</label><textarea onChange={(e) =>
        dispatch(enterInterviewActionCreator(e.target.value))}></textarea><br></br>
      <button onClick={handleSubmit}>Add Card</button>
    </div>
  )
}