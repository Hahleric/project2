import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import './Home.css';
import Menu from './Menu';
import About from './About';
import Reservation from './Reservation';
import Help from './Help';

class Home extends Component{
    render(){
        return (
            <>
                <img src={'asset/7b21d389d07d2f2095bd7ad6c9f215f.jpg'} alt="homepage pic"/>
            </>
        );
    }

}
export default Home;