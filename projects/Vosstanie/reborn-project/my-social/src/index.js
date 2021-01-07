import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {name: 'Yura', id: '1'},
    {name: 'Genja', id: '2'},
    {name: 'Natasha', id: '3'},
    {name: 'Kirill', id: '4'},
    {name: 'Misha', id: '5'},
    {name: 'Sergey', id: '6'}
];
let messageMassive = [
    {message: 'hello', id: '1'},
    {message: 'hi', id: '2'},
    {message: 'ddddd', id: '3'},
    {message: 'qwo', id: '4'},
    {message: 'sddsv', id: '5'},
    {message: 'hd', id: '6'},
]

ReactDOM.render(

  <React.StrictMode>
    <App postsData={postsData} messageMassive={messageMassive}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
