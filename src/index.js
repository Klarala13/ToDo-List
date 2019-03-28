import React from "react";
import { render } from "react-dom";
//React
import Router from "./components/Router";
//Components
import { createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducers/index";
import { loadState, saveState } from "../src/modules/Storage";
//Reduxxx
import "@fortawesome/fontawesome-free/css/all.css";
import "./sass/style.scss";
//styleshits

const store = createStore(
  appReducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector("#main")
);

