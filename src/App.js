import React, { Component } from 'react';
import Board from './Componets/board/board';
import Header from './Componets/Header/Header';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        <Header />
      </div>
    );
  }
}

export default App;
