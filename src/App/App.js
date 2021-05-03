import { Component, React } from 'react';
import request from 'superagent';

import Header from './Header';
import Footer from './Footer';

import PokemonList from '../Pokemon/PokemonList';
import PokemonSearch from './PokemonSearch';

import './App.scss';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokemon: []
  }

  async componentDidMount() {
    this.handleSearch();
  }

  handleSearch = async (searchOptions) => {
    const response = await request.get(POKEMON_API_URL)
      .query(searchOptions);

    this.setState({ pokemon: response.body.results });
  }

  render() {
    const { pokemon } = this.state;

    return (
      <div className="App">

        <Header />

        <PokemonSearch onSearch={this.handleSearch} />

        <main>
          <PokemonList
            pokemon={pokemon}
            onPaging={this.handlePaging}
          />
        </main>

        <Footer />
      </div>
    );
  }

}

export default App;
