import { Component } from 'react';
import PokemonItem from './PokemonItem';
import './PokemonList.scss';

export default class PokemonList extends Component {

  render() {

    return (
      <ul className="PokemonList">
        <PokemonItem />
      </ul>
    );
  }

}