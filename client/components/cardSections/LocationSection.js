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
      <button
        type="submit"
        onClick={props.performEdit}
        style={{ background: 'transparent', borderStyle: 'none' }}
      >
        <img
          src="https://res.cloudinary.com/nena/image/upload/v1642008511/git-Employed/check-box-with-check-sign_mgvoex.png"
          style={{ width: '20px', height: 'auto' }}
        />
      </button>
      <button
        id="open_closeEdit"
        onClick={props.open_closeEdit}
        style={{ background: 'transparent', borderStyle: 'none' }}
      >
        <img
          src="https://res.cloudinary.com/nena/image/upload/v1642010935/git-Employed/close_1_qkztfu.png"
          style={{ width: '20px', height: 'auto' }}
        />
      </button>
    </form>
  );
}

function NonEditModeLocation(props) {
  return (
    <div className="location-container">
      <p>{props.location}</p>
      <button
        onClick={props.open_closeEdit}
        style={{ background: 'transparent', borderStyle: 'none' }}
      >
        <img
          src="https://res.cloudinary.com/nena/image/upload/v1642008194/git-Employed/writing_3_acbhuc.png"
          style={{ width: '20px', height: 'auto' }}
        />
      </button>
    </div>
  );
}

export default function LocationSection(props) {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(props.location);
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
