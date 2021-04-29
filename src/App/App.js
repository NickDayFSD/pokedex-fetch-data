import { Component } from 'react';
import './App.scss';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from '../Pokemon/PokemonList';
import PokemonSearch from '../Pokemon/PokemonSearch';
import request from 'superagent';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokemon: []
  }

  async componentDidMount() {
    const response = await request.get(POKEMON_API_URL);
    this.setState({ pokemon: response.body.results });
  }

  render() {
    const { pokemon } = this.state;

    return (
      <div className="App">

        <Header />

        <PokemonSearch />

        <main>
          <PokemonList pokemon={pokemon} />
        </main>

        <Footer />
      </div>
    );
  }

}

export default App;
