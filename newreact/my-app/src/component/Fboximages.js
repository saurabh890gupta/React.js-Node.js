import React, { Component } from 'react';
import './Boximages.css';
import axios from 'axios';
//import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom';
import img1 from '../images/demo/property-1.jpg';
/*import img2 from '../images/demo/property-2.jpg';
import img3 from '../images/demo/property-3.jpg';
import img4 from '../images/demo/property-4.jpg';
import img5 from '../images/demo/property-5.jpg';
import img6 from '../images/demo/property-6.jpg';
*/
import bed from '../images/icon/bed.png';
import shawer from '../images/icon/shawer.png';
import cars from '../images/icon/cars.png';
import Pagination from './Boxpagination.js';




class Fboximages1 extends Component {
  constructor(props){
      super(props);
       var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: (i+1) }));
      this.state={
        exampleItems: exampleItems,
            pageOfItems: [],

        property_price:[],
        //choose_image:[],
        property_area:[],


    }
    this.onChangePage = this.onChangePage.bind(this);
    }
    componentDidMount(){
      var self=this;
      axios.post('http://localhost:4000/api/propertyData',{})
        .then(function(response){
          let data = response.data;
          let getprice =[];
          //let getimg=[];
          let getarea=[];
          data.forEach((data)=>{
            getprice.push(data.property_price);
            //getimg.push(data.choose_image);
             getarea.push(data.property_area);

          });
          self.setState({
            property_price:getprice,
            //choose_image:getimg,
            property_area:getarea

          })
              
        })
    }

     onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    handlealert=(event)=> {
  event.preventDefault();
     //var self=this;
  alert("Firstly login then show detail");
}
    

    handlePageChange = (pageNumber) => {
    this.setState({activePage:pageNumber});
    
  }
  render() {
    /*console.log(this.state.property_price);
    //console.log(this.state.choose_image);
    console.log(this.state.property_area);
    let x=[];
    //let y=[];
    let m=[];
  
    for(let i=0; i<6; i++)
    {
     x[i]= this.state.property_price[i];
      //y[i]= this.state.choose_image[i];
      m[i]=this.state.property_area[i];
    } */
    let price = this.state.property_price.map((Price, index) => {
        return (<span>{Price}</span> );
    });
    let area =this.state.property_area.map((Area, index1) => {
        return (<span>{Area}</span> );
    });
   

    

      return (
      
        <div className="container">
          <div className="clearfix" > 
            <div className="wizard-container"> 
              <div className="wizard-c" id="wizardProperty">
                <div className="boximage" >
          
                  <form>  
                            <div className="row">
                              <div className="col-md-12">
                                <div className="heding">
                                 <h2>Property</h2>
                                
                                </div>
                              </div>
                            </div>
                            
                
                 <div className="container">
                    <div className="row">

               {this.state.pageOfItems.map(item =>
                    <span key={item.id}>
                      <div id="kl" className="col-md-4[item.name]">
                        <div className="img01">
                              <Link to="#"><img src={img1} className="img-responsive" id="img001" alt="img" onClick={this.handlealert}/></Link>
                                <h4>Super Nice Villa</h4>
                                <span className="pull-left"><b>Rs.{price[item.name]}</b></span>
                                <span className="pull-right"><b> Area :</b> <b>{area[item.name]}m</b>
                                </span>
                                <div className="property-icon">
                                                <img src={bed} alt="img"/>(5)|
                                                <img src={shawer} alt="img"/>(2)|
                                                <img src={cars} alt="img"/>(1)  
                                </div>
                        </div>  
                      </div>
                    </span>
                      )}
                    </div>
                  </div>
                  </form>
                      <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />     
                  </div>
                </div>
              </div>
            </div>
          </div>
    

          );
          }
}
export default Fboximages1;
