import { Component } from 'react';
import './PokemonItem.scss';

export default class PokemonItem extends Component {

  render() {
    return (
      <div className="PokemonItem">
        <h2>Cute Pokemon!</h2>
        <img src='https://assets.pokemon.com/static2/_ui/img/account/pokemon-login.png' />
        <p>Look, they're so cute!</p>
      </div>
    );
  }

}