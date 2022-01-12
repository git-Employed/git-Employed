import React from "react"
import App from "./App"
import { render } from "react-dom";
import { Provider } from 'react-redux';
import store from './store';
//add provider tags here with store
render(
   <Provider store={store}>
      <App />
   </Provider>
   , document.getElementById("app"));