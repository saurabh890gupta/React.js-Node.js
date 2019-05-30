import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png';
import logo1 from './images/footer-logo.png';



class App extends Component {
  render() {
    return (




      <section>
     
                <Header />
              <Banner />
              <Ragistration />
              <Contact />
              
              <Boximages />
              <Footerarea/>
      </section>
      
    );
  }
}
class Header extends Component {
  render() {
      return (
          <header>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <img src={logo} class="img-responsive" id="logo" alt="img" />
                </div>
                <div className="col-md-6">
                  <div class="navbar">
                    <nav>
                      <ul>
                        <li className="dropup yamm-sw" data-wow-delay="0.1s"><a href="/" >Home</a></li>
                        <li><a href="/" >Property</a></li>
                        <li><a href="/" >Buy</a></li>
                        <li><a href="/" >Sell</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-md-3">
                  <div class="lgbtn">
                    <nav>
                      <ul>
                        <li><a href="/" id="loginInBtn">login</a></li> 
                        <li><a href="/" id="signInBtn">Submit</a></li>
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



class Banner extends Component {
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
                                    <select id="basic1" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your city">
                                       <option>New york, CA</option>
                                        <option>Paris</option>
                                        <option>Casablanca</option>
                                        <option>Tokyo</option>
                                        <option>Marraekch</option>
                                        <option>kyoto , shibua</option>
                                    </select>
                                </div>
                                <div className="form-group">                                     
                                    <select id="basic2" className="selectpicker show-tick form-control">
                                        <option> -Status- </option>
                                        <option>Rent </option>
                                        <option>Boy</option>
                                        <option>used</option>
                                    </select>
                                </div>
                                 <button className="btn search-btn" type="submit"><i className="fa fa-search"></i></button>
                                  <div className="search-toggle">
                                    <div className="search-row">  
                                      <div className="form-group mar-r-20">
                                          <label for="price-range">Price range ($):</label>
                                          <input type="text" className="span2" value="" data-slider-min="0" 
                                                   data-slider-max="600" data-slider-step="5" 
                                                   data-slider-value="[0,450]" id="price-range"/ ><br />
                                            <b className="pull-left color">2000$</b> 
                                            <b className="pull-right color">100000$</b>
                                      </div>
                                       <div className="form-group mar-l-20">
                                            <label for="property-geo">Property geo (m2) :</label>
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

class Bannerdown extends Component {
  render() {
      return (
          <div className="banner-down">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div class="banner_section2">
                    <h2 id="heading2">Top submitted property</h2>
                    <p>Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          );
          }
}

class Boximages extends Component {
  render() {
      return (
       <div className="boximage">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src="/" className="img-responsive" id="img1" alt="img" />  
              </div>
               <div className="col-md-4">
                <img src="/" className="img-responsive" id="img1" alt="img" />  
              </div>
              <div className="col-md-4">
                <img src="/" className="img-responsive" id="img1" alt="img" />  
              </div>
            </div>
          </div>
        </div>


          );
          }
}

class Footerarea extends Component {
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
                      <li><a href="/">Properties</a>  </li> 
                      <li><a href="/">Contact us</a></li> 
                      <li><a href="/">fqa</a></li> 
                      <li><a href="/">Terms </a>  </li> 
                    </ul>
                  </div>
                </div>
                       
                <div class="col-md-4 col-sm-4 wow fadeInRight animated">
                  <div className="single-footer news-letter">
                    <h4>Stay in touch</h4>
                    <div className="footer-title-line">
                    </div>
                    <p>Lorem ipsum dolor sit amet, nulla  suscipit similique quisquam molestias. Vel unde, blanditiis.</p>
                    <form>
                    <div className="input-group">
                      <input className="form-control" type="text" placeholder="E-mail ... " />
                      <span className="input-group-btn">
                        <button className="btn btn-primary subscribe" type="button"><i className="pe-7s-paper-plane pe-2x"></i></button>
                      </span>
                    </div>
                    </form> 
                    <div className="social pull-right"> 
                      <ul>
                        <li><a className="wow fadeInUp animated" href="https://twitter.com/kimarotec"><i className="fa fa-twitter"></i></a></li>
                        <li><a className="wow fadeInUp animated" href="https://www.facebook.com/kimarotec" data-wow-delay="0.2s"><i className="fa fa-facebook"></i></a></li>
                        <li><a className="wow fadeInUp animated" href="https://plus.google.com/kimarotec" data-wow-delay="0.3s"><i className="fa fa-google-plus"></i></a></li>
                        <li><a className="wow fadeInUp animated" href="https://instagram.com/kimarotec" data-wow-delay="0.4s"><i className="fa fa-instagram"></i></a></li>
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

class Contact extends Component {
  render() {
      return (
          
          <div className="content-area recent-property padding-top-40" >
            <div className="container">  
              <div className="row">
                <div className="col-md-8 col-md-offset-2"> 
                  <div className="contact-us" id="contact1">                        
                    <div className="row">
                      <div className="col-sm-4">
                        <h3><i className="fa fa-map-marker"></i> Address</h3>
                        <p>13/25 shibuia
                          <br/>Tokyo 
                          <br/>45Y 73J 
                          <br/>
                          <strong>Japan</strong>
                        </p>
                      </div>
                      <div className="col-sm-4">
                        <h3><i className="fa fa-phone"></i> Call center</h3>
                        <p className="text-muted">This number is toll free if calling from
                                        Great Britain otherwise we advise you to use the electronic
                                        form of communication.</p>
                        <p><strong>+33 555 444 333</strong></p>
                      </div>
                      <div className="col-sm-4">
                        <h3><i className="fa fa-envelope"></i> Electronic support</h3>
                        <p className="text-muted">Please feel free to write an email to us or to use our electronic ticketing system.</p>
                        <ul>
                          <li><strong><a href="/">info@company.com</a></strong>   </li>
                          <li><strong><a href="/">Ticketio</a></strong> - our ticketing support platform</li>
                        </ul>
                      </div>
                    </div>
                      
                      <div id="map">
                      </div>
                      
                      <h2>Contact form</h2>
                      <form>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="firstname">Firstname</label>
                              <input type="text" className="form-control" id="firstname" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="lastname">Lastname</label>
                              <input type="text" className="form-control" id="lastname" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="email">Email</label>
                              <input type="text" class="form-control" id="Email" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="subject">Subject</label>
                              <input type="text" className="form-control" id="subject" />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="message">Message</label>
                              <textarea id="message" className="form-control"></textarea>
                            </div>
                          </div>
                          <div className="col-sm-12 text-center">
                            <button type="submit" className="btn btn-primary"><i className="fa fa-envelope-o"></i> Send message</button>
                          </div>
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
export default App;
