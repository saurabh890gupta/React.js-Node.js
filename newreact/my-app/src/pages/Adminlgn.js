import React, { Component } from 'react';
import Header2 from '../component/Fheader.js';
import Adminlgn1 from '../component/Adminlgn.js';
import Footerarea from "../component/Footerarea.js";



class AdminLgn extends Component {
  	constructor(props){
    	super(props);
    	this.state={

    }
    }
	render(){
		return(
			<div>
			<Header2 {...this.props}/>
			< Adminlgn1 {...this.props}/>
			<Footerarea {...this.props}/>
			</div>
			);
	}
}

export default AdminLgn

