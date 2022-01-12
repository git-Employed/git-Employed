import React, { useState } from 'react';
function EditModeCompany(props) {
  return (
    <form>
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
    <div>
      <h3>{props.company}</h3>
      <button onClick={props.open_closeEdit}>E</button>
    </div>
  );
}

export default function CompanySection(props) {
  const [company, setCompany] = useState(props.company);
  const [editMode, setEditMode] = useState(false);
  const performEdit = (e) => {
    e.preventDefault();
    const newCompany = document.getElementById('performEdit').value;
    setCompany(newCompany);
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
