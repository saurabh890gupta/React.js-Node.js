import React, { Component } from 'react';
import './Header.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

class Header1 extends Component {
  constructor(props){
      super(props);
      this.state={

    }
    }
  render() {
      return (
          <header>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                <Link to="/Home"><img src={logo} className="img-responsive" id="logo" alt="img" /></Link>
                </div>
                <div className="col-md-6">
                  <div className="navbar">
                    <nav>
                      <ul>
                        <li><Link to="/Home" > Home</Link></li>
                        <li><Link to="/Property" >Property</Link></li>
                        <li><Link to="/Home" >Buy</Link></li>
                        <li><Link to="/Sell" >Sell</Link></li>
                        <li><Link to="/Contact">Contact</Link></li> 
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="lgbtn">
                    <nav>
                      <ul>
                        <li><Link  id="loginInBtn" to="/">logout</Link></li> 
                        <li><Link  id="signInBtn" to="/Sell">Submit</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>

          );
          }
}
export default Header1;