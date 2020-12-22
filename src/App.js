import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.svg';
import Provider from 'react-redux';
import Login from "./views/Login";
import DefaultLayout from "./layouts/DefaultLayout";
import {store} from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>

    </Provider>
  );
}
