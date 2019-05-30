import React, { Component } from 'react';
import Header2 from '../component/Fheader.js';
import Contact1 from '../component/Contact.js';
import Footerarea2 from "../component/Footerarea1.js";



class Contact3 extends Component {
	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
			 	<Header2 {...this.props}/>
				<Contact1 {...this.props}/>
				<Footerarea2 {...this.props}/>
			</div>
			);
	}
}

export default Contact3
