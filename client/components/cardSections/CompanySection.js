import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCompanyActionCreator } from '../../actions/actions';

function EditModeCompany(props) {
  return (
    <form className="company-container">
      <input
        name="company"
        placeholder={props.company}
        type="text"
        id="performEdit"
      />
      <button type="submit" onClick={props.performEdit}>
        Y
      </button>
      <button id="open_closeEdit" onClick={props.open_closeEdit}>
        N
      </button>
    </form>
  );
}

function NonEditModeCompany(props) {
  return (
    <div className="company-container">
      <h3 className="card__company"> {props.company}</h3>
      <button id="editButton" onClick={props.open_closeEdit}>
        E
      </button>
    </div>
  );
}
//parent component
export default function CompanySection(props) {
  const dispatch = useDispatch();
  const [company, setCompany] = useState(props.company);
  // const currentState = useSelector((state) => state);
  const [editMode, setEditMode] = useState(false);
  const performEdit = (e) => {
    e.preventDefault();
    console.log('logging current state after clicking in company section', props.cardInfo)
    const newCompany = document.getElementById('performEdit').value;
    setCompany(newCompany);
  //dispatch the newCompany to action
    const test= {
      company: newCompany,
      title: props.cardInfo.title,
      salary: props.cardInfo.salary,
      location: props.cardInfo.location,
      environment: props.cardInfo.environment,
      status: props.cardInfo.status
    }
    dispatch(updateCompanyActionCreator(test, props.cardInfo.card_id));
    console.log(newCompany, 'newCompany');
    setEditMode(!editMode);
  };
  const open_closeEdit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };
  if (editMode) {
    return (
      <EditModeCompany
        company={company}
        performEdit={performEdit}
        open_closeEdit={open_closeEdit}
        editMode={editMode}
      />
    );
  }
  return (
    <NonEditModeCompany
      company={company}
      performEdit={performEdit}
      open_closeEdit={open_closeEdit}
      editMode={editMode}
    />
  );
}
