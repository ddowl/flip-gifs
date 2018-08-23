import * as React from 'react';
import './Header.css';

class Header extends React.Component {
  public render() {
    const bottleLogo = (style: any) => (
      <img src="images/bottle.svg" className={`App-logo ${style}`} alt="logo" />
    );

    return (
      <div className="Header">
        <header className="App-header">
          { bottleLogo('left-logo') }
          <h1 className="App-title">Flippin' Bottles</h1>
          { bottleLogo('right-logo') }
        </header>
      </div>
    );
  }
}

export default Header;
