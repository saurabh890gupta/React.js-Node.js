import React, { Component } from 'react';
import Header2 from '../component/Fheader.js';
import Banner from '../component/Banner.js';
import Footerarea2 from "../component/Footerarea1.js";




class Home1 extends Component {
	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
			<Header2 {...this.props} />
			<Banner {...this.props}/>
			<Footerarea2 {...this.props}/>
			</div>
			);
	}
}
export default Home1




