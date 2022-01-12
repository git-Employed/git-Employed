import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateInterviewActionCreator } from '../../actions/actions';
function EditModeInterview(props) {
  return (
    <form className="interview-container">
      <input
        name="interview"
        placeholder={props.interview}
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

function NonEditModeInterview(props) {
  const dispatch = useDispatch();
  return (
    <div className="interview-container">
      <div className="interviewTextWrapper">
        <div>
          <p className="interviewText">{props.interview}</p>
        </div>
      </div>
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
