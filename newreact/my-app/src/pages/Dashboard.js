import React, { Component } from 'react';
import Header1 from '../component/Header.js';
import Dashboard1 from '../component/Dashboard.js';
import Dash1 from '../component/Dash.js';
import Footerarea from "../component/Footerarea.js";



class Dashboard extends Component {
	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
			 	<Header1 {...this.props}/>
			 	<Dash1{...this.props}/>
				<Dashboard1 {...this.props}/>
				<Footerarea {...this.props}/>
			</div>
			);
	}
}

export default Dashboard
