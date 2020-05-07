import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Calendarpage from './components/Calendarpage';
import Customerlist from "./components/Customerlist";
import Traininglist from "./components/Traininglist";
import "bootstrap/dist/css/bootstrap.min.css";
import { PeopleFill, CalendarFill, Trophy } from 'react-bootstrap-icons';

function App() {

  return (
    <Router>
    <div className="App">

      {/* Navbar bootstrap */}

<div>
<nav className="navbar navbar-expand-sm navbar-light bg-primary font-weight-bold">
<a className="navbar-brand text-white" href="/">Personal Trainer</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link className="nav-link" to ="/" > <PeopleFill />Customers </Link>{' '}
  </li>
  <li className="nav-item">
      <Link className="nav-link" to ="/components/Traininglist" ><Trophy />Trainings</Link>{' '}
  </li>
  <li className="nav-item">
      <Link className="nav-link" to ="/components/Calendarpage"><CalendarFill />Calendar</Link>{' '}
  </li>
  </ul>
  </div>
  </nav>
   </div> 
      <Route exact path ="/" component={Customerlist}/>
      <Route path ="/components/Traininglist" component={Traininglist}/>
      <Route path ="/components/Calendarpage" component={Calendarpage}/>
      </div>
   </Router>

  );
}

export default App;
