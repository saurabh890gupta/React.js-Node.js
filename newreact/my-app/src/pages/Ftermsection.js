import React, { Component } from 'react';
import Header2 from '../component/Fheader.js';
import Terms1 from '../component/Terms.js';
import Termsheadimg1 from '../component/Termsheadimg.js';
import Footerarea2 from "../component/Footerarea1.js";



class Ftermsection1 extends Component {
	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
			 	<Header2 {...this.props}/>
			 	<Termsheadimg1 {...this.props}/>
				<Terms1 {...this.props}/>
				<Footerarea2 {...this.props}/>
			</div>
			);
	}
}

export default Ftermsection1
