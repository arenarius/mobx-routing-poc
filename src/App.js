import React from 'react';
import './App.css';
import Router from './Router';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import ParamsIndicator from './ParamsIndicator';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
      <ParamsIndicator/>
    </BrowserRouter>
  );
}

export default App;
