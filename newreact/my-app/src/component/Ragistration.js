import React, { Component } from 'react';
import './Ragistration.css';
import Signup from './Signup.js';
import Login from './Login.js';



class Ragistration extends Component {
  constructor(props){
    super(props);
    this.state={

    }
    }
  render() {
    return (
      
        <div className="register-area">
          <div className="container">
            <div className="col-md-6">
              < Signup {...this.props} />
            </div>
            <div className="col-md-6">
              < Login {...this.props}/>
            </div>  
          </div>
        </div>
        
          );
  }
}
export default Ragistration;