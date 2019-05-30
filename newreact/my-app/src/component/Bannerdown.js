import React, { Component } from 'react';
import './Bannerdown.css';

class Bannerdown extends Component {
  constructor(props){
      super(props);
      this.state={

    }
    }
  render() {
      return (
          <div className="banner-down">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="banner_section2">
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
export default Bannerdown;