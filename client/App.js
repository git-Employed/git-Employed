import React from 'react';
import {
  Routes as Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
// import { render } from 'react-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Form from './components/Form';
import styles from './styles.css';
// import style from './modal.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' element={<Login />}>
        </Route>
        <Route exact path='/homepage' element={<Homepage />}>
        </Route>
        <Route path='/form' element={<Form />}></Route>
      </Switch>
    </BrowserRouter>
  );
}