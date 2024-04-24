import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss.hbs.hbs';
import Button from './button/index';
import reportWebVitals from './reportWebVitals';
import Icon from "./icon";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Button type="primary">click me</Button>
      <Button >click me</Button>
      <Button type="primary" className="my-btn">primary button </Button>
      <Icon type={"fixed"}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
