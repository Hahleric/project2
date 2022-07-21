import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import './Home.css';

class Help extends Component{
    QAmessage = "QA message";
    questionForRestaurant = "Q: What is the restaurant's address?";
    answer = "A: 293 Chapel Ave. Tianjin China Tel.(613) 888-8888\nOpen Hours: \nMON. 11:30 - 22:00\nTUE 11:30 - 22:00\nWED. 11:30 - 22:00\nTHU. 11:30 - 22:00\nFRI. 11:30 - 22:00\nSAT. 11:30 - 22:00\nSUN. 11:30 - 22:00\n";
    QuestionForChef = "Q: What is the chef's name?";
    answer2 = "A: Zhongqiang Wang\n";
    render(){
        return (
            <>
                <img src={'asset/69c616e3596bd768ef729d2c485dbf5.jpg'} alt="homepage pic"/>
                <div style={{position:"absolute", left : "20%",top:"30%",whiteSpace: 'pre-wrap', fontSize: "19px"}}>
                    <b style={{fontSize:"30px"}}>{this.QAmessage}</b>
                    <p>{this.questionForRestaurant}</p>
                    <p>{this.answer}</p>
                    <p>{this.QuestionForChef}</p>
                    <p>{this.answer2}</p>
                </div>
            </>
        );
    }

}
export default Help;