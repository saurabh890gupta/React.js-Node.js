import React, { Component } from 'react';
import './App.css';

class Ragistration extends Component {
  render() {
    return (
      	<div className="register-area">
            <div className="container">

                <div className="col-md-6">
                    <div className="box-for overflow">
                        <div className="col-md-12 col-xs-12 register-blocks">
                            <h2>New account : </h2> 
                            <form action="" method="post" >
                                
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" />
                                </div>
                                
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" class="form-control" id="email" />
                                </div>
                                
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" />
                                </div>
                                
                                <div classNmae="text-center">
                                    <button type="submit" class="btn btn-default">Register</button>
                                </div>
                            
                            </form>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          );
  }
}
