
import React, { Component } from 'react';



class Header extends Component {
  render() {
      return (
          <header>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <img src={logo} class="img-responsive" id="logo" alt="img" />
                </div>
                <div className="col-md-6">
                  <div class="navbar">
                    <nav>
                      <ul>
                        <li className="dropup yamm-sw" data-wow-delay="0.1s"><a href="/" >Home</a></li>
                        <li><a href="/" >Property</a></li>
                        <li><a href="/" >Buy</a></li>
                        <li><a href="/" >Sell</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-md-3">
                  <div class="lgbtn">
                    <nav>
                      <ul>
                        <li><a href="/" id="loginInBtn">login</a></li> 
                        <li><a href="/" id="signInBtn">Submit</a></li>
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