import { Component } from 'react';
import './PokemonSearch.scss';

export default class PokemonSearch extends Component {
  state = {
    search: '',
    sortField: ''
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSortChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {
    const { search, sortField } = this.state;

    return (
      <form className="PokemonSearch" onSubmit={this.handleSubmit}>
        <input
          name='searchFilter'
          value={search}
          onChange={this.handleSearchChange}
        />

        <select name='sortField' value={sortField} onChange={this.handleSortChange}>
          <option value=''>Type Something</option>
          <option value='pokemon'>Name</option>
          <option value='type'>Type</option>
        </select>

        <button>Search</button>
      </form>
    );
  }

}