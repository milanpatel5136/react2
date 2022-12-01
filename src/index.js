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
import Testapi from './Components/Pages/Testapi';
import Testfrom from './Components/Pages/Testfrom';
import TestApi2 from './Components/Pages/TestApi2';
import TestApi3 from './Components/Pages/TestApi3';
import Form2 from './Components/Pages/Form2';
import Form3 from './Components/Pages/Form3';
import Myform2 from './Components/Pages/Myform2';
import FormTask from './Components/Pages/FormTask';
import FormTask3 from './Components/Pages/FormTask3';
import Taskform4 from './Components/Pages/Taskform4';
import Props from './Components/Pages/Props';
import Pform from './Components/Pages/Edit';
import Grid from './Components/Pages/Grid';
import Grid1 from './Components/Pages/Grid1';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
    
     <Grid1/>    
   // <Pform/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
