import React, { Component } from 'react';
import './Header.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

class Header2 extends Component {
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
                 <Link to="/"> <img src={logo} className="img-responsive" id="logo" alt="img" /></Link>
                </div>
                <div className="col-md-6">
                  <div className="navbar">
                    <nav>
                      <ul>
                        <li><Link to="/" > Home</Link></li>
                        <li><Link to="/Fpropertyboximg" >Property</Link></li>
                        <li><Link to="/Fcontact">Contact</Link></li> 
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="lgbtn">
                    <nav>
                      <ul>
                        <li><Link  id="loginInBtn" to="/Login">login/signup</Link></li> 
                        <li><Link  id="signInBtn" to="/Adminlgn">Admin</Link></li>
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
export default Header2;