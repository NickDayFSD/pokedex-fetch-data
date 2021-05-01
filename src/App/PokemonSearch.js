import { Component } from 'react';
import './PokemonSearch.scss';
import Paging from './Paging';


export default class PokemonSearch extends Component {
  state = {
    search: '',
    sortField: '',
    page: 1
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSearch } = this.props;

    this.setState(
      { page: 1 },
      () => onSearch(this.state)
    );
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handlePaging = change => {
    const { onSearch } = this.props;

    this.setState(
      { page: this.state.page + change },
      () => {
        onSearch(this.state);
      }
    );
  }

  handleSortChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  // componentDidUpdate(prevProp, prevState) {
  //   if (prevState !== this.state) {
  //     this.props.onSearch(this.state);
  //   }
  // }

  render() {
    const { search, page, sortField } = this.state;

    return (
      <div>
        <form className="PokemonSearch" onSubmit={this.handleSubmit}>
          <input
            name='searchFilter'
            value={search}
            onChange={this.handleSearchChange}
          />

          <select name='sortField' value={sortField} onChange={this.handleSortChange}>
            <option value=''>Type Something</option>
            <option value='pokemon'>Name</option>
            <option value='type_1'>Type</option>
          </select>

          <button>Search</button>
        </form>
        Page: { page} <Paging onPaging={this.handlePaging} />
      </div>
    );
  }

}