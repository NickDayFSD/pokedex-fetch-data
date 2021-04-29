import { Component } from 'react';
import './PokemonSearch.scss';

export default class PokemonSearch extends Component {

  render() {
    return (
      <form className="PokemonSearch">
        <input
          name='nameFilter'
        />

        <select>
          <option value=''>Filter 1</option>
          <option value='type'>Filter 2</option>
          <option value='evolution'>Filter 3</option>
        </select>

        <button>Search</button>
      </form>
    );
  }

}