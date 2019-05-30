import React, { Component } from 'react';
import './Banner.css';
/*import BackgroundSlideshow from 'react-background-slideshow';
import image1 from '../images/slide1/slider-image-1.jpg'
import image2 from '../images/slide1/slider-image-2.jpg'
import image3 from '../images/slide1/slider-image-1.jpg'*/


class Banner extends Component {
  constructor(props){
      super(props);
      this.state={

    }
    }
   
  render() {
      return (
            
            <div className="banner">
            
              <div className="container">

                <div className="row">

                  <div className="col-md-12">

                    <div className="banner-section">
                     
                      <h1>property Searching Just Got So Easy</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt deleniti, ullam commodi sit ipsam laboriosam velit adipisci quibusdam aliquam teneturo!</p>
                         
                         <div className="search-form wow pulse" data-wow-delay="0.8s">
                            <form className="form-inline">
                              <button className="btn toggle-btn" type="button"><i className="fa fa-bars"></i></button>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Key word" />
                                </div>
                                <div className="form-group">                                   
                                    <select id="basic1" className="selectpicker show-tick form-control" data-live-search="true" data-live-search-style="begins" title="Select your city">
                                       <option>Choose City</option>
                                        <option>Noida</option>
                                        <option>Ghaziabad</option>
                                        <option>Greater Noida</option>
                                        <option>Delhi</option>
                                        <option>GuruGram</option>
                                    </select>
                                </div>
                                <div className="form-group">                                     
                                    <select id="basic2" className="selectpicker show-tick form-control">
                                        <option> -Status- </option>
                                        <option>Sell </option>
                                        <option>Buy</option>
                                        
                                    </select>
                                </div>
                                 <button className="btn search-btn" type="submit"><i className="fa fa-search"></i></button>
                                  <div className="search-toggle">
                                    <div className="search-row">  
                                      <div className="form-group mar-r-20">
                                          <label>Price range ($):</label>
                                          <input type="text" className="span2" value="" data-slider-min="0" 
                                                   data-slider-max="600" data-slider-step="5" 
                                                   data-slider-value="[0,450]" id="price-range"/ ><br />
                                            <b className="pull-left color">2000$</b> 
                                            <b className="pull-right color">100000$</b>
                                      </div>
                                       <div className="form-group mar-l-20">
                                            <label>Property geo (m2) :</label>
                                            <input type="text" className="span2" value="" data-slider-min="0" 
                                                   data-slider-max="600" data-slider-step="5" 
                                                   data-slider-value="[50,450]" id="property-geo" /><br />
                                            <b className="pull-left color">40m</b> 
                                            <b className="pull-right color">12000m</b>
                                        </div>
                                    </div>
                                  </div>

                            </form>
                          </div>

  
                    </div>
                  </div>  
                </div>
              </div>
            </div>  

           );
          }
}
export default Banner;