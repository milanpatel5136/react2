import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom';
import Milan from './Components/Milan';
import Home from './Components/Pages/Home';
import First from './first';
import Cards from './Components/Cards';
import Manu from './Components/Manu';
import Task from './Components/API';
import Task1 from './Components/Task1';
import Myuser from './Components/Myuser';
import Mydata from './Components/Mydata';
import Myform from './Components/Myform';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    
    <Myform/>
    
    </BrowserRouter> 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
