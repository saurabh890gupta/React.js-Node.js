import React, { Component } from 'react';
import Header2 from '../component/Fheader.js';
import Ragistration from '../component/Ragistration.js';
import Footerarea from "../component/Footerarea.js";



class Login extends Component {
  	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
			<Header2 {...this.props}/>
			<Ragistration {...this.props}/>
			<Footerarea {...this.props}/>
			</div>
			);
	}
}

export default Login

