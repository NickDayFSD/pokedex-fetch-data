import { Component } from 'react';
import './sandwich.scss';

export default class Header extends Component {

  render() {
    return (
      <header className="Header">
        <img
          className='Image'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
          alt='Pokemon'
        />
      </header>
    );
  }

}