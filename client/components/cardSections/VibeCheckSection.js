import React, { useState } from 'react';
function EditModeVibeCheckSection(props) {
  return (
    <form className="vibeCheck-container">
      <input
        name="vibeCheckSection"
        placeholder={props.vibeCheck}
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
          style={{ width: '13px', height: 'auto' }}
        />
      </button>
    </form>
  );
}

function NonEditModeVibeCheckSection(props) {
  return (
    <div className="vibeCheck-container">
      <p className="vibeText">{props.vibeCheck}</p>

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

export default function VibeCheckSectionSection(props) {
  const [vibeCheck, setVibeCheck] = useState(props.vibeCheck);
  const [editMode, setEditMode] = useState(false);
  const performEdit = (e) => {
    e.preventDefault();
    const newVibeCheck = document.getElementById('performEdit').value;
    setVibeCheck(newVibeCheck);
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
