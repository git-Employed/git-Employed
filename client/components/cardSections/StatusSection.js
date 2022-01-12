import React, { useState } from 'react';
function EditModeStatus(props) {
  return (
    <form className="status-container">
      <input
        name="status"
        placeholder={props.status}
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

function NonEditModeStatus(props) {
  return (
    <div className="status-container">
      <p>{props.status}</p>
      <button onClick={props.open_closeEdit}>E</button>
    </div>
  );
}

export default function StatusSection(props) {
  const [status, setStatus] = useState(props.status);
  const [editMode, setEditMode] = useState(false);
  const performEdit = (e) => {
    e.preventDefault();
    const newStatus = document.getElementById('performEdit').value;
    setStatus(newStatus);
    console.log(newStatus, 'newStatus');
    setEditMode(!editMode);
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
