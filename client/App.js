import React from 'react';
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';
// import { render } from 'react-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Form from './components/Form';
import styles from '../styles.css';
// import style from './modal.css';

export default function App() {
  const hColors = [
    '#1fe4f5', '#3fbafe',
    '#fbc1cc', '#fa99b2',
    '#76b2fe', '#b69efe',
    '#60efbc', '#58d5c9',
    '#f588d8', '#c0a3e5',
  ];
  return (
    <div>
      <h1 id="title" style={{ color: hColors[Math.floor(Math.random() * 10)] }}>Git Employed</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/homepage" element={<Homepage />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
