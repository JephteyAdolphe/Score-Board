import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
        <Main />
      </div>
    );
  }
}

export default App;
