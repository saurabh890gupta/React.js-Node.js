import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png';
import logo1 from './images/footer-logo.png';






class Ragistration extends Component {
  render() {
    return (
        <div className="register-area">
            <div className="container">

                <div className="col-md-6">
                    <div className="box-for overflow">
                        <div className="col-md-12 col-xs-12 register-blocks">
                            <h2>New account : </h2> 
                            <form>
                              <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" id="name" name/>
                              </div>
                                
                              <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" id="mail" />
                              </div>
                                
                              <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="pass" />
                              </div>
                                
                              <div className="text-center">
                                <button type="submit" className="btn btn-default">Register</button>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className="box-for overflow">                         
                    <div className="col-md-12 col-xs-12 login-blocks">
                      <h2>Login : </h2> 
                        <form>
                          <div className="form-group">
                            <label for="email">Email</label>
                              <input type="text" className="form-control" id="email" />
                          </div>
                          <div className="form-group">
                            <label for="password">Password</label>
                              <input type="password" className="form-control" id="password" />
                          </div>
                          <div className="text-center">
                              <button type="submit" className="btn "> Log in</button>
                          </div>
                        </form>
          
                      <h2>Social login :  </h2> 
                      <p>
                        <a className="login-social" href="/"><i className="fa fa-facebook"></i>&nbsp;Facebook</a> 
                      </p> 
                    </div>
                  </div>
                </div>  
            </div>
        </div>
          );
  }
}