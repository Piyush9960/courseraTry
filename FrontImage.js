import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
  
    }
  }));


  class FrontImage extends Component{
    constructor(props){
        super(props);
    };
    render(){
   
        const { classes } = this.props;
        return(
            <div className='Login-component'><h1 className="front-heading">ACE YOUR ASSESSMENT..</h1>
                 <br/>
            <p className="front-text">Join the most comprehensive online assessment portal for Hot tehnology,
               Explore a range of mock tests and study material.</p><br/>
               <p className="front-text">Prepare on PC or Mobile with study synchronized across devices.</p><br/>
             <Button variant="outlined" color="primary" className={()=>classes.button} style={{margin:'20px'}}>
                Start Free Trial
             </Button>
             <Button variant="outlined" color="primary" className={()=>classes.button} style={{margin:'20px'}}>
                Assessment
             </Button>
          
          </div>
        );     

    }


  }
  export default FrontImage; 