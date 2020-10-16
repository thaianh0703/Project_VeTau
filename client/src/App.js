import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Menu from './components/Timkiem/Menu';
import QLTau from './components/Timkiem/QLTau';
import Test1 from './components/Timkiem/Test1';


function App() {
    //https://magic.reactjs.net/htmltojsx.html
    const Link = require("react-router-dom").Link;
    return (
        <div className="container">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Test1/>
                <hr></hr>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <Menu/>            
            </div>
            <div id='QLTau' className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                {/* <QLTau/> */}

            </div>  
            
        </div>
    );
}

export default App;
 