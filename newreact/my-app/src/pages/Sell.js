import React, { Component } from 'react';
import Header1 from '../component/Header.js';
import Submitproperty from '../component/Submitproperty.js';
import Submitpropertyimg from '../component/Submitpropertyimg.js';

import Footerarea from "../component/Footerarea.js";

class Sell extends Component {
	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
			<Header1 {...this.props}/>
			<Submitpropertyimg {...this.props}/>
			<Submitproperty {...this.props}/>
			<Footerarea {...this.props}/>
			</div>
			);
	}
}
export default Sell
