import React, { Component } from 'react';
import Header2 from '../component/Fheader.js';
import Terms1 from '../component/Terms.js';
import Faqheadimg1 from '../component/Faqheadimg.js';
import Footerarea2 from "../component/Footerarea1.js";



class Ffaqsection2 extends Component {
	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
			 	<Header2 {...this.props}/>
			 	<Faqheadimg1 {...this.props}/>
				<Terms1 {...this.props}/>
				<Footerarea2 {...this.props}/>
			</div>
			);
	}
}

export default Ffaqsection2
