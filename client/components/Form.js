import React from "react";
import { useNavigate } from 'react-router-dom';


export default function Form() {
  return (
    <Form>
      <textarea type='text' ></textarea>
      <textarea type='text' ></textarea>
      <textarea type='text' ></textarea>
      <textarea type='text' ></textarea>
      <textarea type='text' ></textarea>
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="#">Interested</a>
          <a href="#">Pending</a>
          <a href="#">Offered</a>
          <a href="#">Archive</a>
        </div>
      </div>
    </Form>
  )
}