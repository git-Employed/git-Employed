import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSalaryActionCreator } from '../../actions/actions'

function EditModeSalary(props) {
  return (
    <form className="salary-container">
      <input
        name="salary"
        placeholder={props.salary}
        type="number"
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

function NonEditModeSalary(props) {
  return (
    <div className="salary-container">
      <p className="salaryText">${props.salary}/Year</p>
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

export default function SalarySection(props) {
  const dispatch = useDispatch();
  const [salary, setSalary] = useState(props.salary);
  const [editMode, setEditMode] = useState(false);
  const performEdit = (e) => {
    e.preventDefault();
    const newSalary = document.getElementById('performEdit').value;
    setSalary(newSalary);
    dispatch(updateSalaryActionCreator(newSalary));
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
