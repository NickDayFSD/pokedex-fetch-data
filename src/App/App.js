import { Component } from 'react';
import './App.scss';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

        My React App...

        <Footer />
      </div>
    );
  }

}

export default App;
