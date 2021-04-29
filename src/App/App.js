import { Component } from 'react';
import './App.scss';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from '../Pokemon/PokemonList';
import PokemonSearch from '../Pokemon/PokemonSearch';
import request from 'superagent';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

        <PokemonSearch />

        <main>
          <PokemonList />
        </main>

        <Footer />
      </div>
    );
  }

}

export default App;
