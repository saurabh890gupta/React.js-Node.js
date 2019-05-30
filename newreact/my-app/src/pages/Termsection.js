import React, { Component } from 'react';
import Header1 from '../component/Header.js';
import Terms1 from '../component/Terms.js';
import Termsheadimg1 from '../component/Termsheadimg.js';
import Footerarea from "../component/Footerarea.js";



class Termsection1 extends Component {
	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
			 	<Header1 {...this.props}/>
			 	<Termsheadimg1 {...this.props}/>
				<Terms1 {...this.props}/>
				<Footerarea {...this.props}/>
			</div>
			);
	}
}

export default Termsection1
