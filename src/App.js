import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage, Projects } from './components';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Projects />
    </div>
  );
}

export default App;


