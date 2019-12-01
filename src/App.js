import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import NavBar from './components/Navbar'
import Wardrobe from './components/Wardrobe';
import {BrowserRouter , Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className = "bg">  
        <NavBar />
       <Route path = "/Wardrobe" component ={Wardrobe}/>
       
      </div>
    </BrowserRouter>
  

  );
}

export default App;
