import React, { Component } from 'react';
import './Properheader.css';
import axios from 'axios';
import pimg from '../images/property-1/property2.jpg';
import pro from '../images/client-face1.png';
import { Link } from 'react-router-dom';
//import smallimg1 from '../images/demo/small-property-1.jpg';
import smallimg2 from '../images/demo/small-property-2.jpg';
//import smallimg3 from '../images/demo/small-property-3.jpg';
import vdoimg from '../images/property-video.jpg';
import Pagination from './Properheaderpagination.js';
import Pagination1 from './Properheaderpaginationside.js';




class Properheader extends Component {
  constructor(props){
      super(props);
       var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: (i+1) }));
        var exampleItem = [...Array(150).keys()].map(i => ({ id: (i+1), hal: (i+1) }));
      this.state={
         exampleItems: exampleItems,
          exampleItem: exampleItem,
            pageOfItems: [],
            pageOfItem:[],


        property_price:[],
        choose_image:[],
        property_name:[],
        telephone:[],
        property_description:[],
        property_state:[],
        property_city:[],
        property_status:[],
        property_perioud:[],
        min_bed:[],
        property_area:[],
        swimmingpool:[],
        stories:[],
        emergencyexit:[],
        fireplace:[],
        laundryroom:[],
        jogpath:[],
        ceilings:[],
        dualsinks:[],
        
      }
      this.onChangePage = this.onChangePage.bind(this);
      this.onClickPage = this.onClickPage.bind(this);
    }
    componentDidMount(){
      var self=this;
      axios.post('http://localhost:4000/api/propertyData',{})
        .then(function(response){
          let data = response.data;
          let getprice =[];
          let getdescription=[];
          let getimg=[];
          let gettelephone=[];
          let getswimmingpool=[];
          let getstories=[];
          let getemergencyexit=[];
          let getfireplace=[];
          let getlaundryroom=[];
          let getjogpath=[];
          let getceilings=[];
          let getdualsinks=[];
          let getpropertyarea=[];
          let getpropertystatus=[];


          data.forEach((data)=>{
            getprice.push(data.property_price);
             getimg.push(data.choose_image);
             getdescription.push(data.property_description);
             gettelephone.push(data.telephone);
             getswimmingpool.push(data.swimmingpool);
             getstories.push(data.stories);
             getemergencyexit.push(data.emergencyexit);
             getfireplace.push(data.fireplace);
             getlaundryroom.push(data.laundryroom);
             getjogpath.push(data.jogpath);
             getceilings.push(data.ceilings);
             getdualsinks.push(data.dualsinks);
             getpropertyarea.push(data.property_area);
             getpropertystatus.push(data.property_status);



          });
          self.setState({
            property_price:getprice,
            choose_image:getimg,
            property_description:getdescription,
            telephone:gettelephone,
            swimmingpool:getswimmingpool,
            stories:getstories,
            emergencyexit:getemergencyexit,
            fireplace:getfireplace,
            laundryroom:getlaundryroom,
            jogpath:getjogpath,
            ceilings:getceilings,
            dualsinks:getdualsinks,
            property_area:getpropertyarea,
            property_status:getpropertystatus,


          })
              
        })
    }

handlebuy=(event)=> {
  event.preventDefault();
  var self=this;
  alert("Thanks for buy this property");
   self.props.history.push('/Contact');
}

 onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

