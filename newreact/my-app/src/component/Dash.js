import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Dash1 extends Component {
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
                
                <div className="col-md-12">
                  <div className="dashlgbtn">
                    <nav>
                      <ul>
                        <li><Link  id="userpropertyBtn" to="/Dashboard">User Property</Link></li> 
                        <li><Link  id="usersignBtn" to="/Dashboardsign">User Details</Link></li>
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
export default Dash1;