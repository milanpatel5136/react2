import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import Milan from "./Components/Milan";
import Home from "./Components/Pages/Home";
import First from "./first";
import Cards from "./Components/Cards";
import Manu from "./Components/Manu";
import Task from "./Components/API";
import Task1 from "./Components/Task1";
import Myuser from "./Components/Myuser";
import Mydata from "./Components/Mydata";
import Myform from "./Components/Myform";
import Testapi from "./Components/Pages/Testapi";
import Testfrom from "./Components/Pages/Testfrom";
import TestApi2 from "./Components/Pages/TestApi2";
import TestApi3 from "./Components/Pages/TestApi3";
import Form2 from "./Components/Pages/Form2";
import Form3 from "./Components/Pages/Form3";
import Myform2 from "./Components/Pages/Myform2";
import FormTask from "./Components/Pages/FormTask";
import FormTask3 from "./Components/Pages/FormTask3";
import Taskform4 from "./Components/Pages/Taskform4";
import Props from "./Components/Pages/Props";
import Pform from "./Components/Pages/Edit";
import Grid from "./Components/Pages/Grid";
import Grid1 from "./Components/Pages/Grid1";
import Rajan from "./Components/Pages/Rajan";
import Apipost from "./Components/Pages/Apipost";
import Login from "./Components/Pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Testapipost from "./Components/Pages/Testapipost";
import Imgpost from "./Components/Pages/ImgData";
import Api2 from "./Components/Pages/Testtask";
import Testtask1 from "./Components/Pages/Testtask1";
import Matirail from "./Components/Pages/Matirail";
import Memo from "./Components/Pages/Memo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Pages/Routertask/Header";
import Contact from "./Components/Pages/Routertask/Contact";
import About from "./Components/Pages/Routertask/About";
import Home1 from "./Components/Pages/Routertask/Home";
import Footer from "./Components/Pages/Routertask/Footer";
import Useeffictleval from "./Components/Pages/Useeffictleval";
import Counter from "./Components/Pages/Counter";
import Myreducerleavel2 from "./Components/Pages/Myreducerleavel2";
import RequireAuth from "./Components/Pages/RequireAuth";
import Product2 from "./Components/Pages/Product2";
import Files from "./Components/Pages/Files";
import Inquryform from "./Components/Pages/Inquryform";
import Example from "./Components/Pages/CostumHook/Example";
import MyHoc from "./Components/Pages/H/HOC";

import {ErrorBoundary} from 'react-error-boundary'
import BuggyCounter from "./Components/Pages/BuggyCounter";
import { ErrorFallback } from "./Components/Pages/ErrorFallback";
import HomeHOC from "./Components/Pages/H/HomeHOC";
import LoginHOC from "./Components/Pages/H/LoginHOC";
import MainReducer from "./Components/Pages/Thunk/MainReducer";
// import store from "./Components/Pages/Thunk/Store/Store";
import UserReducer from "./Components/Pages/Thunk/UserReducer";
import rootsaga from "./Saga/rootSaga";
import CountSaga from "./Saga/CountSaga";
import MYPOST from "./Components/Pages/MYPOST";
import MyFunR1 from "./Components/Pages/MyFunR1";
import MyFunR2 from "./Components/Pages/MyFunR2";
import MyFUnRd3 from "./Components/Pages/MyFUnRd3";
import Countertool from "./Components/Pages/Toolkit/Countertool";
import { storetool } from "./Components/Pages/Toolkit/Storetool/StoreTool";




const root = ReactDOM.createRoot(document.getElementById("root"));

const HomeHocpot = React.lazy(()=> import('./Components/Pages/H/HomeHOC'))
let HomeHocpot1=MyHoc(HomeHocpot)
root.render(
  
  <BrowserRouter>

    {/* <Routes>
      <Route path="/" element={<Login />}></Route>

      <Route
        path="/product"
        element={
          <RequireAuth>
            
            <Product2 />
          </RequireAuth>
        }
      ></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    <Footer /> 
    <Files/>  */}
     {/* <Example/> */}

     {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BuggyCounter/>
    </ErrorBoundary> */}
    {/* <MyHoc/> */}
    {/* <Home/> */}
    
    {/* <Suspense fallback={<h1 className="m-5">Loadig .....</h1>}>
    <Routes>
      <Route path="/" element={<HomeHocpot1/>}/>
      <Route path="/login" element={<LoginHOC/>}/>
    </Routes>
    </Suspense> */}

    <Provider store={storetool}>
      {/* <MainReducer/> */}
      {/* <CountSaga/> */}
      {/* <UserReducer/> */}
      {/* <MYPOST/> */}
      {/* <MyFunR1 /> */}
      {/* <MyFunR2 /> */}
      {/* <MyFUnRd3/> */}
      <Countertool/>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
