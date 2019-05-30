import React, {Component} from 'react';
import './Footerarea.css';
import logo1 from '../images/footer-logo.png';
import { Link } from 'react-router-dom';

class Footerarea2 extends Component {
  constructor(props){
      super(props);
      this.state={

    }
    }
  render() {
      return (
        <div className="footer-area">
          <div className=" footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-4 wow fadeInRight animated">
                  <div className="single-footer">
                    <h4>About us </h4>
                      <div className="footer-title-line">
                      </div>
                      <img src={ logo1 } alt="img" className="wow pulse" data-wow-delay="1s" />
                      <p>Lorem ipsum dolor cum necessitatibus su quisquam molestias. Vel unde, blanditiis.</p>
                      <ul className="footer-adress">
                      <li><i className="fa fa-map-marker"> </i> 9089 your adress her</li>
                      <li><i className="fa fa-envelope"> </i> email@yourcompany.com</li>
                      <li><i className="fa fa-phone"> </i> +1 908 967 5906</li>
                      </ul>
                  </div>
                </div>
                
                <div className="col-md-4 col-sm-4 wow fadeInRight animated">
                  <div className="single-footer">
                    <h4>Quick links </h4>
                    <div className="footer-title-line">
                    </div>
                    <ul className="footer-menu">
                      <li><Link to="/Fpropertyboximg">Properties</Link>  </li> 
                      <li><Link to="/Fcontact">Contact us</Link></li> 
                      <li><Link to="/Ffaqsection1">FAQ</Link></li> 
                      <li><Link to="/Ftermsection">Terms </Link>  </li> 
                    </ul>
                  </div>
                </div>
                       
                <div className="col-md-4 col-sm-4 wow fadeInRight animated">
                  <div className="single-footer news-letter">
                    <h4>Stay in touch</h4>
                    <div className="footer-title-line">
                    </div>
                    <p>Lorem ipsum dolor sit amet, nulla  suscipit similique quisquam molestias. Vel unde, blanditiis.</p>
                    <form>
                    <div className="input-group">
                      <input type="text" className="form-control"  placeholder="E-mail ... " />
                      <span className="input-group-btn">
                         <button className="btn search-btn" type="submit"><i className="fa fa-search"></i></button>
                      </span>
                    </div>
                    </form> 
                    <div className="social pull-right"> 
                      <ul>
                        <li><Link className="wow fadeInUp animated" to="https://www.twitter.com"><i className="fa fa-twitter"></i></Link></li>
                        <li><Link className="wow fadeInUp animated" to="https://www.facebook.com" data-wow-delay="0.2s"><i className="fa fa-facebook"></i></Link></li>
                        <li><Link className="wow fadeInUp animated" to="https://www.plus.google.com" data-wow-delay="0.3s"><i className="fa fa-google-plus"></i></Link></li>
                        <li><Link className="wow fadeInUp animated" to="https://www.instagram.com" data-wow-delay="0.4s"><i className="fa fa-instagram"></i></Link></li>
                      </ul> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
export default Footerarea2;