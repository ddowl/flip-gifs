import * as React from 'react';
import './Header.css';

class Header extends React.Component {
  public render() {
    return (
      <div className="Header">
        <img src="images/bottle.svg" className="fit-logo animate-logo-fast" alt="logo" />
        <h1 className="App-title">Flippin' Bottles</h1>
        <img src="images/bottle.svg" className="fit-logo animate-logo-slow" alt="logo" />
      </div>
    );
  }
}

export default Header;
