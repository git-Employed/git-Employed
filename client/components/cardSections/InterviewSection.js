import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateInterviewActionCreator } from '../../actions/actions';
function EditModeInterview(props) {
  return (
    <form className='interview-container'>
      <input
        name="interview"
        placeholder={props.interview}
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

function NonEditModeInterview(props) {
  const dispatch = useDispatch();
  return (
    <div className='interview-container'>
      <p>{props.interview}</p>
      <button onClick={props.open_closeEdit}>E</button>
    </div>
  );
}

export default function InterviewSection(props) {
  const [interview, setInterview] = useState(props.interview);
  const [editMode, setEditMode] = useState(false);
  const performEdit = (e) => {
    e.preventDefault();
    const newInterview = document.getElementById('performEdit').value;
    setInterview(newInterview);
    dispatch(updateInterviewActionCreator(setInterview));
    console.log(newInterview, 'newInterview');
    setEditMode(!editMode);
  };
  const open_closeEdit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };
  if (editMode) {
    return (
      <EditModeInterview
        interview={interview}
        performEdit={performEdit}
        open_closeEdit={open_closeEdit}
        editMode={editMode}
      />
    );
  }
  return (
    <NonEditModeInterview
      interview={interview}
      performEdit={performEdit}
      open_closeEdit={open_closeEdit}
      editMode={editMode}
    />
  );
}
