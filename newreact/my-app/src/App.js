import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import Home1 from './pages/Home2.js';
import Login from './pages/Login.js';
import Contact2 from './pages/Contact.js';
import Contact3 from './pages/Fcontact.js';
import Fpropertyboximg1 from './pages/Fpropertyboximg.js';
import Property1 from './pages/Property.js';
import Sell from './pages/Sell.js';
import Termspage from './pages/Termsection.js';
import Faqpage from './pages/Faqsection.js';
import Ffaqpage from './pages/Ffaqsection1.js';
import Ftermspage from './pages/Ftermsection.js';
import Adminlgn from './pages/Adminlgn.js';


class App extends Component {
  render() {
    return (
    
    <div>
    <Home1 />
    <Home />
    <Login />
    <Contact2 />
    <Contact3 />
    <Property1 />
    <Fpropertyboximg1 />
    <Sell />
    <Termspage />
    <Ffaqpage/>
    <Ftermspage/>
    <Adminlgn />
    </div>
    
    );
  }
}

export default App;
