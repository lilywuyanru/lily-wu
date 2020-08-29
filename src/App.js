import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { HomePage, Projects, Experience} from './components';

function App() {
  const dotnavigation = () => {

    return null;
  }

  return (
    <div className="App">
      <HomePage />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;