onClickPage(pageOfItem) {
        // update state with new page of items
        this.setState({ pageOfItem: pageOfItem });
    }
  render() {
/*
              console.log(this.state.property_price);
              console.log(this.state.choose_image);
              console.log(this.state.property_description);
              console.log(this.state.telephone);
              console.log(this.state.swimmingpool);
              console.log(this.state.stories);
              console.log(this.state.emergencyexit);
              console.log(this.state.fireplace);
              console.log(this.state.laundryroom);
              console.log(this.state.jogpath);
              console.log(this.state.ceilings);
              console.log(this.state.dualsinks);
              console.log(this.state.property_area);
              console.log(this.state.property_status);
    let x=[];
    let y=[];
    let z=[];
    let a=[];
    let b=[];
    let c=[];
    let d=[];
    let e=[];
    let f=[];
    let g=[];
    let h=[];
    let j=[];
    let l=[];
    let m=[];

    for(let i=0; i<6; i++)
    {
     x[i]= this.state.property_price[i];
      y[i]= this.state.choose_image[i];
      z[i]= this.state.property_description[i];
      a[i]= this.state.telephone[i];
      b[i]= this.state.swimmingpool[i];
      c[i]= this.state.stories[i];
      d[i]= this.state.emergencyexit[i];
      e[i]= this.state.fireplace[i];
      f[i]= this.state.laundryroom[i];
      g[i]= this.state.jogpath[i];
      h[i]= this.state.ceilings[i];
      j[i]= this.state.dualsinks[i];
      l[i]= this.state.property_area[i];
      m[i]= this.state.property_status[i];

    } */
    let price = this.state.property_price.map((Price, index) => {
        return (<span>{Price}</span> );
    });
   
let description = this.state.property_description.map((Description, index) => {
        return (<span>{Description}</span> );
    });
let telephone = this.state.telephone.map((Telephone, index) => {
        return (<span>{Telephone}</span> );
    });
let swimmingpool = this.state.swimmingpool.map((Swimmingpool, index) => {
        return (<span>{Swimmingpool}</span> );
    });
let stories = this.state.stories.map((Stories, index) => {
        return (<span>{Stories}</span> );
    });
let emergencyexit = this.state.emergencyexit.map((Emergencyexit, index) => {
        return (<span>{Emergencyexit}</span> );
    });
let fireplace = this.state.fireplace.map((Fireplace, index) => {
        return (<span>{Fireplace}</span> );
    });
    let laundryroom = this.state.laundryroom.map((Laundryroom, index) => {
        return (<span>{Laundryroom}</span> );
    });
    let jogpath = this.state.jogpath.map((Jogpath, index) => {
        return (<span>{Jogpath}</span> );
    });
    let ceilings = this.state.ceilings.map((Ceilings, index) => {
        return (<span>{Ceilings}</span> );
    });
    let dualsinks = this.state.dualsinks.map((Dualsinks, index) => {
        return (<span>{Dualsinks}</span> );
    });
    let area = this.state.property_area.map((Area, index) => {
        return (<span>{Area}</span> );
    });
    let status = this.state.property_status.map((Status, index) => {
        return (<span>{Status}</span> );
    });
    

      return (
              <div className="property-head">
                <div className="container">
                 <tbody>
                <tr>
                <td><span>{this.state.pageOfItems.map(item =>
                    <div key={item.id}>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="imges">
                       <img src={pimg} alt="img" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="clear">
                        <div className="col-md-4">
                          <img src={pro} className="img-circle" alt="img" />
                        </div>
                      </div>
                      <div className="col-xs-8 col-sm-8 ">
                        <h3 className="dealer-name">
                          <Link to="">Nathan James</Link>
                          <span>Real Estate Agent</span>        
                        </h3>
                        <div className="dealer-social-media">
                              <Link className="twitter" target="_blank" to="">
                              <i className="fa fa-twitter"></i>
                              </Link>
                              <Link className="facebook" target="_blank" to="">
                              <i className="fa fa-facebook"></i>
                              </Link>
                      
                              <Link className="instagram" target="_blank" to="">
                              <i className="fa fa-instagram"></i>
                              </Link>       
                        </div>
                          
                      </div>

                          <div className="clear">
                            <ul className="dealer-contacts">                                       
                              <li><i className="pe-7s-map-marker strong"> </i> 9089 your adress her</li>
                              <li><i className="pe-7s-mail strong"> </i> email@yourcompany.com</li>
                              <li><i className="pe-7s-call strong"> </i> {telephone[item.name]}</li>
                            </ul>
                            <p>Duis mollis  blandit tempus porttitor curabiturDuis mollis  blandit tempus porttitor curabitur , est non…</p>
                          </div>


                              <div className="panel panel-default sidebar-menu similar-property-wdg wow fadeInRight animated">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Similar Properties</h3>
                                </div>
                             
                                <div className="panel-body recent-property-widget">
                                  <div className="col-md-12">
                                    <div className="propertys">
                                     <tbody>
                <tr>
                <td><span>{this.state.pageOfItem.map(item =>
                    <div key={item.id}>
                                      <ul>
                                        <li>
                                       

                                          <div className="col-md-12">
                                            <div className="col-md-4">
                                              <Link to="/Property"><img src={smallimg2} alt="img" /></Link>
                                            </div>
                                            <div className="col-md-8">
                                              <h6> <Link to="/Property">Super nice villa </Link></h6>
                                              <span className="property-price"><b>Rs.{price[item.hal]}</b></span>
                                            </div>
                                          </div>
                                        </li>
                                
                                      
                     

                                        
                                      </ul>
                                      </div>
                                       )}
                      </span></td>
                      </tr>
                      </tbody>

                                    </div>
                                    <Pagination1 item={this.state.exampleItem} onClickPage={this.onClickPage} />
                                  </div>
                                </div>
                              </div>
                            </div>

                          <div className="col-md-8">
                            <div className="single-property-wrapper">
                              <div className="single-property-header">                                          
                                <h1 className="property-title pull-left">Villa in Coral Gables</h1>

                                <span className="property-price pull-right">Rs.{price[item.name]}</span>
                              </div>

                              <div className="property-meta entry-meta clearfix ">  
                                <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                                    <span className="property-info-icon icon-tag">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                        <path className="meta-icon"  fill="#FFA500" d="M47.199 24.176l-23.552-23.392c-.504-.502-1.174-.778-1.897-.778l-19.087.09c-.236.003-.469.038-.696.1l-.251.1-.166.069c-.319.152-.564.321-.766.529-.497.502-.781 1.196-.778 1.907l.092 19.124c.003.711.283 1.385.795 1.901l23.549 23.389c.221.218.482.393.779.523l.224.092c.26.092.519.145.78.155l.121.009h.012c.239-.003.476-.037.693-.098l.195-.076.2-.084c.315-.145.573-.319.791-.539l18.976-19.214c.507-.511.785-1.188.781-1.908-.003-.72-.287-1.394-.795-1.899zm-35.198-9.17c-1.657 0-3-1.345-3-3 0-1.657 1.343-3 3-3 1.656 0 2.999 1.343 2.999 3 0 1.656-1.343 3-2.999 3z"></path>
                                        </svg>
                                    </span>
                                    <span className="property-info-entry">
                                        <span className="property-info-label">Status</span>
                                        <span className="property-info-value">For{status[item.name]}</span>
                                    </span>
                                </div>

                                <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                                    <span className="property-info icon-area">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                        <path className="meta-icon" fill="#FFA500" d="M46 16v-12c0-1.104-.896-2.001-2-2.001h-12c0-1.103-.896-1.999-2.002-1.999h-11.997c-1.105 0-2.001.896-2.001 1.999h-12c-1.104 0-2 .897-2 2.001v12c-1.104 0-2 .896-2 2v11.999c0 1.104.896 2 2 2v12.001c0 1.104.896 2 2 2h12c0 1.104.896 2 2.001 2h11.997c1.106 0 2.002-.896 2.002-2h12c1.104 0 2-.896 2-2v-12.001c1.104 0 2-.896 2-2v-11.999c0-1.104-.896-2-2-2zm-4.002 23.998c0 1.105-.895 2.002-2 2.002h-31.998c-1.105 0-2-.896-2-2.002v-31.999c0-1.104.895-1.999 2-1.999h31.998c1.105 0 2 .895 2 1.999v31.999zm-5.623-28.908c-.123-.051-.256-.078-.387-.078h-11.39c-.563 0-1.019.453-1.019 1.016 0 .562.456 1.017 1.019 1.017h8.935l-20.5 20.473v-8.926c0-.562-.455-1.017-1.018-1.017-.564 0-1.02.455-1.02 1.017v11.381c0 .562.455 1.016 1.02 1.016h11.39c.562 0 1.017-.454 1.017-1.016 0-.563-.455-1.019-1.017-1.019h-8.933l20.499-20.471v8.924c0 .563.452 1.018 1.018 1.018.561 0 1.016-.455 1.016-1.018v-11.379c0-.132-.025-.264-.076-.387-.107-.249-.304-.448-.554-.551z"></path>
                                        </svg>
                                    </span>
                                    <span className="property-info-entry">
                                        <span className="property-info-label">Area</span>
                                        <span className="property-info-value">{area[item.name]}<b className="property-info-unit">Sq Ft</b></span>
                                    </span>
                                </div>

                                <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                                    <span className="property-info-icon icon-bed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                        <path className="meta-icon" fill="#FFA500" d="M21 48.001h-19c-1.104 0-2-.896-2-2v-31c0-1.104.896-2 2-2h19c1.106 0 2 .896 2 2v31c0 1.104-.895 2-2 2zm0-37.001h-19c-1.104 0-2-.895-2-1.999v-7.001c0-1.104.896-2 2-2h19c1.106 0 2 .896 2 2v7.001c0 1.104-.895 1.999-2 1.999zm25 37.001h-19c-1.104 0-2-.896-2-2v-31c0-1.104.896-2 2-2h19c1.104 0 2 .896 2 2v31c0 1.104-.896 2-2 2zm0-37.001h-19c-1.104 0-2-.895-2-1.999v-7.001c0-1.104.896-2 2-2h19c1.104 0 2 .896 2 2v7.001c0 1.104-.896 1.999-2 1.999z"></path>
                                        </svg>
                                    </span>
                                    <span className="property-info-entry">
                                        <span className="property-info-label">Bedrooms</span>
                                        <span className="property-info-value">3</span>
                                    </span>
                                </div>

                                <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                                    <span className="property-info-icon icon-bath">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                        <path className="meta-icon" fill="#FFA500" d="M37.003 48.016h-4v-3.002h-18v3.002h-4.001v-3.699c-4.66-1.65-8.002-6.083-8.002-11.305v-4.003h-3v-3h48.006v3h-3.001v4.003c0 5.223-3.343 9.655-8.002 11.305v3.699zm-30.002-24.008h-4.001v-17.005s0-7.003 8.001-7.003h1.004c.236 0 7.995.061 7.995 8.003l5.001 4h-14l5-4-.001.01.001-.009s.938-4.001-3.999-4.001h-1s-4 0-4 3v17.005000000000003h-.001z"></path>
                                        </svg>
                                    </span>
                                    <span className="property-info-entry">
                                        <span className="property-info-label">Bathrooms</span>
                                        <span className="property-info-value">3.5</span>
                                    </span>
                                </div>

                                <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                                    <span className="property-info-icon icon-garage">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                        <path className="meta-icon" fill="#FFA500" d="M44 0h-40c-2.21 0-4 1.791-4 4v44h6v-40c0-1.106.895-2 2-2h31.999c1.106 0 2.001.895 2.001 2v40h6v-44c0-2.209-1.792-4-4-4zm-36 8.001h31.999v2.999h-31.999zm0 18h6v5.999h-2c-1.104 0-2 .896-2 2.001v6.001c0 1.103.896 1.998 2 1.998h2v2.001c0 1.104.896 2 2 2s2-.896 2-2v-2.001h11.999v2.001c0 1.104.896 2 2.001 2 1.104 0 2-.896 2-2v-2.001h2c1.104 0 2-.895 2-1.998v-6.001c0-1.105-.896-2.001-2-2.001h-2v-5.999h5.999v-3h-31.999v3zm8 12.999c-1.104 0-2-.895-2-1.999s.896-2 2-2 2 .896 2 2-.896 1.999-2 1.999zm10.5 2h-5c-.276 0-.5-.225-.5-.5 0-.273.224-.498.5-.498h5c.275 0 .5.225.5.498 0 .275-.225.5-.5.5zm1-2h-7c-.275 0-.5-.225-.5-.5s.226-.499.5-.499h7c.275 0 .5.224.5.499s-.225.5-.5.5zm-6.5-2.499c0-.276.224-.5.5-.5h5c.275 0 .5.224.5.5s-.225.5-.5.5h-5c-.277 0-.5-.224-.5-.5zm11 2.499c-1.104 0-2.001-.895-2.001-1.999s.896-2 2.001-2c1.104 0 2 .896 2 2s-.896 1.999-2 1.999zm0-12.999v5.999h-16v-5.999h16zm-24-13.001h31.999v3h-31.999zm0 5h31.999v3h-31.999z"></path>
                                        </svg>
                                    </span>
                                    <span className="property-info-entry">
                                        <span className="property-info-label">Garages</span>
                                        <span className="property-info-value">2</span>
                                    </span>
                                </div>
                            </div>
                          <span><Link  id="buy" to="#" onClick={this.handlebuy}>Buy</Link></span>

                            <div className="section">
                                <h4 className="s-property-title">Description</h4>
                                <div className="s-property-content">
                                    <p> {description[item.name]}</p>
                                </div>
                            </div>
                              

                            <div className="section additional-details">

                                <h4 className="s-property-title">Additional Details</h4>

                                <ul className="additional-details-list clearfix">
                                    <li>
                                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Waterfront</span>
                                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">Yes</span>
                                    </li>

                                    <li>
                                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Built In</span>
                                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">2003</span>
                                    </li>
                                    <li>
                                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Parking</span>
                                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">2 Or More Spaces,Covered Parking,Valet Parking</span>
                                    </li>

                                    <li>
                                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Waterfront</span>
                                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">Yes</span>
                                    </li>

                                    <li>
                                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">View</span>
                                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">Intracoastal View,Direct ew</span>
                                    </li>

                                    <li>
                                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Waterfront Description:</span>
                                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">Intracoastal Front,Ocean Access</span>
                                    </li> 

                                </ul>
                            </div>  
                            

                            <div className="section property-features">      

                                <h4 className="s-property-title">Features</h4>                            
                                <ul>
                                    <li><Link to="properties.html">{swimmingpool[item.name]}</Link></li>   
                                    <li><Link to="properties.html">{ceilings[item.name]}</Link></li>
                                    <li><Link to="properties.html">{laundryroom[item.name]}</Link></li>
                                    <li><Link to="properties.html">{jogpath[item.name]}</Link></li>
                                    <li><Link to="properties.html">{dualsinks[item.name]}</Link></li>
                                    <li><Link to="properties.html">{fireplace[item.name]}</Link></li>
                                    <li><Link to="properties.html">{emergencyexit[item.name]}</Link></li>
                                    <li><Link to="properties.html">{stories[item.name]}</Link></li>
                                </ul>

                            </div>
                            

                            <div className="section property-video"> 
                                <h4 className="s-property-title">Property Video</h4> 
                                <div className="video-thumb">
                                    <Link className="video-popup" to="yout" title="Virtual Tour">
                                        <img src={vdoimg} className="img-responsive wp-post-image" alt="Exterior"/>            
                                    </Link>
                                </div>
                            </div>
                          </div>


                          <div className="col-md-4">
                          </div>
                  </div>
                </div>
              </div>
                      )}
                      </span></td>
                      </tr>
                      </tbody>

                       <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />

              </div>
            </div>
              

        	
          );
          }
}
export default Properheader