import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateLocationActionCreator } from '../../actions/actions';
function EditModeLocation(props) {
  return (
    <form className="location-container">
      <input
        name="location"
        placeholder={props.location}
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

function NonEditModeLocation(props) {
  return (
    <div className="location-container">
      <p>{props.location}</p>
      <button onClick={props.open_closeEdit}>E</button>
    </div>
  );
}

export default function LocationSection(props) {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(props.vibeCheck);
  const [editMode, setEditMode] = useState(false);
  const performEdit = (e) => {
    e.preventDefault();
    const newLocation = document.getElementById('performEdit').value;
    setLocation(newLocation);
    dispatch(updateLocationActionCreator(newLocation));
    console.log(newLocation, 'newLocation');
    setEditMode(!editMode);
  };
  const open_closeEdit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };
  if (editMode) {
    return (
      <EditModeLocation
        location={location}
        performEdit={performEdit}
        open_closeEdit={open_closeEdit}
        editMode={editMode}
      />
    );
  }
  return (
    <NonEditModeLocation
      location={location}
      performEdit={performEdit}
      open_closeEdit={open_closeEdit}
      editMode={editMode}
    />
  );
}
