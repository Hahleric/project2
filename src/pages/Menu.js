import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import React, { Component } from 'react';
import './Menu.css';
import MenuPdf from '../component/MenuPdf';
import{Link} from "react-router-dom";


class Menu extends Component{


    render(){
        return (
            <>
                <img src={'asset/1cf585b894f5f08f869c766241141a4.jpg'} alt="homepage pic"/>
                <Link to={{pathname: '/MenuPdf.js'}}>
                    <p className="choiceText" style={{top: "30%"}}>
                        BREAKFAST & BRUNCH
                    </p>
                </Link>
                <p className="choiceText" style={{top: "40%"}} onClick={this.navigateToMenu}>
                    ALL DAY
                </p>
                <p className="choiceText" style={{top: "50%"}} onClick={this.navigateToMenu}>
                    CHILDREN’S
                </p>
                <p className="choiceText" style={{top: "60%"}} onClick={this.navigateToMenu}>
                    DRINKS
                </p>
            </>
        );
    }

}
export default Menu;