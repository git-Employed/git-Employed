import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStatusActionCreator } from '../../actions/actions';

function EditModeStatus(props) {
  return (
    <form className="status-container">
      <select
        name="status"
        id="statusPerformEdit"
        className="statusSelection"
        onChange={props.performEdit}
      >
        <option value="Update status...">Choose a status...</option>
        <option value="Interested">Interested</option>
        <option value="Pending">Pending</option>
        <option value="Offered">Offered</option>
        <option value="Archive">Archive</option>
      </select>
      <br></br>
    </form>
  );
}

function NonEditModeStatus(props) {
  return (
    <div className="status-container">
      <p>{props.status}</p>
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

export default function StatusSection(props) {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(props.status);
  const [editMode, setEditMode] = useState(false);
  const performEdit = (e) => {
    e.preventDefault();
    const newStatus = document.getElementById('statusPerformEdit').value;
    setStatus(newStatus);
    dispatch(updateStatusActionCreator(newStatus));
    console.log(newStatus, 'newStatus');
    setEditMode(!editMode);
    location.reload();
  };
  const open_closeEdit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };
  if (editMode) {
    return (
      <EditModeStatus
        status={status}
        performEdit={performEdit}
        open_closeEdit={open_closeEdit}
        editMode={editMode}
      />
    );
  }
  return (
    <NonEditModeStatus
      status={status}
      performEdit={performEdit}
      open_closeEdit={open_closeEdit}
      editMode={editMode}
    />
  );
}
