import React, { Component } from 'react';
import Header1 from '../component/Header.js';
import Contact1 from '../component/Contact.js';
import Footerarea from "../component/Footerarea.js";



class Contact2 extends Component {
	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
			 	<Header1 {...this.props}/>
				<Contact1 {...this.props}/>
				<Footerarea {...this.props}/>
			</div>
			);
	}
}

export default Contact2
