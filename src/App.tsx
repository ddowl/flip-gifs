import * as React from 'react';
import './App.css';

import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
