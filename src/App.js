import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <body className='homepage'>
          <HomePage/>
        </body>
      </div>
    );
  }
}

export default App;
