import * as React from 'react';
import './Header.css';
import bottle from 'src/bottle.svg';

class Header extends React.Component {
  public render() {
    return (
      <div className="Header">
      <header className="App-header">
          <img src={bottle} className="App-logo" alt="logo" />
          <h1 className="App-title">Flippin' Bottles</h1>
          <h3>This is the Header!</h3>
        </header>
      </div>
    );
  }
}

export default Header;