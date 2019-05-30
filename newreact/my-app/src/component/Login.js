

import React, { Component } from 'react';
import './Ragistration.css';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Login extends Component {


    constructor(props){
      super(props);
      this.state={
                username:'',
                password:'' 
      }
    
    }

    handleusername=(event)=> {
        let email = event.target.value;
        this.setState({username: email});
  }

         handlepassword=(event) => {
            let password = event.target.value;
            this.setState({password: password});
              }

  handleform=(event) => {
    event.preventDefault();
    var self =this;
  
    axios.post('http://localhost:4000/api/login',{
        email:this.state.username,
        password:this.state.password
    } )
          .then(function(response){
           // console.log(response);
           if(response.data === "login successful"){
            alert('login successful');
          //window.location="/Contact";
          console.log("self", self)
         
          self.props.history.push("/Contact");
          }
          else{
            
           
            alert('password is not match');
            //window.location="/Login";
            //self.props.history.push("/");
        


          }

          })
          .catch(function(err){
            console.log(err);
          });
        
  }
    




render() {
    return (
       <div className="row">
				<div className="col-md-12">
          <div className="box-for overflow">                         
            <div className="col-md-12 col-xs-12 login-blocks">
              <h2>Login : </h2> 
                <form  onSubmit={this.handleform} >
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" id="email"  name="username" onChange={this.handleusername} required />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password" name="password"  onChange={this.handlepassword} required />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn " > Log in</button>
                    
                  </div>
                </form>
          
                
              <h2>Social login :  </h2> 
                  <p>
                  <Link className="login-social" to="www.Facebook.com"><i className="fa fa-facebook"></i>&nbsp;Facebook</Link> 
                  </p>             
            </div>
          </div>
        </div>  
      </div>
        
          );
  }
}
export default Login;