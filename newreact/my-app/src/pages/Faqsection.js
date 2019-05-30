import React, { Component } from 'react';
import Header1 from '../component/Header.js';
import Terms1 from '../component/Terms.js';
import Faqheadimg1 from '../component/Faqheadimg.js';
import Footerarea from "../component/Footerarea.js";



class Faqsection1 extends Component {
	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
			 	<Header1 {...this.props}/>
			 	<Faqheadimg1 {...this.props}/>
				<Terms1 {...this.props}/>
				<Footerarea {...this.props}/>
			</div>
			);
	}
}

export default Faqsection1
