import { Component } from 'react';
import './Paging.scss';

export default class Paging extends Component {

  handlePrev = () => this.props.page(-1);

  handleNext = () => this.props.page(1);

  render() {
    return (
      <div className="Paging">
        <button onClick={this.handlePrev}>prev</button>
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }

}