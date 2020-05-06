import React from 'react';
import logo from './logo.svg';
import './App.css';
import {hello} from './components.js/Person';
function App() {
  return (
    hello()
  );
}

export default App;
