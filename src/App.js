import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {MyNavbar} from './component/MyNavbar';
import Home from './pages/Home';
import React from "react";
import Menu from './pages/Menu';
import About from './pages/About';
import Reservation from './pages/Reservation';
import Help from './pages/Help';



function App() {
  return (
      <Router>
        <div className="App">
          <MyNavbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home/>}>
              </Route>
              <Route path="/Menu" exact element={<Menu/>}>
              </Route>
              <Route exact path="/About" element={<About/>}>
              </Route>
              <Route exact path="/Reservation" element={<Reservation/>}>
              </Route>
              <Route exact path="/Help" element={<Help/>}>
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
