import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import { Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Home1 from './pages/Home2';
import Login from './pages/Login';
import Contact2 from './pages/Contact';
import Contact3 from './pages/Fcontact.js';
import Property from './pages/Property';
import Sell from './pages/Sell';
import Terms1 from './pages/Termsection.js';
import Faqheadimg1 from './pages/Faqsection.js';
import Fpropertyboximg1 from './pages/Fpropertyboximg.js';
import Ffaqpage from './pages/Ffaqsection1.js';
import Ftermspage from './pages/Ftermsection.js';
import Adminlgn from './pages/Adminlgn';
import Dashboard from './pages/Dashboard';
import Dashboardsign from './pages/Dashboardsign';

ReactDOM.render(
	(
		<BrowserRouter>
		<div>
			<Route exact path="/" component={Home1} />
			<Route exact path="/Home" component={Home} />
			<Route exact path="/Login" component={Login} />
			<Route exact path="/Contact" component={Contact2} />
			<Route exact path="/Fcontact" component={Contact3} />
			<Route exact path="/Property" component={Property} />
			<Route exact path="/Fpropertyboximg" component={Fpropertyboximg1} />
			<Route exact path="/Sell" component={Sell} />
			<Route exact path="/Termsection" component={Terms1} />
			<Route exact path="/Faqsection" component={Faqheadimg1} />
			<Route exact path="/Ffaqsection1" component={Ffaqpage} />
			<Route exact path="/Ftermsection" component={Ftermspage} />
			<Route exact path="/Adminlgn" component={Adminlgn } />
			<Route exact path="/Dashboard" component={Dashboard } />
			<Route exact path="/Dashboardsign" component={Dashboardsign } />
		</div>
		</BrowserRouter>
	)
	, document.getElementById('root'));
