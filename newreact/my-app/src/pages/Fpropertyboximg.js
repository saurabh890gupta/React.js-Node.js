import React, { Component } from 'react';

import Header2 from '../component/Fheader.js';
import Footerarea2 from "../component/Footerarea1.js";
import Fboximages from "../component/Fboximages.js";




class Fpropertyboximg1 extends Component {
	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
			<Header2 {...this.props} />
			
			<Fboximages {...this.props} />
			<Footerarea2 {...this.props}/>
			</div>
			);
	}
}
export default Fpropertyboximg1 




