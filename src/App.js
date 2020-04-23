import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Calendarpage from './Calendarpage';
import Customerlist from "./components/Customerlist";
import Traininglist from "./components/Traininglist";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <Router>
    <div className="App">

      {/* Material-UI toolbar */}

    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Personal Trainer
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Navbar bootstrap */}

<div>
<nav className="navbar navbar-expand-sm navbar-light bg-primary font-weight-bold">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link className="nav-link" to ="/components/Customerlist" >Customers <span className="sr-only">(current)</span></Link>{' '}
  </li>
  <li className="nav-item">
      <Link className="nav-link" to ="/components/Traininglist" >Trainings </Link>{' '}
  </li>
  <li className="nav-item">
      <Link className="nav-link" to ="/Calendarpage">Calendar </Link>{' '}
  </li>
  </ul>
  </div>
  </nav>
   </div> 
      <Route exact path ="/components/Customerlist" component={Customerlist}/>
      <Route path ="/components/Traininglist" component={Traininglist}/>
      <Route path ="/Calendarpage" component={Calendarpage}/>
      </div>
   </Router>

  );
}

export default App;
