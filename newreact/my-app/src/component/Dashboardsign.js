import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import Pagination from "react-js-pagination";
import Pagination from './pagination.js';


class Dashboardsign extends Component {
  constructor(props){
      super(props);
      var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: (i+1) }));
      this.state={
exampleItems: exampleItems,
            pageOfItems: [],

      	

                user_name:[],
                email:[],
                password:[],
                address:[],
                contact:[],
                city:[],
                state:[],
        

    }
     this.onChangePage = this.onChangePage.bind(this);
    }

    handleuser =(event)=>{
          this.email=event.target.id;
      var self =this;
       axios.post('http://localhost:4000/api/deletesignup',{ email:this.email,})
        .then(function(response){
                    if (response.data==="Done") {
                      alert("user remove successfully");
                      self.props.history.push("/Dashboardsign");
                    }
                    else{
                      alert("user can not not be delte");
                    }
                      console.log(response.data);
        })
}
    componentDidMount(){
      var self=this;
      axios.post('http://localhost:4000/api/signData',{})
        .then(function(response){
          let data = response.data;
          let getuser_name =[];
          let getemail=[];
          let getpassword=[];
          let getaddress=[];
          let getcontact=[];
          let getcity=[];
          let getstate=[];


          data.forEach((data)=>{

          	getuser_name.push(data.user_name);
            getemail.push(data.email);
            getpassword.push(data.password);
            getaddress.push(data.address);
            getcontact.push(data.contact);
            getcity.push(data.city);
            getstate.push(data.state);
          });
          self.setState({
                user_name:getuser_name,
                email: getemail ,
                password:getpassword,
                address:getaddress,
                contact:getcontact,
                city:getcity,
                state:getstate,
            


          })
              
        })
    }


 onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }


  render() {

   
  	
    let username = this.state.user_name.map((UserName, index) => {
        return (<li>{UserName}</li> );
    });
    let useremail=this.state.email.map((Email, index1) => {
        return (<li>{Email}</li> );
    });
    let userpassword=this.state.password.map((Password, index2) => {
        return (<li>{Password}</li> );
    });
    let useraddress=this.state.address.map((Address, index3) => {
        return (<li>{Address}</li> );
    });
    let usercontact=this.state.contact.map((Contact, index4) => {
        return (<li>{Contact}</li> );
    });

    let usercity = this.state.city.map((City, index5) => {
        return (<li> {City}</li> );
    });
    let userstate = this.state.state.map((State, index6) => {
        return (<li> {State}</li> );
    });

     let edit = this.state.email.map((Email, index1) => {
        return (<li><Link id={Email} onClick={this.handleuser} name="edit" ref="edit" value="edit" to="/Dashboard">{"Delete"}</Link></li> );
    });

      return (

    <div className="table-scrol">  
        <h1 align="center">All the Users</h1>  
      
    <div className="table-responsive"> 
      
      
        <table className="table table-bordered table-hover table-striped">  
            <thead>  
      
            <tr>  
      
         <th>no</th>       
				<th>User Name</th>  
                <th>Email</th>  
                <th>Password</th>  
                <th>Address</th> 
                <th>Contact</th>  
                <th>city</th>  
                <th>State</th>  
                 <th>Delete</th>  
            </tr>  
            </thead> 
			 <tbody>
                <tr>
                   
                   <td>
                    {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}</div>
                        )}
                  </td>
                  <td>
                    {this.state.pageOfItems.map(item =>
                            <div key={item.id}> {username[item.name]}</div>
                        )}
                  
                  </td>
                    <td> {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{useremail[item.name]}</div>
                        )}</td>
                    <td> {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{userpassword[item.name]}</div>
                        )}</td>
                    <td>{this.state.pageOfItems.map(item =>
                            <div key={item.id}>{useraddress[item.name]}</div>
                        )}</td>
                     <td>{this.state.pageOfItems.map(item =>
                            <div key={item.id}>{usercontact[item.name]}</div>
                        )}</td>
                    <td>{this.state.pageOfItems.map(item =>
                            <div key={item.id}>{usercity[item.name]}</div>
                        )}</td>
                    <td>{this.state.pageOfItems.map(item =>
                            <div key={item.id}>{userstate[item.name]}</div>
                        )}</td>
                     <td>{this.state.pageOfItems.map(item =>
                            <div key={item.id}>{edit[item.name]}</div>
                        )}</td>
    
    
                </tr>
                </tbody> 
      
        </table> 

                
<Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />

            </div>  
    </div>  
      
              

      	 );
          }
}
export default Dashboardsign;