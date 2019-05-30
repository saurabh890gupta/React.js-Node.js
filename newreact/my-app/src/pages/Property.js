import React, { Component } from 'react';
import Header1 from '../component/Header.js';
import Property1 from '../component/Property.js';
import Footerarea from "../component/Footerarea.js";
import Properheader from '../component/Properheader.js';


class Property2 extends Component {
	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
			<Header1 {...this.props}/>
			<Property1 {...this.props}/>
			<Properheader {...this.props}/>
			<Footerarea {...this.props}/>
			</div>
			);
	}
}
export default Property2
