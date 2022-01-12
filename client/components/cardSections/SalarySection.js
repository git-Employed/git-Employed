import React, { useState } from 'react';
function EditModeSalary(props) {
  return (
    <form>
      <input
        name="salary"
        placeholder={props.salary}
        type="number"
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

function NonEditModeSalary(props) {
  return (
    <div>
      <p>{props.salary}</p>
      <button onClick={props.open_closeEdit}>E</button>
    </div>
  );
}

export default function SalarySection(props) {
  const [salary, setSalary] = useState(props.salary);
  const [editMode, setEditMode] = useState(false);
  const performEdit = (e) => {
    e.preventDefault();
    const newSalary = document.getElementById('performEdit').value;
    setSalary(newSalary);
    console.log(newSalary, 'newSalary');
    setEditMode(!editMode);
  };
  const open_closeEdit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };
  if (editMode) {
    return (
      <EditModeSalary
        salary={salary}
        performEdit={performEdit}
        open_closeEdit={open_closeEdit}
        editMode={editMode}
      />
    );
  }
  return (
    <NonEditModeSalary
      salary={salary}
      performEdit={performEdit}
      open_closeEdit={open_closeEdit}
      editMode={editMode}
    />
  );
}
