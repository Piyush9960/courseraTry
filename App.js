//import React from 'react';
import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import HomeComponent from './components/HomeComponent';
import { DISHES } from './Shared/Dishes';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FrontImage from './FrontImage';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES
    };
  }
  render(){
   
  return (
    <BrowserRouter>
    <div>
      
      <Navbar dark color="primary">
        <div className="container"> 
        <NavbarBrand href="/">CreationReact </NavbarBrand>
        
        </div>
        </Navbar>
        {/* <Menu dishes={this.state.dishes}/> */}
        <FrontImage/>
        </div>
    </BrowserRouter>
  );
}
}

export default App;
