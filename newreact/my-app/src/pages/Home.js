import React, { Component } from 'react';
import Header1 from '../component/Header.js';
import Banner from '../component/Banner.js';
import Footerarea from "../component/Footerarea.js";
import Boximages from "../component/Boximages.js";



class Home extends Component {
	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
				<Header1 {...this.props} />
				<Banner {...this.props}/>
				<Boximages {...this.props} />
				<Footerarea {...this.props}/>
			</div>
			);
	}
}
export default Home




