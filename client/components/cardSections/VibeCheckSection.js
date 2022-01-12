import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateEnvironmentActionCreator } from '../../actions/actions';

function EditModeVibeCheckSection(props) {
  return (
    <form className="vibeCheck-container">
      <input
        name="vibeCheckSection"
        placeholder={props.vibeCheck}
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

function NonEditModeVibeCheckSection(props) {
  return (
    <div className="vibeCheck-container">
      <p>{props.vibeCheck}</p>
      <button onClick={props.open_closeEdit}>E</button>
    </div>
  );
}

export default function VibeCheckSectionSection(props) {
  const dispatch = useDispatch();
  const [vibeCheck, setVibeCheck] = useState(props.vibeCheck);
  const [editMode, setEditMode] = useState(false);
  const performEdit = (e) => {
    e.preventDefault();
    const newVibeCheck = document.getElementById('performEdit').value;
    setVibeCheck(newVibeCheck);
    dispatch(updateEnvironmentActionCreator(newVibeCheck));
    console.log(newVibeCheck, 'newVibeCheck');
    setEditMode(!editMode);
  };
  const open_closeEdit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };
  if (editMode) {
    return (
      <EditModeVibeCheckSection
        vibeCheck={vibeCheck}
        performEdit={performEdit}
        open_closeEdit={open_closeEdit}
        editMode={editMode}
      />
    );
  }
  return (
    <NonEditModeVibeCheckSection
      vibeCheck={vibeCheck}
      performEdit={performEdit}
      open_closeEdit={open_closeEdit}
      editMode={editMode}
    />
  );
}
