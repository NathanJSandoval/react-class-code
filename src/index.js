import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import App from './App';
//import MyComponent from './MyCompClass';
//.import App1 from './App1';
//import App1 from './FuncAsProp';
//import Form from './Forms';
//import DropDownExample from './DropDown';
//import Form from './Forms';
//import App1 from './MyCompFunc';
//import App from './App3';
//import App2 from './App2';
import StateExample from './StateExample';
import reportWebVitals from './reportWebVitals';
import MyFunction from './MyCompFunc';
import MyComponent from './MyCompClass';
import Form from './Forms'
import TableMain from './Table'
import MyForm from './MyForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MyComponent/>
    <StateExample/>
    <MyFunction/>
    <Form/>
    <TableMain/> */}
    <MyForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
