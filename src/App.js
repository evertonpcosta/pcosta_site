import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Contato from './Contato';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="contato" exact path="/contato" component={Contato} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
