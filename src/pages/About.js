import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import './About.css';
import Map from '../component/Map';

class About extends Component{
    render(){

        const message ='The Muslim restaurant Hong Bin Lou (鸿宾楼) was \nestablished in Tianjin city in 1853. In 1955, because\nits long-standing reputation in quality, Chinese\nPremier Zhou Enlai invited the restaurant to set its\nfirst branch in the capital of China.\n'

        return (
            <>
                <img src={'asset/8029c978ee391ca180a35fd3689c9d6.jpg'} alt="homepage pic"/>
                <div style={{position:"absolute",top: "0",left: "0",width: "100%", height: "90%", whiteSpace: 'pre-wrap'}}>
                    <p className="titleText" style={{top: "20%"}}>
                        鸿宾楼
                    </p>

                    <p className="descriptionText" style={{top: "24.55%",left: "40%"}}>
                        Tel. (613) 888-8888
                    </p>
                    <div className="map">
                        <p style={{margin: 'center'}}>MAP</p>
                    </div>
                    <p className="descriptionText" style={{top: "35%"}}>
                        {message}
                    </p>

                        <p className="descriptionText" style={{top: "77%"}}>
                            {'Address:\n'}
                        </p>
                        <p className="descriptionText" style={{top: "81%"}}>
                            {'293 Chapel Ave.\n'}
                        </p>
                        <p className="descriptionText" style={{top: "84%"}}>
                            {'Tianjin China\n'}
                        </p>
                        <p className="descriptionText" style={{top: "87%"}}>
                            {'Tel.(613) 888-8888\n'}
                        </p>
                        <p className="descriptionText" style={{top: "73%", left: "50%"}}>
                            {'Open Hours: \nMON. 11:30 - 22:00\nTUE 11:30 - 22:00\nWED. 11:30 - 22:00\nTHU. 11:30 - 22:00\nFRI. 11:30 - 22:00\nSAT. 11:30 - 22:00\nSUN. 11:30 - 22:00\n'}
                        </p>
                </div>
            </>
        );
    }

}
export default About;