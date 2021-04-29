import { Component } from 'react';
import './App.scss';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from '../Pokemon/PokemonList';
import PokemonSearch from '../Pokemon/PokemonSearch';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

        <main>
          <PokemonList />
        </main>

        <Footer />
      </div>
    );
  }

}

export default App;
