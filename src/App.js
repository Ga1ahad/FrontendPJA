import React from 'react';
import './App.css';
import PreLoginNavbar from './components/PreLoginNavbar'
import Navbar from './components/Navbar'
import Wardrobe from './components/Wardrobe';
import TodaysSet from './components/TodaysSet';
import Suitcases from './components/Suitcases';
import SideLogin from './components/SideLogin';
import SignUp from './components/SignUp';
import AddCloth from './components/AddCloth'
import AddClothSpecs from './components/AddClothSpecs'
import PlanTrip from './components/PlanTrip'
import Profile from './components/Profile'
import {BrowserRouter , Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className = "bg">  
        <Navbar />
       <Route path = "/Wardrobe" component ={Wardrobe}/>
       <Route path = "/TodaysSet" component ={TodaysSet}/>
       <Route path = "/Suitcases" component ={Suitcases}/>
       <Route path = "/SideLogin" component ={SideLogin}/>
       <Route path = "/SignUp" component ={SignUp}/>
       <Route path = "/AddCloth" component ={AddCloth}/>
       <Route path = "/AddClothSpecs" component ={AddClothSpecs}/>
       <Route path = "/PlanTrip" component = {PlanTrip}/>
       <Route path = "/Profile" component = {Profile}/>
      </div>
    </BrowserRouter>
  

  );
}

export default App;
