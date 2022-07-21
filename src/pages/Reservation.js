import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import './Reservation.css';
import ReserTab from '../component/ReserTab';


class About extends Component{
    render(){
        return (
            <>
                <img src={'asset/69c616e3596bd768ef729d2c485dbf5.jpg'} alt="homepage pic"/>
                <div className="tab">
                    <ReserTab/>
                </div>

            </>
        );
    }

}
export default About;