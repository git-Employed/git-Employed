import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTitleActionCreator } from '../../actions/actions';

function EditModeTitle(props) {
  return (
    <form className="title-container">
      <input
        name="title"
        placeholder={props.title}
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

function NonEditModeTitle(props) {
  return (
    <div className="title-container">
      <p className="card__title">{props.title}</p>
      <button onClick={props.open_closeEdit}>E</button>
    </div>
  );
}

export default function TitleSection(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(props.title);
  const [editMode, setEditMode] = useState(false);
  const performEdit = (e) => {
    e.preventDefault();
    const newTitle = document.getElementById('performEdit').value;
    setTitle(newTitle);
    dispatch(updateTitleActionCreator(newTitle));
    console.log(newTitle, 'newTitle');
    setEditMode(!editMode);
  };
  const open_closeEdit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };
  if (editMode) {
    return (
      <EditModeTitle
        title={title}
        performEdit={performEdit}
        open_closeEdit={open_closeEdit}
        editMode={editMode}
      />
    );
  }
  return (
    <NonEditModeTitle
      title={title}
      performEdit={performEdit}
      open_closeEdit={open_closeEdit}
      editMode={editMode}
    />
  );
}
