import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from './pagination.js';

class Dashboard extends Component {
  constructor(props){

      super(props);
      var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: (i+1) }));
      this.state={

        exampleItems: exampleItems,
            pageOfItems: [],
      	 property_price:[],
          property_name:[],
          telephone:[],
        

    }
    this.onChangePage = this.onChangePage.bind(this);
    }

    handleuser =(event)=>{
          this.name=event.target.id;
      var self =this;
       axios.post('http://localhost:4000/api/delete',{ username:this.name,})
        .then(function(response){
                    if (response.data==="Done") {
                      alert("user remove successfully");
                      self.props.history.push("/Dashboard");
                    }
                    else{
                      alert("user can not not be delte");
                    }
                      console.log(response.data);
        })
}
    componentDidMount(){
      var self=this;
      axios.post('http://localhost:4000/api/propertyData',{})
        .then(function(response){
          let data = response.data;
          let getprice =[];
          
          let gettelephone=[];
          
          let getpropertyname=[];

          let getid=[];


          data.forEach((data)=>{

          	getpropertyname.push(data.property_name);
            getprice.push(data.property_price);
            gettelephone.push(data.telephone);
            getid.push(data.id);
             


          });
          self.setState({
          	property_name:getpropertyname,
            property_price:getprice,
            telephone:gettelephone,
            id:getid,
            


          })
              
        })
    }

 onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

  render() {
  	
    let name = this.state.property_name.map((Name, index) => {
        return (<li>{Name}</li> );
    });
    let price =this.state.property_price.map((Price, index1) => {
        return (<li>Rs.{Price}</li> );
    });
    let mobile = this.state.telephone.map((Mobile, index2) => {
        return (<li> {Mobile}</li> );
    });

     let edit = this.state.property_name.map((Name, index) => {
        return (<li><Link id={Name} onClick={this.handleuser} name="edit" ref="edit" value="edit" to="/Dashboard">{"Delete"}</Link></li> );
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
                <th>Price</th>  
                <th>Mobile</th>  
                <th>Delete User</th>  
            </tr>  
            </thead> 
			 <tbody>
                <tr>
                   <td>{this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}</div>
                        )}
                  </td>
                    <td>{this.state.pageOfItems.map(item =>
                            <div key={item.id}>{name[item.name]}</div>
                        )}</td>
                    <td>{this.state.pageOfItems.map(item =>
                            <div key={item.id}>{price[item.name]}</div>
                        )}</td>
                    <td>{this.state.pageOfItems.map(item =>
                            <div key={item.id}>{mobile[item.name]}</div>
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
export default Dashboard;