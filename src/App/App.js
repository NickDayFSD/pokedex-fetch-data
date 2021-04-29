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
    pokemon: [],
    permPokeList: []
  }

  async componentDidMount() {
    const response = await request.get(POKEMON_API_URL);
    this.setState({ pokemon: response.body.results, permPokeList: response.body.results });
  }

  handleSearch = ({ search, sortField }) => {
    const nameRegex = new RegExp(search, 'i');
    const { permPokeList } = this.state;

    const searchedData = permPokeList
      .filter(pokemon => {
        return !search || pokemon.pokemon.match(nameRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ pokemon: searchedData });
  }

  render() {
    const { pokemon } = this.state;

    return (
      <div className="App">

        <Header />

        <PokemonSearch onSearch={this.handleSearch} />

        <main>
          <PokemonList pokemon={pokemon} />
        </main>

        <Footer />
      </div>
    );
  }

}

export default App;
