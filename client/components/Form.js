import React from "react";
import { useNavigate } from 'react-router-dom';
import { enterCompanyActionCreator, enterTitleActionCreator, enterSalaryActionCreator, enterEnvironmentActionCreator, enterLocationActionCreator, openModalActionCreator} from "../actions/actions";

export default function Form() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/homepage');
  }
  return (
    <form id="form-container">
      <label for="category">Choose a category:</label>
      <select name="category" id="category" className={'form-items'}>
        <option value="Interested">Interested</option>
        <option value="Pending">Pending</option>
        <option value="Offered">Offered</option>
        <option value="Archive">Archive</option>
      </select><br></br>
      <label>Company:</label><textarea type='text' ></textarea><br></br>
      <label>Job Title:</label><textarea type='text' ></textarea><br></br>
      <label>Salary:</label><textarea type='text' ></textarea><br></br>
      <label>Work Environment:</label><textarea type='text' ></textarea><br></br>
      <label>Location:</label><textarea type='text' ></textarea><br></br>
      <button onClick={handleNavigate}>Add Card</button>
    </form>
  )
}