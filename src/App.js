import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>

      <Router/>
    </div>
    </BrowserRouter>
  );
}

export default App;
