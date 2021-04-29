import { Component } from 'react';
import './PokemonItem.scss';

export default class PokemonItem extends Component {

  render() {
    const { pokemon } = this.props;

    return (
      <div className="PokemonItem">
        <h2>{pokemon.pokemon}</h2>
        <p>{pokemon.type}</p>
        <img src={pokemon.url_image} alt={pokemon.pokebase} />
        <p>Look how cute!</p>
      </div>
    );
  }

}
// 'https://assets.pokemon.com/static2/_ui/img/account/pokemon-login.png'