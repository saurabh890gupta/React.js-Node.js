import React, { Component } from 'react';
import Header1 from '../component/Header.js';
import Dashboardsign from '../component/Dashboardsign.js';
import Dash1 from '../component/Dash.js';
import Footerarea from "../component/Footerarea.js";



class Dashboardsign1 extends Component {
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
				<Dashboardsign {...this.props}/>
				<Footerarea {...this.props}/>
			</div>
			);
	}
}

export default Dashboardsign1
