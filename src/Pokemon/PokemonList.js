import { Component } from 'react';
import PokemonItem from './PokemonItem';
import './PokemonList.scss';

export default class PokemonList extends Component {

  render() {
    const { pokemon } = this.props;

    console.log(pokemon);

    return (
      <ul className="PokemonList">
        {pokemon.map(pokemon => (
          <PokemonItem key={pokemon._id} pokemon={pokemon} />
        ))}
      </ul>
    );
  }
}