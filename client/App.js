import React from 'react';
import {
  Routes as Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { render } from 'react-dom';
import Login from './components/Login';

export default function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' element={ <Login />} />
        {/* add homepage route here*/}
      </Switch>
    </BrowserRouter>
  );
}